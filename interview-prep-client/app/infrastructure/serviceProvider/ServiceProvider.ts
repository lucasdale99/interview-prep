import { QuestionGateway } from "../../questionAggregate/gateway/QuestionGateway";
import { APIGateway } from "../apiGateway/APIGateway";
import { IServiceContext } from "./IServiceContext";
import { APIResponseHandler } from "../apiGateway/APIResponseHandler";
import { QuestionService } from "../../questionAggregate/service/QuestionService";
import { QuestionAndAnswerRepository } from "../../questionAggregate/repository/QuestionRepository";

export class ServiceProvider {
    private static instance: ServiceProvider;
    private readonly _serviceContext: IServiceContext;
    
    private constructor() {
        const jsonResponseHandler = new APIResponseHandler();
        const apiGateway = new APIGateway(jsonResponseHandler);
        const questionGateway = new QuestionGateway(apiGateway);
        const questionRepository = new QuestionAndAnswerRepository(questionGateway);
        const questionService = new QuestionService(questionRepository);
        
        //We should only inject the services into this to be used within the app
        this._serviceContext = {
            QuestionService: questionService,
        }
    }
    
    //This will create one instance and if another instance is invoked it returns the existing instance.
    //Similar to Add Singleton
    public static getInstance(): ServiceProvider {
        if(!ServiceProvider.instance) {
            ServiceProvider.instance = new ServiceProvider();
        }
        return ServiceProvider.instance;
    }
    
    public getServiceContext(): IServiceContext {
        return this._serviceContext;
    }
}