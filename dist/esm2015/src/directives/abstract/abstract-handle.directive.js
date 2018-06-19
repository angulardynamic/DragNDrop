/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
export class AbstractHandleDirective {
    /**
     * @param {?} elementReference
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} directive
     * @param {?} cdr
     */
    constructor(elementReference, dragDropService, config, directive, cdr) {
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
    ngOnDestroy() {
        this.directive.dragHandle = undefined;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtaGFuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxNQUFNOzs7Ozs7OztJQUdKLFlBQ0ksZ0JBQTRCLEVBQVMsZUFBZ0MsRUFBUyxNQUFzQixFQUM1RixXQUFzQyxHQUFzQjtRQUQvQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUM1RixjQUFTLEdBQVQsU0FBUztRQUE2QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUV0RSxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQzFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztLQUN2QztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWJzdHJhY3REaXJlY3RpdmUgfSBmcm9tICcuL2Fic3RyYWN0LmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RIYW5kbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgcHVibGljIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBkaXJlY3RpdmU6IEFic3RyYWN0RGlyZWN0aXZlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRSZWZlcmVuY2UubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZGlyZWN0aXZlLmRyYWdIYW5kbGUgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGlyZWN0aXZlLmRyYWdIYW5kbGUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==