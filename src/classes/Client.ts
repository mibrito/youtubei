import { I_END_POINT, WATCH_END_POINT } from "../constants";
import { getQueryParameter, http } from "../common";

import { Playlist, Video, SearchResult, LiveVideo } from ".";
import { SearchResultType } from "./SearchResult";

export type SearchType = "video" | "channel" | "playlist" | "all";

export type SearchOptions = {
	type: SearchType;
};

/** Youtube Client */
export default class Client {
	/** Searches for videos / playlists / channels */
	async search<T extends SearchOptions>(
		query: string,
		searchOptions?: Partial<T>
	): Promise<SearchResult<T>> {
		const options: SearchOptions = {
			type: "all",
			...searchOptions,
		};

		const result = new SearchResult();
		await result.init(query, options);
		return result;
	}

	/** Search for videos / playlists / channels and returns the first result */
	async findOne<T extends SearchOptions>(
		query: string,
		searchOptions?: Partial<T>
	): Promise<SearchResultType<T> | undefined> {
		return (await this.search(query, searchOptions)).shift();
	}

	/** Get playlist information and its videos by playlist id or URL */
	async getPlaylist(playlistIdOrUrl: string): Promise<Playlist | undefined> {
		const playlistId = getQueryParameter(playlistIdOrUrl, "list");

		const response = await http.post(`${I_END_POINT}/browse`, {
			data: { browseId: `VL${playlistId}` },
		});

		if (response.data.error || response.data.alerts) return undefined;
		return new Playlist().load(response.data);
	}

	/** Get video information by video id or URL */
	async getVideo(videoIdOrUrl: string): Promise<Video | LiveVideo | undefined> {
		const videoId = getQueryParameter(videoIdOrUrl, "v");

		const response = await http.get(`${WATCH_END_POINT}`, {
			params: { v: videoId, pbj: "1" },
		});

		if (!response.data[3].response.contents) return undefined;
		return !response.data[2].playerResponse.playabilityStatus.liveStreamability
			? new Video().load(response.data)
			: new LiveVideo().load(response.data);
	}
}