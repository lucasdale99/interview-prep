export interface IAPIGateway {
    Get: <T>(path: string) => Promise<T>;
    Post: <T>(path: string, requestBody: T) => Promise<void | unknown>;
    Put: <T>(path: string, requestBody: T) => Promise<void | unknown>;
    Delete: <T>(path: string) => Promise<void>;
}