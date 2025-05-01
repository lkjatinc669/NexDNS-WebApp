import http from "http";

export function internetStatus() {
  return new Promise((resolve) => {
    const req = http.get("http://bettermotherfuckingwebsite.com/", (res) => {
      resolve(true); // Internet is working
    });

    req.on("error", () => {
      resolve(false); // No internet or error
    });

    req.setTimeout(5000, () => {
      req.abort();
      resolve(false); // Timeout - likely offline
    });
  });
}
