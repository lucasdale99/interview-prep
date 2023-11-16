"use client";
import {QuestionAndAnswerDO} from "../../questionAndAnswerAggregate/domain/QuestionAndAnswerDO";
import { Dispatch, SetStateAction, createContext } from "react";
import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

interface IQuestionAndAnswerContextProps {
    questionAndAnswerDO: QuestionAndAnswerDO;
    setQuestionAndAnswerDO: Dispatch<SetStateAction<QuestionAndAnswerDO>>
}

export const QuestionAndAnswerContext = createContext<IQuestionAndAnswerContextProps>({
    questionAndAnswerDO: new QuestionAndAnswerDO([], new QuestionAndAnswerDTO(0, "", "", false)),
    setQuestionAndAnswerDO: () => {}
});
