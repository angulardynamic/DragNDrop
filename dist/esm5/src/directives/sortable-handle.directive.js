/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef } from '@angular/core';
import { DragDropConfig } from '../config';
import { DragDropService } from '../service';
import { AbstractHandleDirective } from './abstract/abstract-handle.directive';
import { SortableDirective } from './sortable.directive';
var SortableHandleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(SortableHandleDirective, _super);
    function SortableHandleDirective(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    SortableHandleDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-sortable-handle]' },] },
    ];
    /** @nocollapse */
    SortableHandleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: SortableDirective },
        { type: ChangeDetectorRef }
    ]; };
    return SortableHandleDirective;
}(AbstractHandleDirective));
export { SortableHandleDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNDLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztJQUlWLG1EQUF1QjtJQUNsRSxpQ0FDSSxPQUFtQixFQUFFLGVBQWdDLEVBQUUsTUFBc0IsRUFBRSxVQUE2QixFQUM1RyxHQUFzQjtlQUN4QixrQkFBTSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDO0tBQ3pEOztnQkFORixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7Ozs7Z0JBVFIsVUFBVTtnQkFHeEMsZUFBZTtnQkFEZixjQUFjO2dCQUlkLGlCQUFpQjtnQkFOakIsaUJBQWlCOztrQ0FBekI7RUFVNkMsdUJBQXVCO1NBQXZELHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0SGFuZGxlRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0L2Fic3RyYWN0LWhhbmRsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1NvcnRhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3NvcnRhYmxlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3IgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlLWhhbmRsZV0nfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZywgX0NvbXBvbmVudDogU29ydGFibGVEaXJlY3RpdmUsXHJcbiAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBfQ29tcG9uZW50LCBjZHIpO1xyXG4gIH1cclxufVxyXG4iXX0=