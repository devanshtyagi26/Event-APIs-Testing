async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/serpapi");
    console.log(response);
    // Check if the response is JSON
    if (response.headers.get("Content-Type").includes("application/json")) {
      const data = await response.json();
      console.log(data);
    } else {
      const text = await response.text();
      console.error("Expected JSON, but received:", text);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
