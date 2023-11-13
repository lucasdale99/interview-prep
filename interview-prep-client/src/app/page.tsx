import { QuestionAndAnswerList } from "./questionAndAnswerAggregate/ui/QuestionAndAnswerList";
import { AddQuestion } from "./questionAndAnswerAggregate/ui/AddQuestion";
import { useContext } from "react";
import { ServiceContext } from "./infrastructure/serviceProvider/ServiceContextProvider";

export default function Home() {
  const {QuestionAndAnswerService} = useContext(ServiceContext);

  const getListOfQuestionAndAnswers = async () => {
    await QuestionAndAnswerService.getQuestionAndAnswers();
  }

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex justify-center">
        <h1 className="text-xl font-bold">Top 50 interview questions</h1>
      </div>
      <QuestionAndAnswerList list={} />
      <AddQuestion />
    </main>
  )
}
