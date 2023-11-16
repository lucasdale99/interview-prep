import { IAPIGateway } from "../../infrastructure/apiGateway/IAPIGateway";
import { It, Mock, Times } from "moq.ts";
import { QuestionAndAnswerGateway } from "./QuestionAndAnswerGateway";
import { QuestionAndAnswerDTO } from "../model/QuestionAndAnswerDTO";

describe("QuestionAndAnswerGateway", () => {
    let questionAndAnswerGateway: QuestionAndAnswerGateway;
    let apiGateway: Mock<IAPIGateway>;
    let listOfQuestions: QuestionAndAnswerDTO[];

    beforeEach(() => {
        apiGateway = new Mock<IAPIGateway>();
        questionAndAnswerGateway = new QuestionAndAnswerGateway(apiGateway.object());
        listOfQuestions = [
            new QuestionAndAnswerDTO(1, "test?", "yes", false),
            new QuestionAndAnswerDTO(2, "test2?", "no", false)
        ]
    })

    it("makes a call to the correct api gateway at getQuestionAndAnswers method", async () => {
        //Arrange
        apiGateway.setup(x => x.get(It.IsAny<string>()))
            .returns(Promise.resolve(listOfQuestions));
            
        //Act
        await questionAndAnswerGateway.getQuestionAndAnswers();

        //Assert
        apiGateway.verify(x => x.get(It.IsAny<string>()), Times.Once())
    })
});