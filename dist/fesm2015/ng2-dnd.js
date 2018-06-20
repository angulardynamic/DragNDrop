import { Injectable, NgModule, ChangeDetectorRef, Directive, ElementRef, Input, EventEmitter, Output, defineInjectable, inject } from '@angular/core';
import { FormArray } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DataTransferEffect {
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
    }
}
DataTransferEffect.COPY = new DataTransferEffect('copy');
DataTransferEffect.LINK = new DataTransferEffect('link');
DataTransferEffect.MOVE = new DataTransferEffect('move');
DataTransferEffect.NONE = new DataTransferEffect('none');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragDropConfig {
    constructor() {
        this.onDragStartClass = 'dnd-drag-start';
        this.onDragEnterClass = 'dnd-drag-enter';
        this.onDragOverClass = 'dnd-drag-over';
        this.onSortableDragClass = 'dnd-sortable-drag';
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = 'move';
        this.defaultCursor = 'pointer';
    }
}
DragDropConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ DragDropConfig.ngInjectableDef = defineInjectable({ factory: function DragDropConfig_Factory() { return new DragDropConfig(); }, token: DragDropConfig, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragDropService {
    constructor() {
        this.allowedDropZones = [];
    }
}
DragDropService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ DragDropService.ngInjectableDef = defineInjectable({ factory: function DragDropService_Factory() { return new DragDropService(); }, token: DragDropService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function dragDropServiceFactory() {
    return new DragDropService();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Check and return true if an object is type of string
 * @param {?} obj
 * @return {?}
 */
function isString(obj) {
    return typeof obj === 'string';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragImage {
    /**
     * @param {?} imageElement
     * @param {?=} x_offset
     * @param {?=} y_offset
     */
    constructor(imageElement, x_offset = 0, y_offset = 0) {
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (isString(this.imageElement)) {
            // Create real image from string source
            const /** @type {?} */ imgScr = /** @type {?} */ (this.imageElement);
            this.imageElement = new HTMLImageElement();
            (/** @type {?} */ (this.imageElement)).src = imgScr;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Call the function
 * @template T
 * @param {?} fn
 * @param {...?} args
 * @return {?}
 */
function callFunction(fn, ...args) {
    return fn(args);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Create Image element with specified url string
 * @param {?} src
 * @return {?}
 */
function createImage(src) {
    const /** @type {?} */ img = new HTMLImageElement();
    img.src = src;
    return img;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Check and return true if an object is type of Function
 * @param {?} obj
 * @return {?}
 */
function isFunction(obj) {
    return typeof obj === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Check and return true if an object not undefined or null
 * @param {?} obj
 * @return {?}
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SortableArrayHandler {
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    getItemAt(sortableData, index) {
        return sortableData[index];
    }
    /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    indexOf(sortableData, item) {
        return sortableData.indexOf(item);
    }
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    removeItemAt(sortableData, index) {
        sortableData.splice(index, 1);
    }
    /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    insertItemAt(sortableData, item, index) {
        sortableData.splice(index, 0, item);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SortableFormArrayHandler {
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    getItemAt(sortableData, index) {
        return sortableData.at(index);
    }
    /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    indexOf(sortableData, item) {
        return sortableData.controls.indexOf(item);
    }
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    removeItemAt(sortableData, index) {
        sortableData.removeAt(index);
    }
    /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    insertItemAt(sortableData, item, index) {
        sortableData.insert(index, item);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragDropSortableService {
    /**
     * Creates an instance of DragDropSortableService.
     * \@memberof DragDropSortableService
     * @param {?} config The DragDropConfig.
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * Gets the last element that was marked sortable.
     *
     * \@readonly
     * \@memberof DragDropSortableService
     * @return {?}
     */
    get element() {
        return this._element;
    }
    /**
     * Assigns the `onSortableDragClass` to the given element.
     *
     * \@memberof DragDropSortableService
     * @param {?} e The element to assign the CSS class to.
     * @return {?}
     */
    markSortable(e) {
        if (isPresent(this._element)) {
            this._element.classList.remove(this.config.onSortableDragClass);
        }
        if (isPresent(e)) {
            this._element = e;
            this._element.classList.add(this.config.onSortableDragClass);
        }
    }
}
DragDropSortableService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
DragDropSortableService.ctorParameters = () => [
    { type: DragDropConfig }
];
/** @nocollapse */ DragDropSortableService.ngInjectableDef = defineInjectable({ factory: function DragDropSortableService_Factory() { return new DragDropSortableService(inject(DragDropConfig)); }, token: DragDropSortableService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class AbstractHandleDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class AbstractDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DraggableDirective extends AbstractDirective {
    /**
     * @param {?} elementReference
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} cdr
     */
    constructor(elementReference, dragDropService, config, cdr) {
        super(elementReference, dragDropService, config, cdr);
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragSuccess = new EventEmitter();
        this.defaultCursor = this.element.style.cursor;
        this.dragEnabled = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set draggable(value) {
        this.dragEnabled = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropzones(value) {
        this.dropZones = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set effectallowed(value) {
        this.effectAllowed = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set effectcursor(value) {
        this.effectCursor = value;
    }
    /**
     * @return {?}
     */
    dragStartCallback() {
        this.dragDropService.isDragged = true;
        this.dragDropService.dragData = this.dragData;
        this.dragDropService.onDragSuccessCallback = this.onDragSuccess;
        this.element.classList.add(this.config.onDragStartClass);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEndCallback(event) {
        this.dragDropService.isDragged = false;
        this.dragDropService.dragData = null;
        this.dragDropService.onDragSuccessCallback = null;
        this.element.classList.remove(this.config.onDragStartClass);
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-draggable]' },] },
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: ChangeDetectorRef }
];
DraggableDirective.propDecorators = {
    draggable: [{ type: Input, args: ['dragEnabled',] }],
    dropzones: [{ type: Input, args: ['dropZones',] }],
    effectallowed: [{ type: Input, args: ['effectAllowed',] }],
    effectcursor: [{ type: Input, args: ['effectCursor',] }],
    dragData: [{ type: Input }],
    dragImage: [{ type: Input }],
    cloneItem: [{ type: Input }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }],
    onDragSuccess: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DraggableHandleDirective extends AbstractHandleDirective {
    /**
     * @param {?} elementReference
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} directive
     * @param {?} cdr
     */
    constructor(elementReference, dragDropService, config, directive, cdr) {
        super(elementReference, dragDropService, config, directive, cdr);
    }
}
DraggableHandleDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-draggable-handle' },] },
];
/** @nocollapse */
DraggableHandleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: DraggableDirective },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DroppableDirective extends AbstractDirective {
    /**
     * @param {?} elementReference
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} changeDetector
     */
    constructor(elementReference, dragDropService, config, changeDetector) {
        super(elementReference, dragDropService, config, changeDetector);
        this.onDropSuccess = new EventEmitter();
        this.onDragEnter = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDragLeave = new EventEmitter();
        this.dropEnabled = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set droppable(value) {
        this.dropEnabled = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set allowdrop(value) {
        this.allowDrop = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropzones(value) {
        this.dropZones = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set effectallowed(value) {
        this.effectAllowed = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set effectcursor(value) {
        this.effectCursor = value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnterCallback(event) {
        if (this.dragDropService.isDragged) {
            this.element.classList.add(this.config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragOverCallback(event) {
        if (this.dragDropService.isDragged) {
            this.element.classList.add((this.config.onDragOverClass));
            this.onDragOver.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragLeaveCallback(event) {
        if (this.dragDropService.isDragged) {
            this.element.classList.remove(this.config.onDragOverClass);
            this.element.classList.remove(this.config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropCallback(event) {
        const /** @type {?} */ dataTransfer = (/** @type {?} */ (event)).dataTransfer;
        if (this.dragDropService.isDragged || (isPresent(dataTransfer) && isPresent(dataTransfer.files))) {
            this.onDropSuccess.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
            if (isPresent(this.dragDropService.onDragSuccessCallback)) {
                this.dragDropService.onDragSuccessCallback.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
            }
            this.element.classList.remove(this.config.onDragOverClass);
            this.element.classList.remove(this.config.onDragEnterClass);
        }
    }
}
DroppableDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-droppable]' },] },
];
/** @nocollapse */
DroppableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: ChangeDetectorRef }
];
DroppableDirective.propDecorators = {
    droppable: [{ type: Input, args: ['dropEnabled',] }],
    allowdrop: [{ type: Input, args: ['allowDrop',] }],
    dropzones: [{ type: Input, args: ['dropZones',] }],
    effectallowed: [{ type: Input, args: ['effectAllowed',] }],
    effectcursor: [{ type: Input, args: ['effectCursor',] }],
    onDropSuccess: [{ type: Output }],
    onDragEnter: [{ type: Output }],
    onDragOver: [{ type: Output }],
    onDragLeave: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SortableContainerDirective extends AbstractDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SortableDirective extends AbstractDirective {
    /**
     * @param {?} elemRef
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} _sortableContainer
     * @param {?} _sortableDataService
     * @param {?} cdr
     */
    constructor(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        super(elemRef, dragDropService, config, cdr);
        this._sortableContainer = _sortableContainer;
        this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        this.onDragSuccessCallback = new EventEmitter();
        this.onDragStartCallback = new EventEmitter();
        this.onDragOverCallback = new EventEmitter();
        this.onDragEndCallback = new EventEmitter();
        this.onDropSuccessCallback = new EventEmitter();
        this.dropZones = this._sortableContainer.dropZones;
        this.dragEnabled = true;
        this.dropEnabled = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set draggable(value) {
        this.dragEnabled = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set droppable(value) {
        this.dropEnabled = !!value;
    }
    /**
     * Drag allowed effect
     * @param {?} value
     * @return {?}
     */
    set effectallowed(value) {
        this.effectAllowed = value;
    }
    /**
     * Drag effect cursor
     * @param {?} value
     * @return {?}
     */
    set effectcursor(value) {
        this.effectCursor = value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragStartCallback(event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this.element);
        // Add dragData
        this.dragDropService.isDragged = true;
        this.dragDropService.dragData = this.dragData;
        this.dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this.dragDropService.dragData);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragOverCallback(event) {
        if (this._sortableDataService.isDragged && this.element !== this._sortableDataService.element) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this.element);
            this.onDragOverCallback.emit(this.dragDropService.dragData);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragEndCallback(event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        //Fix drag end callback to emit dragData
        const /** @type {?} */ dragData = this.dragDropService.dragData;
        this.dragDropService.isDragged = false;
        this.dragDropService.dragData = null;
        this.dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(dragData);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDragEnterCallback(event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this.element);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' +
                // this._sortableDataService.index + ']'); Get item
                const /** @type {?} */ item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.insertItemAt(item, this.index);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
                this.detectChanges();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onDropCallback(event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this.dragDropService.dragData);
            this.onDropSuccessCallback.emit(this.dragDropService.dragData);
            if (this.dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this.dragDropService.dragData);
                this.dragDropService.onDragSuccessCallback.emit(this.dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    }
}
SortableDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-sortable]' },] },
];
/** @nocollapse */
SortableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: SortableContainerDirective },
    { type: DragDropSortableService },
    { type: ChangeDetectorRef }
];
SortableDirective.propDecorators = {
    index: [{ type: Input, args: ['sortableIndex',] }],
    draggable: [{ type: Input, args: ['dragEnabled',] }],
    droppable: [{ type: Input, args: ['dropEnabled',] }],
    dragData: [{ type: Input }],
    effectallowed: [{ type: Input, args: ['effectAllowed',] }],
    effectcursor: [{ type: Input, args: ['effectCursor',] }],
    onDragSuccessCallback: [{ type: Output, args: ['onDragSuccess',] }],
    onDragStartCallback: [{ type: Output, args: ['onDragStart',] }],
    onDragOverCallback: [{ type: Output, args: ['onDragOver',] }],
    onDragEndCallback: [{ type: Output, args: ['onDragEnd',] }],
    onDropSuccessCallback: [{ type: Output, args: ['onDropSuccess',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SortableHandleDirective extends AbstractHandleDirective {
    /**
     * @param {?} elemRef
     * @param {?} dragDropService
     * @param {?} config
     * @param {?} _Component
     * @param {?} cdr
     */
    constructor(elemRef, dragDropService, config, _Component, cdr) {
        super(elemRef, dragDropService, config, _Component, cdr);
    }
}
SortableHandleDirective.decorators = [
    { type: Directive, args: [{ selector: '[dnd-sortable-handle]' },] },
];
/** @nocollapse */
SortableHandleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDropService },
    { type: DragDropConfig },
    { type: SortableDirective },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let /** @type {?} */ providers = [
    DragDropConfig,
    { provide: DragDropService, useFactory: dragDropServiceFactory },
    { provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig] }
];
class DndModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DndModule,
            providers: providers
        };
    }
}
DndModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective, SortableHandleDirective
                ],
                exports: [
                    DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective, SortableHandleDirective
                ],
                entryComponents: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { providers, DndModule, DataTransferEffect, DragDropConfig, DragImage, DraggableHandleDirective, DraggableDirective, DroppableDirective, SortableContainerDirective, SortableHandleDirective, SortableDirective, AbstractHandleDirective, AbstractDirective, DragDropSortableService, dragDropSortableServiceFactory, DragDropService, dragDropServiceFactory, DragDropConfig as ɵe, DragDropConfig as ɵa, DraggableDirective as ɵg, DraggableHandleDirective as ɵh, DroppableDirective as ɵi, SortableContainerDirective as ɵj, SortableDirective as ɵk, SortableHandleDirective as ɵl, DragDropSortableService as ɵd, dragDropSortableServiceFactory as ɵf, DragDropService as ɵb, dragDropServiceFactory as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRuZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RhdGEtdHJhbnNmZXItZWZmZWN0LnRzIiwibmc6Ly9uZzItZG5kL3NyYy9jb25maWcvZHJhZy1kcm9wLWNvbmZpZy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3AvZHJhZy1kcm9wLnNlcnZpY2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLmZhY3RvcnkudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvaXMtc3RyaW5nLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9jb25maWcvZHJhZy1pbWFnZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9jYWxsLWZ1bmN0aW9uLnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL2NyZWF0ZS1pbWFnZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9pcy1mdW5jdGlvbi50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9pcy1wcmVzZW50LnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL3NvcnRhYmxlLWFycmF5LWhhbmRsZXIudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvc29ydGFibGUtZm9ybS1hcnJheS1oYW5kbGVyLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UuZmFjdG9yeS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2RyYWdnYWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtY29udGFpbmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuICAgIHN0YXRpYyBDT1BZID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnY29weScpO1xyXG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XHJcbiAgICBzdGF0aWMgTU9WRSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ21vdmUnKTtcclxuICAgIHN0YXRpYyBOT05FID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRyYW5zZmVyRWZmZWN0fSBmcm9tICcuL2RhdGEtdHJhbnNmZXItZWZmZWN0JztcclxuaW1wb3J0IHtEcmFnSW1hZ2V9IGZyb20gJy4vZHJhZy1pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctc3RhcnQnO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9ICdkbmQtZHJhZy1lbnRlcic7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctb3Zlcic7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gJ2RuZC1zb3J0YWJsZS1kcmFnJztcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gJ21vdmUnO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9ICdwb2ludGVyJztcclxufSIsImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgYWxsb3dlZERyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gIGRyYWdEYXRhOiBhbnk7XHJcbiAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWwvaXMtc3RyaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGltYWdlRWxlbWVudDogYW55LCBwdWJsaWMgeF9vZmZzZXQ6IG51bWJlciA9IDAsIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Njcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD50aGlzLmltYWdlRWxlbWVudCkuc3JjID0gaW1nU2NyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59IiwiLyoqXHJcbiAqIENhbGwgdGhlIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsbEZ1bmN0aW9uPFQ+KGZuOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gIHJldHVybiBmbihhcmdzKTtcclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlIEltYWdlIGVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgdXJsIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYzogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgY29uc3QgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICBpbWcuc3JjID0gc3JjO1xyXG4gIHJldHVybiBpbWc7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBGdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG4iLCIvKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBub3QgdW5kZWZpbmVkIG9yIG51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ByZXNlbnQob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTb3J0YWJsZUFycmF5SGFuZGxlciB7XHJcbiAgZ2V0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiBzb3J0YWJsZURhdGFbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgaW5kZXhPZihzb3J0YWJsZURhdGE6IGFueSwgaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzb3J0YWJsZURhdGEuaW5kZXhPZihpdGVtKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc29ydGFibGVEYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc29ydGFibGVEYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIge1xyXG4gIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmF0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmNvbnRyb2xzLmluZGV4T2YoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5yZW1vdmVBdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc29ydGFibGVEYXRhLmluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcclxuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL3V0aWwnO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxhc3QgZWxlbWV0IHRoYXQgd2FzIG1hcmtlZCBzb3J0YWJsZS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBpbmRleDogbnVtYmVyO1xyXG5cclxuICBzb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXJEaXJlY3RpdmU7XHJcblxyXG4gIGlzRHJhZ2dlZDogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZS5cclxuICAgKiBAcGFyYW0gY29uZmlnIFRoZSBEcmFnRHJvcENvbmZpZy5cclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCB0aGF0IHdhcyBtYXJrZWQgc29ydGFibGUuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzc2lnbnMgdGhlIGBvblNvcnRhYmxlRHJhZ0NsYXNzYCB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlIFRoZSBlbGVtZW50IHRvIGFzc2lnbiB0aGUgQ1NTIGNsYXNzIHRvLlxyXG4gICAqIEBtZW1iZXJvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZVxyXG4gICAqL1xyXG4gIG1hcmtTb3J0YWJsZShlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9lbGVtZW50KSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25Tb3J0YWJsZURyYWdDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzUHJlc2VudChlKSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZTtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEcmFnRHJvcENvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZHJhZy1kcm9wLWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5KGNvbmZpZzogRHJhZ0Ryb3BDb25maWcpOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSAge1xyXG4gICAgcmV0dXJuIG5ldyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZShjb25maWcpO1xyXG59XHJcbiIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9hYnN0cmFjdC5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsIHB1YmxpYyBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIHByaXZhdGUgZGlyZWN0aXZlOiBBYnN0cmFjdERpcmVjdGl2ZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmZXJlbmNlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmRpcmVjdGl2ZS5kcmFnSGFuZGxlID0gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRpcmVjdGl2ZS5kcmFnSGFuZGxlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQge2lzUHJlc2VudCwgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGNyZWF0ZUltYWdlLCBjYWxsRnVuY3Rpb259IGZyb20gJy4uLy4uL3V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIF9kcmFnSGFuZGxlOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBkcmFnSGVscGVyOiBIVE1MRWxlbWVudDtcclxuICBkZWZhdWx0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXN0IGVsZW1lbnQgdGhhdCB3YXMgbW91c2Vkb3duJ2VkXHJcbiAgICAgKi9cclxuICB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgb2JqZWN0IGlzIGRyYWdnYWJsZS4gRGVmYXVsdCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgcHJpdmF0ZSBfZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBkcm9wIG9uIHRoaXMgZWxlbWVudFxyXG4gICAgICovXHJcbiAgZHJvcEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgZWZmZWN0XHJcbiAgICAgKi9cclxuICBlZmZlY3RBbGxvd2VkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGN1cnNvclxyXG4gICAgICovXHJcbiAgZWZmZWN0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0cmljdCBwbGFjZXMgd2hlcmUgYSBkcmFnZ2FibGUgZWxlbWVudCBjYW4gYmUgZHJvcHBlZC4gRWl0aGVyIG9uZSBvZlxyXG4gICAgICogdGhlc2UgdHdvIG1lY2hhbmlzbXMgY2FuIGJlIHVzZWQ6XHJcbiAgICAgKlxyXG4gICAgICogLSBkcm9wWm9uZXM6IGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBwZXJtaXRzIHRvIHNwZWNpZnkgdGhlIGRyb3Agem9uZXNcclxuICAgICAqICAgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29tcG9uZW50LiBCeSBkZWZhdWx0LCBpZiB0aGUgZHJvcC16b25lcyBhdHRyaWJ1dGVcclxuICAgICAqICAgaXMgbm90IHNwZWNpZmllZCwgdGhlIGRyb3BwYWJsZSBjb21wb25lbnQgYWNjZXB0cyBkcm9wIG9wZXJhdGlvbnMgYnlcclxuICAgICAqICAgYWxsIHRoZSBkcmFnZ2FibGUgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBzcGVjaWZ5IHRoZSBhbGxvd2VkLWRyb3Atem9uZXNcclxuICAgICAqXHJcbiAgICAgKiAtIGFsbG93RHJvcDogYSBib29sZWFuIGZ1bmN0aW9uIGZvciBkcm9wcGFibGUgY29tcG9uZW50cywgdGhhdCBpcyBjaGVja2VkXHJcbiAgICAgKiAgIHdoZW4gYW4gaXRlbSBpcyBkcmFnZ2VkLiBUaGUgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSBkcmFnRGF0YSBvZiB0aGlzXHJcbiAgICAgKiAgIGl0ZW0uXHJcbiAgICAgKiAgIC0gaWYgaXQgcmV0dXJucyB0cnVlLCB0aGUgaXRlbSBjYW4gYmUgZHJvcHBlZCBpbiB0aGlzIGNvbXBvbmVudFxyXG4gICAgICogICAtIGlmIGl0IHJldHVybnMgZmFsc2UsIHRoZSBpdGVtIGNhbm5vdCBiZSBkcm9wcGVkIGhlcmVcclxuICAgICAqL1xyXG4gIGFsbG93RHJvcDogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG4gIGRyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlcmUgaXMgdGhlIHByb3BlcnR5IGRyYWdJbWFnZSB5b3UgY2FuIHVzZTpcclxuICAgICAqIC0gVGhlIHN0cmluZyB2YWx1ZSBhcyB1cmwgdG8gdGhlIGltYWdlXHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIi9pbWFnZXMvc2ltcGxlci5wbmdcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgRHJhZ0ltYWdlIHZhbHVlIHdpdGggSW1hZ2UgYW5kIG9wdGlvbmFsIG9mZnNldCBieSB4IGFuZCB5OlxyXG4gICAgICogICBsZXQgbXlEcmFnSW1hZ2U6IERyYWdJbWFnZSA9IG5ldyBEcmFnSW1hZ2UoXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiLCAwLCAwKTtcclxuICAgICAqIC4uLlxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJteURyYWdJbWFnZVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAtIFRoZSBjdXN0b20gZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSB2YWx1ZSBvZiBkcmFnSW1hZ2UgcHJvZ3JhbW1hdGljYWxseTpcclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiZ2V0RHJhZ0ltYWdlKHNvbWVEYXRhKVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAgIGdldERyYWdJbWFnZSh2YWx1ZTphbnkpOiBzdHJpbmcge1xyXG4gICAgICogICAgIHJldHVybiB2YWx1ZSA/IFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiA6IFwiL2ltYWdlcy9zaW1wbGVyMi5wbmdcIlxyXG4gICAgICogICB9XHJcbiAgICAgKi9cclxuICBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcblxyXG4gIGNsb25lSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgcHVibGljIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmNvbmZpZy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuZGVmYXVsdEN1cnNvcjsgIC8vIHNldCBkZWZhdWx0IGN1cnNvciBvbiBvdXIgZWxlbWVudFxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyb3AgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnZW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyYWdFbnRlcihldmVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ292ZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYWdPdmVyKGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5jb25maWcuZHJvcEVmZmVjdC5uYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnTGVhdmUoZXZlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJvcCA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJvcChldmVudCk7XHJcblxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyYWcgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdzdGFydCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkICYmIGlzUHJlc2VudCh0aGlzLmRyYWdIYW5kbGUpKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRyYWdIYW5kbGUuY29udGFpbnModGhpcy50YXJnZXQgYXMgRWxlbWVudCkpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRyYWdTdGFydChldmVudCk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LmRhdGFUcmFuc2ZlcikpIHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICcnKTtcclxuICAgICAgICAvLyBDaGFuZ2UgZHJhZyBlZmZlY3RcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IHRoaXMuZWZmZWN0QWxsb3dlZCB8fCB0aGlzLmNvbmZpZy5kcmFnRWZmZWN0Lm5hbWU7XHJcbiAgICAgICAgLy8gQ2hhbmdlIGRyYWcgaW1hZ2VcclxuICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShjcmVhdGVJbWFnZSg8c3RyaW5nPnRoaXMuZHJhZ0ltYWdlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLmRyYWdJbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGNhbGxGdW5jdGlvbig8RnVuY3Rpb24+dGhpcy5kcmFnSW1hZ2UpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbWc6IERyYWdJbWFnZSA9IDxEcmFnSW1hZ2U+dGhpcy5kcmFnSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShpbWcuaW1hZ2VFbGVtZW50LCBpbWcueF9vZmZzZXQsIGltZy55X29mZnNldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGlzUHJlc2VudCh0aGlzLmNvbmZpZy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgIGxldCBkcmFnSW1hZ2U6IERyYWdJbWFnZSA9IHRoaXMuY29uZmlnLmRyYWdJbWFnZTtcclxuICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoZHJhZ0ltYWdlLmltYWdlRWxlbWVudCwgZHJhZ0ltYWdlLnhfb2Zmc2V0LCBkcmFnSW1hZ2UueV9vZmZzZXQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbG9uZUl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnSGVscGVyID0gPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0hlbHBlci5jbGFzc0xpc3QuYWRkKCdkbmQtZHJhZy1pdGVtJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0hlbHBlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgdGhpcy5kcmFnSGVscGVyLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0hlbHBlci5zdHlsZS5sZWZ0ID0gXCItMTAwMHB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJhZ0hlbHBlcik7XHJcbiAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKHRoaXMuZHJhZ0hlbHBlciwgZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgZHJhZyBjdXJzb3JcclxuICAgICAgICBsZXQgY3Vyc29yZWxlbSA9ICh0aGlzLl9kcmFnSGFuZGxlKSA/IHRoaXMuX2RyYWdIYW5kbGUgOiB0aGlzLmVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuZWZmZWN0Q3Vyc29yID8gdGhpcy5lZmZlY3RDdXJzb3IgOiB0aGlzLmNvbmZpZy5kcmFnQ3Vyc29yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnZW5kID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCAmJiB0aGlzLmRyYWdIZWxwZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kcmFnSGVscGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VuZCcsIGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5kKGV2ZW50KTtcclxuICAgICAgICAvLyBSZXN0b3JlIHN0eWxlIG9mIGRyYWdnZWQgZWxlbWVudFxyXG4gICAgICAgIGxldCBjdXJzb3JlbGVtID0gKHRoaXMuX2RyYWdIYW5kbGUpID8gdGhpcy5fZHJhZ0hhbmRsZSA6IHRoaXMuZWxlbWVudDtcclxuICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuZGVmYXVsdEN1cnNvcjtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0VuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2RyYWdFbmFibGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJhZ0hhbmRsZSgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ0hhbmRsZTtcclxuICB9XHJcblxyXG4gIHNldCBkcmFnSGFuZGxlKHZhbHVlOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5fZHJhZ0hhbmRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUnVuIGNoYW5nZSBkZXRlY3Rpb24gbWFudWFsbHkgdG8gZml4IGFuIGlzc3VlIGluIFNhZmFyaS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBBYnN0cmFjdERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICAgICAgLy8gUHJvZ3JhbW1hdGljYWxseSBydW4gY2hhbmdlIGRldGVjdGlvbiB0byBmaXggaXNzdWUgaW4gU2FmYXJpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RyICYmICEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyNTApO1xyXG4gIH1cclxuXHJcbiAgICAvLyoqKioqKiBEcm9wcGFibGUgKioqKioqKi8vXHJcbiAgcHJpdmF0ZSBkcmFnRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLmRyYWdFbnRlckNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ092ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBpcyBvdmVyIHRoZSBzYW1lIHNvdXJjZSBlbGVtZW50IC0gZG8gbm90aGluZ1xyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LnByZXZlbnREZWZhdWx0KSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZHJhZ092ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5kcmFnT3ZlckNhbGxiYWNrKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnTGVhdmVDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXHJcbiAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJvcENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEcm9wQWxsb3dlZChldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykpICYmIHRoaXMuZHJvcEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gRmlyc3QsIGlmIGBhbGxvd0Ryb3BgIGlzIHNldCwgY2FsbCBpdCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGVcclxuICAgICAgICAgICAgLy8gZHJhZ2dlZCBlbGVtZW50IGNhbiBiZSBkcm9wcGVkIGhlcmUuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5hbGxvd0Ryb3ApKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgZHJvcFpvbmVzIGlmIHRoZXkgYXJlIHNldC5cclxuICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGRyb3Bab25lIG9mIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMuaW5kZXhPZihkcm9wWm9uZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUHJldmVudCB0aGUgZ2l2ZW4gZXZlbnRzIGRlZmF1bHQgYWN0aW9uIGZyb20gYmVpbmcgY2FsbGVkIGFuZCBzdG9wcyBpdCBmcm9tIGJlaW5nIHByb3BhZ2F0ZWQgZnVydGhlci5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBBYnN0cmFjdERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJldmVudEFuZFN0b3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IHRoaXMuZHJvcFpvbmVzO1xyXG4gICAgICB0aGlzLmRyYWdTdGFydENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEZpeGVkIGRyYWdEYXRhIG9mIG5lc3RlZCBkcmFnZ2FibGUgZWxlbWVudC5cclxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gW107XHJcbiAgICB0aGlzLmRyYWdFbmRDYWxsYmFjayhldmVudCk7XHJcbiAgfVxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2RyYWdFbmFibGVkJylcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuICBASW5wdXQoKSBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcbiAgQElucHV0KCkgY2xvbmVJdGVtOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZywgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yO1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmFnU3RhcnRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSB0aGlzLm9uRHJhZ1N1Y2Nlc3M7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vbkRyYWdTdGFydENsYXNzKTtcclxuICB9XHJcblxyXG4gIGRyYWdFbmRDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RIYW5kbGVEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5pbXBvcnQge0RyYWdnYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9kcmFnZ2FibGUuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtZHJhZ2dhYmxlLWhhbmRsZSd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgZGlyZWN0aXZlOiBEcmFnZ2FibGVEaXJlY3RpdmUsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBkaXJlY3RpdmUsIGNkcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyb3BwYWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2Ryb3BFbmFibGVkJylcclxuICBzZXQgZHJvcHBhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnYWxsb3dEcm9wJylcclxuICBzZXQgYWxsb3dkcm9wKHZhbHVlOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5hbGxvd0Ryb3AgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RBbGxvd2VkJylcclxuICBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0Q3Vyc29yJylcclxuICBzZXQgZWZmZWN0Y3Vyc29yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgb25Ecm9wU3VjY2VzczogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZixcclxuICAgICAgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsXHJcbiAgICAgIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNoYW5nZURldGVjdG9yKTtcclxuXHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoKHRoaXMuY29uZmlnLm9uRHJhZ092ZXJDbGFzcykpO1xyXG4gICAgICB0aGlzLm9uRHJhZ092ZXIuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoaXNQcmVzZW50KGRhdGFUcmFuc2ZlcikgJiYgaXNQcmVzZW50KGRhdGFUcmFuc2Zlci5maWxlcykpKSB7XHJcbiAgICAgIHRoaXMub25Ecm9wU3VjY2Vzcy5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykpIHtcclxuICAgICAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtTb3J0YWJsZUFycmF5SGFuZGxlciwgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWJzdHJhY3QvYWJzdHJhY3QuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1jb250YWluZXJdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2RyYWdFbmFibGVkJylcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkgPSBbXTtcclxuICBwcml2YXRlIHNvcnRhYmxlSGFuZGxlcjogU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfFNvcnRhYmxlQXJyYXlIYW5kbGVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzb3J0YWJsZURhdGEoc29ydGFibGVEYXRhOiBBcnJheTxhbnk+fEZvcm1BcnJheSkge1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhID0gc29ydGFibGVEYXRhO1xyXG4gICAgaWYgKHNvcnRhYmxlRGF0YSBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyID0gbmV3IFNvcnRhYmxlQXJyYXlIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2xsZWN0aW9uIGlzIGNoYW5nZWQsIGRyb3AgZW5hYmxlZDogXCIgKyB0aGlzLmRyb3BFbmFibGVkKTtcclxuICB9XHJcbiAgZ2V0IHNvcnRhYmxlRGF0YSgpOiBBcnJheTxhbnk+fEZvcm1BcnJheSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkcm9wWm9uZXMnKVxyXG4gIHNldCBkcm9wem9uZXModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAvLyBDaGVjayBkb2VzIGVsZW1lbnQgZXhpc3QgaW4gc29ydGFibGVEYXRhIG9mIHRoaXMgQ29udGFpbmVyXHJcbiAgICAgIGlmICh0aGlzLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgLy8gTGV0J3MgYWRkIGl0XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbnRhaW5lci5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleC50b1N0cmluZygpICsgJ11cclxuICAgICAgICAvLyBvdmVyIHBhcmVudCBub2RlJyk7IFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XHJcbiAgICAgICAgdGhpcy5pbnNlcnRJdGVtQXQoaXRlbSwgMCk7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgLy8gUmVmcmVzaCBjaGFuZ2VzIGluIHByb3BlcnRpZXMgb2YgY29udGFpbmVyIGNvbXBvbmVudFxyXG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlSGFuZGxlci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuaW5kZXhPZih0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGluc2VydEl0ZW1BdChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLmluc2VydEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0sIGluZGV4KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWJzdHJhY3QnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuL3NvcnRhYmxlLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggbm8tb3V0cHV0LXJlbmFtZSBuby1pbnB1dC1yZW5hbWUgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdzb3J0YWJsZUluZGV4JykgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3BFbmFibGVkJylcclxuICBzZXQgZHJvcHBhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRhIHRoYXQgaGFzIHRvIGJlIGRyYWdnZWQuIEl0IGNhbiBiZSBhbnkgSlMgb2JqZWN0XHJcbiAgICovXHJcbiAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgKi9cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9uIGVuZHMgd2l0aCBhIHZhbGlkIGRyb3AgYWN0aW9uLlxyXG4gICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgQE91dHB1dCgnb25EcmFnU3VjY2VzcycpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgnb25EcmFnU3RhcnQnKSBvbkRyYWdTdGFydENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJhZ092ZXInKSBvbkRyYWdPdmVyQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgnb25EcmFnRW5kJykgb25EcmFnRW5kQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgnb25Ecm9wU3VjY2VzcycpIG9uRHJvcFN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIF9zb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcFpvbmVzO1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdTdGFydENhbGxiYWNrLiBkcmFnZ2luZyBlbGVtIHdpdGggaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgLy8gQWRkIGRyYWdEYXRhXHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdTdGFydENhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgX29uRHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCAmJiB0aGlzLmVsZW1lbnQgIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuZWxlbWVudCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ092ZXJDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgICAgdGhpcy5vbkRyYWdPdmVyQ2FsbGJhY2suZW1pdCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ0VuZENhbGxiYWNrLiBlbmQgZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSBudWxsO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUobnVsbCk7XHJcbiAgICAvLyBBZGQgZHJhZ0dhdGFcclxuICAgIC8vRml4IGRyYWcgZW5kIGNhbGxiYWNrIHRvIGVtaXQgZHJhZ0RhdGFcclxuICAgIGNvbnN0IGRyYWdEYXRhID0gdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGE7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdFbmRDYWxsYmFjay5lbWl0KGRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIGlmICgodGhpcy5pbmRleCAhPT0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCkgfHxcclxuICAgICAgICAgICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSAhPT0gdGhpcy5fc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuaW5kZXggKyAnXSBvdmVyIG5vZGUgWycgK1xyXG4gICAgICAgIC8vIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggKyAnXScpOyBHZXQgaXRlbVxyXG4gICAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5pbnNlcnRJdGVtQXQoaXRlbSwgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbkRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTb3J0YWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1oYW5kbGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIF9Db21wb25lbnQ6IFNvcnRhYmxlRGlyZWN0aXZlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgX0NvbXBvbmVudCwgY2RyKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kcmFnLWRyb3AtY29uZmlnJztcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZSc7XHJcbmltcG9ydCB7IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLmZhY3RvcnknO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZS5mYWN0b3J5JztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXNcIjtcclxuXHJcbi8vIGltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgRHJvcHBhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL2Fic3RyYWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBsZXQgcHJvdmlkZXJzID0gW1xyXG4gICAgRHJhZ0Ryb3BDb25maWcsXHJcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSB9LFxyXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbRHJhZ0Ryb3BDb25maWddIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBEcmFnZ2FibGVEaXJlY3RpdmUsIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSwgRHJvcHBhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSwgU29ydGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIERyYWdnYWJsZURpcmVjdGl2ZSwgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBTb3J0YWJsZURpcmVjdGl2ZSwgU29ydGFibGVIYW5kbGVEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEbmRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEbmRNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBTUksWUFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7S0FBSzs7MEJBTHRCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDOzBCQUM5QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzswQkFDOUIsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7MEJBQzlCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUNKaEQ7O2dDQU9zQyxnQkFBZ0I7Z0NBQ2hCLGdCQUFnQjsrQkFDakIsZUFBZTttQ0FDWCxtQkFBbUI7MEJBRWhCLGtCQUFrQixDQUFDLElBQUk7MEJBQ3ZCLGtCQUFrQixDQUFDLElBQUk7MEJBQ25DLE1BQU07NkJBRUgsU0FBUzs7OztZQVgzQyxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7Ozs7OztBQ0xoQzs7Z0NBSytCLEVBQUU7Ozs7WUFGaEMsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7Ozs7QUNIaEM7OztBQUVBO0lBQ0ksT0FBTyxJQUFJLGVBQWUsRUFBRSxDQUFDO0NBQ2hDOzs7Ozs7Ozs7OztBQ0RELGtCQUF5QixHQUFRO0lBQy9CLE9BQU8sT0FBTyxH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