import { QuestionDTO } from "../model/QuestionDTO";

export interface IQuestionAndAnswerRepository {
    getQuestionAndAnswers(): Promise<QuestionDTO[]>;
    addQuestion(formEvent: FormData): Promise<void>;
}