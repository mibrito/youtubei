import { HeadersInit, RequestInit } from "node-fetch";
type HTTPOptions = {
    apiKey: string;
    baseUrl: string;
    clientName: string;
    clientVersion: string;
    fetchOptions?: Partial<RequestInit>;
    youtubeClientOptions?: Record<string, unknown>;
    initialCookie?: string;
    defaultHeaders?: HeadersInit;
};
type Response<T = any> = {
    data: T;
};
type Options = {
    data: Record<string, unknown>;
    params: Record<string, string>;
} & RequestInit;
/**
 * @hidden
 */
export declare class HTTP {
    private apiKey;
    private baseUrl;
    private clientName;
    private clientVersion;
    private cookie;
    private defaultHeaders;
    private defaultFetchOptions;
    private defaultClientOptions;
    constructor(options: HTTPOptions);
    get(url: string, options?: Partial<Options>): Promise<Response>;
    post(url: string, options?: Partial<Options>): Promise<Response>;
    private request;
    private parseCookie;
}
export {};
