/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DragDropService {
    constructor() {
        this.allowedDropZones = [];
    }
}
DragDropService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ DragDropService.ngInjectableDef = i0.defineInjectable({ factory: function DragDropService_Factory() { return new DragDropService(); }, token: DragDropService, providedIn: "root" });
function DragDropService_tsickle_Closure_declarations() {
    /** @type {?} */
    DragDropService.prototype.allowedDropZones;
    /** @type {?} */
    DragDropService.prototype.onDragSuccessCallback;
    /** @type {?} */
    DragDropService.prototype.dragData;
    /** @type {?} */
    DragDropService.prototype.isDragged;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUl2RCxNQUFNOztnQ0FDeUIsRUFBRTs7OztZQUZoQyxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RyYWdEcm9wRGF0YX0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTZXJ2aWNlIHtcclxuICBhbGxvd2VkRHJvcFpvbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT47XHJcbiAgZHJhZ0RhdGE6IGFueTtcclxuICBpc0RyYWdnZWQ6IGJvb2xlYW47XHJcbn1cclxuIl19