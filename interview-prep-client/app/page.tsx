export default function Home() {
    return (
      <>
          <main className="flex flex-col min-h-screen items-center justify-center p-24">
              <div className="flex justify-center items-center mx-24 my-4">
                  <h1 className="text-2xl">Hello!</h1>
              </div>
              <div className="flex justify-center items-center mx-24 my-4">
                  <p className="text-base">Welcome to my Interview Prep Application. This is a way for me to show off my React application skills and learn along the way.</p>
              </div>
              <div className="flex justify-center items-center mx-24 my-4">
                  <p>I have two implementations of a similar CRUD application to help with understanding two ways that are capable of state management. One being a DDD (Domain Driven Design) pattern and the other a Redux pattern. Please review my github and checkout the questionAggregate for the DDD pattern and questionAggregateRedux for the redux pattern.</p>
              </div>
          </main>
      </>
    )
  }