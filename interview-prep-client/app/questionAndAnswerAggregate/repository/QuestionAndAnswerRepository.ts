import { IQuestionAndAnswerGateway } from "../gateway/IQuestionAndAnswerGateway";
import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";
import { IQuestionAndAnswerRepository } from "./IQuestionAndAnswerRepository";

export class QuestionAndAnswerRepository implements IQuestionAndAnswerRepository {
    private readonly _gateway: IQuestionAndAnswerGateway;

    constructor(gateway: IQuestionAndAnswerGateway){
        this._gateway = gateway;
    }
    
    public async getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]> {
        return await this._gateway.getQuestionAndAnswers();
    }

    public async addQuestion(formEvent: FormData): Promise<void> {
        const question = formEvent.get("question")?.toString();
        const answer = formEvent.get("answer")?.toString();
        if(!question || !answer) return;

        const newQuestion: QuestionAndAnswerDTO = new QuestionAndAnswerDTO(0, question, answer, false);
        await this._gateway.addQuestion(newQuestion);
    }
}