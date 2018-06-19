/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core';
import { DragDropConfig } from '../config';
import { DragDropService } from '../service';
import { AbstractHandleDirective } from './abstract/abstract-handle.directive';
import { SortableDirective } from './sortable.directive';
export class SortableHandleDirective extends AbstractHandleDirective {
    /**
     * @param {?} elemRef
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} _Component
     * @param {?} cdr
     */
    constructor(elemRef, dragDropService, config, _Component, cdr) {
        super(elemRef, dragDropService, config, _Component, cdr);
    }
}
SortableHandleDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-sortable-handle]' },] },
];
/** @nocollapse */
SortableHandleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: SortableDirective },
    { type: ChangeDetectorRef }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFJdkQsTUFBTSw4QkFBK0IsU0FBUSx1QkFBdUI7Ozs7Ozs7O0lBQ2xFLFlBQ0ksT0FBbUIsRUFBRSxlQUFnQyxFQUFFLE1BQXNCLEVBQUUsVUFBNkIsRUFDNUcsR0FBc0I7UUFDeEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxRDs7O1lBTkYsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLHVCQUF1QixFQUFDOzs7O1lBVFIsVUFBVTtZQUd4QyxlQUFlO1lBRGYsY0FBYztZQUlkLGlCQUFpQjtZQU5qQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTb3J0YWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1oYW5kbGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIF9Db21wb25lbnQ6IFNvcnRhYmxlRGlyZWN0aXZlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgX0NvbXBvbmVudCwgY2RyKTtcclxuICB9XHJcbn1cclxuIl19