async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div className="text-center flex flex-wrap text-black">
      <div className=" mx-auto my-5 border-2 shadow-sm rounded-lg">
        <div className=" px-auto md:px-60 bg-gray-100">
          <img className="mx-auto py-2" src={user.avatar} alt={user.email} />
        </div>
        <div className="bg-zinc-50  py-5">
          <h3 className="text-lg font-bold py-1">
            {user.id} {user.first_name} {user.last_name}
          </h3>
          <p className="text-xs font-medium">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
