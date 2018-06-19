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
            if (isPresent(this.dragHandle)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUVyQyxNQUFNOzs7Ozs7O0lBeUJKLFlBQ0ksZ0JBQTRCLEVBQVMsZUFBZ0MsRUFBUyxNQUFzQixFQUM1RjtRQUQ2QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUM1RixRQUFHLEdBQUgsR0FBRzs0QkFsQmlCLElBQUk7MkJBRWIsS0FBSzt5QkFNTixFQUFFO3lCQU1ILEtBQUs7UUFNeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7UUFHL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFnQixFQUFFLEVB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QUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ2I7WUFFRCxHQUFHLENBQUMsQ0FBQyx1QkFBTSxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQztpQkFDYjthQUNGO1NBQ0Y7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDOzs7Ozs7Ozs7SUFTUCxjQUFjLENBQUMsS0FBWTtRQUNqQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7Ozs7OztJQUdILGlCQUFpQixDQUFDLEtBQVksS0FBVTs7Ozs7SUFFeEMsZ0JBQWdCLENBQUMsS0FBWSxLQUFVOzs7OztJQUV2QyxpQkFBaUIsQ0FBQyxLQUFZLEtBQVU7Ozs7O0lBRXhDLFlBQVksQ0FBQyxLQUFZLEtBQVU7Ozs7O0lBRW5DLGlCQUFpQixDQUFDLEtBQVksS0FBVTs7Ozs7SUFFeEMsZUFBZSxDQUFDLEtBQVksS0FBVTtDQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIFZpZXdSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZywgRHJhZ0ltYWdlfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZSc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfZHJhZ0hhbmRsZTogSFRNTEVsZW1lbnQ7XHJcbiAgZHJhZ0hlbHBlcjogSFRNTEVsZW1lbnQ7XHJcbiAgZGVmYXVsdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG5cclxuICBwcml2YXRlIF9kcmFnRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGRyb3BFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGVmZmVjdEFsbG93ZWQ6IHN0cmluZztcclxuXHJcbiAgZWZmZWN0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gIGRyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgYWxsb3dEcm9wOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgZHJhZ0ltYWdlOiBzdHJpbmd8RHJhZ0ltYWdlfEZ1bmN0aW9uO1xyXG5cclxuICBjbG9uZUl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsIHB1YmxpYyBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5kZWZhdWx0Q3Vyc29yID0gdGhpcy5jb25maWcuZGVmYXVsdEN1cnNvcjtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRSZWZlcmVuY2UubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSB0aGlzLmRlZmF1bHRDdXJzb3I7XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgZHJvcCBldmVudHNcclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdlbnRlciA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJhZ0VudGVyKGV2ZW50KTtcclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdsZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJhZ0xlYXZlKGV2ZW50KTtcclxuICAgIHRoaXMuZWxlbWVudC5vbmRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyb3AoZXZlbnQpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5kcmFnT3ZlcihldmVudCk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LmRhdGFUcmFuc2ZlcikpIHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuY29uZmlnLmRyb3BFZmZlY3QubmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSZWdpc3RlciBkcmFnIGV2ZW50c1xyXG4gICAgdGhpcy5lbGVtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnc3RhcnQgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0hhbmRsZSkpIHtcclxuICAgICAgICBpZiAodGhpcy5kcmFnSGFuZGxlLmNvbnRhaW5zKHRoaXMudGFyZ2V0IGFzIEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5kYXRhVHJhbnNmZXIpKSB7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0VuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RyYWdFbmFibGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0hhbmRsZSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0hhbmRsZTtcclxuICB9XHJcblxyXG4gIHNldCBkcmFnSGFuZGxlKHZhbHVlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5fZHJhZ0hhbmRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG1hbnVhbGx5IHRvIGZpeCBhbiBpc3N1ZSBpbiBTYWZhcmkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBkZXRlY3RDaGFuZ2VzKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNkciAmJiAhKHRoaXMuY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjUwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnRW50ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5wcmV2ZW50RGVmYXVsdCkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kcmFnT3ZlckNhbGxiYWNrKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnTGVhdmVDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcclxuXHJcbiAgICAgIHRoaXMuZHJvcENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSB0aGlzLmRyb3Bab25lcztcclxuICAgICAgdGhpcy5kcmFnU3RhcnRDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gW107XHJcbiAgICB0aGlzLmRyYWdFbmRDYWxsYmFjayhldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRHJvcEFsbG93ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpKSAmJiB0aGlzLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5hbGxvd0Ryb3ApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGRyb3Bab25lIG9mIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMuaW5kZXhPZihkcm9wWm9uZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUHJldmVudCB0aGUgZ2l2ZW4gZXZlbnRzIGRlZmF1bHQgYWN0aW9uIGZyb20gYmVpbmcgY2FsbGVkIGFuZCBzdG9wcyBpdCBmcm9tIGJlaW5nIHByb3BhZ2F0ZWQgZnVydGhlci5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBBYnN0cmFjdERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJldmVudEFuZFN0b3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcm9wQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdFbmRDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcbn1cclxuIl19