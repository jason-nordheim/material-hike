const API_URL = "http://localhost:4000";

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const post = async (endpoint, data) => {
  const serverUrl = API_URL + endpoint
  console.log(`sending data: ${JSON.stringify(data)} to '${serverUrl}`)
  return await fetch(serverUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
}