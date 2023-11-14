"use client";
import { useContext, useEffect } from "react"
import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO"
import { QuestionAndAnswer } from "./QuestionAndAnswer"
import { QuestionAndAnswerContext } from "../state/QuestionAndAnswerContext"
import { ServiceContext } from '../../infrastructure/serviceProvider/ServiceContextProvider';

export const QuestionAndAnswerList = () => {
    const {questionAndAnswerDO, setQuestionAndAnswerDO} = useContext(QuestionAndAnswerContext);
    const {QuestionAndAnswerService} = useContext(ServiceContext);

    const getListOfQuestionAndAnswers = async () => {
        const response = await QuestionAndAnswerService.getQuestionAndAnswers();
        setQuestionAndAnswerDO(prevState => prevState?.updateListOfQuestionAndAnswers(response));
    }

    useEffect(() => {
        void getListOfQuestionAndAnswers();
    }, [])

    return (
        <>
            {questionAndAnswerDO.listOfQuestionsAndAnswers.map((x: QuestionAndAnswerDTO, index: number) => 
                <QuestionAndAnswer key={index + 1} question={x.question} answer={x.answer} number={index + 1}/>
            )}
        </>
    )
}