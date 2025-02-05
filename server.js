import express from "express";
import cors from "cors"; // Import the cors package

const app = express();
const port = 3000;

// Basic route for root
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Allow only this origin
  })
);

// SerpApi route
app.get("/api/serpapi", async (req, res) => {
  const apiKey =
    "af1f4cefd545a5ac7bcef509d663c27842c129c6fd0867735646107e6e3beac1";
  const location = "Austin";

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_events&q=Events+in+${location}&hl=en&gl=us&api_key=${apiKey}`
    );
    const data = await response.json();
    console.log("data");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from SerpApi" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
