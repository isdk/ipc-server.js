import {IPCClient, IPCServer} from '../src'

describe('IPCClient/Server', async () => {
  let server: IPCServer
  beforeAll(async ()=>{
    server = new IPCServer()
    await server.start()
  })

  afterAll(()=>{
    server.close()
  })

  beforeEach(() => {
  });


  it('should connect', async ()=>{
    const client = new IPCClient()
    await client.connect('test1')
    await wait(500)
  })

});

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

