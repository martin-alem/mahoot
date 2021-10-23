export const extractSearchParams = (search) => {
  const queryString = {};
  if (search !== "") {
    search = search.slice(1); // extract the ? character at the front of the string
    const params = search.split("&");
    params.forEach((param) => {
      const [name, value] = param.split("=");
      queryString[name] = value;
    });
  }
  return queryString;
};

export const httpAgent = async (url, method, data) => {
  const init = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    mode: "cors",
    credentials: "include",
    // cache: "default",
    // redirect: "follow",
    // referrer: "smack",
    // referrerPolicy: "same-origin",
  };

  if (method !== "GET" && method !== "HEAD") {
    init["body"] = JSON.stringify(data);
  }

  const response = await fetch(url, init);
  if (response.status === 401) {
    window.location.replace("/");
  } else {
    return response;
  }
};

export const setLoggedIn = (data) => {
  window.localStorage.setItem([data.key], JSON.stringify(data.value));
};

export const getLoggedIn = () => {
  return JSON.parse(window.localStorage.getItem("loggedIn"));
};
