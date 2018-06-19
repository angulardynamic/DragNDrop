/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core';
import { DragDropConfig } from '../config';
import { DragDropService } from '../service';
import { AbstractHandleDirective } from './abstract';
import { DraggableDirective } from './draggable.directive';
var DraggableHandleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DraggableHandleDirective, _super);
    function DraggableHandleDirective(elementReference, dragDropService, config, directive, cdr) {
        return _super.call(this, elementReference, dragDropService, config, directive, cdr) || this;
    }
    DraggableHandleDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-draggable-handle' },] },
    ];
    /** @nocollapse */
    DraggableHandleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: DraggableDirective },
        { type: ChangeDetectorRef }
    ]; };
    return DraggableHandleDirective;
}(AbstractHandleDirective));
export { DraggableHandleDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZG5kLyIsInNvdXJjZXMiOlsic3JjL2RpcmVjdGl2ZXMvZHJhZ2dhYmxlLWhhbmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztJQUlYLG9EQUF1QjtJQUNuRSxrQ0FDSSxnQkFBNEIsRUFBRSxlQUFnQyxFQUFFLE1BQXNCLEVBQ3RGLFNBQTZCLEVBQUUsR0FBc0I7ZUFDdkQsa0JBQU0sZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDO0tBQ2pFOztnQkFORixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7Ozs7Z0JBVFIsVUFBVTtnQkFHeEMsZUFBZTtnQkFEZixjQUFjO2dCQUlkLGtCQUFrQjtnQkFObEIsaUJBQWlCOzttQ0FBekI7RUFVOEMsdUJBQXVCO1NBQXhELHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0SGFuZGxlRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuaW1wb3J0IHtEcmFnZ2FibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3IgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZS1oYW5kbGUnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIGRpcmVjdGl2ZTogRHJhZ2dhYmxlRGlyZWN0aXZlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmZXJlbmNlLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgZGlyZWN0aXZlLCBjZHIpO1xyXG4gIH1cclxufVxyXG4iXX0=