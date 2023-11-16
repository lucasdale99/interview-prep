import { IQuestionAndAnswerGateway } from "./IQuestionAndAnswerGateway";
import { IAPIGateway } from "../../infrastructure/apiGateway/IAPIGateway";
import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

export class QuestionAndAnswerGateway implements IQuestionAndAnswerGateway {
    private baseURL: string = 'Questions';
    private readonly _apiGateway: IAPIGateway;

    constructor(apiGateway: IAPIGateway){
        this._apiGateway = apiGateway;
    }

    public async getQuestionAndAnswers(): Promise<QuestionAndAnswerDTO[]> {
        return await this._apiGateway.get(`${this.baseURL}`);
    }

    public async addQuestion(addQuestion: QuestionAndAnswerDTO): Promise<void> {
        await this._apiGateway.post(`${this.baseURL}`, addQuestion);
    }
}