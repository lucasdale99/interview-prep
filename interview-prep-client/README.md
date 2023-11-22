This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Other Important Notes
I created this application to be able to add question and answers to help me review TypeScript and React questions. I'm also demonstrating with this project a few key design patterns that show my capabilities as a dev. The first being DDD, and TDD. Another key takeaway are popular packages like Redux Toolkit and Tailwind. I'm using two different approaches with this application to demonstrate my abilities of managing state, not for the lack understanding to choose one over the other. One approach is DDD using the Question Aggregate as the root to get all the questions from the Backend. Under the infrastructure/ folder there is the serviceProvider folder and apiGateway folder. These are very important subdirectories. ServiceProvider creates a root for all the services that need to be provided in the project. It uses a singleton to initialize the service and only allows for one instance of a service to be managed in a clean and efficient way in a React Context Provider. We also use this subdirectory to initialize the gateways, repositories, and service class instances, but only allow the Services to be called within Context. This is for a purpose as DDD demonstrates that only services should be called within a controller, in a similar fashion, only the service should be called on the UI. This is the start of what is called the Anti Corruption Layer (ACL). The Anti corruption layer is used to clean data before its sent to the Backend. The steps are as follows from a GET call: Gateway -> Repository -> Entity -> Repository -> Service -> UI. The other approach I'm taking is by using Redux for state management. I'm using this to add and edit existing questions within the application. This is a very popular method with big applications, and if you're curious about this implementation you can review their docs here: https://redux.js.org/introduction/getting-started. I hope this helps in understanding the structure of this application.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
