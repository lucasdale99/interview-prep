import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

export interface IQuestionAndAnswerService {
    getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]>;
    addQuestion(formData: FormData): Promise<void>;
}