import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";
import { QuestionAndAnswerDO } from "./QuestionAndAnswerDO";


describe("QuestionAndAnswer Domain Object", () => {
    let questionAndAnswerDO: QuestionAndAnswerDO;

    beforeEach(() => {
        questionAndAnswerDO = new QuestionAndAnswerDO([], true);
    });

    it("updates ListOfQuestionAndAnswers", () => {
        const list = [
            new QuestionAndAnswerDTO(1, "What if?", "Sure!"),
            new QuestionAndAnswerDTO(2, "How bout now?", "Definitely!")
        ];
        const result = questionAndAnswerDO.updateListOfQuestionAndAnswers(list)
        expect(result.listOfQuestionsAndAnswers).toEqual(list);
        expect(result).toBeInstanceOf(QuestionAndAnswerDO);
    })

    it("updates IsAddQuestionPopup", () => {
        const result = questionAndAnswerDO.updateIsAddQuestionPopup(false);
        expect(result.isAddQuestionPopup).toBe(false);
        expect(result).toBeInstanceOf(QuestionAndAnswerDO);
    })

});