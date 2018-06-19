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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRuZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RhdGEtdHJhbnNmZXItZWZmZWN0LnRzIiwibmc6Ly9uZzItZG5kL3NyYy9jb25maWcvZHJhZy1kcm9wLWNvbmZpZy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3AvZHJhZy1kcm9wLnNlcnZpY2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLmZhY3RvcnkudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvaXMtc3RyaW5nLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9jb25maWcvZHJhZy1pbWFnZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9pcy1wcmVzZW50LnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL3NvcnRhYmxlLWFycmF5LWhhbmRsZXIudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvc29ydGFibGUtZm9ybS1hcnJheS1oYW5kbGVyLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UuZmFjdG9yeS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2RyYWdnYWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtY29udGFpbmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuICAgIHN0YXRpYyBDT1BZID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnY29weScpO1xyXG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XHJcbiAgICBzdGF0aWMgTU9WRSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ21vdmUnKTtcclxuICAgIHN0YXRpYyBOT05FID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRyYW5zZmVyRWZmZWN0fSBmcm9tICcuL2RhdGEtdHJhbnNmZXItZWZmZWN0JztcclxuaW1wb3J0IHtEcmFnSW1hZ2V9IGZyb20gJy4vZHJhZy1pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctc3RhcnQnO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9ICdkbmQtZHJhZy1lbnRlcic7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctb3Zlcic7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gJ2RuZC1zb3J0YWJsZS1kcmFnJztcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gJ21vdmUnO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9ICdwb2ludGVyJztcclxufSIsImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgYWxsb3dlZERyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gIGRyYWdEYXRhOiBhbnk7XHJcbiAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWwvaXMtc3RyaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGltYWdlRWxlbWVudDogYW55LCBwdWJsaWMgeF9vZmZzZXQ6IG51bWJlciA9IDAsIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Njcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD50aGlzLmltYWdlRWxlbWVudCkuc3JjID0gaW1nU2NyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59IiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3Qgbm90IHVuZGVmaW5lZCBvciBudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVBcnJheUhhbmRsZXIge1xyXG4gIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhW2luZGV4XTtcclxuICB9XHJcblxyXG4gIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmluZGV4T2YoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyIHtcclxuICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5hdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzb3J0YWJsZURhdGEucmVtb3ZlQXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXN0IGVsZW1ldCB0aGF0IHdhcyBtYXJrZWQgc29ydGFibGUuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlO1xyXG5cclxuICBpc0RyYWdnZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgRHJhZ0Ryb3BDb25maWcuXHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IERyYWdEcm9wQ29uZmlnKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgdGhhdCB3YXMgbWFya2VkIHNvcnRhYmxlLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ25zIHRoZSBgb25Tb3J0YWJsZURyYWdDbGFzc2AgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZSBUaGUgZWxlbWVudCB0byBhc3NpZ24gdGhlIENTUyBjbGFzcyB0by5cclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBtYXJrU29ydGFibGUoZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ByZXNlbnQoZSkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IGU7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2RyYWctZHJvcC1jb25maWdcIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeShjb25maWc6IERyYWdEcm9wQ29uZmlnKTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UoY29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdERpcmVjdGl2ZSB9IGZyb20gJy4vYWJzdHJhY3QuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBwdWJsaWMgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIGRpcmVjdGl2ZTogQWJzdHJhY3REaXJlY3RpdmUsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5kaXJlY3RpdmUuZHJhZ0hhbmRsZSA9IHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kaXJlY3RpdmUuZHJhZ0hhbmRsZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgVmlld1JlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL3V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIF9kcmFnSGFuZGxlOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBkcmFnSGVscGVyOiBIVE1MRWxlbWVudDtcclxuICBkZWZhdWx0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gIHRhcmdldDogRXZlbnRUYXJnZXQ7XHJcblxyXG4gIHByaXZhdGUgX2RyYWdFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgZHJvcEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xyXG5cclxuICBlZmZlY3RDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgZHJvcFpvbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xyXG5cclxuICBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcblxyXG4gIGNsb25lSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgcHVibGljIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmNvbmZpZy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuZGVmYXVsdEN1cnNvcjtcclxuXHJcbiAgICAvLyBSZWdpc3RlciBkcm9wIGV2ZW50c1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2VudGVyID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnRW50ZXIoZXZlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnTGVhdmUoZXZlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJvcCA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJvcChldmVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ292ZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYWdPdmVyKGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5jb25maWcuZHJvcEVmZmVjdC5uYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyYWcgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdzdGFydCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkICYmIGlzUHJlc2VudCh0aGlzLmRyYWdIYW5kbGUpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZS5jb250YWlucyh0aGlzLnRhcmdldCBhcyBFbGVtZW50KSkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRyYWdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kcmFnRW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdIYW5kbGUoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdIYW5kbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0hhbmRsZSh2YWx1ZTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuX2RyYWdIYW5kbGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG1hbnVhbGx5IHRvIGZpeCBhbiBpc3N1ZSBpbiBTYWZhcmkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBkZXRlY3RDaGFuZ2VzKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNkciAmJiAhKHRoaXMuY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjUwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnRW50ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5wcmV2ZW50RGVmYXVsdCkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kcmFnT3ZlckNhbGxiYWNrKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnTGVhdmVDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcclxuXHJcbiAgICAgIHRoaXMuZHJvcENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSB0aGlzLmRyb3Bab25lcztcclxuICAgICAgdGhpcy5kcmFnU3RhcnRDYWxsYmFjayhldmVudCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBGaXhlZCBkcmFnRGF0YSBvZiBuZXN0ZWQgZHJhZ2dhYmxlIGVsZW1lbnQuXHJcbiAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnRW5kKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IFtdO1xyXG4gICAgdGhpcy5kcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICgodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkIHx8IChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKSkgJiYgdGhpcy5kcm9wRW5hYmxlZCkge1xyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuYWxsb3dEcm9wKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93RHJvcCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5sZW5ndGggPT09IDAgJiYgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBkcm9wWm9uZSBvZiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmluZGV4T2YoZHJvcFpvbmUpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXZlbnQgdGhlIGdpdmVuIGV2ZW50cyBkZWZhdWx0IGFjdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCBhbmQgc3RvcHMgaXQgZnJvbSBiZWluZyBwcm9wYWdhdGVkIGZ1cnRoZXIuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBwcml2YXRlIHByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2RyYWdFbmFibGVkJylcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuICBASW5wdXQoKSBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcbiAgQElucHV0KCkgY2xvbmVJdGVtOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZywgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yO1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmFnU3RhcnRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSB0aGlzLm9uRHJhZ1N1Y2Nlc3M7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vbkRyYWdTdGFydENsYXNzKTtcclxuICB9XHJcblxyXG4gIGRyYWdFbmRDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RIYW5kbGVEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5pbXBvcnQge0RyYWdnYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9kcmFnZ2FibGUuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtZHJhZ2dhYmxlLWhhbmRsZSd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgZGlyZWN0aXZlOiBEcmFnZ2FibGVEaXJlY3RpdmUsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBkaXJlY3RpdmUsIGNkcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyb3BwYWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2Ryb3BFbmFibGVkJylcclxuICBzZXQgZHJvcHBhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnYWxsb3dEcm9wJylcclxuICBzZXQgYWxsb3dkcm9wKHZhbHVlOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5hbGxvd0Ryb3AgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RBbGxvd2VkJylcclxuICBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0Q3Vyc29yJylcclxuICBzZXQgZWZmZWN0Y3Vyc29yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgb25Ecm9wU3VjY2VzczogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZixcclxuICAgICAgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsXHJcbiAgICAgIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNoYW5nZURldGVjdG9yKTtcclxuXHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoKHRoaXMuY29uZmlnLm9uRHJhZ092ZXJDbGFzcykpO1xyXG4gICAgICB0aGlzLm9uRHJhZ092ZXIuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoaXNQcmVzZW50KGRhdGFUcmFuc2ZlcikgJiYgaXNQcmVzZW50KGRhdGFUcmFuc2Zlci5maWxlcykpKSB7XHJcbiAgICAgIHRoaXMub25Ecm9wU3VjY2Vzcy5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykpIHtcclxuICAgICAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtTb3J0YWJsZUFycmF5SGFuZGxlciwgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWJzdHJhY3QvYWJzdHJhY3QuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1jb250YWluZXJdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2RyYWdFbmFibGVkJylcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkgPSBbXTtcclxuICBwcml2YXRlIHNvcnRhYmxlSGFuZGxlcjogU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfFNvcnRhYmxlQXJyYXlIYW5kbGVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzb3J0YWJsZURhdGEoc29ydGFibGVEYXRhOiBBcnJheTxhbnk+fEZvcm1BcnJheSkge1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhID0gc29ydGFibGVEYXRhO1xyXG4gICAgaWYgKHNvcnRhYmxlRGF0YSBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyID0gbmV3IFNvcnRhYmxlQXJyYXlIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2xsZWN0aW9uIGlzIGNoYW5nZWQsIGRyb3AgZW5hYmxlZDogXCIgKyB0aGlzLmRyb3BFbmFibGVkKTtcclxuICB9XHJcbiAgZ2V0IHNvcnRhYmxlRGF0YSgpOiBBcnJheTxhbnk+fEZvcm1BcnJheSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkcm9wWm9uZXMnKVxyXG4gIHNldCBkcm9wem9uZXModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAvLyBDaGVjayBkb2VzIGVsZW1lbnQgZXhpc3QgaW4gc29ydGFibGVEYXRhIG9mIHRoaXMgQ29udGFpbmVyXHJcbiAgICAgIGlmICh0aGlzLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgLy8gTGV0J3MgYWRkIGl0XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbnRhaW5lci5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleC50b1N0cmluZygpICsgJ11cclxuICAgICAgICAvLyBvdmVyIHBhcmVudCBub2RlJyk7IFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XHJcbiAgICAgICAgdGhpcy5pbnNlcnRJdGVtQXQoaXRlbSwgMCk7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgLy8gUmVmcmVzaCBjaGFuZ2VzIGluIHByb3BlcnRpZXMgb2YgY29udGFpbmVyIGNvbXBvbmVudFxyXG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlSGFuZGxlci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuaW5kZXhPZih0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGluc2VydEl0ZW1BdChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLmluc2VydEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0sIGluZGV4KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWJzdHJhY3QnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuL3NvcnRhYmxlLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggbm8tb3V0cHV0LXJlbmFtZSBuby1pbnB1dC1yZW5hbWUgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdzb3J0YWJsZUluZGV4JykgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3BFbmFibGVkJylcclxuICBzZXQgZHJvcHBhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRhIHRoYXQgaGFzIHRvIGJlIGRyYWdnZWQuIEl0IGNhbiBiZSBhbnkgSlMgb2JqZWN0XHJcbiAgICovXHJcbiAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgKi9cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9uIGVuZHMgd2l0aCBhIHZhbGlkIGRyb3AgYWN0aW9uLlxyXG4gICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgQE91dHB1dCgnb25EcmFnU3VjY2VzcycpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgnb25EcmFnU3RhcnQnKSBvbkRyYWdTdGFydENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJhZ092ZXInKSBvbkRyYWdPdmVyQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgnb25EcmFnRW5kJykgb25EcmFnRW5kQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgnb25Ecm9wU3VjY2VzcycpIG9uRHJvcFN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIF9zb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcFpvbmVzO1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdTdGFydENhbGxiYWNrLiBkcmFnZ2luZyBlbGVtIHdpdGggaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgLy8gQWRkIGRyYWdEYXRhXHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdTdGFydENhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgX29uRHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCAmJiB0aGlzLmVsZW1lbnQgIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuZWxlbWVudCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ092ZXJDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgICAgdGhpcy5vbkRyYWdPdmVyQ2FsbGJhY2suZW1pdCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ0VuZENhbGxiYWNrLiBlbmQgZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSBudWxsO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUobnVsbCk7XHJcbiAgICAvLyBBZGQgZHJhZ0dhdGFcclxuICAgIC8vRml4IGRyYWcgZW5kIGNhbGxiYWNrIHRvIGVtaXQgZHJhZ0RhdGFcclxuICAgIGNvbnN0IGRyYWdEYXRhID0gdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGE7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdFbmRDYWxsYmFjay5lbWl0KGRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIGlmICgodGhpcy5pbmRleCAhPT0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCkgfHxcclxuICAgICAgICAgICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSAhPT0gdGhpcy5fc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuaW5kZXggKyAnXSBvdmVyIG5vZGUgWycgK1xyXG4gICAgICAgIC8vIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggKyAnXScpOyBHZXQgaXRlbVxyXG4gICAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5pbnNlcnRJdGVtQXQoaXRlbSwgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbkRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTb3J0YWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1oYW5kbGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIF9Db21wb25lbnQ6IFNvcnRhYmxlRGlyZWN0aXZlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgX0NvbXBvbmVudCwgY2RyKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kcmFnLWRyb3AtY29uZmlnJztcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZSc7XHJcbmltcG9ydCB7IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLmZhY3RvcnknO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZS5mYWN0b3J5JztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXNcIjtcclxuXHJcbi8vIGltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgRHJvcHBhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9hYnN0cmFjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnJztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMnO1xyXG5cclxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbXHJcbiAgICBEcmFnRHJvcENvbmZpZyxcclxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5IH0sXHJcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3RvcnksIGRlcHM6IFtEcmFnRHJvcENvbmZpZ10gfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuLy8gICBkZWNsYXJhdGlvbnM6IFtcclxuLy8gICAgICAgRHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQsIERyb3BwYWJsZUNvbXBvbmVudCwgU29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudFxyXG4vLyAgIF0sXHJcbi8vICAgZXhwb3J0cyA6IFtcclxuLy8gICAgICAgIERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnRcclxuLy8gICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBEcmFnZ2FibGVEaXJlY3RpdmUsIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSwgRHJvcHBhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSwgU29ydGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG5kTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRG5kTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztJQU1JLFlBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0tBQUs7OzBCQUx0QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzswQkFDOUIsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7MEJBQzlCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDOzBCQUM5QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzs7Ozs7O0FDSmhEOztnQ0FPc0MsZ0JBQWdCO2dDQUNoQixnQkFBZ0I7K0JBQ2pCLGVBQWU7bUNBQ1gsbUJBQW1COzBCQUVoQixrQkFBa0IsQ0FBQyxJQUFJOzBCQUN2QixrQkFBa0IsQ0FBQyxJQUFJOzBCQUNuQyxNQUFNOzZCQUVILFNBQVM7Ozs7WUFYM0MsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7Ozs7QUNMaEM7O2dDQUsrQixFQUFFOzs7O1lBRmhDLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7Ozs7O0FDSGhDOzs7QUFFQTtJQUNJ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