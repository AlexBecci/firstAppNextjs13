import React from "react";

async function fetchUsers() {
  const res = await fetch("http://reqres.in/api/users");
  const data = await res.json();
  return data.data
}
async function IndexPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h1>Index Page</h1>
      <div>
        {JSON.stringify(users)}
      </div>
    </div>
  );
}

export default IndexPage;
