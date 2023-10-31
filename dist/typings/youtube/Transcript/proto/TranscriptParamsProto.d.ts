/// <reference types="node" />
export type TranscriptParams = {
    TranscriptParams: {
        videoId: string;
    };
};
export declare const TranscriptParamsProto: {
    TranscriptParams: {
        encode: (obj: {
            videoId: string;
        }) => Buffer;
        decode: (buf: Buffer) => {
            videoId: string;
        };
    };
};
