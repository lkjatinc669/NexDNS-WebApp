const os = require("os");

// Get system uptime (in seconds)
const systemUptime = os.uptime();

// Get Node.js process uptime (in seconds)
const processUptime = process.uptime();

// Function to format uptime from seconds to hours, minutes, and seconds
function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${hours} hrs ${minutes} mins ${remainingSeconds} secs`;
}

console.log("System Uptime:", formatUptime(systemUptime));
console.log("Node.js Process Uptime:", formatUptime(processUptime));
