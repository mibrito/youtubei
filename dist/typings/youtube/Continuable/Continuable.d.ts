import { Base } from "../Base";
import { Client } from "../Client";
/** @hidden */
export type FetchResult<T> = {
    items: T[];
    continuation?: string;
};
/** @hidden */
export type ContinuableConstructorParams = {
    client: Client;
    strictContinuationCheck?: boolean;
};
/** Represents a continuable list of items `T` (like pagination) */
export declare abstract class Continuable<T> extends Base {
    items: T[];
    continuation?: string | null;
    private strictContinuationCheck;
    /** @hidden */
    constructor({ client, strictContinuationCheck }: ContinuableConstructorParams);
    /** Fetch next items using continuation token */
    next(count?: number): Promise<T[]>;
    protected abstract fetch(): Promise<FetchResult<T>>;
    private get hasContinuation();
}
