import { Client } from "@dxos/client";

// create a client
const client = new Client();

const main = async () => {
  await client.initialize();
  // use client here
  console.log("here");
};

main();
