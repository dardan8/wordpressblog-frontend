export default async function graphqlRequest(query: {}) {
  const url = "https://recipeblog.dardan.digital/graphql";
  // const url = "http://localhost:8000/graphql";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.WP_AUTH_REFRESH_TOKEN}`,
  };

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(query),
    next: {
      revalidate: 3600,
    },
  });

  const resJson = await res.json();
  return resJson;
}
