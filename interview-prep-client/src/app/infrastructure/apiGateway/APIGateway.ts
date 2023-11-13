import { IAPIGateway } from "./IAPIGateway";
import { IAPIResponseHandler } from "./IAPIResponseHandler";

export class APIGateway implements IAPIGateway {
    private readonly apiResponseHandler: IAPIResponseHandler;

    constructor(apiResponseHandler: IAPIResponseHandler) {
        this.apiResponseHandler = apiResponseHandler;
    }

    public async Get<T>(path: string): Promise<T> {
        try {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            };

            const response = await fetch(path, requestOptions);
            return this.apiResponseHandler.HandleResponse(response) as T;

        } catch (error: unknown) {
            throw error;
        }
    }

    public async Post<T>(path: string, requestBody: T): Promise<void | unknown> {
        try {

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            };

            const response = await fetch(path, requestOptions);
            return this.apiResponseHandler.HandleResponse(response);

        } catch (error: unknown) {
            throw error;
        }
    }

    public async Put<T>(path: string, requestBody: T): Promise<void | unknown> {
        try {

            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            };

            const response = await fetch(path, requestOptions);
            return this.apiResponseHandler.HandleResponse(response);

        } catch (error: unknown) {
            throw error;
        }
    }

    public async Delete<T>(path: string): Promise<void> {

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        };

        const response = await fetch(path, requestOptions);
        return this.apiResponseHandler.HandleResponse(response);
    }
}