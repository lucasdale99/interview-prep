import { QuestionDTO } from "../model/QuestionDTO"
import { Question} from "./Question"

interface IQuestionAndAnswerListProps {
    questions: QuestionDTO[]
}

export const QuestionAndAnswerList = ({questions}: IQuestionAndAnswerListProps) => {
    return (
        <>
            {questions?.map((questionDTO: QuestionDTO, index: number) => 
                <Question key={index + 1} questionDTO={questionDTO} number={index + 1}/>
            )}
        </>
    )
}