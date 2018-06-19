/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPresent } from '../../util';
/**
 * @abstract
 */
var /**
 * @abstract
 */
AbstractDirective = /** @class */ (function () {
    function AbstractDirective(elementReference, dragDropService, config, cdr) {
        var _this = this;
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
        this.element.ondragenter = function (event) { return _this.dragEnter(event); };
        this.element.ondragleave = function (event) { return _this.dragLeave(event); };
        this.element.ondrop = function (event) { return _this.drop(event); };
        this.element.ondragover = function (event) {
            _this.dragOver(event);
            if (isPresent(event.dataTransfer)) {
                event.dataTransfer.dropEffect = _this.config.dropEffect.name;
            }
            return false;
        };
        // Register drag events
        this.element.onmousedown = function (event) {
            _this.target = event.target;
        };
        this.element.ondragstart = function (event) {
            if (isPresent(_this.dragHandle)) {
                if (_this.dragHandle.contains(/** @type {?} */ (_this.target))) {
                    event.preventDefault();
                    return;
                }
            }
            _this.dragStart(event);
            if (isPresent(event.dataTransfer)) {
            }
        };
    }
    Object.defineProperty(AbstractDirective.prototype, "dragEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dragEnabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dragEnabled = value;
            this.element.draggable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractDirective.prototype, "dragHandle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dragHandle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dragHandle = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Run change detection manually to fix an issue in Safari.
     *
     * @memberof AbstractDirective
     */
    /**
     * Run change detection manually to fix an issue in Safari.
     *
     * \@memberof AbstractDirective
     * @return {?}
     */
    AbstractDirective.prototype.detectChanges = /**
     * Run change detection manually to fix an issue in Safari.
     *
     * \@memberof AbstractDirective
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.cdr && !(/** @type {?} */ (_this.cdr)).destroyed) {
                _this.cdr.detectChanges();
            }
        }, 250);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isDropAllowed(event)) {
            this.dragEnterCallback(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isDropAllowed(event)) {
            if (isPresent(event.preventDefault)) {
                event.preventDefault();
            }
        }
        this.dragOverCallback(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isDropAllowed(event)) {
            this.dragLeaveCallback(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isDropAllowed(event)) {
            this.preventAndStop(event);
            this.dropCallback(event);
            this.detectChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dragEnabled) {
            this.dragDropService.allowedDropZones = this.dropZones;
            this.dragStartCallback(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dragDropService.allowedDropZones = [];
        this.dragEndCallback(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.isDropAllowed = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((this.dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            if (isPresent(this.allowDrop)) {
                return this.allowDrop(this.dragDropService.dragData);
            }
            if (this.dropZones.length === 0 && this.dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            try {
                for (var _a = tslib_1.__values(this.dragDropService.allowedDropZones), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var dropZone = _b.value;
                    if (this.dropZones.indexOf(dropZone) !== -1) {
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return false;
        var e_1, _c;
    };
    /**
     * Prevent the given events default action from being called and stops it from being propagated further.
     *
     * \@memberof AbstractDirective
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.preventAndStop = /**
     * Prevent the given events default action from being called and stops it from being propagated further.
     *
     * \@memberof AbstractDirective
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragOverCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragLeaveCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dropCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragStartCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    AbstractDirective.prototype.dragEndCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    return AbstractDirective;
}());
/**
 * @abstract
 */
export { AbstractDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFFckM7OztBQUFBO0lBeUJFLDJCQUNJLGdCQUE0QixFQUFTLGVBQWdDLEVBQVMsTUFBc0IsRUFDNUY7UUFGWixpQkF5Q0M7UUF4Q3dDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQzVGLFFBQUcsR0FBSCxHQUFHOzRCQWxCaUIsSUFBSTsyQkFFYixLQUFLO3lCQU1OLEVBQUU7eUJBTUgsS0FBSztRQU14QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDOztRQUcvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQztRQUV6RCxJQUFJLENBQUMsT0FBTyxD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Q29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vLi4vdXRpbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3REaXJlY3RpdmUge1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIFxyXG4gIHByaXZhdGUgX2RyYWdIYW5kbGU6IEhUTUxFbGVtZW50O1xyXG4gIGRyYWdIZWxwZXI6IEhUTUxFbGVtZW50O1xyXG4gIGRlZmF1bHRDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgdGFyZ2V0OiBFdmVudFRhcmdldDtcclxuXHJcbiAgcHJpdmF0ZSBfZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBkcm9wRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBlZmZlY3RBbGxvd2VkOiBzdHJpbmc7XHJcblxyXG4gIGVmZmVjdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICBkcm9wWm9uZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGFsbG93RHJvcDogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG4gIGRyYWdJbWFnZTogc3RyaW5nfERyYWdJbWFnZXxGdW5jdGlvbjtcclxuXHJcbiAgY2xvbmVJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBwdWJsaWMgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuZGVmYXVsdEN1cnNvciA9IHRoaXMuY29uZmlnLmRlZmF1bHRDdXJzb3I7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmZXJlbmNlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yID0gdGhpcy5kZWZhdWx0Q3Vyc29yO1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyb3AgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnZW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyYWdFbnRlcihldmVudCk7XHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnbGVhdmUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyYWdMZWF2ZShldmVudCk7XHJcbiAgICB0aGlzLmVsZW1lbnQub25kcm9wID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcm9wKGV2ZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnb3ZlciA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZHJhZ092ZXIoZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5kYXRhVHJhbnNmZXIpKSB7XHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmNvbmZpZy5kcm9wRWZmZWN0Lm5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgZHJhZyBldmVudHNcclxuICAgIHRoaXMuZWxlbWVudC5vbm1vdXNlZG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ3N0YXJ0ID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmRyYWdIYW5kbGUpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZS5jb250YWlucyh0aGlzLnRhcmdldCBhcyBFbGVtZW50KSkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRyYWdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kcmFnRW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdIYW5kbGUoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdIYW5kbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0hhbmRsZSh2YWx1ZTogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2RyYWdIYW5kbGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSdW4gY2hhbmdlIGRldGVjdGlvbiBtYW51YWxseSB0byBmaXggYW4gaXNzdWUgaW4gU2FmYXJpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIEFic3RyYWN0RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgZGV0ZWN0Q2hhbmdlcygpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZHIgJiYgISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDI1MCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnT3ZlcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQucHJldmVudERlZmF1bHQpKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZHJhZ092ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XHJcblxyXG4gICAgICB0aGlzLmRyb3BDYWxsYmFjayhldmVudCk7XHJcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnU3RhcnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gdGhpcy5kcm9wWm9uZXM7XHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnRW5kKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IFtdO1xyXG4gICAgdGhpcy5kcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICgodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkIHx8IChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKSkgJiYgdGhpcy5kcm9wRW5hYmxlZCkge1xyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuYWxsb3dEcm9wKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93RHJvcCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5sZW5ndGggPT09IDAgJiYgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBkcm9wWm9uZSBvZiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmluZGV4T2YoZHJvcFpvbmUpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXZlbnQgdGhlIGdpdmVuIGV2ZW50cyBkZWZhdWx0IGFjdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCBhbmQgc3RvcHMgaXQgZnJvbSBiZWluZyBwcm9wYWdhdGVkIGZ1cnRoZXIuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBwcml2YXRlIHByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG59XHJcbiJdfQ==