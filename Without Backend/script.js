const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey =
  "af1f4cefd545a5ac7bcef509d663c27842c129c6fd0867735646107e6e3beac1";
const locationf = "Austin";
// The SerpApi endpoint with your API key and search query
const apiUrl = `https://serpapi.com/search.json?engine=google_events&q=Events+in+${locationf}&hl=en&gl=us&api_key=${apiKey}`;

// Full URL including the proxy
const fullUrl = proxyUrl + apiUrl;

// Function to fetch data from SerpApi through the CORS proxy
async function fetchSerpApiData() {
  try {
    // Fetch data from the SerpApi through the CORS proxy
    const response = await fetch(fullUrl);

    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response as JSON
    const data = await response.json();

    // Log the data or do something with it
    console.log(data);
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch the data
fetchSerpApiData();
