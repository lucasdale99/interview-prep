export default function Home() {
    return (
      <>
          <main className="flex flex-col">
              <div className="flex justify-center items-center my-4">
                  <h1 className="text-2xl">Hello!</h1>
              </div>
              <div className="flex my-4">
                  <p className="text-base">Welcome to my Interview Prep Application. This is a way for me to show off my React application skills and learn server side rendering along the way.</p>
              </div>
              <div className="flex my-4">
                  <p>This is still a work in progress, but this application is meant to handle two different ways of handling state within a React application. One way follows a standard pattern, and the other a Redux pattern.</p>
              </div>
          </main>
      </>
    )
  }