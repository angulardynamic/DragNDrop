/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isPresent } from '../../util';
/**
 * @abstract
 */
export class AbstractDirective {
    /**
     * @param {?} elementReference
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} cdr
     */
    constructor(elementReference, dragDropService, config, cdr) {
        this.dragDropService = dragDropService;
        this.config = config;
        this.cdr = cdr;
        this._dragEnabled = true;
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        this.defaultCursor = this.config.defaultCursor;
        this.element = elementReference.nativeElement;
        this.element.style.cursor = this.defaultCursor;
        // Register drop events
        this.element.ondragenter = (event) => this.dragEnter(event);
        this.element.ondragleave = (event) => this.dragLeave(event);
        this.element.ondrop = (event) => this.drop(event);
        this.element.ondragover = (event) => {
            this.dragOver(event);
            if (isPresent(event.dataTransfer)) {
                event.dataTransfer.dropEffect = this.config.dropEffect.name;
            }
            return false;
        };
        // Register drag events
        this.element.onmousedown = (event) => {
            this.target = event.target;
        };
        this.element.ondragstart = (event) => {
            if (this.dragEnabled && isPresent(this.dragHandle)) {
                if (this.dragHandle.contains(/** @type {?} */ (this.target))) {
                    event.preventDefault();
                    return;
                }
            }
            this.dragStart(event);
            if (isPresent(event.dataTransfer)) {
            }
        };
    }
    /**
     * @return {?}
     */
    get dragEnabled() {
        return this._dragEnabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dragEnabled(value) {
        this._dragEnabled = value;
        this.element.draggable = value;
    }
    /**
     * @return {?}
     */
    get dragHandle() {
        return this._dragHandle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dragHandle(value) {
        this._dragHandle = value;
    }
    /**
     * Run change detection manually to fix an issue in Safari.
     *
     * \@memberof AbstractDirective
     * @return {?}
     */
    detectChanges() {
        setTimeout(() => {
            if (this.cdr && !(/** @type {?} */ (this.cdr)).destroyed) {
                this.cdr.detectChanges();
            }
        }, 250);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnter(event) {
        if (this.isDropAllowed(event)) {
            this.dragEnterCallback(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragOver(event) {
        if (this.isDropAllowed(event)) {
            if (isPresent(event.preventDefault)) {
                event.preventDefault();
            }
        }
        this.dragOverCallback(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragLeave(event) {
        if (this.isDropAllowed(event)) {
            this.dragLeaveCallback(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (this.isDropAllowed(event)) {
            this.preventAndStop(event);
            this.dropCallback(event);
            this.detectChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStart(event) {
        if (this.dragEnabled) {
            this.dragDropService.allowedDropZones = this.dropZones;
            this.dragStartCallback(event);
            // Fixed dragData of nested draggable element.
            if (event.stopPropagation) {
                event.stopPropagation();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnd(event) {
        this.dragDropService.allowedDropZones = [];
        this.dragEndCallback(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    isDropAllowed(event) {
        if ((this.dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            if (isPresent(this.allowDrop)) {
                return this.allowDrop(this.dragDropService.dragData);
            }
            if (this.dropZones.length === 0 && this.dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            for (const /** @type {?} */ dropZone of this.dragDropService.allowedDropZones) {
                if (this.dropZones.indexOf(dropZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Prevent the given events default action from being called and stops it from being propagated further.
     *
     * \@memberof AbstractDirective
     * @param {?} event
     * @return {?}
     */
    preventAndStop(event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnterCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dragOverCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dragLeaveCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dropCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStartCallback(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEndCallback(event) { }
}
function AbstractDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    AbstractDirective.prototype.element;
    /** @type {?} */
    AbstractDirective.prototype._dragHandle;
    /** @type {?} */
    AbstractDirective.prototype.dragHelper;
    /** @type {?} */
    AbstractDirective.prototype.defaultCursor;
    /** @type {?} */
    AbstractDirective.prototype.target;
    /** @type {?} */
    AbstractDirective.prototype._dragEnabled;
    /** @type {?} */
    AbstractDirective.prototype.dropEnabled;
    /** @type {?} */
    AbstractDirective.prototype.effectAllowed;
    /** @type {?} */
    AbstractDirective.prototype.effectCursor;
    /** @type {?} */
    AbstractDirective.prototype.dropZones;
    /** @type {?} */
    AbstractDirective.prototype.allowDrop;
    /** @type {?} */
    AbstractDirective.prototype.dragImage;
    /** @type {?} */
    AbstractDirective.prototype.cloneItem;
    /** @type {?} */
    AbstractDirective.prototype.dragDropService;
    /** @type {?} */
    AbstractDirective.prototype.config;
    /** @type {?} */
    AbstractDirective.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUVyQyxNQUFNOzs7Ozs7O0lBeUJKLFlBQ0ksZ0JBQTRCLEVBQVMsZUFBZ0MsRUFBUyxNQUFzQixFQUM1RjtRQUQ2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUM1RixRQUFHLEdBQUgsR0FBRzs0QkFsQmlCLElBQUk7MkJBRWIsS0FBSzt5QkFNTixFQUFFO3lCQU1ILEtBQUs7UUFNeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7UUFHL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFnQixFQUFFLEVB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UUFBUSxDQUFDLENBQUM7YUFDdEQ7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNiO1lBRUQsR0FBRyxDQUFDLENBQUMsdUJBQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtTQUNGO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7O0lBU1AsY0FBYyxDQUFDLEtBQVk7UUFDakMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCOzs7Ozs7SUFHSCxpQkFBaUIsQ0FBQyxLQUFZLEtBQVU7Ozs7O0lBRXhDLGdCQUFnQixDQUFDLEtBQVksS0FBVTs7Ozs7SUFFdkMsaUJBQWlCLENBQUMsS0FBWSxLQUFVOzs7OztJQUV4QyxZQUFZLENBQUMsS0FBWSxLQUFVOzs7OztJQUVuQyxpQkFBaUIsQ0FBQyxLQUFZLEtBQVU7Ozs7O0lBRXhDLGVBQWUsQ0FBQyxLQUFZLEtBQVU7Q0FDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vLi4vdXRpbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3REaXJlY3RpdmUge1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIFxyXG4gIHByaXZhdGUgX2RyYWdIYW5kbGU6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIGRyYWdIZWxwZXI6IEhUTUxFbGVtZW50O1xyXG4gIGRlZmF1bHRDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgdGFyZ2V0OiBFdmVudFRhcmdldDtcclxuXHJcbiAgcHJpdmF0ZSBfZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBkcm9wRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBlZmZlY3RBbGxvd2VkOiBzdHJpbmc7XHJcblxyXG4gIGVmZmVjdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICBkcm9wWm9uZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGFsbG93RHJvcDogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG4gIGRyYWdJbWFnZTogc3RyaW5nfERyYWdJbWFnZXxGdW5jdGlvbjtcclxuXHJcbiAgY2xvbmVJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBwdWJsaWMgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuZGVmYXVsdEN1cnNvciA9IHRoaXMuY29uZmlnLmRlZmF1bHRDdXJzb3I7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmZXJlbmNlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yID0gdGhpcy5kZWZhdWx0Q3Vyc29yO1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyb3AgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnZW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyYWdFbnRlcihldmVudCk7XHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnbGVhdmUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyYWdMZWF2ZShldmVudCk7XHJcbiAgICB0aGlzLmVsZW1lbnQub25kcm9wID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcm9wKGV2ZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnb3ZlciA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZHJhZ092ZXIoZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5kYXRhVHJhbnNmZXIpKSB7XHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmNvbmZpZy5kcm9wRWZmZWN0Lm5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgZHJhZyBldmVudHNcclxuICAgIHRoaXMuZWxlbWVudC5vbm1vdXNlZG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ3N0YXJ0ID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQgJiYgaXNQcmVzZW50KHRoaXMuZHJhZ0hhbmRsZSkpIHtcclxuICAgICAgICBpZiAodGhpcy5kcmFnSGFuZGxlLmNvbnRhaW5zKHRoaXMudGFyZ2V0IGFzIEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5kYXRhVHJhbnNmZXIpKSB7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0VuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RyYWdFbmFibGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0hhbmRsZSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0hhbmRsZTtcclxuICB9XHJcblxyXG4gIHNldCBkcmFnSGFuZGxlKHZhbHVlOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5fZHJhZ0hhbmRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUnVuIGNoYW5nZSBkZXRlY3Rpb24gbWFudWFsbHkgdG8gZml4IGFuIGlzc3VlIGluIFNhZmFyaS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBBYnN0cmFjdERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RyICYmICEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyNTApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLmRyYWdFbnRlckNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ092ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LnByZXZlbnREZWZhdWx0KSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRyYWdPdmVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnTGVhdmUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLmRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJvcChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMucHJldmVudEFuZFN0b3AoZXZlbnQpO1xyXG5cclxuICAgICAgdGhpcy5kcm9wQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IHRoaXMuZHJvcFpvbmVzO1xyXG4gICAgICB0aGlzLmRyYWdTdGFydENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZpeGVkIGRyYWdEYXRhIG9mIG5lc3RlZCBkcmFnZ2FibGUgZWxlbWVudC5cclxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gW107XHJcbiAgICB0aGlzLmRyYWdFbmRDYWxsYmFjayhldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRHJvcEFsbG93ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpKSAmJiB0aGlzLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5hbGxvd0Ryb3ApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGRyb3Bab25lIG9mIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMuaW5kZXhPZihkcm9wWm9uZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUHJldmVudCB0aGUgZ2l2ZW4gZXZlbnRzIGRlZmF1bHQgYWN0aW9uIGZyb20gYmVpbmcgY2FsbGVkIGFuZCBzdG9wcyBpdCBmcm9tIGJlaW5nIHByb3BhZ2F0ZWQgZnVydGhlci5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBBYnN0cmFjdERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJldmVudEFuZFN0b3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcm9wQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdFbmRDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcbn1cclxuIl19