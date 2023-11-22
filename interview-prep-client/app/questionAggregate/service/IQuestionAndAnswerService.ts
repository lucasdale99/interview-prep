import { QuestionDTO } from "../model/QuestionDTO";

export interface IQuestionAndAnswerService {
    getQuestionAndAnswers(): Promise<QuestionDTO[]>;
    addQuestion(formData: FormData): Promise<void>;
}