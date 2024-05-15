"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPodcastCompact = void 0;
const MusicBase_1 = require("../MusicBase");
class MusicPodcastCompact extends MusicBase_1.MusicBase {
    /** @hidden */
    constructor(attr) {
        super(attr.client);
        Object.assign(this, attr);
    }
}
exports.MusicPodcastCompact = MusicPodcastCompact;
