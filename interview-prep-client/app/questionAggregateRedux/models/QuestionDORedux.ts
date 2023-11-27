import { QuestionDTORedux } from "./QuestionDTORedux";

//Duplicate for demonstration purposes
export class QuestionDORedux {
    private _listOfQuestionAndAnswers: QuestionDTORedux[];
    private _newQuestion: QuestionDTORedux;

    constructor(listOfQuestionAndAnswers: QuestionDTORedux[], newQuestion: QuestionDTORedux) {
        this._listOfQuestionAndAnswers = listOfQuestionAndAnswers
        this._newQuestion = newQuestion;
    }

    get listOfQuestionsAndAnswers(): QuestionDTORedux[] {
        return this._listOfQuestionAndAnswers;
    }




    public updateListOfQuestionAndAnswers(list: QuestionDTORedux[]): QuestionDORedux {
        const response = this.clone();
        response._listOfQuestionAndAnswers = list;
        return response;
    }
    
    public clone(): QuestionDORedux {
        return new QuestionDORedux(this._listOfQuestionAndAnswers, this._newQuestion);
    }
}