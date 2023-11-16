import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

export class QuestionAndAnswerDO {
    private _listOfQuestionAndAnswers: QuestionAndAnswerDTO[];
    private _newQuestion: QuestionAndAnswerDTO;

    constructor(listOfQuestionAndAnswers: QuestionAndAnswerDTO[], newQuestion: QuestionAndAnswerDTO) {
        this._listOfQuestionAndAnswers = listOfQuestionAndAnswers
        this._newQuestion = newQuestion;
    }

    get listOfQuestionsAndAnswers(): QuestionAndAnswerDTO[] {
        return this._listOfQuestionAndAnswers;
    }




    public updateListOfQuestionAndAnswers(list: QuestionAndAnswerDTO[]): QuestionAndAnswerDO {
        const response = this.clone();
        response._listOfQuestionAndAnswers = list;
        return response;
    }

    public addQuestion(question: QuestionAndAnswerDTO): QuestionAndAnswerDO {
        const response = this.clone();
        response._listOfQuestionAndAnswers.push(question);
        return response;
    }


    private clone(): QuestionAndAnswerDO {
        return new QuestionAndAnswerDO(this._listOfQuestionAndAnswers, this._newQuestion);
    }
}
