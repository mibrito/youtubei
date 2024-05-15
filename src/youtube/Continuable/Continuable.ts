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

/** @hidden */
function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/** Represents a continuable list of items `T` (like pagination) */
export abstract class Continuable<T> extends Base {
	items: T[] = [];
	continuation?: string | null;

	private strictContinuationCheck;

	/** @hidden */
	constructor({ client, strictContinuationCheck }: ContinuableConstructorParams) {
		super(client);

		this.strictContinuationCheck = !!strictContinuationCheck;
		if (this.strictContinuationCheck) this.continuation = null;
	}

	/** Fetch next items using continuation token */
	async next(count = 1, sleepTime = null): Promise<T[]> {
		const newItems: T[] = [];
		for (let i = 0; i < count || count == 0; i++) {
			if (!this.hasContinuation) break;
			if (sleepTime !== null) {
				await delay(sleepTime ?? 0)
			}
			const { items, continuation } = await this.fetch();
			this.continuation = continuation;
			newItems.push(...items);
		}

		this.items.push(...newItems);
		return newItems;
	}

	protected abstract fetch(): Promise<FetchResult<T>>;

	private get hasContinuation(): boolean {
		return this.strictContinuationCheck ? this.continuation !== undefined : !!this.continuation;
	}
}
