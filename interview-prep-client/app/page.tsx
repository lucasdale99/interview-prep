import LoginButton from "@components/LoginButton";

export default function Home() {
    return (
      <>
          <main className="flex flex-col">
              <div className="flex justify-center items-center my-4">
                  <h1 className="text-2xl">Hello!</h1>
              </div>
              <div>
                <LoginButton/>
              </div>
          </main>
      </>
    )
  }
