import os from "os";

// console.log(os.platform() + os.arch());

console.log(os.freemem() / 1024 / 1024 / 1024);

// const networkInterfaces = os.networkInterfaces();

// function getAllIpData() {
//   var ipData = {};
//   for (const key in networkInterfaces) {
//     networkInterfaces[key].forEach((element) => {
//       console.log(element);
//     });
//   }
//   return ipData;
// }
