import { Thumbnails } from "../../common";
import { MusicBase, MusicBaseProperties } from "../MusicBase";
import { MusicBaseArtist } from "../MusicBaseArtist";

/** @hidden */
export interface MusicPodcastCompactProperties extends MusicBaseProperties {
	id?: string;
	title?: string;
	duration?: number;
	thumbnails?: Thumbnails;
	artists?: MusicBaseArtist[];
}

export class MusicPodcastCompact extends MusicBase implements MusicPodcastCompactProperties {
	id!: string;
	/** The title's name */
	title!: string;
	/** The duration of the video (in seconds) */
	duration!: number;
	/** The thumbnails of the video */
	thumbnails!: Thumbnails;
	/** The artists of the video */
	artists?: MusicBaseArtist[];

	/** @hidden */
	constructor(attr: MusicPodcastCompactProperties) {
		super(attr.client);
		Object.assign(this, attr);
	}
}
