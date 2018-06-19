/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DragDropConfig } from '../../config';
import { isPresent } from '../../util';
import * as i0 from "@angular/core";
import * as i1 from "../../config/drag-drop-config";
var DragDropSortableService = /** @class */ (function () {
    /**
     *Creates an instance of DragDropSortableService.
     * @param config The DragDropConfig.
     * @memberof DragDropSortableService
     */
    function DragDropSortableService(config) {
        this.config = config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "element", {
        /**
         * Gets the last element that was marked sortable.
         *
         * @readonly
         * @memberof DragDropSortableService
         */
        get: /**
         * Gets the last element that was marked sortable.
         *
         * \@readonly
         * \@memberof DragDropSortableService
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Assigns the `onSortableDragClass` to the given element.
     *
     * @param e The element to assign the CSS class to.
     * @memberof DragDropSortableService
     */
    /**
     * Assigns the `onSortableDragClass` to the given element.
     *
     * \@memberof DragDropSortableService
     * @param {?} e The element to assign the CSS class to.
     * @return {?}
     */
    DragDropSortableService.prototype.markSortable = /**
     * Assigns the `onSortableDragClass` to the given element.
     *
     * \@memberof DragDropSortableService
     * @param {?} e The element to assign the CSS class to.
     * @return {?}
     */
    function (e) {
        if (isPresent(this._element)) {
            this._element.classList.remove(this.config.onSortableDragClass);
        }
        if (isPresent(e)) {
            this._element = e;
            this._element.classList.add(this.config.onSortableDragClass);
        }
    };
    DragDropSortableService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropSortableService.ctorParameters = function () { return [
        { type: DragDropConfig }
    ]; };
    /** @nocollapse */ DragDropSortableService.ngInjectableDef = i0.defineInjectable({ factory: function DragDropSortableService_Factory() { return new DragDropSortableService(i0.inject(i1.DragDropConfig)); }, token: DragDropSortableService, providedIn: "root" });
    return DragDropSortableService;
}());
export { DragDropSortableService };
function DragDropSortableService_tsickle_Closure_declarations() {
    /**
     * The last elemet that was marked sortable.
     *
     * \@memberof DragDropSortableService
     * @type {?}
     */
    DragDropSortableService.prototype._element;
    /** @type {?} */
    DragDropSortableService.prototype.index;
    /** @type {?} */
    DragDropSortableService.prototype.sortableContainer;
    /** @type {?} */
    DragDropSortableService.prototype.isDragged;
    /** @type {?} */
    DragDropSortableService.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFNUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztJQWtCbkM7Ozs7T0FJRztJQUNILGlDQUFvQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtLQUFJO0lBUTlDLHNCQUFJLDRDQUFPO1FBTlg7Ozs7O1dBS0c7Ozs7Ozs7O1FBQ0g7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7O09BQUE7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCw4Q0FBWTs7Ozs7OztJQUFaLFVBQWEsQ0FBYztRQUN6QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzlEO0tBQ0Y7O2dCQWhERixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dCQUp4QixjQUFjOzs7a0NBRnRCOztTQU9hLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcclxuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL3V0aWwnO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxhc3QgZWxlbWV0IHRoYXQgd2FzIG1hcmtlZCBzb3J0YWJsZS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBpbmRleDogbnVtYmVyO1xyXG5cclxuICBzb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXJEaXJlY3RpdmU7XHJcblxyXG4gIGlzRHJhZ2dlZDogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZS5cclxuICAgKiBAcGFyYW0gY29uZmlnIFRoZSBEcmFnRHJvcENvbmZpZy5cclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCB0aGF0IHdhcyBtYXJrZWQgc29ydGFibGUuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzc2lnbnMgdGhlIGBvblNvcnRhYmxlRHJhZ0NsYXNzYCB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlIFRoZSBlbGVtZW50IHRvIGFzc2lnbiB0aGUgQ1NTIGNsYXNzIHRvLlxyXG4gICAqIEBtZW1iZXJvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZVxyXG4gICAqL1xyXG4gIG1hcmtTb3J0YWJsZShlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9lbGVtZW50KSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25Tb3J0YWJsZURyYWdDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzUHJlc2VudChlKSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZTtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=