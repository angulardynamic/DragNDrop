import { Injectable, NgModule, ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, defineInjectable, inject } from '@angular/core';
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

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
            if (isPresent(event.dataTransfer)) ;
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
        this.dragDropService.isDragged = false;
        this.dragDropService.dragData = null;
        this.dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this.dragDropService.dragData);
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
                //   declarations: [
                //       DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent
                //   ],
                //   exports : [
                //        DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent
                //   ],
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

export { providers, DndModule, AbstractHandleDirective, AbstractDirective, DataTransferEffect, DragDropConfig, DragImage, DraggableHandleDirective, DraggableDirective, DroppableDirective, SortableContainerDirective, SortableHandleDirective, SortableDirective, DragDropConfig as ɵe, DragDropConfig as ɵa, DraggableDirective as ɵg, DraggableHandleDirective as ɵh, DroppableDirective as ɵi, SortableContainerDirective as ɵj, SortableDirective as ɵk, SortableHandleDirective as ɵl, DragDropSortableService as ɵd, dragDropSortableServiceFactory as ɵf, DragDropService as ɵb, dragDropServiceFactory as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRuZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RhdGEtdHJhbnNmZXItZWZmZWN0LnRzIiwibmc6Ly9uZzItZG5kL3NyYy9jb25maWcvZHJhZy1kcm9wLWNvbmZpZy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3AvZHJhZy1kcm9wLnNlcnZpY2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLmZhY3RvcnkudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvaXMtc3RyaW5nLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9jb25maWcvZHJhZy1pbWFnZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9pcy1wcmVzZW50LnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL3NvcnRhYmxlLWFycmF5LWhhbmRsZXIudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvc29ydGFibGUtZm9ybS1hcnJheS1oYW5kbGVyLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UuZmFjdG9yeS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2RyYWdnYWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtY29udGFpbmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuICAgIHN0YXRpYyBDT1BZID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnY29weScpO1xyXG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XHJcbiAgICBzdGF0aWMgTU9WRSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ21vdmUnKTtcclxuICAgIHN0YXRpYyBOT05FID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRyYW5zZmVyRWZmZWN0fSBmcm9tICcuL2RhdGEtdHJhbnNmZXItZWZmZWN0JztcclxuaW1wb3J0IHtEcmFnSW1hZ2V9IGZyb20gJy4vZHJhZy1pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctc3RhcnQnO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9ICdkbmQtZHJhZy1lbnRlcic7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctb3Zlcic7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gJ2RuZC1zb3J0YWJsZS1kcmFnJztcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gJ21vdmUnO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9ICdwb2ludGVyJztcclxufSIsImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgYWxsb3dlZERyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gIGRyYWdEYXRhOiBhbnk7XHJcbiAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWwvaXMtc3RyaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGltYWdlRWxlbWVudDogYW55LCBwdWJsaWMgeF9vZmZzZXQ6IG51bWJlciA9IDAsIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Njcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD50aGlzLmltYWdlRWxlbWVudCkuc3JjID0gaW1nU2NyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59IiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3Qgbm90IHVuZGVmaW5lZCBvciBudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVBcnJheUhhbmRsZXIge1xyXG4gIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhW2luZGV4XTtcclxuICB9XHJcblxyXG4gIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmluZGV4T2YoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyIHtcclxuICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5hdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzb3J0YWJsZURhdGEucmVtb3ZlQXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXN0IGVsZW1ldCB0aGF0IHdhcyBtYXJrZWQgc29ydGFibGUuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlO1xyXG5cclxuICBpc0RyYWdnZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgRHJhZ0Ryb3BDb25maWcuXHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IERyYWdEcm9wQ29uZmlnKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgdGhhdCB3YXMgbWFya2VkIHNvcnRhYmxlLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ25zIHRoZSBgb25Tb3J0YWJsZURyYWdDbGFzc2AgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZSBUaGUgZWxlbWVudCB0byBhc3NpZ24gdGhlIENTUyBjbGFzcyB0by5cclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBtYXJrU29ydGFibGUoZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ByZXNlbnQoZSkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IGU7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2RyYWctZHJvcC1jb25maWdcIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeShjb25maWc6IERyYWdEcm9wQ29uZmlnKTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UoY29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtBYnN0cmFjdERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdC5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsIHB1YmxpYyBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIHByaXZhdGUgZGlyZWN0aXZlOiBBYnN0cmFjdERpcmVjdGl2ZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmZXJlbmNlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmRpcmVjdGl2ZS5kcmFnSGFuZGxlID0gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vLi4vdXRpbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3REaXJlY3RpdmUge1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIFxyXG4gIHByaXZhdGUgX2RyYWdIYW5kbGU6IEhUTUxFbGVtZW50O1xyXG4gIGRyYWdIZWxwZXI6IEhUTUxFbGVtZW50O1xyXG4gIGRlZmF1bHRDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgdGFyZ2V0OiBFdmVudFRhcmdldDtcclxuXHJcbiAgcHJpdmF0ZSBfZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBkcm9wRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBlZmZlY3RBbGxvd2VkOiBzdHJpbmc7XHJcblxyXG4gIGVmZmVjdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICBkcm9wWm9uZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGFsbG93RHJvcDogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG4gIGRyYWdJbWFnZTogc3RyaW5nfERyYWdJbWFnZXxGdW5jdGlvbjtcclxuXHJcbiAgY2xvbmVJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBwdWJsaWMgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuZGVmYXVsdEN1cnNvciA9IHRoaXMuY29uZmlnLmRlZmF1bHRDdXJzb3I7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50UmVmZXJlbmNlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yID0gdGhpcy5kZWZhdWx0Q3Vyc29yO1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyb3AgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnZW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyYWdFbnRlcihldmVudCk7XHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnbGVhdmUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyYWdMZWF2ZShldmVudCk7XHJcbiAgICB0aGlzLmVsZW1lbnQub25kcm9wID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcm9wKGV2ZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnb3ZlciA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuZHJhZ092ZXIoZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5kYXRhVHJhbnNmZXIpKSB7XHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLmNvbmZpZy5kcm9wRWZmZWN0Lm5hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgZHJhZyBldmVudHNcclxuICAgIHRoaXMuZWxlbWVudC5vbm1vdXNlZG93biA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ3N0YXJ0ID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmRyYWdIYW5kbGUpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZS5jb250YWlucyh0aGlzLnRhcmdldCBhcyBFbGVtZW50KSkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRyYWdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kcmFnRW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdIYW5kbGUoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdIYW5kbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0hhbmRsZSh2YWx1ZTogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2RyYWdIYW5kbGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSdW4gY2hhbmdlIGRldGVjdGlvbiBtYW51YWxseSB0byBmaXggYW4gaXNzdWUgaW4gU2FmYXJpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIEFic3RyYWN0RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgZGV0ZWN0Q2hhbmdlcygpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZHIgJiYgISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDI1MCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnT3ZlcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQucHJldmVudERlZmF1bHQpKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZHJhZ092ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XHJcblxyXG4gICAgICB0aGlzLmRyb3BDYWxsYmFjayhldmVudCk7XHJcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnU3RhcnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gdGhpcy5kcm9wWm9uZXM7XHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnRW5kKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IFtdO1xyXG4gICAgdGhpcy5kcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICgodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkIHx8IChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKSkgJiYgdGhpcy5kcm9wRW5hYmxlZCkge1xyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuYWxsb3dEcm9wKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93RHJvcCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5sZW5ndGggPT09IDAgJiYgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBkcm9wWm9uZSBvZiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmluZGV4T2YoZHJvcFpvbmUpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXZlbnQgdGhlIGdpdmVuIGV2ZW50cyBkZWZhdWx0IGFjdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCBhbmQgc3RvcHMgaXQgZnJvbSBiZWluZyBwcm9wYWdhdGVkIGZ1cnRoZXIuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBwcml2YXRlIHByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2RyYWdFbmFibGVkJylcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuICBASW5wdXQoKSBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcbiAgQElucHV0KCkgY2xvbmVJdGVtOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZywgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yO1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmFnU3RhcnRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSB0aGlzLm9uRHJhZ1N1Y2Nlc3M7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vbkRyYWdTdGFydENsYXNzKTtcclxuICB9XHJcblxyXG4gIGRyYWdFbmRDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RIYW5kbGVEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5pbXBvcnQge0RyYWdnYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9kcmFnZ2FibGUuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtZHJhZ2dhYmxlLWhhbmRsZSd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgZGlyZWN0aXZlOiBEcmFnZ2FibGVEaXJlY3RpdmUsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBkaXJlY3RpdmUsIGNkcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyb3BwYWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2Ryb3BFbmFibGVkJylcclxuICBzZXQgZHJvcHBhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnYWxsb3dEcm9wJylcclxuICBzZXQgYWxsb3dkcm9wKHZhbHVlOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5hbGxvd0Ryb3AgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RBbGxvd2VkJylcclxuICBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0Q3Vyc29yJylcclxuICBzZXQgZWZmZWN0Y3Vyc29yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgb25Ecm9wU3VjY2VzczogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZixcclxuICAgICAgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsXHJcbiAgICAgIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNoYW5nZURldGVjdG9yKTtcclxuXHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoKHRoaXMuY29uZmlnLm9uRHJhZ092ZXJDbGFzcykpO1xyXG4gICAgICB0aGlzLm9uRHJhZ092ZXIuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoaXNQcmVzZW50KGRhdGFUcmFuc2ZlcikgJiYgaXNQcmVzZW50KGRhdGFUcmFuc2Zlci5maWxlcykpKSB7XHJcbiAgICAgIHRoaXMub25Ecm9wU3VjY2Vzcy5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykpIHtcclxuICAgICAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtTb3J0YWJsZUFycmF5SGFuZGxlciwgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWJzdHJhY3QvYWJzdHJhY3QuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1jb250YWluZXJdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2RyYWdFbmFibGVkJylcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkgPSBbXTtcclxuICBwcml2YXRlIHNvcnRhYmxlSGFuZGxlcjogU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfFNvcnRhYmxlQXJyYXlIYW5kbGVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzb3J0YWJsZURhdGEoc29ydGFibGVEYXRhOiBBcnJheTxhbnk+fEZvcm1BcnJheSkge1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhID0gc29ydGFibGVEYXRhO1xyXG4gICAgaWYgKHNvcnRhYmxlRGF0YSBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyID0gbmV3IFNvcnRhYmxlQXJyYXlIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2xsZWN0aW9uIGlzIGNoYW5nZWQsIGRyb3AgZW5hYmxlZDogXCIgKyB0aGlzLmRyb3BFbmFibGVkKTtcclxuICB9XHJcbiAgZ2V0IHNvcnRhYmxlRGF0YSgpOiBBcnJheTxhbnk+fEZvcm1BcnJheSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkcm9wWm9uZXMnKVxyXG4gIHNldCBkcm9wem9uZXModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAvLyBDaGVjayBkb2VzIGVsZW1lbnQgZXhpc3QgaW4gc29ydGFibGVEYXRhIG9mIHRoaXMgQ29udGFpbmVyXHJcbiAgICAgIGlmICh0aGlzLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgLy8gTGV0J3MgYWRkIGl0XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbnRhaW5lci5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleC50b1N0cmluZygpICsgJ11cclxuICAgICAgICAvLyBvdmVyIHBhcmVudCBub2RlJyk7IFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XHJcbiAgICAgICAgdGhpcy5pbnNlcnRJdGVtQXQoaXRlbSwgMCk7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgLy8gUmVmcmVzaCBjaGFuZ2VzIGluIHByb3BlcnRpZXMgb2YgY29udGFpbmVyIGNvbXBvbmVudFxyXG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlSGFuZGxlci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuaW5kZXhPZih0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGluc2VydEl0ZW1BdChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLmluc2VydEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0sIGluZGV4KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWJzdHJhY3QnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuL3NvcnRhYmxlLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggbm8tb3V0cHV0LXJlbmFtZSBuby1pbnB1dC1yZW5hbWUgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdzb3J0YWJsZUluZGV4JykgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3BFbmFibGVkJylcclxuICBzZXQgZHJvcHBhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRhIHRoYXQgaGFzIHRvIGJlIGRyYWdnZWQuIEl0IGNhbiBiZSBhbnkgSlMgb2JqZWN0XHJcbiAgICovXHJcbiAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgKi9cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9uIGVuZHMgd2l0aCBhIHZhbGlkIGRyb3AgYWN0aW9uLlxyXG4gICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgQE91dHB1dCgnb25EcmFnU3VjY2VzcycpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgnb25EcmFnU3RhcnQnKSBvbkRyYWdTdGFydENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJhZ092ZXInKSBvbkRyYWdPdmVyQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgnb25EcmFnRW5kJykgb25EcmFnRW5kQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgnb25Ecm9wU3VjY2VzcycpIG9uRHJvcFN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIF9zb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcFpvbmVzO1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdTdGFydENhbGxiYWNrLiBkcmFnZ2luZyBlbGVtIHdpdGggaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgLy8gQWRkIGRyYWdEYXRhXHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdTdGFydENhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgX29uRHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCAmJiB0aGlzLmVsZW1lbnQgIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuZWxlbWVudCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ092ZXJDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgICAgdGhpcy5vbkRyYWdPdmVyQ2FsbGJhY2suZW1pdCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ0VuZENhbGxiYWNrLiBlbmQgZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSBudWxsO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUobnVsbCk7XHJcbiAgICAvLyBBZGQgZHJhZ0dhdGFcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgIC8vXHJcbiAgICB0aGlzLm9uRHJhZ0VuZENhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgICAgaWYgKCh0aGlzLmluZGV4ICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KSB8fFxyXG4gICAgICAgICAgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhICE9PSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbXBvbmVudC5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5pbmRleCArICddIG92ZXIgbm9kZSBbJyArXHJcbiAgICAgICAgLy8gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCArICddJyk7IEdldCBpdGVtXHJcbiAgICAgICAgY29uc3QgaXRlbTogYW55ID0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSBwcmV2aW91c2UgbGlzdFxyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIucmVtb3ZlSXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBuZXcgbGlzdFxyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmluc2VydEl0ZW1BdChpdGVtLCB0aGlzLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQpIHtcclxuICAgICAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uRHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyb3BTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIHRoaXMub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uRHJvcENhbGxiYWNrLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5kcmFnRGF0YScsIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZW1pdCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gUmVmcmVzaCBjaGFuZ2VzIGluIHByb3BlcnRpZXMgb2YgY29udGFpbmVyIGNvbXBvbmVudFxyXG4gICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0SGFuZGxlRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0L2Fic3RyYWN0LWhhbmRsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1NvcnRhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3NvcnRhYmxlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3IgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlLWhhbmRsZV0nfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZywgX0NvbXBvbmVudDogU29ydGFibGVEaXJlY3RpdmUsXHJcbiAgICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBfQ29tcG9uZW50LCBjZHIpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RyYWctZHJvcC1jb25maWcnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vc2VydmljZS9kcmFnLWRyb3AvZHJhZy1kcm9wLnNlcnZpY2UuZmFjdG9yeSc7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVEaXJlY3RpdmUsIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSwgRHJvcHBhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSwgU29ydGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlc1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgRHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBEcm9wcGFibGVDb21wb25lbnQgfSBmcm9tICcuL2Ryb3BwYWJsZS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL2Fic3RyYWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25maWcnO1xyXG4vLyBleHBvcnQgKiBmcm9tICcuL2RyYWdnYWJsZS5jb21wb25lbnQnO1xyXG4vLyBleHBvcnQgKiBmcm9tICcuL2Ryb3BwYWJsZS5jb21wb25lbnQnO1xyXG4vLyBleHBvcnQgKiBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcyc7XHJcblxyXG5leHBvcnQgbGV0IHByb3ZpZGVycyA9IFtcclxuICAgIERyYWdEcm9wQ29uZmlnLFxyXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSxcclxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeSwgZGVwczogW0RyYWdEcm9wQ29uZmlnXSB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4vLyAgIGRlY2xhcmF0aW9uczogW1xyXG4vLyAgICAgICBEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCwgRHJvcHBhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50XHJcbi8vICAgXSxcclxuLy8gICBleHBvcnRzIDogW1xyXG4vLyAgICAgICAgRHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQsIERyb3BwYWJsZUNvbXBvbmVudCwgU29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudFxyXG4vLyAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBEcmFnZ2FibGVEaXJlY3RpdmUsIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSwgRHJvcHBhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSwgU29ydGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIERyYWdnYWJsZURpcmVjdGl2ZSwgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBTb3J0YWJsZURpcmVjdGl2ZSwgU29ydGFibGVIYW5kbGVEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEbmRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEbmRNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxu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