import { DaprServer } from 'dapr-client';

const DAPR_HOST = process.env.DAPR_HOST || 'http://localhost';
const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT || '3501';
const SERVER_DAPR_HOST = process.env.SERVER_DAPR_HOST || '127.0.0.1';
const SERVER_PORT = process.env.SERVER_PORT || '5001';

async function main() {
  const server = new DaprServer(SERVER_DAPR_HOST, SERVER_PORT, DAPR_HOST, DAPR_HTTP_PORT);

  server.pubsub.subscribe('prayers-pubsub', 'prayers', async (data) => console.log('Subscriber received: ' + JSON.stringify(data)));

  await server.start();
}

main().catch((e) => console.error(e));
