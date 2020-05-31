"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static formatTime(time) {
        time = Math.floor(time);
        const min = Math.floor(time / 60);
        const sec = time - (min * 60);
        const minStr = min < 10 ? '0' + min : '' + min;
        const secStr = sec < 10 ? '0' + sec : '' + sec;
        return minStr + ':' + secStr;
    }
}
exports.Utils = Utils;
Utils.randomNumber = () => {
    const random = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (random() + '-' + random());
};
//# sourceMappingURL=utils.js.map