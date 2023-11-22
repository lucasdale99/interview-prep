import { IQuestionAndAnswerGateway } from "../gateway/IQuestionAndAnswerGateway";
import { QuestionDTO } from "../model/QuestionDTO";
import { IQuestionAndAnswerRepository } from "./IQuestionAndAnswerRepository";

export class QuestionAndAnswerRepository implements IQuestionAndAnswerRepository {
    private readonly _gateway: IQuestionAndAnswerGateway;

    constructor(gateway: IQuestionAndAnswerGateway){
        this._gateway = gateway;
    }
    
    public async getQuestionAndAnswers(): Promise<QuestionDTO[]> {
        return await this._gateway.getQuestionAndAnswers();
    }

    public async addQuestion(formEvent: FormData): Promise<void> {
        const question = formEvent.get("question")?.toString();
        const answer = formEvent.get("answer")?.toString();
        if(!question || !answer) return;

        const newQuestion: QuestionDTO = new QuestionDTO(0, question, answer, false);
        await this._gateway.addQuestion(newQuestion);
    }
}