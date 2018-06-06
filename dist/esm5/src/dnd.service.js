/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { Injectable } from '@angular/core';
import { DragDropConfig } from './dnd.config';
import { isPresent } from './dnd.utils';
var DragDropData = /** @class */ (function () {
    function DragDropData() {
    }
    return DragDropData;
}());
export { DragDropData };
function DragDropData_tsickle_Closure_declarations() {
    /** @type {?} */
    DragDropData.prototype.dragData;
    /** @type {?} */
    DragDropData.prototype.mouseEvent;
}
/**
 * @return {?}
 */
export function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService.decorators = [
        { type: Injectable },
    ];
    return DragDropService;
}());
export { DragDropService };
function DragDropService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DragDropService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DragDropService.ctorParameters;
    /** @type {?} */
    DragDropService.prototype.allowedDropZones;
    /** @type {?} */
    DragDropService.prototype.onDragSuccessCallback;
    /** @type {?} */
    DragDropService.prototype.dragData;
    /** @type {?} */
    DragDropService.prototype.isDragged;
}
/**
 * @param {?} config
 * @return {?}
 */
export function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = /** @class */ (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} elem
     * @return {?}
     */
    DragDropSortableService.prototype.markSortable = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        if (isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DragDropSortableService.ctorParameters = function () { return [
        { type: DragDropConfig, },
    ]; };
    return DragDropSortableService;
}());
export { DragDropSortableService };
function DragDropSortableService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DragDropSortableService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DragDropSortableService.ctorParameters;
    /** @type {?} */
    DragDropSortableService.prototype.index;
    /** @type {?} */
    DragDropSortableService.prototype.sortableContainer;
    /** @type {?} */
    DragDropSortableService.prototype.isDragged;
    /** @type {?} */
    DragDropSortableService.prototype._elem;
    /** @type {?} */
    DragDropSortableService.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL2RuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUMsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUd0QyxJQUFBOzs7dUJBVkE7SUFhQyxDQUFBO0FBSEQsd0JBR0M7Ozs7Ozs7Ozs7QUFFRCxNQUFNO0lBQ0YsTUFBTSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7Q0FDaEM7OztnQ0FJcUMsRUFBRTs7O2dCQUZ2QyxVQUFVOzswQkFuQlg7O1NBb0JhLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUIsTUFBTSx5Q0FBeUMsTUFBc0I7SUFDakUsTUFBTSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDOUM7O0lBYUcsaUNBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7S0FBSTswQkFKbkMseUNBQUk7Ozs7O1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7OztJQUt0Qiw4Q0FBWTs7OztJQUFaLFVBQWEsSUFBaUI7UUFDMUIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNqRTtRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM5RDtLQUNKOztnQkFyQkosVUFBVTs7OztnQkF6QkgsY0FBYzs7a0NBTnRCOztTQWdDYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi9kbmQudXRpbHMnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyfSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BEYXRhIHtcclxuICAgIGRyYWdEYXRhOiBhbnk7XHJcbiAgICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgICBhbGxvd2VkRHJvcFpvbmVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gICAgZHJhZ0RhdGE6IGFueTtcclxuICAgIGlzRHJhZ2dlZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeShjb25maWc6IERyYWdEcm9wQ29uZmlnKTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UoY29uZmlnKTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2Uge1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIHNvcnRhYmxlQ29udGFpbmVyOiBTb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgIGlzRHJhZ2dlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtOiBIVE1MRWxlbWVudDtcclxuICAgIHB1YmxpYyBnZXQgZWxlbSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOkRyYWdEcm9wQ29uZmlnKSB7fVxyXG5cclxuICAgIG1hcmtTb3J0YWJsZShlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZWxlbSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzUHJlc2VudChlbGVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtID0gZWxlbTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19