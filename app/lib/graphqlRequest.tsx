export default async function graphqlRequest(query: {}) {
  const url = "http://localhost:8000/graphql";
  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJpYXQiOjE2ODc2MDg0ODEsIm5iZiI6MTY4NzYwODQ4MSwiZXhwIjoxNzE5MTQ0NDgxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIiwidXNlcl9zZWNyZXQiOiJncmFwaHFsX2p3dF82NDk2ZGNhMTdiYWM1In19fQ.2ev94eOKJZXAxhM89WGR6r7UxK5cguLsy5JZdbDpDzY",
  };

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(query),
    next: {
      revalidate: 60,
    },
  });

  const resJson = await res.json();
  return resJson;
}
