import {APIGateway} from "./APIGateway";
import { IAPIResponseHandler } from "./IAPIResponseHandler";

describe("API Gateway", () => {
    let apiGateway: APIGateway;
    let fetchMock: jest.Mock;
    let apiResponseHandler: IAPIResponseHandler;

    beforeEach(() => {
        apiResponseHandler = {
            HandleResponse: jest.fn()
        } as IAPIResponseHandler;
        fetchMock = jest.fn();
        global.fetch = fetchMock;
        apiGateway = new APIGateway(apiResponseHandler);
    });
    
    it('should make GET request and handle response', async () => {
        const response = { ok: true, json: () => Promise.resolve({ response: 'data' }) };
        fetchMock.mockResolvedValue(response);
        (apiResponseHandler.HandleResponse as jest.Mock).mockResolvedValue({ response: 'data' });
        const path = '/api/test';
        const result = await apiGateway.get(path);
        expect(result).toEqual({ response: 'data' });
        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith(path, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        expect(apiResponseHandler.HandleResponse).toBeCalledTimes(1);
    });
    
    it("On calling Post, makes Post request and calls response handler", async () => {
        const response = {ok: true};
        fetchMock.mockResolvedValue(response);
        const path = '/api/test';
        const requestBody = {
            property1: "hello",
            property2: "world"
        };
        await apiGateway.post(path, requestBody);
        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });
        expect(apiResponseHandler.HandleResponse).toBeCalledTimes(1);
    });
});