import { Injectable, NgModule, defineInjectable, inject, EventEmitter, Directive, ElementRef, ChangeDetectorRef, Input, Output } from '@angular/core';
import { __extends, __values } from 'tslib';
import { FormArray } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataTransferEffect = /** @class */ (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    return DataTransferEffect;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragDropConfig = /** @class */ (function () {
    function DragDropConfig() {
        this.onDragStartClass = 'dnd-drag-start';
        this.onDragEnterClass = 'dnd-drag-enter';
        this.onDragOverClass = 'dnd-drag-over';
        this.onSortableDragClass = 'dnd-sortable-drag';
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = 'move';
        this.defaultCursor = 'pointer';
    }
    DragDropConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ DragDropConfig.ngInjectableDef = defineInjectable({ factory: function DragDropConfig_Factory() { return new DragDropConfig(); }, token: DragDropConfig, providedIn: "root" });
    return DragDropConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ DragDropService.ngInjectableDef = defineInjectable({ factory: function DragDropService_Factory() { return new DragDropService(); }, token: DragDropService, providedIn: "root" });
    return DragDropService;
}());

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
var DragImage = /** @class */ (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (isString(this.imageElement)) {
            // Create real image from string source
            var /** @type {?} */ imgScr = /** @type {?} */ (this.imageElement);
            this.imageElement = new HTMLImageElement();
            (/** @type {?} */ (this.imageElement)).src = imgScr;
        }
    }
    return DragImage;
}());

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
var SortableArrayHandler = /** @class */ (function () {
    function SortableArrayHandler() {
    }
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    SortableArrayHandler.prototype.getItemAt = /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    function (sortableData, index) {
        return sortableData[index];
    };
    /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    SortableArrayHandler.prototype.indexOf = /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    function (sortableData, item) {
        return sortableData.indexOf(item);
    };
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    SortableArrayHandler.prototype.removeItemAt = /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    function (sortableData, index) {
        sortableData.splice(index, 1);
    };
    /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    SortableArrayHandler.prototype.insertItemAt = /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (sortableData, item, index) {
        sortableData.splice(index, 0, item);
    };
    return SortableArrayHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableFormArrayHandler = /** @class */ (function () {
    function SortableFormArrayHandler() {
    }
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    SortableFormArrayHandler.prototype.getItemAt = /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    function (sortableData, index) {
        return sortableData.at(index);
    };
    /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    SortableFormArrayHandler.prototype.indexOf = /**
     * @param {?} sortableData
     * @param {?} item
     * @return {?}
     */
    function (sortableData, item) {
        return sortableData.controls.indexOf(item);
    };
    /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    SortableFormArrayHandler.prototype.removeItemAt = /**
     * @param {?} sortableData
     * @param {?} index
     * @return {?}
     */
    function (sortableData, index) {
        sortableData.removeAt(index);
    };
    /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    SortableFormArrayHandler.prototype.insertItemAt = /**
     * @param {?} sortableData
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (sortableData, item, index) {
        sortableData.insert(index, item);
    };
    return SortableFormArrayHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragDropSortableService = /** @class */ (function () {
    /**
     *Creates an instance of DragDropSortableService.
     * @param config The DragDropConfig.
     * @memberof DragDropSortableService
     */
    function DragDropSortableService(config) {
        this.config = config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "element", {
        /**
         * Gets the last element that was marked sortable.
         *
         * @readonly
         * @memberof DragDropSortableService
         */
        get: /**
         * Gets the last element that was marked sortable.
         *
         * \@readonly
         * \@memberof DragDropSortableService
         * @return {?}
         */
        function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Assigns the `onSortableDragClass` to the given element.
     *
     * @param e The element to assign the CSS class to.
     * @memberof DragDropSortableService
     */
    /**
     * Assigns the `onSortableDragClass` to the given element.
     *
     * \@memberof DragDropSortableService
     * @param {?} e The element to assign the CSS class to.
     * @return {?}
     */
    DragDropSortableService.prototype.markSortable = /**
     * Assigns the `onSortableDragClass` to the given element.
     *
     * \@memberof DragDropSortableService
     * @param {?} e The element to assign the CSS class to.
     * @return {?}
     */
    function (e) {
        if (isPresent(this._element)) {
            this._element.classList.remove(this.config.onSortableDragClass);
        }
        if (isPresent(e)) {
            this._element = e;
            this._element.classList.add(this.config.onSortableDragClass);
        }
    };
    DragDropSortableService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropSortableService.ctorParameters = function () { return [
        { type: DragDropConfig }
    ]; };
    /** @nocollapse */ DragDropSortableService.ngInjectableDef = defineInjectable({ factory: function DragDropSortableService_Factory() { return new DragDropSortableService(inject(DragDropConfig)); }, token: DragDropSortableService, providedIn: "root" });
    return DragDropSortableService;
}());

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
var  /**
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var  /**
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
            if (_this.dragEnabled && isPresent(_this.dragHandle)) {
                if (_this.dragHandle.contains(/** @type {?} */ (_this.target))) {
                    event.preventDefault();
                    return;
                }
            }
            _this.dragStart(event);
            if (isPresent(event.dataTransfer)) ;
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
            // Fixed dragData of nested draggable element.
            if (event.stopPropagation) {
                event.stopPropagation();
            }
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
                for (var _a = __values(this.dragDropService.allowedDropZones), _b = _a.next(); !_b.done; _b = _a.next()) {
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DraggableDirective = /** @class */ (function (_super) {
    __extends(DraggableDirective, _super);
    function DraggableDirective(elementReference, dragDropService, config, cdr) {
        var _this = _super.call(this, elementReference, dragDropService, config, cdr) || this;
        _this.onDragStart = new EventEmitter();
        _this.onDragEnd = new EventEmitter();
        _this.onDragSuccess = new EventEmitter();
        _this.defaultCursor = _this.element.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableDirective.prototype, "draggable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "dropzones", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "effectallowed", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "effectcursor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DraggableDirective.prototype.dragStartCallback = /**
     * @return {?}
     */
    function () {
        this.dragDropService.isDragged = true;
        this.dragDropService.dragData = this.dragData;
        this.dragDropService.onDragSuccessCallback = this.onDragSuccess;
        this.element.classList.add(this.config.onDragStartClass);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.dragEndCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dragDropService.isDragged = false;
        this.dragDropService.dragData = null;
        this.dragDropService.onDragSuccessCallback = null;
        this.element.classList.remove(this.config.onDragStartClass);
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-draggable]' },] },
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: ChangeDetectorRef }
    ]; };
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
    return DraggableDirective;
}(AbstractDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DraggableHandleDirective = /** @class */ (function (_super) {
    __extends(DraggableHandleDirective, _super);
    function DraggableHandleDirective(elementReference, dragDropService, config, directive, cdr) {
        return _super.call(this, elementReference, dragDropService, config, directive, cdr) || this;
    }
    DraggableHandleDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-draggable-handle' },] },
    ];
    /** @nocollapse */
    DraggableHandleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: DraggableDirective },
        { type: ChangeDetectorRef }
    ]; };
    return DraggableHandleDirective;
}(AbstractHandleDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DroppableDirective = /** @class */ (function (_super) {
    __extends(DroppableDirective, _super);
    function DroppableDirective(elementReference, dragDropService, config, changeDetector) {
        var _this = _super.call(this, elementReference, dragDropService, config, changeDetector) || this;
        _this.onDropSuccess = new EventEmitter();
        _this.onDragEnter = new EventEmitter();
        _this.onDragOver = new EventEmitter();
        _this.onDragLeave = new EventEmitter();
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(DroppableDirective.prototype, "droppable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableDirective.prototype, "allowdrop", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableDirective.prototype, "dropzones", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableDirective.prototype, "effectallowed", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableDirective.prototype, "effectcursor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableDirective.prototype.dragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dragDropService.isDragged) {
            this.element.classList.add(this.config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableDirective.prototype.dragOverCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dragDropService.isDragged) {
            this.element.classList.add((this.config.onDragOverClass));
            this.onDragOver.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableDirective.prototype.dragLeaveCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dragDropService.isDragged) {
            this.element.classList.remove(this.config.onDragOverClass);
            this.element.classList.remove(this.config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DroppableDirective.prototype.dropCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ dataTransfer = (/** @type {?} */ (event)).dataTransfer;
        if (this.dragDropService.isDragged || (isPresent(dataTransfer) && isPresent(dataTransfer.files))) {
            this.onDropSuccess.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
            if (isPresent(this.dragDropService.onDragSuccessCallback)) {
                this.dragDropService.onDragSuccessCallback.emit({ dragData: this.dragDropService.dragData, mouseEvent: event });
            }
            this.element.classList.remove(this.config.onDragOverClass);
            this.element.classList.remove(this.config.onDragEnterClass);
        }
    };
    DroppableDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-droppable]' },] },
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: ChangeDetectorRef }
    ]; };
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
    return DroppableDirective;
}(AbstractDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableContainerDirective = /** @class */ (function (_super) {
    __extends(SortableContainerDirective, _super);
    function SortableContainerDirective(elemRef, dragDropService, config, cdr, _sortableDataService) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableDataService = _sortableDataService;
        _this._sortableData = [];
        _this.dragEnabled = false;
        return _this;
    }
    Object.defineProperty(SortableContainerDirective.prototype, "draggable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainerDirective.prototype, "sortableData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sortableData;
        },
        set: /**
         * @param {?} sortableData
         * @return {?}
         */
        function (sortableData) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainerDirective.prototype, "dropzones", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    SortableContainerDirective.prototype._onDragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged) {
            var /** @type {?} */ item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
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
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SortableContainerDirective.prototype.getItemAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.sortableHandler.getItemAt(this._sortableData, index);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SortableContainerDirective.prototype.indexOf = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.sortableHandler.indexOf(this._sortableData, item);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SortableContainerDirective.prototype.removeItemAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.sortableHandler.removeItemAt(this._sortableData, index);
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    SortableContainerDirective.prototype.insertItemAt = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        this.sortableHandler.insertItemAt(this._sortableData, item, index);
    };
    SortableContainerDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-sortable-container]' },] },
    ];
    /** @nocollapse */
    SortableContainerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: ChangeDetectorRef },
        { type: DragDropSortableService }
    ]; };
    SortableContainerDirective.propDecorators = {
        draggable: [{ type: Input, args: ['dragEnabled',] }],
        sortableData: [{ type: Input }],
        dropzones: [{ type: Input, args: ['dropZones',] }]
    };
    return SortableContainerDirective;
}(AbstractDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableDirective = /** @class */ (function (_super) {
    __extends(SortableDirective, _super);
    function SortableDirective(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new EventEmitter();
        _this.onDragStartCallback = new EventEmitter();
        _this.onDragOverCallback = new EventEmitter();
        _this.onDragEndCallback = new EventEmitter();
        _this.onDropSuccessCallback = new EventEmitter();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableDirective.prototype, "draggable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableDirective.prototype, "droppable", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableDirective.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: /**
         * Drag allowed effect
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableDirective.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: /**
         * Drag effect cursor
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDragStartCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDragOverCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged && this.element !== this._sortableDataService.element) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this.element);
            this.onDragOverCallback.emit(this.dragDropService.dragData);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDragEndCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        //Fix drag end callback to emit dragData
        var /** @type {?} */ dragData = this.dragDropService.dragData;
        this.dragDropService.isDragged = false;
        this.dragDropService.dragData = null;
        this.dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(dragData);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDragEnterCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this.element);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' +
                // this._sortableDataService.index + ']'); Get item
                var /** @type {?} */ item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableDirective.prototype._onDropCallback = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    SortableDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-sortable]' },] },
    ];
    /** @nocollapse */
    SortableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: SortableContainerDirective },
        { type: DragDropSortableService },
        { type: ChangeDetectorRef }
    ]; };
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
    return SortableDirective;
}(AbstractDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableHandleDirective = /** @class */ (function (_super) {
    __extends(SortableHandleDirective, _super);
    function SortableHandleDirective(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    SortableHandleDirective.decorators = [
        { type: Directive, args: [{ selector: '[dnd-sortable-handle]' },] },
    ];
    /** @nocollapse */
    SortableHandleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragDropService },
        { type: DragDropConfig },
        { type: SortableDirective },
        { type: ChangeDetectorRef }
    ]; };
    return SortableHandleDirective;
}(AbstractHandleDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ providers = [
    DragDropConfig,
    { provide: DragDropService, useFactory: dragDropServiceFactory },
    { provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig] }
];
var DndModule = /** @class */ (function () {
    function DndModule() {
    }
    /**
     * @return {?}
     */
    DndModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DndModule,
            providers: providers
        };
    };
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
    return DndModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { providers, DndModule, AbstractHandleDirective, AbstractDirective, DataTransferEffect, DragDropConfig, DragImage, DraggableHandleDirective, DraggableDirective, DroppableDirective, SortableContainerDirective, SortableHandleDirective, SortableDirective, DragDropConfig as ɵe, DragDropConfig as ɵa, DraggableDirective as ɵg, DraggableHandleDirective as ɵh, DroppableDirective as ɵi, SortableContainerDirective as ɵj, SortableDirective as ɵk, SortableHandleDirective as ɵl, DragDropSortableService as ɵd, dragDropSortableServiceFactory as ɵf, DragDropService as ɵb, dragDropServiceFactory as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRuZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RhdGEtdHJhbnNmZXItZWZmZWN0LnRzIiwibmc6Ly9uZzItZG5kL3NyYy9jb25maWcvZHJhZy1kcm9wLWNvbmZpZy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3AvZHJhZy1kcm9wLnNlcnZpY2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLmZhY3RvcnkudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvaXMtc3RyaW5nLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9jb25maWcvZHJhZy1pbWFnZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9pcy1wcmVzZW50LnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL3NvcnRhYmxlLWFycmF5LWhhbmRsZXIudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvc29ydGFibGUtZm9ybS1hcnJheS1oYW5kbGVyLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UuZmFjdG9yeS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2RyYWdnYWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtY29udGFpbmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuICAgIHN0YXRpYyBDT1BZID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnY29weScpO1xyXG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XHJcbiAgICBzdGF0aWMgTU9WRSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ21vdmUnKTtcclxuICAgIHN0YXRpYyBOT05FID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRyYW5zZmVyRWZmZWN0fSBmcm9tICcuL2RhdGEtdHJhbnNmZXItZWZmZWN0JztcclxuaW1wb3J0IHtEcmFnSW1hZ2V9IGZyb20gJy4vZHJhZy1pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctc3RhcnQnO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9ICdkbmQtZHJhZy1lbnRlcic7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctb3Zlcic7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gJ2RuZC1zb3J0YWJsZS1kcmFnJztcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gJ21vdmUnO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9ICdwb2ludGVyJztcclxufSIsImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgYWxsb3dlZERyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gIGRyYWdEYXRhOiBhbnk7XHJcbiAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWwvaXMtc3RyaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGltYWdlRWxlbWVudDogYW55LCBwdWJsaWMgeF9vZmZzZXQ6IG51bWJlciA9IDAsIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Njcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD50aGlzLmltYWdlRWxlbWVudCkuc3JjID0gaW1nU2NyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59IiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3Qgbm90IHVuZGVmaW5lZCBvciBudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVBcnJheUhhbmRsZXIge1xyXG4gIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhW2luZGV4XTtcclxuICB9XHJcblxyXG4gIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmluZGV4T2YoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyIHtcclxuICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5hdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzb3J0YWJsZURhdGEucmVtb3ZlQXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXN0IGVsZW1ldCB0aGF0IHdhcyBtYXJrZWQgc29ydGFibGUuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlO1xyXG5cclxuICBpc0RyYWdnZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgRHJhZ0Ryb3BDb25maWcuXHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IERyYWdEcm9wQ29uZmlnKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgdGhhdCB3YXMgbWFya2VkIHNvcnRhYmxlLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ25zIHRoZSBgb25Tb3J0YWJsZURyYWdDbGFzc2AgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZSBUaGUgZWxlbWVudCB0byBhc3NpZ24gdGhlIENTUyBjbGFzcyB0by5cclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBtYXJrU29ydGFibGUoZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ByZXNlbnQoZSkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IGU7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2RyYWctZHJvcC1jb25maWdcIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeShjb25maWc6IERyYWdEcm9wQ29uZmlnKTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UoY29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdERpcmVjdGl2ZSB9IGZyb20gJy4vYWJzdHJhY3QuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBwdWJsaWMgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIGRpcmVjdGl2ZTogQWJzdHJhY3REaXJlY3RpdmUsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5kaXJlY3RpdmUuZHJhZ0hhbmRsZSA9IHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kaXJlY3RpdmUuZHJhZ0hhbmRsZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgVmlld1JlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL3V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIF9kcmFnSGFuZGxlOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBkcmFnSGVscGVyOiBIVE1MRWxlbWVudDtcclxuICBkZWZhdWx0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gIHRhcmdldDogRXZlbnRUYXJnZXQ7XHJcblxyXG4gIHByaXZhdGUgX2RyYWdFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgZHJvcEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xyXG5cclxuICBlZmZlY3RDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgZHJvcFpvbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xyXG5cclxuICBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcblxyXG4gIGNsb25lSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgcHVibGljIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmNvbmZpZy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuZGVmYXVsdEN1cnNvcjtcclxuXHJcbiAgICAvLyBSZWdpc3RlciBkcm9wIGV2ZW50c1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2VudGVyID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnRW50ZXIoZXZlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnTGVhdmUoZXZlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJvcCA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJvcChldmVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ292ZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYWdPdmVyKGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5jb25maWcuZHJvcEVmZmVjdC5uYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyYWcgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdzdGFydCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdFbmFibGVkICYmIGlzUHJlc2VudCh0aGlzLmRyYWdIYW5kbGUpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZS5jb250YWlucyh0aGlzLnRhcmdldCBhcyBFbGVtZW50KSkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRyYWdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kcmFnRW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdIYW5kbGUoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdIYW5kbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0hhbmRsZSh2YWx1ZTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuX2RyYWdIYW5kbGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG1hbnVhbGx5IHRvIGZpeCBhbiBpc3N1ZSBpbiBTYWZhcmkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBkZXRlY3RDaGFuZ2VzKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNkciAmJiAhKHRoaXMuY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjUwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnRW50ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5wcmV2ZW50RGVmYXVsdCkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kcmFnT3ZlckNhbGxiYWNrKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnTGVhdmVDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLnByZXZlbnRBbmRTdG9wKGV2ZW50KTtcclxuXHJcbiAgICAgIHRoaXMuZHJvcENhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSB0aGlzLmRyb3Bab25lcztcclxuICAgICAgdGhpcy5kcmFnU3RhcnRDYWxsYmFjayhldmVudCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBGaXhlZCBkcmFnRGF0YSBvZiBuZXN0ZWQgZHJhZ2dhYmxlIGVsZW1lbnQuXHJcbiAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnRW5kKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IFtdO1xyXG4gICAgdGhpcy5kcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICgodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkIHx8IChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKSkgJiYgdGhpcy5kcm9wRW5hYmxlZCkge1xyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuYWxsb3dEcm9wKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93RHJvcCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5sZW5ndGggPT09IDAgJiYgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBkcm9wWm9uZSBvZiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmluZGV4T2YoZHJvcFpvbmUpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXZlbnQgdGhlIGdpdmVuIGV2ZW50cyBkZWZhdWx0IGFjdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCBhbmQgc3RvcHMgaXQgZnJvbSBiZWluZyBwcm9wYWdhdGVkIGZ1cnRoZXIuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBwcml2YXRlIHByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWcsIERyYWdJbWFnZX0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2RyYWdFbmFibGVkJylcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuICBASW5wdXQoKSBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcbiAgQElucHV0KCkgY2xvbmVJdGVtOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZywgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmVsZW1lbnQuc3R5bGUuY3Vyc29yO1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmFnU3RhcnRDYWxsYmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IHRoaXMuZHJhZ0RhdGE7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSB0aGlzLm9uRHJhZ1N1Y2Nlc3M7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vbkRyYWdTdGFydENsYXNzKTtcclxuICB9XHJcblxyXG4gIGRyYWdFbmRDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgICB0aGlzLm9uRHJhZ0VuZC5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RIYW5kbGVEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5pbXBvcnQge0RyYWdnYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9kcmFnZ2FibGUuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtZHJhZ2dhYmxlLWhhbmRsZSd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3RIYW5kbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgZGlyZWN0aXZlOiBEcmFnZ2FibGVEaXJlY3RpdmUsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBkaXJlY3RpdmUsIGNkcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyb3BwYWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2Ryb3BFbmFibGVkJylcclxuICBzZXQgZHJvcHBhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnYWxsb3dEcm9wJylcclxuICBzZXQgYWxsb3dkcm9wKHZhbHVlOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5hbGxvd0Ryb3AgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RBbGxvd2VkJylcclxuICBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0Q3Vyc29yJylcclxuICBzZXQgZWZmZWN0Y3Vyc29yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgb25Ecm9wU3VjY2VzczogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZixcclxuICAgICAgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsXHJcbiAgICAgIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZmVyZW5jZSwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNoYW5nZURldGVjdG9yKTtcclxuXHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoKHRoaXMuY29uZmlnLm9uRHJhZ092ZXJDbGFzcykpO1xyXG4gICAgICB0aGlzLm9uRHJhZ092ZXIuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICAgIHRoaXMub25EcmFnTGVhdmUuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRhVHJhbnNmZXIgPSAoZXZlbnQgYXMgYW55KS5kYXRhVHJhbnNmZXI7XHJcblxyXG4gICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoaXNQcmVzZW50KGRhdGFUcmFuc2ZlcikgJiYgaXNQcmVzZW50KGRhdGFUcmFuc2Zlci5maWxlcykpKSB7XHJcbiAgICAgIHRoaXMub25Ecm9wU3VjY2Vzcy5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykpIHtcclxuICAgICAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtTb3J0YWJsZUFycmF5SGFuZGxlciwgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfSBmcm9tICcuLi91dGlsJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWJzdHJhY3QvYWJzdHJhY3QuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1jb250YWluZXJdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2RyYWdFbmFibGVkJylcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkgPSBbXTtcclxuICBwcml2YXRlIHNvcnRhYmxlSGFuZGxlcjogU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyfFNvcnRhYmxlQXJyYXlIYW5kbGVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzb3J0YWJsZURhdGEoc29ydGFibGVEYXRhOiBBcnJheTxhbnk+fEZvcm1BcnJheSkge1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhID0gc29ydGFibGVEYXRhO1xyXG4gICAgaWYgKHNvcnRhYmxlRGF0YSBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc29ydGFibGVIYW5kbGVyID0gbmV3IFNvcnRhYmxlQXJyYXlIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb2xsZWN0aW9uIGlzIGNoYW5nZWQsIGRyb3AgZW5hYmxlZDogXCIgKyB0aGlzLmRyb3BFbmFibGVkKTtcclxuICB9XHJcbiAgZ2V0IHNvcnRhYmxlRGF0YSgpOiBBcnJheTxhbnk+fEZvcm1BcnJheSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc29ydGFibGVEYXRhO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkcm9wWm9uZXMnKVxyXG4gIHNldCBkcm9wem9uZXModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAvLyBDaGVjayBkb2VzIGVsZW1lbnQgZXhpc3QgaW4gc29ydGFibGVEYXRhIG9mIHRoaXMgQ29udGFpbmVyXHJcbiAgICAgIGlmICh0aGlzLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgLy8gTGV0J3MgYWRkIGl0XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbnRhaW5lci5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleC50b1N0cmluZygpICsgJ11cclxuICAgICAgICAvLyBvdmVyIHBhcmVudCBub2RlJyk7IFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5fc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XHJcbiAgICAgICAgdGhpcy5pbnNlcnRJdGVtQXQoaXRlbSwgMCk7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgLy8gUmVmcmVzaCBjaGFuZ2VzIGluIHByb3BlcnRpZXMgb2YgY29udGFpbmVyIGNvbXBvbmVudFxyXG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlSGFuZGxlci5nZXRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuaW5kZXhPZih0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIGluc2VydEl0ZW1BdChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc29ydGFibGVIYW5kbGVyLmluc2VydEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0sIGluZGV4KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvYWJzdHJhY3QnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuL3NvcnRhYmxlLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yIG5vLW91dHB1dC1vbi1wcmVmaXggbm8tb3V0cHV0LXJlbmFtZSBuby1pbnB1dC1yZW5hbWUgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdzb3J0YWJsZUluZGV4JykgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3BFbmFibGVkJylcclxuICBzZXQgZHJvcHBhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRhIHRoYXQgaGFzIHRvIGJlIGRyYWdnZWQuIEl0IGNhbiBiZSBhbnkgSlMgb2JqZWN0XHJcbiAgICovXHJcbiAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcclxuICAgKi9cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9uIGVuZHMgd2l0aCBhIHZhbGlkIGRyb3AgYWN0aW9uLlxyXG4gICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgQE91dHB1dCgnb25EcmFnU3VjY2VzcycpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgnb25EcmFnU3RhcnQnKSBvbkRyYWdTdGFydENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJhZ092ZXInKSBvbkRyYWdPdmVyQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgnb25EcmFnRW5kJykgb25EcmFnRW5kQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgnb25Ecm9wU3VjY2VzcycpIG9uRHJvcFN1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIF9zb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgY2RyKTtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcFpvbmVzO1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdTdGFydENhbGxiYWNrLiBkcmFnZ2luZyBlbGVtIHdpdGggaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgLy8gQWRkIGRyYWdEYXRhXHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdTdGFydENhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgX29uRHJhZ092ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCAmJiB0aGlzLmVsZW1lbnQgIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuZWxlbWVudCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ092ZXJDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgICAgdGhpcy5vbkRyYWdPdmVyQ2FsbGJhY2suZW1pdCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ0VuZENhbGxiYWNrLiBlbmQgZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSBudWxsO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUobnVsbCk7XHJcbiAgICAvLyBBZGQgZHJhZ0dhdGFcclxuICAgIC8vRml4IGRyYWcgZW5kIGNhbGxiYWNrIHRvIGVtaXQgZHJhZ0RhdGFcclxuICAgIGNvbnN0IGRyYWdEYXRhID0gdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGE7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdFbmRDYWxsYmFjay5lbWl0KGRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIGlmICgodGhpcy5pbmRleCAhPT0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCkgfHxcclxuICAgICAgICAgICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSAhPT0gdGhpcy5fc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuaW5kZXggKyAnXSBvdmVyIG5vZGUgWycgK1xyXG4gICAgICAgIC8vIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggKyAnXScpOyBHZXQgaXRlbVxyXG4gICAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5pbnNlcnRJdGVtQXQoaXRlbSwgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbkRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTb3J0YWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1oYW5kbGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIF9Db21wb25lbnQ6IFNvcnRhYmxlRGlyZWN0aXZlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgX0NvbXBvbmVudCwgY2RyKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kcmFnLWRyb3AtY29uZmlnJztcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZSc7XHJcbmltcG9ydCB7IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLmZhY3RvcnknO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZS5mYWN0b3J5JztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXNcIjtcclxuXHJcbi8vIGltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgRHJvcHBhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9hYnN0cmFjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnJztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMnO1xyXG5cclxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbXHJcbiAgICBEcmFnRHJvcENvbmZpZyxcclxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5IH0sXHJcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3RvcnksIGRlcHM6IFtEcmFnRHJvcENvbmZpZ10gfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuLy8gICBkZWNsYXJhdGlvbnM6IFtcclxuLy8gICAgICAgRHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQsIERyb3BwYWJsZUNvbXBvbmVudCwgU29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudFxyXG4vLyAgIF0sXHJcbi8vICAgZXhwb3J0cyA6IFtcclxuLy8gICAgICAgIERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnRcclxuLy8gICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBEcmFnZ2FibGVEaXJlY3RpdmUsIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSwgRHJvcHBhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSwgU29ydGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG5kTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRG5kTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBTUksNEJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0tBQUs7OEJBTHRCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDOzhCQUM5QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzs4QkFDOUIsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7OEJBQzlCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDOzZCQUpoRDs7Ozs7OztBQ0FBOztnQ0FPc0MsZ0JBQWdCO2dDQUNoQixnQkFBZ0I7K0JBQ2pCLGVBQWU7bUNBQ1gsbUJBQW1COzBCQUVoQixrQkFBa0IsQ0FBQyxJQUFJOzBCQUN2QixrQkFBa0IsQ0FBQyxJQUFJOzBCQUNuQyxNQUFNOzZCQUVILFNBQVM7OztnQkFYM0MsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7O3lCQUxoQzs7Ozs7OztBQ0FBOztnQ0FLK0IsRUFBRTs7O2dCQUZoQyxVQUFVLFNBQUMsRUFB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