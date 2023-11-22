## interview-prep
A React Next.TS app that you can use to create questions and study existing TypeScript and React questions. This was also used to help me learn Docker, Entity Framework, and minimal ASP.Net Core APIs

## Other Important Notes
I created this application to be able to add questions and answers to help me review TypeScript and React questions. I'm also demonstrating with this project a few key design patterns that show my capabilities as a dev. The first being DDD, and TDD. Another key takeaway are popular packages like Redux Toolkit and Tailwind. I'm using two different approaches with this application to demonstrate my abilities of managing state, not for the lack understanding to choose one over the other. One approach is DDD using the Question Aggregate as the root to get all the questions from the Backend. Under the infrastructure/ folder there is the serviceProvider folder and apiGateway folder. These are very important subdirectories. ServiceProvider creates a root for all the services that need to be provided in the project. It uses a singleton to initialize the service and only allows for one instance of a service to be managed in a clean and efficient way in a React Context Provider. We also use this subdirectory to initialize the gateways, repositories, and service class instances, but only allow the Services to be called within Context. This is for a purpose as DDD demonstrates that only services should be called within a controller, in a similar fashion, only the service should be called on the UI. This is the start of what is called the Anti Corruption Layer (ACL). The Anti corruption layer is used to clean data before its sent to the Backend. The steps are as follows from a GET call: Gateway -> Repository -> Entity -> Repository -> Service -> UI. The other approach I'm taking is by using Redux for state management. I'm using this to add and edit existing questions within the application. This is a very popular method with big applications, and if you're curious about this implementation you can review their docs here: https://redux.js.org/introduction/getting-started. I hope this helps in understanding the structure of this application.
