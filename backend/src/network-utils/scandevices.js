import os from "os";
import ping from "ping";

const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (let iface in interfaces) {
    for (let i of interfaces[iface]) {
      if (i.family === "IPv4" && !i.internal) {
        return i.address;
      }
    }
  }
};

const localIP = getLocalIP();
const subnet = localIP.split(".").slice(0, 3).join(".") + ".";
console.log(`Scanning devices on subnet: ${subnet}0/24`);

const probe = (host) =>
  new Promise((resolve) => {
    ping.sys.probe(host, function (isAlive) {
      resolve({ host, isAlive });
    });
  });

const scanNetwork = async () => {
  const hosts = Array.from({ length: 254 }, (_, i) => `${subnet}${i + 1}`);

  const probes = hosts.map((host) => probe(host));
  const results = await Promise.all(probes);

  const activeHosts = results
    .filter((res) => res.isAlive)
    .map((res) => res.host);

  console.log("\nActive Hosts:", activeHosts);
  activeHosts.forEach((host) => console.log(`- ${host}`));
};

scanNetwork();

// const pingHost = (ip) => {
//   return new Promise((resolve) => {
//     exec(`ping -c 1 -W 1 ${ip}`, (err, stdout) => {
//       if (stdout.includes("ttl")) {
//         console.log(`Active: ${ip}`);
//         activeHosts.push(ip);
//       }
//       resolve();
//     });
//   });
// };

// const scanNetwork = async () => {
//   const tasks = [];
//   for (let i = 1; i < 255; i++) {
//     tasks.push(pingHost(subnet + i));
//   }

//   await Promise.all(tasks);
//   console.log("\nScan complete. Active devices:");
//   console.table(activeHosts);
// };

// scanNetwork();
