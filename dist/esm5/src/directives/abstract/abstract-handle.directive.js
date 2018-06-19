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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtaGFuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQTs7O0FBQUE7SUFHRSxpQ0FDSSxnQkFBNEIsRUFBUyxlQUFnQyxFQUFTLE1BQXNCLEVBQzVGLFdBQXNDLEdBQXNCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQzVGLGNBQVMsR0FBVCxTQUFTO1FBQTZCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDMUM7a0NBZEg7SUFlQyxDQUFBOzs7O0FBVEQsbUNBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtBYnN0cmFjdERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdC5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsIHB1YmxpYyBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIHByaXZhdGUgZGlyZWN0aXZlOiBBYnN0cmFjdERpcmVjdGl2ZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmZXJlbmNlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmRpcmVjdGl2ZS5kcmFnSGFuZGxlID0gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxufVxyXG4iXX0=