"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsingError = void 0;
class ParsingError extends Error {
    constructor(msg) {
        super(msg);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ParsingError.prototype);
    }
}
exports.ParsingError = ParsingError;
