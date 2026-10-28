Bun.serve({
  port: 3000,
  hostname: "0.0.0.0",
  fetch(req) {
    // console.log("Bun req log");
    return new Response("Hello from Bun on Anzar!");
  },
});
console.log("Bun server listening on port 3000...");
