var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { extendsBuiltIn } from "../../utils";
/**
 * Represents Thumbnails, usually found inside Playlist / Channel / Video, etc.
 *
 * {@link Thumbnails} is an array of {@link Thumbnail}
 *
 * @noInheritDoc
 */
var Thumbnails = /** @class */ (function (_super) {
    __extends(Thumbnails, _super);
    /** @hidden */
    function Thumbnails() {
        return _super.call(this) || this;
    }
    Thumbnails_1 = Thumbnails;
    Object.defineProperty(Thumbnails.prototype, "min", {
        /**
         * Returns thumbnail with the lowest resolution, usually the first element of the Thumbnails array
         *
         * @example
         * ```js
         * const min = video.thumbnails.min;
         * ```
         */
        get: function () {
            return Thumbnails_1.parseThumbnailUrl(this[0]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thumbnails.prototype, "best", {
        /**
         * Returns thumbnail with the highest resolution, usually the last element of the Thumbnails array
         *
         * @example
         * ```js
         * const best = video.thumbnails.best;
         * ```
         */
        get: function () {
            return Thumbnails_1.parseThumbnailUrl(this[this.length - 1]);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Load this instance with raw data from Youtube
     *
     * @hidden
     */
    Thumbnails.prototype.load = function (thumbnails) {
        this.push.apply(this, __spreadArray([], __read(thumbnails), false));
        return this;
    };
    Thumbnails.parseThumbnailUrl = function (_a) {
        var url = _a.url;
        if (url.startsWith("//"))
            return "https:".concat(url);
        if (!url.startsWith("https://"))
            return "https://".concat(url);
        else
            return url;
    };
    var Thumbnails_1;
    Thumbnails = Thumbnails_1 = __decorate([
        extendsBuiltIn()
    ], Thumbnails);
    return Thumbnails;
}(Array));
export { Thumbnails };
