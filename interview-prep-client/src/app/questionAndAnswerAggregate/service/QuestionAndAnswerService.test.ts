import {It, Mock, Times} from "moq.ts";
import { QuestionAndAnswerService } from "./QuestionAndAnswerService";
import { IQuestionAndAnswerRepository } from "../repository/IQuestionAndAnswerRepository";

describe("QuestionAndAnswerService", () => {
    let repo = Mock<IQuestionAndAnswerRepository>;
    let service = QuestionAndAnswerService;

    beforeEach(() => {
        repo = new Mock<IQuestionAndAnswerRepository>();
        service = new QuestionAndAnswerService(repo.object());
    })

    it("gets a list of question and answers", () => {
        
    })
});