browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (
      details.url.includes("www.google.com/search") &&
      !details.url.includes("udm=14")
    ) {
      const query = new URL(details.url).searchParams.get("q");
      const newUrl = `https://www.google.com/search?q=${query}&udm=14`;
      return { redirectUrl: newUrl };
    }
  },
  { urls: ["*://www.google.com/search*"] },
  ["blocking"]
);
