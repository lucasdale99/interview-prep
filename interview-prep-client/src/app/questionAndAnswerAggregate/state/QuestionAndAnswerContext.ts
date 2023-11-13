import {QuestionAndAnswerDO} from "../../questionAndAnswerAggregate/domain/QuestionAndAnswerDO";
import { Dispatch, SetStateAction, createContext } from "react";

interface IQuestionAndAnswerContextProps {
    questionAndAnswerDO: QuestionAndAnswerDO;
    setQuestionAndAnswerDO: Dispatch<SetStateAction<QuestionAndAnswerDO>>
}

export const QuestionAndAnswerContext = createContext<IQuestionAndAnswerContextProps>({
    questionAndAnswerDO: undefined,
    setQuestionAndAnswerDO: () => {}
});
