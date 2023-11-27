import { QuestionDO } from "../domain/QuestionDO";
import { QuestionDTO } from "../model/QuestionDTO";
import { IQuestionAndAnswerRepository } from "../repository/IQuestionRepository";
import { IQuestionService } from "./IQuestionService";

export class QuestionService implements IQuestionService {
    private readonly _repository: IQuestionAndAnswerRepository;

    constructor(repository: IQuestionAndAnswerRepository){
        this._repository = repository;
    }

    public async getQuestions(): Promise<QuestionDTO[]> {
        return await this._repository.getQuestionAndAnswers();
    }

    public async addQuestion() {
        return await this._repository.addQuestion();
    }

    public async editQuestion(questionDTO: QuestionDTO) {
        return await this._repository.editQuestion(questionDTO);
    }
}