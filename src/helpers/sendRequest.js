export const sendRequest = async (url) => {
  console.log("SendREQUEST ЗАПУЩЕН");
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
