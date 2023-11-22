import { QuestionAndAnswerRepository } from "./QuestionAndAnswerRepository";
import { IQuestionAndAnswerGateway } from '../gateway/IQuestionAndAnswerGateway';
import { Mock, Times } from "moq.ts";
import { QuestionDTO } from '../model/QuestionDTO';

describe("QuestionAndAnswerRepository", () => {
    let questionAndAnswerRepo: QuestionAndAnswerRepository;
    let gateway: Mock<IQuestionAndAnswerGateway>;
    let questionAndAnswerListDTO: QuestionDTO[];

    beforeEach(() => {
        gateway = new Mock<IQuestionAndAnswerGateway>();
        questionAndAnswerRepo = new QuestionAndAnswerRepository(gateway.object())
        questionAndAnswerListDTO = [new QuestionDTO(1, "", "", false), new QuestionDTO(2, "", "", false)]
    })

    it("gets data transfer object of questionandanswerlist and translates it to the domain object.", () => {
        //Arrange
        gateway
        .setup(instance => instance.getQuestionAndAnswers())
        .returns(Promise.resolve(questionAndAnswerListDTO))

        //Act
        questionAndAnswerRepo.getQuestionAndAnswers();

        //Assert
        gateway.verify(x => x.getQuestionAndAnswers(), Times.Once())
    })
});