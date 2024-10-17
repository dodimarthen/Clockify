const express = require("express");
const { createClient } = require("@redis/client");

const app = express();
const PORT = 3000;

// Create a connection to Redis
const client = createClient({
  url: "redis://localhost:6379",
});

// Connect to Redis
client.connect().catch((err) => {
  console.error("Redis connection error:", err);
});

// Middleware for parsing JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Redis server!");
});

// Endpoint to get data
app.get("/data", async (req, res) => {
  if (!client.isOpen) {
    return res.status(500).send("Redis client is not open.");
  }

  try {
    const data = await client.get("myData");
    console.log("Retrieved data from Redis:", data);

    if (data) {
      try {
        const parsedData = JSON.parse(data);
        return res.json({ source: "cache", data: parsedData });
      } catch (jsonError) {
        console.error("Error parsing JSON from Redis:", jsonError);
        return res.status(500).send("Invalid data format in Redis.");
      }
    } else {
      const newData = { message: "Hello from server!" };
      await client.set("myData", JSON.stringify(newData), {
        EX: 3600, // 1 hour expiry
      });
      console.log("Redis data set successfully:", newData);
      return res.json({ source: "server", data: newData });
    }
  } catch (err) {
    console.error("Error retrieving or setting data:", err);
    return res.status(500).send(err);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
