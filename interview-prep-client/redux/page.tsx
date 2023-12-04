import { Provider } from "react-redux";
import { QuestionDTO } from "../app/ddd/model/QuestionDTO";
import { QuestionAndAnswerList } from "../app/ddd/components/QuestionList";
import { store } from "./store";
import AddQuestionForm from "../app/ddd/components/AddQuestionForm";

interface IHomeProps {
  questions: QuestionDTO[]
}

export default async function Home({questions}: IHomeProps) {
  return (
    <>
      {questions?.length === 0 ? <div>Loading...</div> :
        <Provider store={store}>
          <main className="flex min-h-screen flex-col p-24">
              <div className="flex justify-center">
                <h1 className="text-xl font-bold">Interview questions</h1>
              </div>
              <AddQuestionForm/>
              <QuestionAndAnswerList questions={questions}/>
          </main>
        </Provider>
      }
    </>
  )
}
