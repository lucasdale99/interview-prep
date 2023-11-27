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
      {questions?.length === 0 ? <div>Loading...</div> :
      <Provider store={store}>
        <QuestionAndAnswerContextProvider>
          <main className="flex min-h-screen flex-col p-24">
              <div className="flex m-4">
                <a className="flex mx-2 hover:text-blue-400" href='/ddd'>DDD Implementation</a>
                <a className="flex mx-2 hover:text-blue-400" href='/redux'>Redux Implementation</a>
              </div>
              <div className="flex justify-center">
                <h1 className="text-xl font-bold">Interview questions</h1>
              </div>
              <AddQuestion />
              <QuestionAndAnswerList questions={questions}/>
          </main>
        </QuestionAndAnswerContextProvider>
      </Provider>
      }
    </>
  )
}
