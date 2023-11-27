"use client";
import {QuestionDO} from "../domain/QuestionDO";
import { Dispatch, SetStateAction, createContext } from "react";
import { QuestionDTO } from "../model/QuestionDTO";

interface IQuestionContextProps {
    questionDO: QuestionDO;
    setQuestionDO: Dispatch<SetStateAction<QuestionDO>>
}

export const QuestionContext = createContext<IQuestionContextProps>({
    questionDO: new QuestionDO([], new QuestionDTO(0, "", "", false)),
    setQuestionDO: () => {}
});
