/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isString } from '../util/is-string';
export class DragImage {
    /**
     * @param {?} imageElement
     * @param {?=} x_offset
     * @param {?=} y_offset
     */
    constructor(imageElement, x_offset = 0, y_offset = 0) {
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (isString(this.imageElement)) {
            // Create real image from string source
            const /** @type {?} */ imgScr = /** @type {?} */ (this.imageElement);
            this.imageElement = new HTMLImageElement();
            (/** @type {?} */ (this.imageElement)).src = imgScr;
        }
    }
}
function DragImage_tsickle_Closure_declarations() {
    /** @type {?} */
    DragImage.prototype.imageElement;
    /** @type {?} */
    DragImage.prototype.x_offset;
    /** @type {?} */
    DragImage.prototype.y_offset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2RyYWctaW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU3QyxNQUFNOzs7Ozs7SUFDRixZQUFtQixZQUFpQixFQUFTLFdBQW1CLENBQUMsRUFBUyxXQUFtQixDQUFDO1FBQTNFLGlCQUFZLEdBQVosWUFBWSxDQUFLO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdEYsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTlCLHVCQUFNLE1BQU0scUJBQW1CLElBQUksQ0FBQyxZQUFZLENBQUEsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUMzQyxtQkFBbUIsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7U0FDdEQ7S0FDSjtDQUNSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlsL2lzLXN0cmluZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0ltYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbWFnZUVsZW1lbnQ6IGFueSwgcHVibGljIHhfb2Zmc2V0OiBudW1iZXIgPSAwLCBwdWJsaWMgeV9vZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHRoaXMuaW1hZ2VFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHJlYWwgaW1hZ2UgZnJvbSBzdHJpbmcgc291cmNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdTY3I6IHN0cmluZyA9IDxzdHJpbmc+dGhpcy5pbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRWxlbWVudCA9IG5ldyBIVE1MSW1hZ2VFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAoPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5pbWFnZUVsZW1lbnQpLnNyYyA9IGltZ1NjcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufSJdfQ==