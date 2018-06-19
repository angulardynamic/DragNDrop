/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { DragDropConfig } from '../config';
import { DragDropService } from '../service';
import { AbstractDirective } from './abstract';
var DraggableDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DraggableDirective, _super);
    function DraggableDirective(elementReference, dragDropService, config, cdr) {
        var _this = _super.call(this, elementReference, dragDropService, config, cdr) || this;
        _this.onDragStart = new EventEmitter();
        _this.onDragEnd = new EventEmitter();
        _this.onDragSuccess = new EventEmitter();
        _this.defaultCursor = _this.element.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableDirective.prototype, "draggable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "dropzones", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "effectallowed", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "effectcursor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DraggableDirective.prototype.dragStartCallback = /**
     * @return {?}
     */
    function () {
        this.dragDropService.isDragged = true;
        this.dragDropService.dragData = this.dragData;
        this.dragDropService.onDragSuccessCallback = this.onDragSuccess;
        this.element.classList.add(this.config.onDragStartClass);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.dragEndCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dragDropService.isDragged = false;
        this.dragDropService.dragData = null;
        this.dragDropService.onDragSuccessCallback = null;
        this.element.classList.remove(this.config.onDragStartClass);
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-draggable]' },] },
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: ChangeDetectorRef }
    ]; };
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
    return DraggableDirective;
}(AbstractDirective));
export { DraggableDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFDLGNBQWMsRUFBWSxNQUFNLFdBQVcsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFlBQVksQ0FBQzs7SUFJTCw4Q0FBaUI7SUE2QnZELDRCQUNJLGdCQUE0QixFQUFFLGVBQWdDLEVBQUUsTUFBc0IsRUFBRSxHQUFzQjtRQURsSCxZQUVFLGtCQUFNLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLFNBR3REOzRCQVRtRCxJQUFJLFlBQVksRUFBRTswQkFDcEIsSUFBSSxZQUFZLEVBQWdCOzhCQUNyQyxJQUFJLFlBQVksRUFBTztRQUtsRSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7S0FDekI7SUFqQ0Qsc0JBQ0kseUNBQVM7Ozs7O1FBRGIsVUFDYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUM1Qjs7O09BQUE7SUFFRCxzQkFDSSx5Q0FBUzs7Ozs7UUFEYixVQUNjLEtBQWU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7OztPQUFBO0lBRUQsc0JBQ0ksNkNBQWE7Ozs7O1FBRGpCLFVBQ2tCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7OztPQUFBO0lBRUQsc0JBQ0ksNENBQVk7Ozs7O1FBRGhCLFVBQ2lCLEtBQWE7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7OztPQUFBOzs7O0lBaUJELDhDQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDMUQ7Ozs7O0lBRUQsNENBQWU7Ozs7SUFBZixVQUFnQixLQUFpQjtRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztLQUNuRTs7Z0JBbERGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBQzs7OztnQkFURixVQUFVO2dCQUl4QyxlQUFlO2dCQUZmLGNBQWM7Z0JBRmQsaUJBQWlCOzs7NEJBV3RCLEtBQUssU0FBQyxhQUFhOzRCQUtuQixLQUFLLFNBQUMsV0FBVztnQ0FLakIsS0FBSyxTQUFDLGVBQWU7K0JBS3JCLEtBQUssU0FBQyxjQUFjOzJCQUtwQixLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFFTCxNQUFNOzRCQUNOLE1BQU07Z0NBQ04sTUFBTTs7NkJBckNUO0VBVXdDLGlCQUFpQjtTQUE1QyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3Bab25lcycpXHJcbiAgc2V0IGRyb3B6b25lcyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZHJhZ0ltYWdlOiBzdHJpbmd8RHJhZ0ltYWdlfEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIGNsb25lSXRlbTogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdTdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgdGhpcy5kZWZhdWx0Q3Vyc29yID0gdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvcjtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ1N0YXJ0Q2xhc3MpO1xyXG4gICAgdGhpcy5vbkRyYWdFbmQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==