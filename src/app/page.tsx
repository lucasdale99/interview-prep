import { QuestionAndAnswerList } from "./questions/ui/QuestionAndAnswerList";
import { QuestionList } from "./questions/model/QuestionList";
import { AddQuestion } from "./questions/ui/AddQuestion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex justify-center">
        <h1 className="text-xl font-bold">Top 50 interview questions</h1>
      </div>
      <QuestionAndAnswerList list={QuestionList.getListOfQuestions()} />
      <AddQuestion />
    </main>
  )
}
