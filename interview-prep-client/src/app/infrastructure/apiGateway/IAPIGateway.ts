export interface IAPIGateway {
    get: <T>(path: string) => Promise<T>;
    post: <T>(path: string, requestBody: T) => Promise<void | unknown>;
    put: <T>(path: string, requestBody: T) => Promise<void | unknown>;
    delete: <T>(path: string) => Promise<void>;
}