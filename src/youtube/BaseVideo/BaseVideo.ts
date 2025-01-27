import { Thumbnails, YoutubeRawData } from "../../common";
import { Base, BaseProperties } from "../Base";
import { BaseChannel } from "../BaseChannel";
import { PlaylistCompact } from "../PlaylistCompact";
import { VideoCompact } from "../VideoCompact";
import { BaseVideoParser } from "./BaseVideoParser";
import { VideoCaptions } from "./VideoCaptions";
import { VideoRelated } from "./VideoRelated";

/** @hidden */
export interface BaseVideoProperties extends BaseProperties {
	id?: string;
	title?: string;
	thumbnails?: Thumbnails;
	description?: string;
	channel?: BaseChannel;
	uploadDate?: string;
	viewCount?: number | null;
	likeCount?: number | null;
	isLiveContent?: boolean;
	tags?: string[];
	keywords?: string[];
}

/** Represents a Video  */
export class BaseVideo extends Base implements BaseVideoProperties {
	id!: string;
	/** The title of this video */
	title!: string;
	/** Thumbnails of the video with different sizes */
	thumbnails!: Thumbnails;
	/** The description of this video */
	description!: string;
	/** The channel that uploaded this video */
	channel!: BaseChannel;
	/** The date this video is uploaded at */
	uploadDate!: string;
	/** How many view does this video have, null if the view count is hidden */
	viewCount!: number | null;
	/** How many like does this video have, null if the like count is hidden */
	likeCount!: number | null;
	/** Whether this video is a live content or not */
	isLiveContent!: boolean;
	/** The tags of this video */
	tags!: string[];
	/** The keywords of this video */
	keywords!: string[];
	/** Continuable of videos / playlists related to this video  */
	related: VideoRelated;
	/** Captions helper class of this video (if caption exists in this video) */
	captions!: VideoCaptions | null;

	/** @hidden */
	constructor(attr: BaseVideoProperties) {
		super(attr.client);
		Object.assign(this, attr);

		this.related = new VideoRelated({ client: this.client, video: this });
	}

	/**
	 * Load this instance with raw data from Youtube
	 *
	 * @hidden
	 */
	load(data: YoutubeRawData): BaseVideo {
		BaseVideoParser.loadBaseVideo(this, data);
		return this;
	}

	/**
	 * Video / playlist to play next after this video, alias to
	 * ```js
	 * video.related.items[0]
	 * ```
	 */
	get upNext(): VideoCompact | PlaylistCompact {
		return this.related.items[0];
	}
}
