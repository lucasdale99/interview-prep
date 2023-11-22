import { QuestionAndAnswerGateway } from "../../questionAggregate/gateway/QuestionAndAnswerGateway";
import { APIGateway } from "../apiGateway/APIGateway";
import { IServiceContext } from "./IServiceContext";
import { APIResponseHandler } from "../apiGateway/APIResponseHandler";
import { QuestionAndAnswerService } from "../../questionAggregate/service/QuestionAndAnswerService";
import { QuestionAndAnswerRepository } from "../../questionAggregate/repository/QuestionAndAnswerRepository";

export class ServiceProvider {
    private static instance: ServiceProvider;
    private readonly _serviceContext: IServiceContext;
    
    private constructor() {
        const jsonResponseHandler = new APIResponseHandler();
        const apiGateway = new APIGateway(jsonResponseHandler);
        const questionAndAnswerGateway = new QuestionAndAnswerGateway(apiGateway);
        const questionAndAnswerRepository = new QuestionAndAnswerRepository(questionAndAnswerGateway);
        const questionAndAnswerService = new QuestionAndAnswerService(questionAndAnswerRepository);
        
        //We should only inject the services into this to be used within the app
        this._serviceContext = {
            QuestionAndAnswerService: questionAndAnswerService,
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