"use client";
import {QuestionDO} from "../domain/QuestionDO";
import { Dispatch, SetStateAction, createContext } from "react";
import { QuestionDTO } from "../model/QuestionDTO";

interface IQuestionAndAnswerContextProps {
    questionDO: QuestionDO;
    setQuestionDO: Dispatch<SetStateAction<QuestionDO>>
}

export const QuestionAndAnswerContext = createContext<IQuestionAndAnswerContextProps>({
    questionDO: new QuestionDO([], new QuestionDTO(0, "", "", false)),
    setQuestionDO: () => {}
});
