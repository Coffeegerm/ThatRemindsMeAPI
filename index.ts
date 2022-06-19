import { server } from "./src/server";

const port = Number(process.env.PORT || 3000);

// Start the server
server.listen(port, () => {
  console.log(`🚀🚀🚀 That Reminds Me API listening on port ${port}`);
});
