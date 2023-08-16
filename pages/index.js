import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-gradient-to-r from-teal-800 to-teal-500 w-screen h-screen flex items-center justify-center ">
        <div className="text-center flex flex-col gap-5 bg-teal-50 p-20 rounded-xl">
          <h2 className="text-4xl text-teal-900">Welcome!</h2>
          <button
            className=" p-2 rounded-lg px-4 bg-teal-800 hover:ease-in duration-100 text-teal-50 hover:bg-teal-700"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
          <button
            className="bg-teal-800 p-2 rounded-lg px-4 hover:ease-in duration-100 text-teal-50 hover:bg-teal-700"
            onClick={() => signIn("github")}
          >
            Login with GitHub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-teal-800 to-teal-500 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <h2 className="text-white text-lg">Welcome {session.user.email}!</h2>
        <button
          className="bg-white p-2 rounded-lg px-4"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
