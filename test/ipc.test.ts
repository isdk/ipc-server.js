import {IPCClient, IPCClientStatus, IPCServer} from '../src'
import { wait } from '../src/base-connection';

let timer;
let svrData: any[] = [];
const received: any = {};

describe('IPCClient/Server', async () => {
  let server: IPCServer
  beforeAll(async ()=>{
    server = new IPCServer()
    server.on("connect", (client, payload) => {
      console.log(`\n[SOCKET SERVER] new connection received, assigned client id ${client.id} and payload ${payload}`);
      const id = `socket`;
      if(!received[id]) { received[id] = 0; }
      client.socket.on("data", d => { received[id] += d.toString().length; });
    });
    server.on("disconnect", c => console.log("[SOCKET SERVER] disconnected", c.id));
    server.on("error", e => console.log("[SOCKET SERVER] Server Error", e));
    server.on("message", messageEcho).on("request", requestEcho);

    await server.start()
  })

  afterAll(()=>{
    server.close()
  })

  beforeEach(() => {
		svrData.length = 0
  });


  it('should connect', async ()=>{
    let extra: any;
    const client = new IPCClient()
    client.on('ready', function(param: any) {
      extra = param
    })
    await client.connect('test1')
    expect(client.status).toBe(IPCClientStatus.READY)
    expect(extra).toHaveProperty('id', client.id)
  })

	it('should ping', async() =>{
		const client = new IPCClient()
		await client.connect('test1')
		let p = await client.ping({ping: "pong"}, 10)
		expect(typeof p).toBe('number')
		let p1: any[] = await server.ping('pong', 10)
		expect(p1.length).toBeGreaterThanOrEqual(1)
		let v = getClientPingValue(p1)
		expect(v).toHaveProperty('status', 'fulfilled')
		expect(typeof v.value.ping).toBe('number')
		await client.close()
		p1 = await server.ping('pong', 10)
		expect(p1.length).toBeGreaterThanOrEqual(1)
		v = getClientPingValue(p1)
		expect(v).toHaveProperty('status', 'rejected')

		function getClientPingValue(p1: any[]) {
			return p1.find(p => p.value?.id === client.id || p.reason?.data.id === client.id)
		}
	})

  it('should send data by message', async ()=>{
    const client = new IPCClient()
    await client.connect('test1')
		const count = 999
    const received = await messageTest(client, count)
		expect(received).toHaveLength(count)
		expect(svrData).toHaveLength(count)
  })

  it('should request', async ()=>{
    const client = new IPCClient()
    await client.connect('test1')
		const count = 999
    const received = await requestTest(client, count)
		expect(received).toHaveLength(count)
		expect(svrData).toHaveLength(count)
  })

	it('should pub/sub', async ()=>{
    const client = new IPCClient()
    await client.connect('test1')
    const client1 = new IPCClient()
    await client1.connect()
		let result = await client.subscribe('test')
		expect(result).toHaveProperty('result', true)
		const evtResult: any[] = []
		const evtResult1: any[] = []
		client.on('test', data =>{
			evtResult.push(data)
		})
		client1.on('test', data =>{
			evtResult1.push(data)
		})

		result = await client1.publish('test', 'hello1')

		expect(result).toHaveProperty('result', true)
		expect(evtResult).toHaveLength(1)
		expect(evtResult[0]).toBe('hello1')
		await server.publish({pub: 'test', message: 'from server'})
		await wait(1)
		expect(evtResult).toHaveLength(2)
		expect(evtResult[1]).toBe('from server')
		expect(evtResult1).toHaveLength(0)
		result = await client.unsubscribe('test')
		expect(result).toHaveProperty('result', true)
		await wait(1)
		await server.publish({pub: 'test', message: 'from server'})
		await wait(1)
		expect(evtResult).toHaveLength(2)
		result = await client.unsubscribe('test')
		expect(result).toHaveProperty('result', false)
	});
})

async function messageTest(client: IPCClient, count = 99) {
	const vReceived: any[] = []
	return new Promise((resolve, reject) => {
		async function exec() {
			console.log(`[CLIENT] starting message test`);
			console.log("[CLIENT] generating random data");
			const data: any[] = new Array(count).fill(0).map((_v, i) => randomObject(10, i));
			console.log("[CLIENT] sending data");
			client.send({ test: `${data.length} random objects` });
			let timer = Date.now();
			for(const d of data) {
				await client.send({ data: d });
			}
			console.log(`[CLIENT] sent ${data.length} messages in ${Date.now() - timer}ms`);
			client.send({ done: true });
			timer = Date.now();
			client.on("message", m => {
				// console.log('🚀 ~ client receive message ~ m:', m, vReceived.length)
				vReceived.push(m);
				if(vReceived.length === data.length) {
					console.log(`[CLIENT] received ${vReceived.length} messages in ${Date.now() - timer}ms`);
					console.log("[CLIENT] verifying data integrity");
					for(let i = 0; i < data.length; i++) {
						if(JSON.stringify(data[i]) !== JSON.stringify(vReceived[i])) { return reject(new Error("invalid data received: " +' : ' + JSON.stringify(vReceived[i].id)+' : ' + JSON.stringify(data[i].id))); }
					}
					console.log("[CLIENT] no errors found\n");
					resolve(vReceived);
				} else if(vReceived.length > data.length) {
					reject(new Error("invalid data received: " + vReceived.length))
				}
			});
		}
		return exec();
	});
}

async function requestTest(client: IPCClient, count = 100) {
	console.log(`[CLIENT] starting request test`);
	console.log("[CLIENT] generating random data");
	const data = new Array(count).fill(0).map((_v, ix) => randomObject(10, ix));
	console.log(`[CLIENT] sending ${data.length} requests`);
	const times: number[] = [];
	const total = Date.now();
	const results: any[] = [];
	for(const d of data) {
		const time = Date.now();
		const result = await client.request(d);
		times.push(Date.now() - time);
		results.push(result);
	}
	console.log(`[CLIENT] finished in ${Date.now() - total}ms, average response time of ${times.reduce((a, b) => a + b, 0) / times.length}ms`);
	console.log("[CLIENT] verifying data integrity");
	for(let i = 0; i < data.length; i++) {
		if(JSON.stringify(data[i]) !== JSON.stringify(results[i])) { throw new Error("invalid data received:"  + JSON.stringify(results[i].id)+' : ' + JSON.stringify(data[i].id)); }
	}
	console.log("[CLIENT] no errors found\n");
	return results
}

function randomObject(keys, ix: number) {
	const obj = {id: ix};
	for(let i = 0; i < keys; i++) {
		const multibyte = String.fromCharCode(Math.ceil(Math.random() * (2 ** 15)));
		obj[Math.random().toString(36)] = Array(keys).fill(0).map(() => String.fromCharCode(Math.ceil(Math.random() * (2 ** 7)))).join("") + multibyte;
	}
	return obj;
}

async function messageEcho(m, client) {
	if(m === "finish") {
		console.log("[SERVER] total bytes received per connection", received);
		process.exit();
	}
	if(m.test) {
		console.log(`[SOCKET SERVER] acknowledged test start ${m.test}`);
		timer = Date.now();
	} else if(m.data) {
		svrData.push(m.data);
	} else if(m.done) {
		console.log(`[SOCKET SERVER] received ${svrData.length} messages in ${Date.now() - timer}ms`);
		console.log("[SOCKET SERVER] preparing to send them back");
		timer = Date.now();
		for(const d of svrData) {
			// await wait(0)
			await client.send(d);
		}
		console.log(`[SOCKET SERVER] sent ${svrData.length} messages in ${Date.now() - timer}ms`);
	}
}

async function requestEcho(m, reply) {
	console.log('🚀 ~ requestEcho ~ m:', m)
	svrData.push(m)
	await reply(m);
}

