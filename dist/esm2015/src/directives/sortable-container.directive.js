/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DragDropConfig } from '../config';
import { DragDropService, DragDropSortableService } from '../service';
import { SortableArrayHandler, SortableFormArrayHandler } from '../util';
import { AbstractDirective } from '../directives/abstract/abstract.directive';
export class SortableContainerDirective extends AbstractDirective {
    /**
     * @param {?} elemRef
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} cdr
     * @param {?} _sortableDataService
     */
    constructor(elemRef, dragDropService, config, cdr, _sortableDataService) {
        super(elemRef, dragDropService, config, cdr);
        this._sortableDataService = _sortableDataService;
        this._sortableData = [];
        this.dragEnabled = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set draggable(value) {
        this.dragEnabled = !!value;
    }
    /**
     * @param {?} sortableData
     * @return {?}
     */
    set sortableData(sortableData) {
        this._sortableData = sortableData;
        if (sortableData instanceof FormArray) {
            this.sortableHandler = new SortableFormArrayHandler();
        }
        else {
            this.sortableHandler = new SortableArrayHandler();
        }
        //
        this.dropEnabled = !!this._sortableData;
        // console.log("collection is changed, drop enabled: " + this.dropEnabled);
    }
    /**
     * @return {?}
     */
    get sortableData() {
        return this._sortableData;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropzones(value) {
        this.dropZones = value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragEnterCallback(event) {
        if (this._sortableDataService.isDragged) {
            const /** @type {?} */ item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
            // Check does element exist in sortableData of this Container
            if (this.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + ']
                // over parent node'); Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this.insertItemAt(item, 0);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getItemAt(index) {
        return this.sortableHandler.getItemAt(this._sortableData, index);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    indexOf(item) {
        return this.sortableHandler.indexOf(this._sortableData, item);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeItemAt(index) {
        this.sortableHandler.removeItemAt(this._sortableData, index);
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    insertItemAt(item, index) {
        this.sortableHandler.insertItemAt(this._sortableData, item, index);
    }
}
SortableContainerDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-sortable-container]' },] },
];
/** @nocollapse */
SortableContainerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: ChangeDetectorRef },
    { type: DragDropSortableService }
];
SortableContainerDirective.propDecorators = {
    draggable: [{ type: Input, args: ['dragEnabled',] }],
    sortableData: [{ type: Input }],
    dropzones: [{ type: Input, args: ['dropZones',] }]
};
function SortableContainerDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    SortableContainerDirective.prototype._sortableData;
    /** @type {?} */
    SortableContainerDirective.prototype.sortableHandler;
    /** @type {?} */
    SortableContainerDirective.prototype._sortableDataService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUtY29udGFpbmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS1jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBZ0IsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDcEUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLHdCQUF3QixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRXZFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBSTVFLE1BQU0saUNBQWtDLFNBQVEsaUJBQWlCOzs7Ozs7OztJQThCL0QsWUFDSSxPQUFtQixFQUFFLGVBQWdDLEVBQUUsTUFBc0IsRUFBRSxHQUFzQixFQUM3RjtRQUNWLEtBQUssQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQURuQyx5QkFBb0IsR0FBcEIsb0JBQW9COzZCQTFCYyxFQUFFO1FBNEI5QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztLQUMxQjs7Ozs7SUFsQ0QsSUFDSSxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDNUI7Ozs7O0lBS0QsSUFDSSxZQUFZLENBQUMsWUFBa0M7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsWUFBWSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7U0FDdkQ7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1NBQ25EOztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O0tBRXpDOzs7O0lBQ0QsSUFBSSxZQUFZO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDeEI7Ozs7O0lBU0Qsb0JBQW9CLENBQUMsS0FBWTtRQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4Qyx1QkFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBRXpHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O2dCQUk5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ2hFOztnQkFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDbkQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDckM7O1lBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDbEU7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVM7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvRDs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzlEOzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBUyxFQUFFLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDcEU7OztZQTFFRixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUM7Ozs7WUFWWCxVQUFVO1lBSXhDLGVBQWU7WUFEZixjQUFjO1lBSGQsaUJBQWlCO1lBSUEsdUJBQXVCOzs7d0JBUTdDLEtBQUssU0FBQyxhQUFhOzJCQVFuQixLQUFLO3dCQWdCTCxLQUFLLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcbmltcG9ydCB7U29ydGFibGVBcnJheUhhbmRsZXIsIFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcn0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3Igbm8tb3V0cHV0LW9uLXByZWZpeCAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtY29udGFpbmVyXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zb3J0YWJsZURhdGE6IEFycmF5PGFueT58Rm9ybUFycmF5ID0gW107XHJcbiAgcHJpdmF0ZSBzb3J0YWJsZUhhbmRsZXI6IFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcnxTb3J0YWJsZUFycmF5SGFuZGxlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc29ydGFibGVEYXRhKHNvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkpIHtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YSA9IHNvcnRhYmxlRGF0YTtcclxuICAgIGlmIChzb3J0YWJsZURhdGEgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcclxuICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIgPSBuZXcgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUFycmF5SGFuZGxlcigpO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGVjdGlvbiBpcyBjaGFuZ2VkLCBkcm9wIGVuYWJsZWQ6IFwiICsgdGhpcy5kcm9wRW5hYmxlZCk7XHJcbiAgfVxyXG4gIGdldCBzb3J0YWJsZURhdGEoKTogQXJyYXk8YW55PnxGb3JtQXJyYXkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSkge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICBjb25zdCBpdGVtOiBhbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgLy8gQ2hlY2sgZG9lcyBlbGVtZW50IGV4aXN0IGluIHNvcnRhYmxlRGF0YSBvZiB0aGlzIENvbnRhaW5lclxyXG4gICAgICBpZiAodGhpcy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgIC8vIExldCdzIGFkZCBpdFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb250YWluZXIuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgudG9TdHJpbmcoKSArICddXHJcbiAgICAgICAgLy8gb3ZlciBwYXJlbnQgbm9kZScpOyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuX3NvcnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBuZXcgbGlzdFxyXG4gICAgICAgIHRoaXMuaW5zZXJ0SXRlbUF0KGl0ZW0sIDApO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5kZXhPZihpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGVIYW5kbGVyLmluZGV4T2YodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5pbnNlcnRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtLCBpbmRleCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==