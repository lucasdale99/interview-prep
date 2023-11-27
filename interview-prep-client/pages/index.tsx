import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import { QuestionDTO } from "../app/questionAggregate/model/QuestionDTO";
import { QuestionAndAnswerContextProvider } from "../app/questionAggregate/state/QuestionContextProvider";
import { AddQuestion } from "../app/questionAggregate/ui/AddQuestion";
import { QuestionAndAnswerList } from "../app/questionAggregate/ui/QuestionAndAnswerList";
import { Provider } from 'react-redux';
import {store} from "../app/questionAggregateRedux/store";

export async function getServerSideProps() {
  //Need to remove this if I plan to deploy to a production server
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  
  //I don't like fetching like this, this needs to call a service
  const response = await fetch(`${process.env.API_URL}/api/Questions`);

  //This would be handled in the api gateway typically. Need to find a good DDD solution for server rendered components
  const data = await response.json() as QuestionDTO[];
  
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return {
      props: {
          questions: data
      }
  }
}

interface IHomeProps {
  questions: QuestionDTO[]
}

export default function Home({questions}: IHomeProps) {
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
                <p>I have two implementations of a similar CRUD application to help with understanding two ways we're capable of state management. One being a DDD (Domain Driven Design) pattern and the other a Redux pattern. Please review my github and checkout the questionAggregate for the DDD pattern and questionAggregateRedux for the redux pattern.</p>
            </div>
            <div className="flex m-4">
                <a className="flex mx-2 py-2 px-4 rounded-md bg-violet-500 hover:bg-violet-400" href='/ddd'>DDD Implementation</a>
                <a className="flex mx-2 py-2 px-4 rounded-md bg-violet-500 hover:bg-violet-400" href='/redux'>Redux Implementation</a>
            </div>
        </main>
    </>
  )
}