/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
AbstractHandleDirective = /** @class */ (function () {
    function AbstractHandleDirective(elementReference, dragDropService, config, directive, cdr) {
        this.dragDropService = dragDropService;
        this.config = config;
        this.directive = directive;
        this.cdr = cdr;
        this.element = elementReference.nativeElement;
        this.directive.dragHandle = this.element;
    }
    /**
     * @return {?}
     */
    AbstractHandleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.directive.dragHandle = undefined;
    };
    return AbstractHandleDirective;
}());
/**
 * @abstract
 */
export { AbstractHandleDirective };
function AbstractHandleDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    AbstractHandleDirective.prototype.element;
    /** @type {?} */
    AbstractHandleDirective.prototype.dragDropService;
    /** @type {?} */
    AbstractHandleDirective.prototype.config;
    /** @type {?} */
    AbstractHandleDirective.prototype.directive;
    /** @type {?} */
    AbstractHandleDirective.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtaGFuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQTs7O0FBQUE7SUFHRSxpQ0FDSSxnQkFBNEIsRUFBUyxlQUFnQyxFQUFTLE1BQXNCLEVBQzVGLFdBQXNDLEdBQXNCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQzVGLGNBQVMsR0FBVCxTQUFTO1FBQTZCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRXRFLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDMUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7S0FDdkM7a0NBbkJIO0lBb0JDLENBQUE7Ozs7QUFkRCxtQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9hYnN0cmFjdC5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsIHB1YmxpYyBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIHByaXZhdGUgZGlyZWN0aXZlOiBBYnN0cmFjdERpcmVjdGl2ZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmZXJlbmNlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmRpcmVjdGl2ZS5kcmFnSGFuZGxlID0gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRpcmVjdGl2ZS5kcmFnSGFuZGxlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iXX0=