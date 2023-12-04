import { QuestionDTO } from "./model/QuestionDTO"
import { QuestionAndAnswerList } from "./components/QuestionList"
import { getQuestions } from "../../lib/getQuestions";
import AddQuestionForm from "./components/AddQuestionForm";

export default async function Home() {
  const questionsData: Promise<QuestionDTO[]> = getQuestions();
  const questions = await questionsData;
  return (
      <main className="flex min-h-screen flex-col p-24">
          <div className="flex justify-center">
            <h1 className="text-xl font-bold">Interview questions</h1>
          </div>
          <AddQuestionForm/>
          <QuestionAndAnswerList questions={questions ?? []}/>
      </main>
  )
}
