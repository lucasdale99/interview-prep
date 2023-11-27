import { IAPIGateway } from "./IAPIGateway";
import { IAPIResponseHandler } from "./IAPIResponseHandler";

export class APIGateway implements IAPIGateway {
    private readonly apiResponseHandler: IAPIResponseHandler;
    //only adding this to specify my env variable
    private readonly baseURL: string = "https://localhost:7110/api/";

    constructor(apiResponseHandler: IAPIResponseHandler) {
        this.apiResponseHandler = apiResponseHandler;
    }

    public async get<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(`${this.baseURL}/${endpoint}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    cache: "no-cache",
                    next: {
                        tags: ["questions"]
                    }
                });
            return this.apiResponseHandler.HandleResponse(response) as T;

        } catch (error: unknown) {
            throw error;
        }
    }

    public async post<T>(endpoint: string, requestBody: T): Promise<void | unknown> {
        try {

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            };

            const response = await fetch(`${this.baseURL}/${endpoint}`, requestOptions);
            return this.apiResponseHandler.HandleResponse(response);

        } catch (error: unknown) {
            throw error;
        }
    }

    public async put<T>(endpoint: string, requestBody: T): Promise<void | unknown> {
        try {

            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            };

            const response = await fetch(`${this.baseURL}/${endpoint}`, requestOptions);
            return this.apiResponseHandler.HandleResponse(response);

        } catch (error: unknown) {
            throw error;
        }
    }

    public async delete<T>(endpoint: string): Promise<void> {

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        };

        const response = await fetch(`${this.baseURL}/${endpoint}`, requestOptions);
        return this.apiResponseHandler.HandleResponse(response);
    }
}