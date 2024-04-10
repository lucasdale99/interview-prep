'use client';
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

type LoginButtonProps = {
  session: Session | null;
}

 export default function LoginButton({session}: LoginButtonProps) {
  const handleSignIn = async () => {
    await signIn();
  }

  return (
    <div className="justify-center items-center">
      {session ? 
        <p>Welcome {session.user?.name}</p> :<button className="flex bg-violet-500 w-40 justify-center items-center" onClick={handleSignIn}>Sign in</button>
      } 
    </div>
  )
}
