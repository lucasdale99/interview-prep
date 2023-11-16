import {IAPIResponseHandler} from "./IAPIResponseHandler";
export class APIResponseHandler implements IAPIResponseHandler {
    public async HandleResponse(response: Response) {
        if (!response.ok) {
            return await response.json()
                .then((x: unknown) => Promise.reject(x));
        }
        if(response.status === 204) {
            return Promise.resolve(null);
        }
        return await response.json();
    }
}