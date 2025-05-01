import dns from "dns";

export default function dnsStatus() {
  return new Promise((resolve) => {
    dns.setServers(["127.0.0.1"]);

    dns.resolve("status.local.server", (err, addresses) => {
      if (err) {
        resolve([false, err.message]);
      } else {
        resolve([true, "active"]);
      }
    });
  });
}
