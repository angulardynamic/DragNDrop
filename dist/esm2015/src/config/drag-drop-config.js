/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataTransferEffect } from './data-transfer-effect';
import * as i0 from "@angular/core";
export class DragDropConfig {
    constructor() {
        this.onDragStartClass = 'dnd-drag-start';
        this.onDragEnterClass = 'dnd-drag-enter';
        this.onDragOverClass = 'dnd-drag-over';
        this.onSortableDragClass = 'dnd-sortable-drag';
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = 'move';
        this.defaultCursor = 'pointer';
    }
}
DragDropConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ DragDropConfig.ngInjectableDef = i0.defineInjectable({ factory: function DragDropConfig_Factory() { return new DragDropConfig(); }, token: DragDropConfig, providedIn: "root" });
function DragDropConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    DragDropConfig.prototype.onDragStartClass;
    /** @type {?} */
    DragDropConfig.prototype.onDragEnterClass;
    /** @type {?} */
    DragDropConfig.prototype.onDragOverClass;
    /** @type {?} */
    DragDropConfig.prototype.onSortableDragClass;
    /** @type {?} */
    DragDropConfig.prototype.dragEffect;
    /** @type {?} */
    DragDropConfig.prototype.dropEffect;
    /** @type {?} */
    DragDropConfig.prototype.dragCursor;
    /** @type {?} */
    DragDropConfig.prototype.dragImage;
    /** @type {?} */
    DragDropConfig.prototype.defaultCursor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2RyYWctZHJvcC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7O0FBSTFELE1BQU07O2dDQUNnQyxnQkFBZ0I7Z0NBQ2hCLGdCQUFnQjsrQkFDakIsZUFBZTttQ0FDWCxtQkFBbUI7MEJBRWhCLGtCQUFrQixDQUFDLElBQUk7MEJBQ3ZCLGtCQUFrQixDQUFDLElBQUk7MEJBQ25DLE1BQU07NkJBRUgsU0FBUzs7OztZQVgzQyxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRyYW5zZmVyRWZmZWN0fSBmcm9tICcuL2RhdGEtdHJhbnNmZXItZWZmZWN0JztcclxuaW1wb3J0IHtEcmFnSW1hZ2V9IGZyb20gJy4vZHJhZy1pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctc3RhcnQnO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9ICdkbmQtZHJhZy1lbnRlcic7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctb3Zlcic7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gJ2RuZC1zb3J0YWJsZS1kcmFnJztcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gJ21vdmUnO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9ICdwb2ludGVyJztcclxufSJdfQ==