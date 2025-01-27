var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ParsingError = /** @class */ (function (_super) {
    __extends(ParsingError, _super);
    function ParsingError(msg) {
        var _this = _super.call(this, msg) || this;
        // Set the prototype explicitly.
        Object.setPrototypeOf(_this, ParsingError.prototype);
        return _this;
    }
    return ParsingError;
}(Error));
export { ParsingError };
