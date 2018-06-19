/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isString } from '../util/is-string';
var DragImage = /** @class */ (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (isString(this.imageElement)) {
            // Create real image from string source
            var /** @type {?} */ imgScr = /** @type {?} */ (this.imageElement);
            this.imageElement = new HTMLImageElement();
            (/** @type {?} */ (this.imageElement)).src = imgScr;
        }
    }
    return DragImage;
}());
export { DragImage };
function DragImage_tsickle_Closure_declarations() {
    /** @type {?} */
    DragImage.prototype.imageElement;
    /** @type {?} */
    DragImage.prototype.x_offset;
    /** @type {?} */
    DragImage.prototype.y_offset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2RyYWctaW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxJQUFBO0lBQ0ksbUJBQW1CLFlBQWlCLEVBQVMsUUFBb0IsRUFBUyxRQUFvQjsrQ0FBN0I7K0NBQTZCO1FBQTNFLGlCQUFZLEdBQVosWUFBWSxDQUFLO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdEYsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTlCLHFCQUFNLE1BQU0scUJBQW1CLElBQUksQ0FBQyxZQUFZLENBQUEsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUMzQyxtQkFBbUIsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7U0FDdEQ7S0FDSjtvQkFWVDtJQVdDLENBQUE7QUFURCxxQkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbC9pcy1zdHJpbmcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdJbWFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW1hZ2VFbGVtZW50OiBhbnksIHB1YmxpYyB4X29mZnNldDogbnVtYmVyID0gMCwgcHVibGljIHlfb2Zmc2V0OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh0aGlzLmltYWdlRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSByZWFsIGltYWdlIGZyb20gc3RyaW5nIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nU2NyOiBzdHJpbmcgPSA8c3RyaW5nPnRoaXMuaW1hZ2VFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUVsZW1lbnQgPSBuZXcgSFRNTEltYWdlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgKDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMuaW1hZ2VFbGVtZW50KS5zcmMgPSBpbWdTY3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn0iXX0=