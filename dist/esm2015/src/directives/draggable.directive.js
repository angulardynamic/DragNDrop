/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { DragDropConfig } from '../config';
import { DragDropService } from '../service';
import { AbstractDirective } from './abstract';
export class DraggableDirective extends AbstractDirective {
    /**
     * @param {?} elementReference
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} cdr
     */
    constructor(elementReference, dragDropService, config, cdr) {
        super(elementReference, dragDropService, config, cdr);
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragSuccess = new EventEmitter();
        this.defaultCursor = this.element.style.cursor;
        this.dragEnabled = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set draggable(value) {
        this.dragEnabled = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropzones(value) {
        this.dropZones = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set effectallowed(value) {
        this.effectAllowed = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set effectcursor(value) {
        this.effectCursor = value;
    }
    /**
     * @return {?}
     */
    dragStartCallback() {
        this.dragDropService.isDragged = true;
        this.dragDropService.dragData = this.dragData;
        this.dragDropService.onDragSuccessCallback = this.onDragSuccess;
        this.element.classList.add(this.config.onDragStartClass);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEndCallback(event) {
        this.dragDropService.isDragged = false;
        this.dragDropService.dragData = null;
        this.dragDropService.onDragSuccessCallback = null;
        this.element.classList.remove(this.config.onDragStartClass);
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-draggable]' },] },
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: ChangeDetectorRef }
];
DraggableDirective.propDecorators = {
    draggable: [{ type: Input, args: ['dragEnabled',] }],
    dropzones: [{ type: Input, args: ['dropZones',] }],
    effectallowed: [{ type: Input, args: ['effectAllowed',] }],
    effectcursor: [{ type: Input, args: ['effectCursor',] }],
    dragData: [{ type: Input }],
    dragImage: [{ type: Input }],
    cloneItem: [{ type: Input }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }],
    onDragSuccess: [{ type: Output }]
};
function DraggableDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DraggableDirective.prototype.dragData;
    /** @type {?} */
    DraggableDirective.prototype.dragImage;
    /** @type {?} */
    DraggableDirective.prototype.cloneItem;
    /** @type {?} */
    DraggableDirective.prototype.onDragStart;
    /** @type {?} */
    DraggableDirective.prototype.onDragEnd;
    /** @type {?} */
    DraggableDirective.prototype.onDragSuccess;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUMsY0FBYyxFQUFZLE1BQU0sV0FBVyxDQUFDO0FBRXBELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBSTdDLE1BQU0seUJBQTBCLFNBQVEsaUJBQWlCOzs7Ozs7O0lBNkJ2RCxZQUNJLGdCQUE0QixFQUFFLGVBQWdDLEVBQUUsTUFBc0IsRUFBRSxHQUFzQjtRQUNoSCxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzsyQkFOSixJQUFJLFlBQVksRUFBRTt5QkFDcEIsSUFBSSxZQUFZLEVBQWdCOzZCQUNyQyxJQUFJLFlBQVksRUFBTztRQUtsRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUN6Qjs7Ozs7SUFqQ0QsSUFDSSxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDNUI7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBZTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUN4Qjs7Ozs7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0tBQzVCOzs7OztJQUVELElBQ0ksWUFBWSxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7S0FDM0I7Ozs7SUFpQkQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDMUQ7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWlCO1FBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQ25FOzs7WUFsREYsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFDOzs7O1lBVEYsVUFBVTtZQUl4QyxlQUFlO1lBRmYsY0FBYztZQUZkLGlCQUFpQjs7O3dCQVd0QixLQUFLLFNBQUMsYUFBYTt3QkFLbkIsS0FBSyxTQUFDLFdBQVc7NEJBS2pCLEtBQUssU0FBQyxlQUFlOzJCQUtyQixLQUFLLFNBQUMsY0FBYzt1QkFLcEIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBRUwsTUFBTTt3QkFDTixNQUFNOzRCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3Bab25lcycpXHJcbiAgc2V0IGRyb3B6b25lcyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZHJhZ0ltYWdlOiBzdHJpbmd8RHJhZ0ltYWdlfEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIGNsb25lSXRlbTogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdTdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgdGhpcy5kZWZhdWx0Q3Vyc29yID0gdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvcjtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ1N0YXJ0Q2xhc3MpO1xyXG4gICAgdGhpcy5vbkRyYWdFbmQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==