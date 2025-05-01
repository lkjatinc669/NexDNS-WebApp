import os from "os";

export function hardUtilBase(req, res) {
  const systemUptime = os.uptime();
  const hh = Math.floor(systemUptime / 3600); //c 1 hour = 3600 seconds
  const mm = Math.floor((systemUptime % 3600) / 60); // Remaining minutes
  const ss = Math.floor(systemUptime % 60); // Remaining seconds
  res.json({ uptime: `${hh}:${mm}:${ss}` });
}

export const hardUtilPathError = (req, res) => {
  res.status(404).json({ error: "Invalid net util path" });
};
