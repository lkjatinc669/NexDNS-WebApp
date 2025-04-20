import { copyFileSync } from "fs";
import net from "net";

const startPort = 1;
const endPort = 65535;
const timeout = 300; // ms

function scanPort(targetHost, port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();

    socket.setTimeout(timeout);

    socket.on("connect", () => {
      socket.destroy();
      resolve(port);
    });

    socket.on("timeout", () => {
      socket.destroy();
      resolve(false);
    });

    socket.on("error", () => {
      socket.destroy();
      resolve(false);
    });

    socket.connect(port, targetHost);
  });
}

async function scanPorts(targetHost) {
  console.log(
    `Scanning ${targetHost} from port ${startPort} to ${endPort}...\n`
  );
  var scanResult = [];
  for (let port = startPort; port <= endPort; port++) {
    const result = await scanPort(targetHost, port);
    if (result != false) {
      scanResult.push(result);
    }
  }
  return scanResult;
}

export default scanPorts;
