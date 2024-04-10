import NextAuth from "next-auth";
import LoginButton from "./components/LoginButton";
import { auth } from "./api/auth/[...nextauth]/auth";

export default async function Home() {
    const session = await auth();
    return (
      <>
          <main className="flex flex-col">
              <div className="flex justify-center items-center my-4">
                  <h1 className="text-2xl">Hello!</h1>
              </div>
              <div>
                <LoginButton session={session}/>
              </div>
          </main>
      </>
    )
  }
