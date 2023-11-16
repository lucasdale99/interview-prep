import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

export interface IQuestionAndAnswerGateway {
    getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]>;
    addQuestion(addQuestion: QuestionAndAnswerDTO): Promise<void>;
}