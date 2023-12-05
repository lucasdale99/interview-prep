export class QuestionDTO {
    private _id: number;
    private _question: string;
    private _answer: string;

    constructor(id: number, question: string, answer: string){
        this._id = id;
        this._question = question;
        this._answer = answer;
    }

    get id() {
        return this._id;
    }

    get question() {
        return this._question;
    }

    get answer() {
        return this._answer;
    }

    public updateQuestion(question: string): QuestionDTO{
        const response = this.clone();
        response._question = question;
        return response;
    }

    public updateAnswer(answer: string): QuestionDTO{
        const response = this.clone();
        response._answer = answer;
        return response;
    }
    
    private clone(): QuestionDTO {
        return new QuestionDTO(this._id, this._question, this._answer);
    }
}