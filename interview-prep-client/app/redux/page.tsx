import { Provider } from "react-redux";
import { QuestionDTO } from "../standard/model/QuestionDTO";
import { QuestionAndAnswerList } from "../standard/components/QuestionList";
import { store } from "./store";
import AddQuestionForm from "../standard/components/AddQuestionForm";
import { getQuestions } from "../../lib/getQuestions";

export default async function Home() {
  const questionsData: QuestionDTO[] = await getQuestions();

  return (
    <>
      {questionsData?.length === 0 ? <div>Loading...</div> :
        <Provider store={store}>
          <main className="flex min-h-screen flex-col p-24">
              <div className="flex justify-center">
                <h1 className="text-xl font-bold">Interview questions</h1>
              </div>
              <AddQuestionForm/>
              <QuestionAndAnswerList questions={questionsData}/>
          </main>
        </Provider>
      }
    </>
  )
}
