import { QuestionDTO } from "../model/QuestionDTO";

export class QuestionDO {
    private _listOfQuestions: QuestionDTO[];

    constructor(listOfQuestionAndAnswers: QuestionDTO[]) {
        this._listOfQuestions = listOfQuestionAndAnswers
    }

    get listOfQuestionsAndAnswers(): QuestionDTO[] {
        return this._listOfQuestions;
    }

    public updateListOfQuestionAndAnswers(list: QuestionDTO[]): QuestionDO {
        const response = this.clone();
        response._listOfQuestions = list;
        return response;
    }

    public addQuestion(questionDTO: QuestionDTO): QuestionDO {
        const response = this.clone();
        response._listOfQuestions.push(questionDTO);
        return response;
    }

    public editQuestion(questionDTO: QuestionDTO): QuestionDO {
        const response = this.clone();
    
        // Find the index of the question to be edited
        const index = response._listOfQuestions.findIndex(question => question.id === questionDTO.id);
    
        if (index !== -1) {
            // Update the question at the found index
            response._listOfQuestions[index] = questionDTO;
        }
    
        return response;
    }

    private clone(): QuestionDO {
        return new QuestionDO(this._listOfQuestions);
    }
}
