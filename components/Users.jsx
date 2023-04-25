"use client";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between w-full text-zinc-800">
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-zinc-50 shadow mx-20 my-5">
          <div className="w-full h-full border-2 border-gray-300 shadow-xl rounded-lg">
            <ul className="">
              {users.map((user) => (
                <li
                  key={user.id}
                  onClick={() => {
                    router.push(`/users/${user.id}`);
                  }}
                >
                  <div className="hover:bg-gray-200 flex flex-row items-center border-b-2 border-gray-300 duration-300 cursor-pointer">
                    <div className="mx-1 sm:mr-auto sm:mx-5">
                      <h5 className="text-slate-800 text-lg">
                        {user.id} <span className="text-black">{user.first_name} {user.last_name}</span>
                      </h5>
                      <p className="text-sm">{user.email}</p>
                    </div>
                    <div className="mx-1 my-4 sm:mx-5 sm:my-1.5">
                      <img
                        className="rounded-full h-auto w-auto"
                        src={user.avatar}
                        alt={user.email}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
