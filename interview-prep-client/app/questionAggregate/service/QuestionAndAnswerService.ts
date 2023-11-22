import { QuestionDTO } from "../model/QuestionDTO";
import { IQuestionAndAnswerRepository } from "../repository/IQuestionAndAnswerRepository";
import { IQuestionAndAnswerService } from "./IQuestionAndAnswerService";

export class QuestionAndAnswerService implements IQuestionAndAnswerService {
    private readonly _repository: IQuestionAndAnswerRepository;

    constructor(repository: IQuestionAndAnswerRepository){
        this._repository = repository;
    }

    public async getQuestionAndAnswers(): Promise<QuestionDTO[]> {
        return await this._repository.getQuestionAndAnswers();
    }

    public async addQuestion(formData: FormData) {
        return await this._repository.addQuestion(formData);
    }

}