/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { DragDropConfig } from '../config';
import { DragDropService, DragDropSortableService } from '../service';
import { AbstractDirective } from '../directives/abstract';
import { SortableContainerDirective } from './sortable-container.directive';
var SortableDirective = /** @class */ (function (_super) {
    tslib_1.__extends(SortableDirective, _super);
    function SortableDirective(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new EventEmitter();
        _this.onDragStartCallback = new EventEmitter();
        _this.onDragOverCallback = new EventEmitter();
        _this.onDragEndCallback = new EventEmitter();
        _this.onDropSuccessCallback = new EventEmitter();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableDirective.prototype, "draggable", {
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
    Object.defineProperty(SortableDirective.prototype, "droppable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableDirective.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: /**
         * Drag allowed effect
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableDirective.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: /**
         * Drag effect cursor
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
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDragStartCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this.element);
        // Add dragData
        this.dragDropService.isDragged = true;
        this.dragDropService.dragData = this.dragData;
        this.dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this.dragDropService.dragData);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDragOverCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged && this.element !== this._sortableDataService.element) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this.element);
            this.onDragOverCallback.emit(this.dragDropService.dragData);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDragEndCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this.dragDropService.isDragged = false;
        this.dragDropService.dragData = null;
        this.dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this.dragDropService.dragData);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this.element);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' +
                // this._sortableDataService.index + ']'); Get item
                var /** @type {?} */ item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.insertItemAt(item, this.index);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
                this.detectChanges();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDropCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this.dragDropService.dragData);
            this.onDropSuccessCallback.emit(this.dragDropService.dragData);
            if (this.dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this.dragDropService.dragData);
                this.dragDropService.onDragSuccessCallback.emit(this.dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    SortableDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-sortable]' },] },
    ];
    /** @nocollapse */
    SortableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: SortableContainerDirective },
        { type: DragDropSortableService },
        { type: ChangeDetectorRef }
    ]; };
    SortableDirective.propDecorators = {
        index: [{ type: Input, args: ['sortableIndex',] }],
        draggable: [{ type: Input, args: ['dragEnabled',] }],
        droppable: [{ type: Input, args: ['dropEnabled',] }],
        dragData: [{ type: Input }],
        effectallowed: [{ type: Input, args: ['effectAllowed',] }],
        effectcursor: [{ type: Input, args: ['effectCursor',] }],
        onDragSuccessCallback: [{ type: Output, args: ['onDragSuccess',] }],
        onDragStartCallback: [{ type: Output, args: ['onDragStart',] }],
        onDragOverCallback: [{ type: Output, args: ['onDragOver',] }],
        onDragEndCallback: [{ type: Output, args: ['onDragEnd',] }],
        onDropSuccessCallback: [{ type: Output, args: ['onDropSuccess',] }]
    };
    return SortableDirective;
}(AbstractDirective));
export { SortableDirective };
function SortableDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    SortableDirective.prototype.index;
    /**
     * The data that has to be dragged. It can be any JS object
     * @type {?}
     */
    SortableDirective.prototype.dragData;
    /**
     * Callback function called when the drag action ends with a valid drop action.
     * It is activated after the on-drop-success callback
     * @type {?}
     */
    SortableDirective.prototype.onDragSuccessCallback;
    /** @type {?} */
    SortableDirective.prototype.onDragStartCallback;
    /** @type {?} */
    SortableDirective.prototype.onDragOverCallback;
    /** @type {?} */
    SortableDirective.prototype.onDragEndCallback;
    /** @type {?} */
    SortableDirective.prototype.onDropSuccessCallback;
    /** @type {?} */
    SortableDirective.prototype._sortableContainer;
    /** @type {?} */
    SortableDirective.prototype._sortableDataService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL3NvcnRhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXBHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUVwRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFJbkMsNkNBQWlCO0lBNkN0RCwyQkFDSSxPQUFtQixFQUFFLGVBQWdDLEVBQUUsTUFBc0IsRUFDckUsb0JBQXdELG9CQUE2QyxFQUM3RyxHQUFzQjtRQUgxQixZQUlFLGtCQUFNLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUk3QztRQU5XLHdCQUFrQixHQUFsQixrQkFBa0I7UUFBc0MsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUF5Qjs7Ozs7c0NBVDdDLElBQUksWUFBWSxFQUFPO29DQUUzQixJQUFJLFlBQVksRUFBTzttQ0FDekIsSUFBSSxZQUFZLEVBQU87a0NBQ3pCLElBQUksWUFBWSxFQUFPO3NDQUNmLElBQUksWUFBWSxFQUFPO1FBT3pGLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztRQUNuRCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7S0FDekI7SUFsREQsc0JBQ0ksd0NB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dXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Fic3RyYWN0JztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS1jb250YWluZXIuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4IG5vLW91dHB1dC1yZW5hbWUgbm8taW5wdXQtcmVuYW1lICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3REaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgnc29ydGFibGVJbmRleCcpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgnZHJhZ0VuYWJsZWQnKVxyXG4gIHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkcm9wRW5hYmxlZCcpXHJcbiAgc2V0IGRyb3BwYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0YSB0aGF0IGhhcyB0byBiZSBkcmFnZ2VkLiBJdCBjYW4gYmUgYW55IEpTIG9iamVjdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgKi9cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBlZmZlY3QgY3Vyc29yXHJcbiAgICovXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cclxuICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ29uRHJhZ1N1Y2Nlc3MnKSBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ29uRHJhZ1N0YXJ0Jykgb25EcmFnU3RhcnRDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCdvbkRyYWdPdmVyJykgb25EcmFnT3ZlckNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJhZ0VuZCcpIG9uRHJhZ0VuZENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJvcFN1Y2Nlc3MnKSBvbkRyb3BTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBfc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSxcclxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3Bab25lcztcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnU3RhcnRDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgIC8vIEFkZCBkcmFnRGF0YVxyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gdGhpcy5kcmFnRGF0YTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgLy9cclxuICAgIHRoaXMub25EcmFnU3RhcnRDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgJiYgdGhpcy5lbGVtZW50ICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmVsZW1lbnQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdPdmVyQ2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdFbmRDYWxsYmFjay4gZW5kIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gbnVsbDtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKG51bGwpO1xyXG4gICAgLy8gQWRkIGRyYWdHYXRhXHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdFbmRDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIGlmICgodGhpcy5pbmRleCAhPT0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCkgfHxcclxuICAgICAgICAgICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSAhPT0gdGhpcy5fc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuaW5kZXggKyAnXSBvdmVyIG5vZGUgWycgK1xyXG4gICAgICAgIC8vIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggKyAnXScpOyBHZXQgaXRlbVxyXG4gICAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5pbnNlcnRJdGVtQXQoaXRlbSwgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbkRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=