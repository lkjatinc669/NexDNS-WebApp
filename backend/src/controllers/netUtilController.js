import scanNetwork from "../network-utils/scandevices.js";
import dnsStatus from "../network-utils/dnsstatus.js";

export function netUtilBase(req, res, next) {
  res.send("NUB");
}

export async function netUtilScanDevices(req, res) {
  const result = await scanNetwork();
  res.json({ "active-devices": result });
}

export async function netUtilDnsServerStatus(req, res) {
  const result = await dnsStatus();
  if (result[0]) {
    res.status(200).json({ status: true, message: result[1] });
  } else {
    res.status(200).json({ status: false, message: result[1] });
  }
}

export const netUtilPathError = (req, res) => {
  res.status(404).json({ error: "Invalid net util path" });
};
