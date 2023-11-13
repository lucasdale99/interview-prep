import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

export interface IQuestionAndAnswerRepository {
    getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]>;
}