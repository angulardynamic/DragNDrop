/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core';
import { DragDropConfig } from '../config';
import { DragDropService } from '../service';
import { AbstractHandleDirective } from './abstract';
import { DraggableDirective } from './draggable.directive';
export class DraggableHandleDirective extends AbstractHandleDirective {
    /**
     * @param {?} elementReference
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} directive
     * @param {?} cdr
     */
    constructor(elementReference, dragDropService, config, directive, cdr) {
        super(elementReference, dragDropService, config, directive, cdr);
    }
}
DraggableHandleDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-draggable-handle' },] },
];
/** @nocollapse */
DraggableHandleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: DraggableDirective },
    { type: ChangeDetectorRef }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlLWhhbmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUUzQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFJekQsTUFBTSwrQkFBZ0MsU0FBUSx1QkFBdUI7Ozs7Ozs7O0lBQ25FLFlBQ0ksZ0JBQTRCLEVBQUUsZUFBZ0MsRUFBRSxNQUFzQixFQUN0RixTQUE2QixFQUFFLEdBQXNCO1FBQ3ZELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNsRTs7O1lBTkYsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLHVCQUF1QixFQUFDOzs7O1lBVFIsVUFBVTtZQUd4QyxlQUFlO1lBRGYsY0FBYztZQUlkLGtCQUFrQjtZQU5sQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdCc7XHJcbmltcG9ydCB7RHJhZ2dhYmxlRGlyZWN0aXZlfSBmcm9tICcuL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGUtaGFuZGxlJ30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBkaXJlY3RpdmU6IERyYWdnYWJsZURpcmVjdGl2ZSwgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGRpcmVjdGl2ZSwgY2RyKTtcclxuICB9XHJcbn1cclxuIl19