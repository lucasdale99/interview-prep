import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import { QuestionAndAnswerDTO } from "../app/questionAndAnswerAggregate/model/QuestionAndAnswerDTO";
import { QuestionAndAnswerContextProvider } from "../app/questionAndAnswerAggregate/state/QuestionAndAnswerContextProvider";
import { AddQuestion } from "../app/questionAndAnswerAggregate/ui/AddQuestion";
import { QuestionAndAnswerList } from "../app/questionAndAnswerAggregate/ui/QuestionAndAnswerList";

export async function getServerSideProps() {
  //Need to remove this if I plan to deploy to a production server
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  
  //I don't like fetching like this, this needs to call a service
  const response = await fetch(`${process.env.localhost}/api/Questions`);

  //This would be handled in the api gateway typically. Need to find a good DDD solution for server rendered components
  const data = await response.json() as QuestionAndAnswerDTO[];
  
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
  questions: QuestionAndAnswerDTO[]
}

export default function Home({questions}: IHomeProps) {
  return (
    <>
      {questions?.length === 0 ? <div>Loading...</div> :
        <main className="flex min-h-screen flex-col p-24">
        <QuestionAndAnswerContextProvider>
          <div className="flex justify-center">
            <h1 className="text-xl font-bold">Interview questions</h1>
          </div>
          <AddQuestion />
          <QuestionAndAnswerList questions={questions}/>
        </QuestionAndAnswerContextProvider>
      </main>
      }
    </>
  )
}
