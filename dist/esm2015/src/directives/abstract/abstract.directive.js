/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isPresent, isFunction, isString, createImage, callFunction } from '../../util';
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
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        this.defaultCursor = this.config.defaultCursor;
        this.element = elementReference.nativeElement;
        this.element.style.cursor = this.defaultCursor; // set default cursor on our element
        // Register drop events
        this.element.ondragenter = (event) => this.dragEnter(event);
        this.element.ondragover = (event) => {
            this.dragOver(event);
            if (isPresent(event.dataTransfer)) {
                event.dataTransfer.dropEffect = this.config.dropEffect.name;
            }
            return false;
        };
        this.element.ondragleave = (event) => this.dragLeave(event);
        this.element.ondrop = (event) => this.drop(event);
        // Register drag events
        this.element.onmousedown = (event) => {
            this.target = event.target;
        };
        this.element.ondragstart = (event) => {
            if (this.dragEnabled && isPresent(this.dragHandle)) {
                if (!this.dragHandle.contains(/** @type {?} */ (this.target))) {
                    event.preventDefault();
                    return;
                }
            }
            this.dragStart(event);
            if (isPresent(event.dataTransfer)) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = this.effectAllowed || this.config.dragEffect.name;
                // Change drag image
                if (isPresent(this.dragImage)) {
                    if (isString(this.dragImage)) {
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(createImage(/** @type {?} */ (this.dragImage)));
                    }
                    else if (isFunction(this.dragImage)) {
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(callFunction(/** @type {?} */ (this.dragImage)));
                    }
                    else {
                        let /** @type {?} */ img = /** @type {?} */ (this.dragImage);
                        (/** @type {?} */ (event.dataTransfer)).setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (isPresent(this.config.dragImage)) {
                    let /** @type {?} */ dragImage = this.config.dragImage;
                    (/** @type {?} */ (event.dataTransfer)).setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (this.cloneItem) {
                    this.dragHelper = /** @type {?} */ (this.element.cloneNode(true));
                    this.dragHelper.classList.add('dnd-drag-item');
                    this.dragHelper.style.position = "absolute";
                    this.dragHelper.style.top = "0px";
                    this.dragHelper.style.left = "-1000px";
                    this.element.parentElement.appendChild(this.dragHelper);
                    (/** @type {?} */ (event.dataTransfer)).setDragImage(this.dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                let /** @type {?} */ cursorelem = (this._dragHandle) ? this._dragHandle : this.element;
                if (this._dragEnabled) {
                    cursorelem.style.cursor = this.effectCursor ? this.effectCursor : this.config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = this.defaultCursor;
                }
            }
        };
        this.element.ondragend = (event) => {
            if (this.element.parentElement && this.dragHelper) {
                this.element.parentElement.removeChild(this.dragHelper);
            }
            // console.log('ondragend', event.target);
            this.dragEnd(event);
            // Restore style of dragged element
            let /** @type {?} */ cursorelem = (this._dragHandle) ? this._dragHandle : this.element;
            cursorelem.style.cursor = this.defaultCursor;
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
        // Programmatically run change detection to fix issue in Safari
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
            // The element is over the same source element - do nothing
            if (isPresent(event.preventDefault)) {
                event.preventDefault();
            }
            this.dragOverCallback(event);
        }
        // this.dragOverCallback(event);
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
            // Necessary. Allows us to drop.
            this.preventAndStop(event);
            this.dropCallback(event);
            this.detectChanges();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    isDropAllowed(event) {
        if ((this.dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (isPresent(this.allowDrop)) {
                return this.allowDrop(this.dragDropService.dragData);
            }
            // Otherwise, use dropZones if they are set.
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
    /**
     * Last element that was mousedown'ed
     * @type {?}
     */
    AbstractDirective.prototype.target;
    /**
     * Whether the object is draggable. Default is true.
     * @type {?}
     */
    AbstractDirective.prototype._dragEnabled;
    /**
     * Allows drop on this element
     * @type {?}
     */
    AbstractDirective.prototype.dropEnabled;
    /**
     * Drag effect
     * @type {?}
     */
    AbstractDirective.prototype.effectAllowed;
    /**
     * Drag cursor
     * @type {?}
     */
    AbstractDirective.prototype.effectCursor;
    /**
     * Restrict places where a draggable element can be dropped. Either one of
     * these two mechanisms can be used:
     *
     * - dropZones: an array of strings that permits to specify the drop zones
     *   associated with this component. By default, if the drop-zones attribute
     *   is not specified, the droppable component accepts drop operations by
     *   all the draggable components that do not specify the allowed-drop-zones
     *
     * - allowDrop: a boolean function for droppable components, that is checked
     *   when an item is dragged. The function is passed the dragData of this
     *   item.
     *   - if it returns true, the item can be dropped in this component
     *   - if it returns false, the item cannot be dropped here
     * @type {?}
     */
    AbstractDirective.prototype.allowDrop;
    /** @type {?} */
    AbstractDirective.prototype.dropZones;
    /**
     * Here is the property dragImage you can use:
     * - The string value as url to the image
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="/images/simpler.png">
     * ...
     * - The DragImage value with Image and optional offset by x and y:
     *   let myDragImage: DragImage = new DragImage("/images/simpler1.png", 0, 0);
     * ...
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="myDragImage">
     * ...
     * - The custom function to return the value of dragImage programmatically:
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="getDragImage(someData)">
     * ...
     *   getDragImage(value:any): string {
     *     return value ? "/images/simpler1.png" : "/images/simpler2.png"
     *   }
     * @type {?}
     */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFFdEYsTUFBTTs7Ozs7OztJQThFSixZQUNJLGdCQUE0QixFQUFTLGVBQWdDLEVBQVMsTUFBc0IsRUFDNUY7UUFENkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDNUYsUUFBRyxHQUFILEdBQUc7Ozs7NEJBakVpQixLQUFLOzs7OzJCQUtkLEtBQUs7eUJBNkJOLEVBQUU7eUJBMkJILEtBQUs7UUFNeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7UUFHL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEdB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QUFTLENBQUMsS0FBWTtRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUc5QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7Ozs7OztJQUdLLE9BQU8sQ0FBQyxLQUFZO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUU5QixpQkFBaUIsQ0FBQyxLQUFZLEtBQVU7Ozs7O0lBRXhDLGdCQUFnQixDQUFDLEtBQVksS0FBVTs7Ozs7SUFFdkMsaUJBQWlCLENBQUMsS0FBWSxLQUFVOzs7OztJQUV4QyxZQUFZLENBQUMsS0FBWSxLQUFVOzs7OztJQUVuQyxpQkFBaUIsQ0FBQyxLQUFZLEtBQVU7Ozs7O0lBRXhDLGVBQWUsQ0FBQyxLQUFZLEtBQVU7Q0FDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQge2lzUHJlc2VudCwgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGNyZWF0ZUltYWdlLCBjYWxsRnVuY3Rpb259IGZyb20gJy4uLy4uL3V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIF9kcmFnSGFuZGxlOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBkcmFnSGVscGVyOiBIVE1MRWxlbWVudDtcclxuICBkZWZhdWx0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXN0IGVsZW1lbnQgdGhhdCB3YXMgbW91c2Vkb3duJ2VkXHJcbiAgICAgKi9cclxuICB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgb2JqZWN0IGlzIGRyYWdnYWJsZS4gRGVmYXVsdCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgcHJpdmF0ZSBfZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBkcm9wIG9uIHRoaXMgZWxlbWVudFxyXG4gICAgICovXHJcbiAgZHJvcEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgZWZmZWN0XHJcbiAgICAgKi9cclxuICBlZmZlY3RBbGxvd2VkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGN1cnNvclxyXG4gICAgICovXHJcbiAgZWZmZWN0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0cmljdCBwbGFjZXMgd2hlcmUgYSBkcmFnZ2FibGUgZWxlbWVudCBjYW4gYmUgZHJvcHBlZC4gRWl0aGVyIG9uZSBvZlxyXG4gICAgICogdGhlc2UgdHdvIG1lY2hhbmlzbXMgY2FuIGJlIHVzZWQ6XHJcbiAgICAgKlxyXG4gICAgICogLSBkcm9wWm9uZXM6IGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBwZXJtaXRzIHRvIHNwZWNpZnkgdGhlIGRyb3Agem9uZXNcclxuICAgICAqICAgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29tcG9uZW50LiBCeSBkZWZhdWx0LCBpZiB0aGUgZHJvcC16b25lcyBhdHRyaWJ1dGVcclxuICAgICAqICAgaXMgbm90IHNwZWNpZmllZCwgdGhlIGRyb3BwYWJsZSBjb21wb25lbnQgYWNjZXB0cyBkcm9wIG9wZXJhdGlvbnMgYnlcclxuICAgICAqICAgYWxsIHRoZSBkcmFnZ2FibGUgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBzcGVjaWZ5IHRoZSBhbGxvd2VkLWRyb3Atem9uZXNcclxuICAgICAqXHJcbiAgICAgKiAtIGFsbG93RHJvcDogYSBib29sZWFuIGZ1bmN0aW9uIGZvciBkcm9wcGFibGUgY29tcG9uZW50cywgdGhhdCBpcyBjaGVja2VkXHJcbiAgICAgKiAgIHdoZW4gYW4gaXRlbSBpcyBkcmFnZ2VkLiBUaGUgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSBkcmFnRGF0YSBvZiB0aGlzXHJcbiAgICAgKiAgIGl0ZW0uXHJcbiAgICAgKiAgIC0gaWYgaXQgcmV0dXJucyB0cnVlLCB0aGUgaXRlbSBjYW4gYmUgZHJvcHBlZCBpbiB0aGlzIGNvbXBvbmVudFxyXG4gICAgICogICAtIGlmIGl0IHJldHVybnMgZmFsc2UsIHRoZSBpdGVtIGNhbm5vdCBiZSBkcm9wcGVkIGhlcmVcclxuICAgICAqL1xyXG4gIGFsbG93RHJvcDogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG4gIGRyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlcmUgaXMgdGhlIHByb3BlcnR5IGRyYWdJbWFnZSB5b3UgY2FuIHVzZTpcclxuICAgICAqIC0gVGhlIHN0cmluZyB2YWx1ZSBhcyB1cmwgdG8gdGhlIGltYWdlXHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIi9pbWFnZXMvc2ltcGxlci5wbmdcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgRHJhZ0ltYWdlIHZhbHVlIHdpdGggSW1hZ2UgYW5kIG9wdGlvbmFsIG9mZnNldCBieSB4IGFuZCB5OlxyXG4gICAgICogICBsZXQgbXlEcmFnSW1hZ2U6IERyYWdJbWFnZSA9IG5ldyBEcmFnSW1hZ2UoXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiLCAwLCAwKTtcclxuICAgICAqIC4uLlxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJteURyYWdJbWFnZVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAtIFRoZSBjdXN0b20gZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSB2YWx1ZSBvZiBkcmFnSW1hZ2UgcHJvZ3JhbW1hdGljYWxseTpcclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiZ2V0RHJhZ0ltYWdlKHNvbWVEYXRhKVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAgIGdldERyYWdJbWFnZSh2YWx1ZTphbnkpOiBzdHJpbmcge1xyXG4gICAgICogICAgIHJldHVybiB2YWx1ZSA/IFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiA6IFwiL2ltYWdlcy9zaW1wbGVyMi5wbmdcIlxyXG4gICAgICogICB9XHJcbiAgICAgKi9cclxuICBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcblxyXG4gIGNsb25lSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgcHVibGljIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmNvbmZpZy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuZGVmYXVsdEN1cnNvcjsgIC8vIHNldCBkZWZhdWx0IGN1cnNvciBvbiBvdXIgZWxlbWVudFxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyb3AgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnZW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyYWdFbnRlcihldmVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ292ZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYWdPdmVyKGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5jb25maWcuZHJvcEVmZmVjdC5uYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnTGVhdmUoZXZlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJvcCA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJvcChldmVudCk7XHJcblxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyYWcgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdzdGFydCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkICYmIGlzUHJlc2VudCh0aGlzLmRyYWdIYW5kbGUpKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRyYWdIYW5kbGUuY29udGFpbnModGhpcy50YXJnZXQgYXMgRWxlbWVudCkpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRyYWdTdGFydChldmVudCk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LmRhdGFUcmFuc2ZlcikpIHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICcnKTtcclxuICAgICAgICAvLyBDaGFuZ2UgZHJhZyBlZmZlY3RcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZWZmZWN0QWxsb3dlZCB8fCB0aGlzLmNvbmZpZy5kcmFnRWZmZWN0Lm5hbWU7XHJcbiAgICAgICAgLy8gQ2hhbmdlIGRyYWcgaW1hZ2VcclxuICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShjcmVhdGVJbWFnZSg8c3RyaW5nPnRoaXMuZHJhZ0ltYWdlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLmRyYWdJbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGNhbGxGdW5jdGlvbig8RnVuY3Rpb24+dGhpcy5kcmFnSW1hZ2UpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbWc6IERyYWdJbWFnZSA9IDxEcmFnSW1hZ2U+dGhpcy5kcmFnSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShpbWcuaW1hZ2VFbGVtZW50LCBpbWcueF9vZmZzZXQsIGltZy55X29mZnNldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGlzUHJlc2VudCh0aGlzLmNvbmZpZy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgIGxldCBkcmFnSW1hZ2U6IERyYWdJbWFnZSA9IHRoaXMuY29uZmlnLmRyYWdJbWFnZTtcclxuICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLmltYWdlRWxlbWVudCwgZHJhZ0ltYWdlLnhfb2Zmc2V0LCBkcmFnSW1hZ2UueV9vZmZzZXQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbG9uZUl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnSGVscGVyID0gPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0hlbHBlci5jbGFzc0xpc3QuYWRkKCdkbmQtZHJhZy1pdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0hlbHBlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgdGhpcy5kcmFnSGVscGVyLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0hlbHBlci5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJhZ0hlbHBlcik7XHJcbiAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKHRoaXMuZHJhZ0hlbHBlciwgZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgZHJhZyBjdXJzb3JcclxuICAgICAgICBsZXQgY3Vyc29yZWxlbSA9ICh0aGlzLl9kcmFnSGFuZGxlKSA/IHRoaXMuX2RyYWdIYW5kbGUgOiB0aGlzLmVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuZWZmZWN0Q3Vyc29yID8gdGhpcy5lZmZlY3RDdXJzb3IgOiB0aGlzLmNvbmZpZy5kcmFnQ3Vyc29yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnZW5kID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCAmJiB0aGlzLmRyYWdIZWxwZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kcmFnSGVscGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VuZCcsIGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5kKGV2ZW50KTtcclxuICAgICAgICAvLyBSZXN0b3JlIHN0eWxlIG9mIGRyYWdnZWQgZWxlbWVudFxyXG4gICAgICAgIGxldCBjdXJzb3JlbGVtID0gKHRoaXMuX2RyYWdIYW5kbGUpID8gdGhpcy5fZHJhZ0hhbmRsZSA6IHRoaXMuZWxlbWVudDtcclxuICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuZGVmYXVsdEN1cnNvcjtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0VuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RyYWdFbmFibGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0hhbmRsZSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0hhbmRsZTtcclxuICB9XHJcblxyXG4gIHNldCBkcmFnSGFuZGxlKHZhbHVlOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5fZHJhZ0hhbmRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUnVuIGNoYW5nZSBkZXRlY3Rpb24gbWFudWFsbHkgdG8gZml4IGFuIGlzc3VlIGluIFNhZmFyaS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBBYnN0cmFjdERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICAgICAgLy8gUHJvZ3JhbW1hdGljYWxseSBydW4gY2hhbmdlIGRldGVjdGlvbiB0byBmaXggaXNzdWUgaW4gU2FmYXJpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RyICYmICEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyNTApO1xyXG4gIH1cclxuXHJcbiAgICAvLyoqKioqKiBEcm9wcGFibGUgKioqKioqKi8vXHJcbiAgcHJpdmF0ZSBkcmFnRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLmRyYWdFbnRlckNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ092ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBpcyBvdmVyIHRoZSBzYW1lIHNvdXJjZSBlbGVtZW50IC0gZG8gbm90aGluZ1xyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LnByZXZlbnREZWZhdWx0KSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZHJhZ092ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5kcmFnT3ZlckNhbGxiYWNrKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnTGVhdmVDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXHJcbiAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJvcENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEcm9wQWxsb3dlZChldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykpICYmIHRoaXMuZHJvcEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gRmlyc3QsIGlmIGBhbGxvd0Ryb3BgIGlzIHNldCwgY2FsbCBpdCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGVcclxuICAgICAgICAgICAgLy8gZHJhZ2dlZCBlbGVtZW50IGNhbiBiZSBkcm9wcGVkIGhlcmUuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5hbGxvd0Ryb3ApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgZHJvcFpvbmVzIGlmIHRoZXkgYXJlIHNldC5cclxuICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGRyb3Bab25lIG9mIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMuaW5kZXhPZihkcm9wWm9uZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUHJldmVudCB0aGUgZ2l2ZW4gZXZlbnRzIGRlZmF1bHQgYWN0aW9uIGZyb20gYmVpbmcgY2FsbGVkIGFuZCBzdG9wcyBpdCBmcm9tIGJlaW5nIHByb3BhZ2F0ZWQgZnVydGhlci5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBBYnN0cmFjdERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJldmVudEFuZFN0b3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IHRoaXMuZHJvcFpvbmVzO1xyXG4gICAgICB0aGlzLmRyYWdTdGFydENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZpeGVkIGRyYWdEYXRhIG9mIG5lc3RlZCBkcmFnZ2FibGUgZWxlbWVudC5cclxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gW107XHJcbiAgICB0aGlzLmRyYWdFbmRDYWxsYmFjayhldmVudCk7XHJcbiAgfVxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG59XHJcbiJdfQ==