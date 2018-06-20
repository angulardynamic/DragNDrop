(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng2-dnd', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['ng2-dnd'] = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,i0,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DataTransferEffect = (function () {
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
    var DragDropConfig = (function () {
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */ DragDropConfig.ngInjectableDef = i0.defineInjectable({ factory: function DragDropConfig_Factory() { return new DragDropConfig(); }, token: DragDropConfig, providedIn: "root" });
        return DragDropConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DragDropService = (function () {
        function DragDropService() {
            this.allowedDropZones = [];
        }
        DragDropService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */ DragDropService.ngInjectableDef = i0.defineInjectable({ factory: function DragDropService_Factory() { return new DragDropService(); }, token: DragDropService, providedIn: "root" });
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
    var DragImage = (function () {
        function DragImage(imageElement, x_offset, y_offset) {
            if (x_offset === void 0) {
                x_offset = 0;
            }
            if (y_offset === void 0) {
                y_offset = 0;
            }
            this.imageElement = imageElement;
            this.x_offset = x_offset;
            this.y_offset = y_offset;
            if (isString(this.imageElement)) {
                // Create real image from string source
                var /** @type {?} */ imgScr = (this.imageElement);
                this.imageElement = new HTMLImageElement();
                ((this.imageElement)).src = imgScr;
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
     * Call the function
     * @template T
     * @param {?} fn
     * @param {...?} args
     * @return {?}
     */
    function callFunction(fn) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
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
        var /** @type {?} */ img = new HTMLImageElement();
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
    var SortableArrayHandler = (function () {
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
    var SortableFormArrayHandler = (function () {
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
    var DragDropSortableService = (function () {
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
             */ function () {
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        DragDropSortableService.ctorParameters = function () {
            return [
                { type: DragDropConfig }
            ];
        };
        /** @nocollapse */ DragDropSortableService.ngInjectableDef = i0.defineInjectable({ factory: function DragDropSortableService_Factory() { return new DragDropSortableService(i0.inject(DragDropConfig)); }, token: DragDropSortableService, providedIn: "root" });
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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
    var /**
     * @abstract
     */ AbstractHandleDirective = (function () {
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
    var /**
     * @abstract
     */ AbstractDirective = (function () {
        function AbstractDirective(elementReference, dragDropService, config, cdr) {
            var _this = this;
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
            this.element.ondragenter = function (event) { return _this.dragEnter(event); };
            this.element.ondragover = function (event) {
                _this.dragOver(event);
                if (isPresent(event.dataTransfer)) {
                    event.dataTransfer.dropEffect = _this.config.dropEffect.name;
                }
                return false;
            };
            this.element.ondragleave = function (event) { return _this.dragLeave(event); };
            this.element.ondrop = function (event) { return _this.drop(event); };
            // Register drag events
            this.element.onmousedown = function (event) {
                _this.target = event.target;
            };
            this.element.ondragstart = function (event) {
                if (_this.dragEnabled && isPresent(_this.dragHandle)) {
                    if (!_this.dragHandle.contains(/** @type {?} */ (_this.target))) {
                        event.preventDefault();
                        return;
                    }
                }
                _this.dragStart(event);
                if (isPresent(event.dataTransfer)) {
                    event.dataTransfer.setData('text', '');
                    // Change drag effect
                    event.dataTransfer.effectAllowed = _this.effectAllowed || _this.config.dragEffect.name;
                    // Change drag image
                    if (isPresent(_this.dragImage)) {
                        if (isString(_this.dragImage)) {
                            ((event.dataTransfer)).setDragImage(createImage(/** @type {?} */ (_this.dragImage)));
                        }
                        else if (isFunction(_this.dragImage)) {
                            ((event.dataTransfer)).setDragImage(callFunction(/** @type {?} */ (_this.dragImage)));
                        }
                        else {
                            var /** @type {?} */ img = (_this.dragImage);
                            ((event.dataTransfer)).setDragImage(img.imageElement, img.x_offset, img.y_offset);
                        }
                    }
                    else if (isPresent(_this.config.dragImage)) {
                        var /** @type {?} */ dragImage = _this.config.dragImage;
                        ((event.dataTransfer)).setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                    }
                    else if (_this.cloneItem) {
                        _this.dragHelper = /** @type {?} */ (_this.element.cloneNode(true));
                        _this.dragHelper.classList.add('dnd-drag-item');
                        _this.dragHelper.style.position = "absolute";
                        _this.dragHelper.style.top = "0px";
                        _this.dragHelper.style.left = "-1000px";
                        _this.element.parentElement.appendChild(_this.dragHelper);
                        ((event.dataTransfer)).setDragImage(_this.dragHelper, event.offsetX, event.offsetY);
                    }
                    // Change drag cursor
                    var /** @type {?} */ cursorelem = (_this._dragHandle) ? _this._dragHandle : _this.element;
                    if (_this._dragEnabled) {
                        cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this.config.dragCursor;
                    }
                    else {
                        cursorelem.style.cursor = _this.defaultCursor;
                    }
                }
            };
            this.element.ondragend = function (event) {
                if (_this.element.parentElement && _this.dragHelper) {
                    _this.element.parentElement.removeChild(_this.dragHelper);
                }
                // console.log('ondragend', event.target);
                // console.log('ondragend', event.target);
                _this.dragEnd(event);
                // Restore style of dragged element
                var /** @type {?} */ cursorelem = (_this._dragHandle) ? _this._dragHandle : _this.element;
                cursorelem.style.cursor = _this.defaultCursor;
            };
        }
        Object.defineProperty(AbstractDirective.prototype, "dragEnabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._dragEnabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._dragEnabled = value;
                this.element.draggable = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractDirective.prototype, "dragHandle", {
            get: /**
             * @return {?}
             */ function () {
                return this._dragHandle;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                // Programmatically run change detection to fix issue in Safari
                setTimeout(function () {
                    if (_this.cdr && !((_this.cdr)).destroyed) {
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
                    // The element is over the same source element - do nothing
                    if (isPresent(event.preventDefault)) {
                        event.preventDefault();
                    }
                    this.dragOverCallback(event);
                }
                // this.dragOverCallback(event);
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
                    // Necessary. Allows us to drop.
                    this.preventAndStop(event);
                    this.dropCallback(event);
                    this.detectChanges();
                }
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
                    // First, if `allowDrop` is set, call it to determine whether the
                    // dragged element can be dropped here.
                    if (isPresent(this.allowDrop)) {
                        return this.allowDrop(this.dragDropService.dragData);
                    }
                    // Otherwise, use dropZones if they are set.
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
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return))
                                _c.call(_a);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
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
    var DraggableDirective = (function (_super) {
        __extends(DraggableDirective, _super);
        function DraggableDirective(elementReference, dragDropService, config, cdr) {
            var _this = _super.call(this, elementReference, dragDropService, config, cdr) || this;
            _this.onDragStart = new i0.EventEmitter();
            _this.onDragEnd = new i0.EventEmitter();
            _this.onDragSuccess = new i0.EventEmitter();
            _this.defaultCursor = _this.element.style.cursor;
            _this.dragEnabled = true;
            return _this;
        }
        Object.defineProperty(DraggableDirective.prototype, "draggable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DraggableDirective.prototype, "dropzones", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dropZones = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DraggableDirective.prototype, "effectallowed", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.effectAllowed = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DraggableDirective.prototype, "effectcursor", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: i0.Directive, args: [{ selector: '[dnd-draggable]' },] },
        ];
        /** @nocollapse */
        DraggableDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: i0.ChangeDetectorRef }
            ];
        };
        DraggableDirective.propDecorators = {
            draggable: [{ type: i0.Input, args: ['dragEnabled',] }],
            dropzones: [{ type: i0.Input, args: ['dropZones',] }],
            effectallowed: [{ type: i0.Input, args: ['effectAllowed',] }],
            effectcursor: [{ type: i0.Input, args: ['effectCursor',] }],
            dragData: [{ type: i0.Input }],
            dragImage: [{ type: i0.Input }],
            cloneItem: [{ type: i0.Input }],
            onDragStart: [{ type: i0.Output }],
            onDragEnd: [{ type: i0.Output }],
            onDragSuccess: [{ type: i0.Output }]
        };
        return DraggableDirective;
    }(AbstractDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DraggableHandleDirective = (function (_super) {
        __extends(DraggableHandleDirective, _super);
        function DraggableHandleDirective(elementReference, dragDropService, config, directive, cdr) {
            return _super.call(this, elementReference, dragDropService, config, directive, cdr) || this;
        }
        DraggableHandleDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[dnd-draggable-handle' },] },
        ];
        /** @nocollapse */
        DraggableHandleDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: DraggableDirective },
                { type: i0.ChangeDetectorRef }
            ];
        };
        return DraggableHandleDirective;
    }(AbstractHandleDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DroppableDirective = (function (_super) {
        __extends(DroppableDirective, _super);
        function DroppableDirective(elementReference, dragDropService, config, changeDetector) {
            var _this = _super.call(this, elementReference, dragDropService, config, changeDetector) || this;
            _this.onDropSuccess = new i0.EventEmitter();
            _this.onDragEnter = new i0.EventEmitter();
            _this.onDragOver = new i0.EventEmitter();
            _this.onDragLeave = new i0.EventEmitter();
            _this.dropEnabled = true;
            return _this;
        }
        Object.defineProperty(DroppableDirective.prototype, "droppable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dropEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableDirective.prototype, "allowdrop", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.allowDrop = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableDirective.prototype, "dropzones", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dropZones = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableDirective.prototype, "effectallowed", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.effectAllowed = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableDirective.prototype, "effectcursor", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                var /** @type {?} */ dataTransfer = ((event)).dataTransfer;
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
            { type: i0.Directive, args: [{ selector: '[dnd-droppable]' },] },
        ];
        /** @nocollapse */
        DroppableDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: i0.ChangeDetectorRef }
            ];
        };
        DroppableDirective.propDecorators = {
            droppable: [{ type: i0.Input, args: ['dropEnabled',] }],
            allowdrop: [{ type: i0.Input, args: ['allowDrop',] }],
            dropzones: [{ type: i0.Input, args: ['dropZones',] }],
            effectallowed: [{ type: i0.Input, args: ['effectAllowed',] }],
            effectcursor: [{ type: i0.Input, args: ['effectCursor',] }],
            onDropSuccess: [{ type: i0.Output }],
            onDragEnter: [{ type: i0.Output }],
            onDragOver: [{ type: i0.Output }],
            onDragLeave: [{ type: i0.Output }]
        };
        return DroppableDirective;
    }(AbstractDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableContainerDirective = (function (_super) {
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
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableContainerDirective.prototype, "sortableData", {
            get: /**
             * @return {?}
             */ function () {
                return this._sortableData;
            },
            set: /**
             * @param {?} sortableData
             * @return {?}
             */ function (sortableData) {
                this._sortableData = sortableData;
                if (sortableData instanceof forms.FormArray) {
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
             */ function (value) {
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
            { type: i0.Directive, args: [{ selector: '[dnd-sortable-container]' },] },
        ];
        /** @nocollapse */
        SortableContainerDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: i0.ChangeDetectorRef },
                { type: DragDropSortableService }
            ];
        };
        SortableContainerDirective.propDecorators = {
            draggable: [{ type: i0.Input, args: ['dragEnabled',] }],
            sortableData: [{ type: i0.Input }],
            dropzones: [{ type: i0.Input, args: ['dropZones',] }]
        };
        return SortableContainerDirective;
    }(AbstractDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableDirective = (function (_super) {
        __extends(SortableDirective, _super);
        function SortableDirective(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
            var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
            _this._sortableContainer = _sortableContainer;
            _this._sortableDataService = _sortableDataService;
            /**
             * Callback function called when the drag action ends with a valid drop action.
             * It is activated after the on-drop-success callback
             */
            _this.onDragSuccessCallback = new i0.EventEmitter();
            _this.onDragStartCallback = new i0.EventEmitter();
            _this.onDragOverCallback = new i0.EventEmitter();
            _this.onDragEndCallback = new i0.EventEmitter();
            _this.onDropSuccessCallback = new i0.EventEmitter();
            _this.dropZones = _this._sortableContainer.dropZones;
            _this.dragEnabled = true;
            _this.dropEnabled = true;
            return _this;
        }
        Object.defineProperty(SortableDirective.prototype, "draggable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableDirective.prototype, "droppable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function (value) {
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
             */ function (value) {
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
            { type: i0.Directive, args: [{ selector: '[dnd-sortable]' },] },
        ];
        /** @nocollapse */
        SortableDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: SortableContainerDirective },
                { type: DragDropSortableService },
                { type: i0.ChangeDetectorRef }
            ];
        };
        SortableDirective.propDecorators = {
            index: [{ type: i0.Input, args: ['sortableIndex',] }],
            draggable: [{ type: i0.Input, args: ['dragEnabled',] }],
            droppable: [{ type: i0.Input, args: ['dropEnabled',] }],
            dragData: [{ type: i0.Input }],
            effectallowed: [{ type: i0.Input, args: ['effectAllowed',] }],
            effectcursor: [{ type: i0.Input, args: ['effectCursor',] }],
            onDragSuccessCallback: [{ type: i0.Output, args: ['onDragSuccess',] }],
            onDragStartCallback: [{ type: i0.Output, args: ['onDragStart',] }],
            onDragOverCallback: [{ type: i0.Output, args: ['onDragOver',] }],
            onDragEndCallback: [{ type: i0.Output, args: ['onDragEnd',] }],
            onDropSuccessCallback: [{ type: i0.Output, args: ['onDropSuccess',] }]
        };
        return SortableDirective;
    }(AbstractDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableHandleDirective = (function (_super) {
        __extends(SortableHandleDirective, _super);
        function SortableHandleDirective(elemRef, dragDropService, config, _Component, cdr) {
            return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
        }
        SortableHandleDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[dnd-sortable-handle]' },] },
        ];
        /** @nocollapse */
        SortableHandleDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: DragDropService },
                { type: DragDropConfig },
                { type: SortableDirective },
                { type: i0.ChangeDetectorRef }
            ];
        };
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
    var DndModule = (function () {
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
            { type: i0.NgModule, args: [{
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

    exports.providers = providers;
    exports.DndModule = DndModule;
    exports.DataTransferEffect = DataTransferEffect;
    exports.DragDropConfig = DragDropConfig;
    exports.DragImage = DragImage;
    exports.DraggableHandleDirective = DraggableHandleDirective;
    exports.DraggableDirective = DraggableDirective;
    exports.DroppableDirective = DroppableDirective;
    exports.SortableContainerDirective = SortableContainerDirective;
    exports.SortableHandleDirective = SortableHandleDirective;
    exports.SortableDirective = SortableDirective;
    exports.AbstractHandleDirective = AbstractHandleDirective;
    exports.AbstractDirective = AbstractDirective;
    exports.DragDropSortableService = DragDropSortableService;
    exports.dragDropSortableServiceFactory = dragDropSortableServiceFactory;
    exports.DragDropService = DragDropService;
    exports.dragDropServiceFactory = dragDropServiceFactory;
    exports.ɵe = DragDropConfig;
    exports.ɵa = DragDropConfig;
    exports.ɵg = DraggableDirective;
    exports.ɵh = DraggableHandleDirective;
    exports.ɵi = DroppableDirective;
    exports.ɵj = SortableContainerDirective;
    exports.ɵk = SortableDirective;
    exports.ɵl = SortableHandleDirective;
    exports.ɵd = DragDropSortableService;
    exports.ɵf = dragDropSortableServiceFactory;
    exports.ɵb = DragDropService;
    exports.ɵc = dragDropServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRuZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nMi1kbmQvc3JjL2NvbmZpZy9kYXRhLXRyYW5zZmVyLWVmZmVjdC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RyYWctZHJvcC1jb25maWcudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZS5mYWN0b3J5LnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL2lzLXN0cmluZy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RyYWctaW1hZ2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvY2FsbC1mdW5jdGlvbi50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9jcmVhdGUtaW1hZ2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvaXMtZnVuY3Rpb24udHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvaXMtcHJlc2VudC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9zb3J0YWJsZS1hcnJheS1oYW5kbGVyLnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL3NvcnRhYmxlLWZvcm0tYXJyYXktaGFuZGxlci50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlLmZhY3RvcnkudHMiLG51bGwsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2RyYWdnYWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtY29udGFpbmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuICAgIHN0YXRpYyBDT1BZID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnY29weScpO1xyXG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XHJcbiAgICBzdGF0aWMgTU9WRSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ21vdmUnKTtcclxuICAgIHN0YXRpYyBOT05FID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRyYW5zZmVyRWZmZWN0fSBmcm9tICcuL2RhdGEtdHJhbnNmZXItZWZmZWN0JztcclxuaW1wb3J0IHtEcmFnSW1hZ2V9IGZyb20gJy4vZHJhZy1pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctc3RhcnQnO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9ICdkbmQtZHJhZy1lbnRlcic7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctb3Zlcic7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gJ2RuZC1zb3J0YWJsZS1kcmFnJztcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gJ21vdmUnO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9ICdwb2ludGVyJztcclxufSIsImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgYWxsb3dlZERyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gIGRyYWdEYXRhOiBhbnk7XHJcbiAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWwvaXMtc3RyaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGltYWdlRWxlbWVudDogYW55LCBwdWJsaWMgeF9vZmZzZXQ6IG51bWJlciA9IDAsIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Njcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD50aGlzLmltYWdlRWxlbWVudCkuc3JjID0gaW1nU2NyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59IiwiLyoqXHJcbiAqIENhbGwgdGhlIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsbEZ1bmN0aW9uPFQ+KGZuOiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gIHJldHVybiBmbihhcmdzKTtcclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlIEltYWdlIGVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgdXJsIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYzogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgY29uc3QgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICBpbWcuc3JjID0gc3JjO1xyXG4gIHJldHVybiBpbWc7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBGdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG4iLCIvKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBub3QgdW5kZWZpbmVkIG9yIG51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ByZXNlbnQob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTb3J0YWJsZUFycmF5SGFuZGxlciB7XHJcbiAgZ2V0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiBzb3J0YWJsZURhdGFbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgaW5kZXhPZihzb3J0YWJsZURhdGE6IGFueSwgaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzb3J0YWJsZURhdGEuaW5kZXhPZihpdGVtKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc29ydGFibGVEYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc29ydGFibGVEYXRhLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIge1xyXG4gIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmF0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmNvbnRyb2xzLmluZGV4T2YoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5yZW1vdmVBdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc29ydGFibGVEYXRhLmluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcclxuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL3V0aWwnO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxhc3QgZWxlbWV0IHRoYXQgd2FzIG1hcmtlZCBzb3J0YWJsZS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBpbmRleDogbnVtYmVyO1xyXG5cclxuICBzb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXJEaXJlY3RpdmU7XHJcblxyXG4gIGlzRHJhZ2dlZDogYm9vbGVhbjtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZS5cclxuICAgKiBAcGFyYW0gY29uZmlnIFRoZSBEcmFnRHJvcENvbmZpZy5cclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCB0aGF0IHdhcyBtYXJrZWQgc29ydGFibGUuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzc2lnbnMgdGhlIGBvblNvcnRhYmxlRHJhZ0NsYXNzYCB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlIFRoZSBlbGVtZW50IHRvIGFzc2lnbiB0aGUgQ1NTIGNsYXNzIHRvLlxyXG4gICAqIEBtZW1iZXJvZiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZVxyXG4gICAqL1xyXG4gIG1hcmtTb3J0YWJsZShlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9lbGVtZW50KSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25Tb3J0YWJsZURyYWdDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzUHJlc2VudChlKSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZTtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEcmFnRHJvcENvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWcvZHJhZy1kcm9wLWNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5KGNvbmZpZzogRHJhZ0Ryb3BDb25maWcpOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSAge1xyXG4gICAgcmV0dXJuIG5ldyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZShjb25maWcpO1xyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEcmFnRHJvcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdERpcmVjdGl2ZSB9IGZyb20gJy4vYWJzdHJhY3QuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBwdWJsaWMgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIGRpcmVjdGl2ZTogQWJzdHJhY3REaXJlY3RpdmUsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5kaXJlY3RpdmUuZHJhZ0hhbmRsZSA9IHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kaXJlY3RpdmUuZHJhZ0hhbmRsZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgVmlld1JlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtpc1ByZXNlbnQsIGlzRnVuY3Rpb24sIGlzU3RyaW5nLCBjcmVhdGVJbWFnZSwgY2FsbEZ1bmN0aW9ufSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfZHJhZ0hhbmRsZTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgZHJhZ0hlbHBlcjogSFRNTEVsZW1lbnQ7XHJcbiAgZGVmYXVsdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGFzdCBlbGVtZW50IHRoYXQgd2FzIG1vdXNlZG93bidlZFxyXG4gICAgICovXHJcbiAgdGFyZ2V0OiBFdmVudFRhcmdldDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIG9iamVjdCBpcyBkcmFnZ2FibGUuIERlZmF1bHQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gIHByaXZhdGUgX2RyYWdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgZHJvcCBvbiB0aGlzIGVsZW1lbnRcclxuICAgICAqL1xyXG4gIGRyb3BFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGVmZmVjdFxyXG4gICAgICovXHJcbiAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBjdXJzb3JcclxuICAgICAqL1xyXG4gIGVmZmVjdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzdHJpY3QgcGxhY2VzIHdoZXJlIGEgZHJhZ2dhYmxlIGVsZW1lbnQgY2FuIGJlIGRyb3BwZWQuIEVpdGhlciBvbmUgb2ZcclxuICAgICAqIHRoZXNlIHR3byBtZWNoYW5pc21zIGNhbiBiZSB1c2VkOlxyXG4gICAgICpcclxuICAgICAqIC0gZHJvcFpvbmVzOiBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgcGVybWl0cyB0byBzcGVjaWZ5IHRoZSBkcm9wIHpvbmVzXHJcbiAgICAgKiAgIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbXBvbmVudC4gQnkgZGVmYXVsdCwgaWYgdGhlIGRyb3Atem9uZXMgYXR0cmlidXRlXHJcbiAgICAgKiAgIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBkcm9wcGFibGUgY29tcG9uZW50IGFjY2VwdHMgZHJvcCBvcGVyYXRpb25zIGJ5XHJcbiAgICAgKiAgIGFsbCB0aGUgZHJhZ2dhYmxlIGNvbXBvbmVudHMgdGhhdCBkbyBub3Qgc3BlY2lmeSB0aGUgYWxsb3dlZC1kcm9wLXpvbmVzXHJcbiAgICAgKlxyXG4gICAgICogLSBhbGxvd0Ryb3A6IGEgYm9vbGVhbiBmdW5jdGlvbiBmb3IgZHJvcHBhYmxlIGNvbXBvbmVudHMsIHRoYXQgaXMgY2hlY2tlZFxyXG4gICAgICogICB3aGVuIGFuIGl0ZW0gaXMgZHJhZ2dlZC4gVGhlIGZ1bmN0aW9uIGlzIHBhc3NlZCB0aGUgZHJhZ0RhdGEgb2YgdGhpc1xyXG4gICAgICogICBpdGVtLlxyXG4gICAgICogICAtIGlmIGl0IHJldHVybnMgdHJ1ZSwgdGhlIGl0ZW0gY2FuIGJlIGRyb3BwZWQgaW4gdGhpcyBjb21wb25lbnRcclxuICAgICAqICAgLSBpZiBpdCByZXR1cm5zIGZhbHNlLCB0aGUgaXRlbSBjYW5ub3QgYmUgZHJvcHBlZCBoZXJlXHJcbiAgICAgKi9cclxuICBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xyXG5cclxuICBkcm9wWm9uZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZXJlIGlzIHRoZSBwcm9wZXJ0eSBkcmFnSW1hZ2UgeW91IGNhbiB1c2U6XHJcbiAgICAgKiAtIFRoZSBzdHJpbmcgdmFsdWUgYXMgdXJsIHRvIHRoZSBpbWFnZVxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCIvaW1hZ2VzL3NpbXBsZXIucG5nXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqIC0gVGhlIERyYWdJbWFnZSB2YWx1ZSB3aXRoIEltYWdlIGFuZCBvcHRpb25hbCBvZmZzZXQgYnkgeCBhbmQgeTpcclxuICAgICAqICAgbGV0IG15RHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSBuZXcgRHJhZ0ltYWdlKFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiwgMCwgMCk7XHJcbiAgICAgKiAuLi5cclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwibXlEcmFnSW1hZ2VcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgY3VzdG9tIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgdmFsdWUgb2YgZHJhZ0ltYWdlIHByb2dyYW1tYXRpY2FsbHk6XHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cImdldERyYWdJbWFnZShzb21lRGF0YSlcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogICBnZXREcmFnSW1hZ2UodmFsdWU6YW55KTogc3RyaW5nIHtcclxuICAgICAqICAgICByZXR1cm4gdmFsdWUgPyBcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIgOiBcIi9pbWFnZXMvc2ltcGxlcjIucG5nXCJcclxuICAgICAqICAgfVxyXG4gICAgICovXHJcbiAgZHJhZ0ltYWdlOiBzdHJpbmd8RHJhZ0ltYWdlfEZ1bmN0aW9uO1xyXG5cclxuICBjbG9uZUl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsIHB1YmxpYyBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5kZWZhdWx0Q3Vyc29yID0gdGhpcy5jb25maWcuZGVmYXVsdEN1cnNvcjtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRSZWZlcmVuY2UubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSB0aGlzLmRlZmF1bHRDdXJzb3I7ICAvLyBzZXQgZGVmYXVsdCBjdXJzb3Igb24gb3VyIGVsZW1lbnRcclxuXHJcbiAgICAvLyBSZWdpc3RlciBkcm9wIGV2ZW50c1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2VudGVyID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnRW50ZXIoZXZlbnQpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5kcmFnT3ZlcihldmVudCk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LmRhdGFUcmFuc2ZlcikpIHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuY29uZmlnLmRyb3BFZmZlY3QubmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdsZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJhZ0xlYXZlKGV2ZW50KTtcclxuICAgIHRoaXMuZWxlbWVudC5vbmRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyb3AoZXZlbnQpO1xyXG5cclxuXHJcbiAgICAvLyBSZWdpc3RlciBkcmFnIGV2ZW50c1xyXG4gICAgdGhpcy5lbGVtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnc3RhcnQgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCAmJiBpc1ByZXNlbnQodGhpcy5kcmFnSGFuZGxlKSkge1xyXG4gICAgICAgIGlmICghdGhpcy5kcmFnSGFuZGxlLmNvbnRhaW5zKHRoaXMudGFyZ2V0IGFzIEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5kYXRhVHJhbnNmZXIpKSB7XHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnJyk7XHJcbiAgICAgICAgLy8gQ2hhbmdlIGRyYWcgZWZmZWN0XHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLmVmZmVjdEFsbG93ZWQgfHwgdGhpcy5jb25maWcuZHJhZ0VmZmVjdC5uYW1lO1xyXG4gICAgICAgIC8vIENoYW5nZSBkcmFnIGltYWdlXHJcbiAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmRyYWdJbWFnZSkpIHtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHRoaXMuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoY3JlYXRlSW1hZ2UoPHN0cmluZz50aGlzLmRyYWdJbWFnZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShjYWxsRnVuY3Rpb24oPEZ1bmN0aW9uPnRoaXMuZHJhZ0ltYWdlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nOiBEcmFnSW1hZ2UgPSA8RHJhZ0ltYWdlPnRoaXMuZHJhZ0ltYWdlO1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoaW1nLmltYWdlRWxlbWVudCwgaW1nLnhfb2Zmc2V0LCBpbWcueV9vZmZzZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1ByZXNlbnQodGhpcy5jb25maWcuZHJhZ0ltYWdlKSkge1xyXG4gICAgICAgICAgICBsZXQgZHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSB0aGlzLmNvbmZpZy5kcmFnSW1hZ2U7XHJcbiAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGRyYWdJbWFnZS5pbWFnZUVsZW1lbnQsIGRyYWdJbWFnZS54X29mZnNldCwgZHJhZ0ltYWdlLnlfb2Zmc2V0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xvbmVJdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0hlbHBlciA9IDxIVE1MRWxlbWVudD50aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdIZWxwZXIuY2xhc3NMaXN0LmFkZCgnZG5kLWRyYWctaXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdIZWxwZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0hlbHBlci5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdIZWxwZXIuc3R5bGUubGVmdCA9IFwiLTEwMDBweFwiO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyYWdIZWxwZXIpO1xyXG4gICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZSh0aGlzLmRyYWdIZWxwZXIsIGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIGRyYWcgY3Vyc29yXHJcbiAgICAgICAgbGV0IGN1cnNvcmVsZW0gPSAodGhpcy5fZHJhZ0hhbmRsZSkgPyB0aGlzLl9kcmFnSGFuZGxlIDogdGhpcy5lbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgY3Vyc29yZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLmVmZmVjdEN1cnNvciA/IHRoaXMuZWZmZWN0Q3Vyc29yIDogdGhpcy5jb25maWcuZHJhZ0N1cnNvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuZGVmYXVsdEN1cnNvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2VuZCA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgdGhpcy5kcmFnSGVscGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZHJhZ0hlbHBlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbmQnLCBldmVudC50YXJnZXQpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuZChldmVudCk7XHJcbiAgICAgICAgLy8gUmVzdG9yZSBzdHlsZSBvZiBkcmFnZ2VkIGVsZW1lbnRcclxuICAgICAgICBsZXQgY3Vyc29yZWxlbSA9ICh0aGlzLl9kcmFnSGFuZGxlKSA/IHRoaXMuX2RyYWdIYW5kbGUgOiB0aGlzLmVsZW1lbnQ7XHJcbiAgICAgICAgY3Vyc29yZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLmRlZmF1bHRDdXJzb3I7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRyYWdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kcmFnRW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdIYW5kbGUoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdIYW5kbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgZHJhZ0hhbmRsZSh2YWx1ZTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuX2RyYWdIYW5kbGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG1hbnVhbGx5IHRvIGZpeCBhbiBpc3N1ZSBpbiBTYWZhcmkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBkZXRlY3RDaGFuZ2VzKCkge1xyXG4gICAgICAgIC8vIFByb2dyYW1tYXRpY2FsbHkgcnVuIGNoYW5nZSBkZXRlY3Rpb24gdG8gZml4IGlzc3VlIGluIFNhZmFyaVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNkciAmJiAhKHRoaXMuY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjUwKTtcclxuICB9XHJcblxyXG4gICAgLy8qKioqKiogRHJvcHBhYmxlICoqKioqKiovL1xyXG4gIHByaXZhdGUgZHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5kcmFnRW50ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgb3ZlciB0aGUgc2FtZSBzb3VyY2UgZWxlbWVudCAtIGRvIG5vdGhpbmdcclxuICAgICAgaWYgKGlzUHJlc2VudChldmVudC5wcmV2ZW50RGVmYXVsdCkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRyYWdPdmVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMuZHJhZ092ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgICAvLyBOZWNlc3NhcnkuIEFsbG93cyB1cyB0byBkcm9wLlxyXG4gICAgICAgIHRoaXMucHJldmVudEFuZFN0b3AoZXZlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmRyb3BDYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRHJvcEFsbG93ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpKSAmJiB0aGlzLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIC8vIEZpcnN0LCBpZiBgYWxsb3dEcm9wYCBpcyBzZXQsIGNhbGwgaXQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlXHJcbiAgICAgICAgICAgIC8vIGRyYWdnZWQgZWxlbWVudCBjYW4gYmUgZHJvcHBlZCBoZXJlLlxyXG4gICAgICBpZiAoaXNQcmVzZW50KHRoaXMuYWxsb3dEcm9wKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93RHJvcCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE90aGVyd2lzZSwgdXNlIGRyb3Bab25lcyBpZiB0aGV5IGFyZSBzZXQuXHJcbiAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5sZW5ndGggPT09IDAgJiYgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBkcm9wWm9uZSBvZiB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmVzLmluZGV4T2YoZHJvcFpvbmUpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXZlbnQgdGhlIGdpdmVuIGV2ZW50cyBkZWZhdWx0IGFjdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCBhbmQgc3RvcHMgaXQgZnJvbSBiZWluZyBwcm9wYWdhdGVkIGZ1cnRoZXIuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgQWJzdHJhY3REaXJlY3RpdmVcclxuICAgKi9cclxuICBwcml2YXRlIHByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSB0aGlzLmRyb3Bab25lcztcclxuICAgICAgdGhpcy5kcmFnU3RhcnRDYWxsYmFjayhldmVudCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBGaXhlZCBkcmFnRGF0YSBvZiBuZXN0ZWQgZHJhZ2dhYmxlIGVsZW1lbnQuXHJcbiAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnRW5kKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IFtdO1xyXG4gICAgdGhpcy5kcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xyXG4gIH1cclxuICBkcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnTGVhdmVDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3Bab25lcycpXHJcbiAgc2V0IGRyb3B6b25lcyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZHJhZ0ltYWdlOiBzdHJpbmd8RHJhZ0ltYWdlfEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIGNsb25lSXRlbTogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdTdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgdGhpcy5kZWZhdWx0Q3Vyc29yID0gdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvcjtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ1N0YXJ0Q2xhc3MpO1xyXG4gICAgdGhpcy5vbkRyYWdFbmQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0SGFuZGxlRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuaW1wb3J0IHtEcmFnZ2FibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3IgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZS1oYW5kbGUnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIGRpcmVjdGl2ZTogRHJhZ2dhYmxlRGlyZWN0aXZlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmZXJlbmNlLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgZGlyZWN0aXZlLCBjZHIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wRGF0YX0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcm9wcGFibGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcm9wRW5hYmxlZCcpXHJcbiAgc2V0IGRyb3BwYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FsbG93RHJvcCcpXHJcbiAgc2V0IGFsbG93ZHJvcCh2YWx1ZTogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWxsb3dEcm9wID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3Bab25lcycpXHJcbiAgc2V0IGRyb3B6b25lcyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIG9uRHJvcFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsXHJcbiAgICAgIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLFxyXG4gICAgICBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjaGFuZ2VEZXRlY3Rvcik7XHJcblxyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmFnRW50ZXJDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgICAgdGhpcy5vbkRyYWdFbnRlci5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCh0aGlzLmNvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpKTtcclxuICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLm9uRHJhZ0xlYXZlLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3BDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gKGV2ZW50IGFzIGFueSkuZGF0YVRyYW5zZmVyO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGlzUHJlc2VudChkYXRhVHJhbnNmZXIpICYmIGlzUHJlc2VudChkYXRhVHJhbnNmZXIuZmlsZXMpKSkge1xyXG4gICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3MuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcbmltcG9ydCB7U29ydGFibGVBcnJheUhhbmRsZXIsIFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcn0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3Igbm8tb3V0cHV0LW9uLXByZWZpeCAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtY29udGFpbmVyXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zb3J0YWJsZURhdGE6IEFycmF5PGFueT58Rm9ybUFycmF5ID0gW107XHJcbiAgcHJpdmF0ZSBzb3J0YWJsZUhhbmRsZXI6IFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcnxTb3J0YWJsZUFycmF5SGFuZGxlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc29ydGFibGVEYXRhKHNvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkpIHtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YSA9IHNvcnRhYmxlRGF0YTtcclxuICAgIGlmIChzb3J0YWJsZURhdGEgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcclxuICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIgPSBuZXcgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUFycmF5SGFuZGxlcigpO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGVjdGlvbiBpcyBjaGFuZ2VkLCBkcm9wIGVuYWJsZWQ6IFwiICsgdGhpcy5kcm9wRW5hYmxlZCk7XHJcbiAgfVxyXG4gIGdldCBzb3J0YWJsZURhdGEoKTogQXJyYXk8YW55PnxGb3JtQXJyYXkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSkge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICBjb25zdCBpdGVtOiBhbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgLy8gQ2hlY2sgZG9lcyBlbGVtZW50IGV4aXN0IGluIHNvcnRhYmxlRGF0YSBvZiB0aGlzIENvbnRhaW5lclxyXG4gICAgICBpZiAodGhpcy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgIC8vIExldCdzIGFkZCBpdFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb250YWluZXIuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgudG9TdHJpbmcoKSArICddXHJcbiAgICAgICAgLy8gb3ZlciBwYXJlbnQgbm9kZScpOyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuX3NvcnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBuZXcgbGlzdFxyXG4gICAgICAgIHRoaXMuaW5zZXJ0SXRlbUF0KGl0ZW0sIDApO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5kZXhPZihpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGVIYW5kbGVyLmluZGV4T2YodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5pbnNlcnRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtLCBpbmRleCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Fic3RyYWN0JztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS1jb250YWluZXIuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4IG5vLW91dHB1dC1yZW5hbWUgbm8taW5wdXQtcmVuYW1lICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3REaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgnc29ydGFibGVJbmRleCcpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgnZHJhZ0VuYWJsZWQnKVxyXG4gIHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkcm9wRW5hYmxlZCcpXHJcbiAgc2V0IGRyb3BwYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0YSB0aGF0IGhhcyB0byBiZSBkcmFnZ2VkLiBJdCBjYW4gYmUgYW55IEpTIG9iamVjdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgKi9cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBlZmZlY3QgY3Vyc29yXHJcbiAgICovXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cclxuICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ29uRHJhZ1N1Y2Nlc3MnKSBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ29uRHJhZ1N0YXJ0Jykgb25EcmFnU3RhcnRDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCdvbkRyYWdPdmVyJykgb25EcmFnT3ZlckNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJhZ0VuZCcpIG9uRHJhZ0VuZENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJvcFN1Y2Nlc3MnKSBvbkRyb3BTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBfc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSxcclxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3Bab25lcztcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnU3RhcnRDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgIC8vIEFkZCBkcmFnRGF0YVxyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gdGhpcy5kcmFnRGF0YTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgLy9cclxuICAgIHRoaXMub25EcmFnU3RhcnRDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgJiYgdGhpcy5lbGVtZW50ICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmVsZW1lbnQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdPdmVyQ2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdFbmRDYWxsYmFjay4gZW5kIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gbnVsbDtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKG51bGwpO1xyXG4gICAgLy8gQWRkIGRyYWdHYXRhXHJcbiAgICAvL0ZpeCBkcmFnIGVuZCBjYWxsYmFjayB0byBlbWl0IGRyYWdEYXRhXHJcbiAgICBjb25zdCBkcmFnRGF0YSA9IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgLy9cclxuICAgIHRoaXMub25EcmFnRW5kQ2FsbGJhY2suZW1pdChkcmFnRGF0YSk7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICBpZiAoKHRoaXMuaW5kZXggIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpIHx8XHJcbiAgICAgICAgICAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEgIT09IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcG9uZW50Ll9vbkRyYWdFbnRlckNhbGxiYWNrLiBkcmFnIG5vZGUgWycgKyB0aGlzLmluZGV4ICsgJ10gb3ZlciBub2RlIFsnICtcclxuICAgICAgICAvLyB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ICsgJ10nKTsgR2V0IGl0ZW1cclxuICAgICAgICBjb25zdCBpdGVtOiBhbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuaW5zZXJ0SXRlbUF0KGl0ZW0sIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCkge1xyXG4gICAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25Ecm9wQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ29uRHJvcENhbGxiYWNrLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5kcmFnRGF0YScsIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgdGhpcy5vbkRyb3BTdWNjZXNzQ2FsbGJhY2suZW1pdCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBSZWZyZXNoIGNoYW5nZXMgaW4gcHJvcGVydGllcyBvZiBjb250YWluZXIgY29tcG9uZW50XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RIYW5kbGVEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QvYWJzdHJhY3QtaGFuZGxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7U29ydGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc29ydGFibGUuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtaGFuZGxlXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVIYW5kbGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLCBfQ29tcG9uZW50OiBTb3J0YWJsZURpcmVjdGl2ZSxcclxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIF9Db21wb25lbnQsIGNkcik7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZHJhZy1kcm9wLWNvbmZpZyc7XHJcbmltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9kcmFnLWRyb3AvZHJhZy1kcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZS5mYWN0b3J5JztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UuZmFjdG9yeSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZSwgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBTb3J0YWJsZURpcmVjdGl2ZSwgU29ydGFibGVIYW5kbGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IERyb3BwYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcHBhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9hYnN0cmFjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7XHJcblxyXG5leHBvcnQgbGV0IHByb3ZpZGVycyA9IFtcclxuICAgIERyYWdEcm9wQ29uZmlnLFxyXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSxcclxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeSwgZGVwczogW0RyYWdEcm9wQ29uZmlnXSB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBEcmFnZ2FibGVEaXJlY3RpdmUsIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSwgRHJvcHBhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSwgU29ydGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG5kTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRG5kTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJ0c2xpYl8xLl9fdmFsdWVzIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJFdmVudEVtaXR0ZXIiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkZvcm1BcnJheSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQU1JLDRCQUFtQixJQUFZO1lBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtTQUFLO2tDQUx0QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztrQ0FD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