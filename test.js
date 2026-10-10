const BASE_URL = "http://localhost:3000";

async function request(method, path, body = null, headers = {}) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) options.body = JSON.stringify(body);

  try {
    const res = await fetch(`${BASE_URL}${path}`, options);
    const text = await res.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    console.log(`\n=== ${method} ${path} ===`);
    console.log(`Status: ${res.status} ${res.statusText}`);
    console.log("Response:", JSON.stringify(data, null, 2));

    return { status: res.status, data };
  } catch (err) {
    console.error(`\n=== ${method} ${path} ===`);
    console.error("ERROR:", err.message);
    return { status: null, error: err.message };
  }
}

(async () => {
  // await request("GET", "/api/users");
  // await request("GET", "/prods");
  // await request("POST", "/api/users", {
  //   email: "Ome",
  //   password: "esdf",
  //   first_name: "chic",
  //   last_name: "fghfg",
  //   avatar: "jkdsfh",
  // });
  // await request("PUT", "/prods/2", { name: "updated", price: 1 });
  //   await request("DELETE", "/prods/1");
})();
