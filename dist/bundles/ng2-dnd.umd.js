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
                if (isPresent(event.dataTransfer)) ;
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
                this.dragDropService.isDragged = false;
                this.dragDropService.dragData = null;
                this.dragDropService.onDragSuccessCallback = null;
                //
                this.onDragEndCallback.emit(this.dragDropService.dragData);
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

    exports.providers = providers;
    exports.DndModule = DndModule;
    exports.AbstractHandleDirective = AbstractHandleDirective;
    exports.AbstractDirective = AbstractDirective;
    exports.DataTransferEffect = DataTransferEffect;
    exports.DragDropConfig = DragDropConfig;
    exports.DragImage = DragImage;
    exports.DraggableHandleDirective = DraggableHandleDirective;
    exports.DraggableDirective = DraggableDirective;
    exports.DroppableDirective = DroppableDirective;
    exports.SortableContainerDirective = SortableContainerDirective;
    exports.SortableHandleDirective = SortableHandleDirective;
    exports.SortableDirective = SortableDirective;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRuZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nMi1kbmQvc3JjL2NvbmZpZy9kYXRhLXRyYW5zZmVyLWVmZmVjdC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RyYWctZHJvcC1jb25maWcudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZS5mYWN0b3J5LnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL2lzLXN0cmluZy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RyYWctaW1hZ2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvaXMtcHJlc2VudC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9zb3J0YWJsZS1hcnJheS1oYW5kbGVyLnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL3NvcnRhYmxlLWZvcm0tYXJyYXktaGFuZGxlci50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlLmZhY3RvcnkudHMiLG51bGwsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2RyYWdnYWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtY29udGFpbmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuICAgIHN0YXRpYyBDT1BZID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnY29weScpO1xyXG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XHJcbiAgICBzdGF0aWMgTU9WRSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ21vdmUnKTtcclxuICAgIHN0YXRpYyBOT05FID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRyYW5zZmVyRWZmZWN0fSBmcm9tICcuL2RhdGEtdHJhbnNmZXItZWZmZWN0JztcclxuaW1wb3J0IHtEcmFnSW1hZ2V9IGZyb20gJy4vZHJhZy1pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctc3RhcnQnO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9ICdkbmQtZHJhZy1lbnRlcic7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctb3Zlcic7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gJ2RuZC1zb3J0YWJsZS1kcmFnJztcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gJ21vdmUnO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9ICdwb2ludGVyJztcclxufSIsImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgYWxsb3dlZERyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gIGRyYWdEYXRhOiBhbnk7XHJcbiAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWwvaXMtc3RyaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGltYWdlRWxlbWVudDogYW55LCBwdWJsaWMgeF9vZmZzZXQ6IG51bWJlciA9IDAsIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Njcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD50aGlzLmltYWdlRWxlbWVudCkuc3JjID0gaW1nU2NyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59IiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3Qgbm90IHVuZGVmaW5lZCBvciBudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVBcnJheUhhbmRsZXIge1xyXG4gIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhW2luZGV4XTtcclxuICB9XHJcblxyXG4gIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmluZGV4T2YoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyIHtcclxuICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5hdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzb3J0YWJsZURhdGEucmVtb3ZlQXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXN0IGVsZW1ldCB0aGF0IHdhcyBtYXJrZWQgc29ydGFibGUuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlO1xyXG5cclxuICBpc0RyYWdnZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgRHJhZ0Ryb3BDb25maWcuXHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IERyYWdEcm9wQ29uZmlnKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgdGhhdCB3YXMgbWFya2VkIHNvcnRhYmxlLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ25zIHRoZSBgb25Tb3J0YWJsZURyYWdDbGFzc2AgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZSBUaGUgZWxlbWVudCB0byBhc3NpZ24gdGhlIENTUyBjbGFzcyB0by5cclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBtYXJrU29ydGFibGUoZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ByZXNlbnQoZSkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IGU7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2RyYWctZHJvcC1jb25maWdcIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeShjb25maWc6IERyYWdEcm9wQ29uZmlnKTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UoY29uZmlnKTtcclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZSc7XHJcbmltcG9ydCB7QWJzdHJhY3REaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZSB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLCBwdWJsaWMgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBwcml2YXRlIGRpcmVjdGl2ZTogQWJzdHJhY3REaXJlY3RpdmUsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5kaXJlY3RpdmUuZHJhZ0hhbmRsZSA9IHRoaXMuZWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgVmlld1JlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcclxuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4uLy4uL3V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RGlyZWN0aXZlIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIF9kcmFnSGFuZGxlOiBIVE1MRWxlbWVudDtcclxuICBkcmFnSGVscGVyOiBIVE1MRWxlbWVudDtcclxuICBkZWZhdWx0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gIHRhcmdldDogRXZlbnRUYXJnZXQ7XHJcblxyXG4gIHByaXZhdGUgX2RyYWdFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgZHJvcEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xyXG5cclxuICBlZmZlY3RDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgZHJvcFpvbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xyXG5cclxuICBkcmFnSW1hZ2U6IHN0cmluZ3xEcmFnSW1hZ2V8RnVuY3Rpb247XHJcblxyXG4gIGNsb25lSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgcHVibGljIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDdXJzb3IgPSB0aGlzLmNvbmZpZy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvciA9IHRoaXMuZGVmYXVsdEN1cnNvcjtcclxuXHJcbiAgICAvLyBSZWdpc3RlciBkcm9wIGV2ZW50c1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2VudGVyID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnRW50ZXIoZXZlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ2xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5kcmFnTGVhdmUoZXZlbnQpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJvcCA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJvcChldmVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uZHJhZ292ZXIgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYWdPdmVyKGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQuZGF0YVRyYW5zZmVyKSkge1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5jb25maWcuZHJvcEVmZmVjdC5uYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRyYWcgZXZlbnRzXHJcbiAgICB0aGlzLmVsZW1lbnQub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdzdGFydCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5kcmFnSGFuZGxlKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGUuY29udGFpbnModGhpcy50YXJnZXQgYXMgRWxlbWVudCkpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRyYWdTdGFydChldmVudCk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LmRhdGFUcmFuc2ZlcikpIHtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBkcmFnRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCBkcmFnRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZHJhZ0VuYWJsZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkcmFnSGFuZGxlKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnSGFuZGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRyYWdIYW5kbGUodmFsdWU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9kcmFnSGFuZGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUnVuIGNoYW5nZSBkZXRlY3Rpb24gbWFudWFsbHkgdG8gZml4IGFuIGlzc3VlIGluIFNhZmFyaS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBBYnN0cmFjdERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RyICYmICEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyNTApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLmRyYWdFbnRlckNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ092ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LnByZXZlbnREZWZhdWx0KSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRyYWdPdmVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnTGVhdmUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICB0aGlzLmRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJvcChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMucHJldmVudEFuZFN0b3AoZXZlbnQpO1xyXG5cclxuICAgICAgdGhpcy5kcm9wQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IHRoaXMuZHJvcFpvbmVzO1xyXG4gICAgICB0aGlzLmRyYWdTdGFydENhbGxiYWNrKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0VuZChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSBbXTtcclxuICAgIHRoaXMuZHJhZ0VuZENhbGxiYWNrKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEcm9wQWxsb3dlZChldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykpICYmIHRoaXMuZHJvcEVuYWJsZWQpIHtcclxuICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmFsbG93RHJvcCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0Ryb3AodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5kcm9wWm9uZXMubGVuZ3RoID09PSAwICYmIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZHJvcFpvbmUgb2YgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcykge1xyXG4gICAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5pbmRleE9mKGRyb3Bab25lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBQcmV2ZW50IHRoZSBnaXZlbiBldmVudHMgZGVmYXVsdCBhY3Rpb24gZnJvbSBiZWluZyBjYWxsZWQgYW5kIHN0b3BzIGl0IGZyb20gYmVpbmcgcHJvcGFnYXRlZCBmdXJ0aGVyLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIEFic3RyYWN0RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwcmV2ZW50QW5kU3RvcChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnTGVhdmVDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3Bab25lcycpXHJcbiAgc2V0IGRyb3B6b25lcyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZHJhZ0ltYWdlOiBzdHJpbmd8RHJhZ0ltYWdlfEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIGNsb25lSXRlbTogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdTdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgdGhpcy5kZWZhdWx0Q3Vyc29yID0gdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvcjtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ1N0YXJ0Q2xhc3MpO1xyXG4gICAgdGhpcy5vbkRyYWdFbmQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0SGFuZGxlRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuaW1wb3J0IHtEcmFnZ2FibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3IgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZS1oYW5kbGUnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIGRpcmVjdGl2ZTogRHJhZ2dhYmxlRGlyZWN0aXZlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmZXJlbmNlLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgZGlyZWN0aXZlLCBjZHIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wRGF0YX0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcm9wcGFibGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcm9wRW5hYmxlZCcpXHJcbiAgc2V0IGRyb3BwYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FsbG93RHJvcCcpXHJcbiAgc2V0IGFsbG93ZHJvcCh2YWx1ZTogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWxsb3dEcm9wID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3Bab25lcycpXHJcbiAgc2V0IGRyb3B6b25lcyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIG9uRHJvcFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsXHJcbiAgICAgIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLFxyXG4gICAgICBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjaGFuZ2VEZXRlY3Rvcik7XHJcblxyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmFnRW50ZXJDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgICAgdGhpcy5vbkRyYWdFbnRlci5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCh0aGlzLmNvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpKTtcclxuICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLm9uRHJhZ0xlYXZlLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3BDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gKGV2ZW50IGFzIGFueSkuZGF0YVRyYW5zZmVyO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGlzUHJlc2VudChkYXRhVHJhbnNmZXIpICYmIGlzUHJlc2VudChkYXRhVHJhbnNmZXIuZmlsZXMpKSkge1xyXG4gICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3MuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcbmltcG9ydCB7U29ydGFibGVBcnJheUhhbmRsZXIsIFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcn0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3Igbm8tb3V0cHV0LW9uLXByZWZpeCAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtY29udGFpbmVyXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zb3J0YWJsZURhdGE6IEFycmF5PGFueT58Rm9ybUFycmF5ID0gW107XHJcbiAgcHJpdmF0ZSBzb3J0YWJsZUhhbmRsZXI6IFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcnxTb3J0YWJsZUFycmF5SGFuZGxlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc29ydGFibGVEYXRhKHNvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkpIHtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YSA9IHNvcnRhYmxlRGF0YTtcclxuICAgIGlmIChzb3J0YWJsZURhdGEgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcclxuICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIgPSBuZXcgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUFycmF5SGFuZGxlcigpO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGVjdGlvbiBpcyBjaGFuZ2VkLCBkcm9wIGVuYWJsZWQ6IFwiICsgdGhpcy5kcm9wRW5hYmxlZCk7XHJcbiAgfVxyXG4gIGdldCBzb3J0YWJsZURhdGEoKTogQXJyYXk8YW55PnxGb3JtQXJyYXkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSkge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICBjb25zdCBpdGVtOiBhbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgLy8gQ2hlY2sgZG9lcyBlbGVtZW50IGV4aXN0IGluIHNvcnRhYmxlRGF0YSBvZiB0aGlzIENvbnRhaW5lclxyXG4gICAgICBpZiAodGhpcy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgIC8vIExldCdzIGFkZCBpdFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb250YWluZXIuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgudG9TdHJpbmcoKSArICddXHJcbiAgICAgICAgLy8gb3ZlciBwYXJlbnQgbm9kZScpOyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuX3NvcnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBuZXcgbGlzdFxyXG4gICAgICAgIHRoaXMuaW5zZXJ0SXRlbUF0KGl0ZW0sIDApO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5kZXhPZihpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGVIYW5kbGVyLmluZGV4T2YodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5pbnNlcnRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtLCBpbmRleCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Fic3RyYWN0JztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS1jb250YWluZXIuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4IG5vLW91dHB1dC1yZW5hbWUgbm8taW5wdXQtcmVuYW1lICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3REaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgnc29ydGFibGVJbmRleCcpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgnZHJhZ0VuYWJsZWQnKVxyXG4gIHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkcm9wRW5hYmxlZCcpXHJcbiAgc2V0IGRyb3BwYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0YSB0aGF0IGhhcyB0byBiZSBkcmFnZ2VkLiBJdCBjYW4gYmUgYW55IEpTIG9iamVjdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgKi9cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBlZmZlY3QgY3Vyc29yXHJcbiAgICovXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cclxuICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ29uRHJhZ1N1Y2Nlc3MnKSBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ29uRHJhZ1N0YXJ0Jykgb25EcmFnU3RhcnRDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCdvbkRyYWdPdmVyJykgb25EcmFnT3ZlckNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJhZ0VuZCcpIG9uRHJhZ0VuZENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJvcFN1Y2Nlc3MnKSBvbkRyb3BTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBfc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSxcclxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3Bab25lcztcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnU3RhcnRDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgIC8vIEFkZCBkcmFnRGF0YVxyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gdGhpcy5kcmFnRGF0YTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgLy9cclxuICAgIHRoaXMub25EcmFnU3RhcnRDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgJiYgdGhpcy5lbGVtZW50ICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmVsZW1lbnQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdPdmVyQ2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdFbmRDYWxsYmFjay4gZW5kIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gbnVsbDtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKG51bGwpO1xyXG4gICAgLy8gQWRkIGRyYWdHYXRhXHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAvL1xyXG4gICAgdGhpcy5vbkRyYWdFbmRDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIGlmICgodGhpcy5pbmRleCAhPT0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCkgfHxcclxuICAgICAgICAgICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSAhPT0gdGhpcy5fc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuaW5kZXggKyAnXSBvdmVyIG5vZGUgWycgK1xyXG4gICAgICAgIC8vIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggKyAnXScpOyBHZXQgaXRlbVxyXG4gICAgICAgIGNvbnN0IGl0ZW06IGFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gbmV3IGxpc3RcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5pbnNlcnRJdGVtQXQoaXRlbSwgdGhpcy5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9vbkRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTb3J0YWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS5kaXJlY3RpdmUnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgZGlyZWN0aXZlLXNlbGVjdG9yICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1oYW5kbGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIF9Db21wb25lbnQ6IFNvcnRhYmxlRGlyZWN0aXZlLFxyXG4gICAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgX0NvbXBvbmVudCwgY2RyKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kcmFnLWRyb3AtY29uZmlnJztcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZSc7XHJcbmltcG9ydCB7IGRyYWdEcm9wU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLmZhY3RvcnknO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZS5mYWN0b3J5JztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXNcIjtcclxuXHJcbi8vIGltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgRHJvcHBhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9hYnN0cmFjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnJztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9kcmFnZ2FibGUuY29tcG9uZW50JztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9kcm9wcGFibGUuY29tcG9uZW50JztcclxuLy8gZXhwb3J0ICogZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMnO1xyXG5cclxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbXHJcbiAgICBEcmFnRHJvcENvbmZpZyxcclxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5IH0sXHJcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiBkcmFnRHJvcFNvcnRhYmxlU2VydmljZUZhY3RvcnksIGRlcHM6IFtEcmFnRHJvcENvbmZpZ10gfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuLy8gICBkZWNsYXJhdGlvbnM6IFtcclxuLy8gICAgICAgRHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQsIERyb3BwYWJsZUNvbXBvbmVudCwgU29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudFxyXG4vLyAgIF0sXHJcbi8vICAgZXhwb3J0cyA6IFtcclxuLy8gICAgICAgIERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnRcclxuLy8gICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBEcmFnZ2FibGVEaXJlY3RpdmUsIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSwgRHJvcHBhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZSwgU29ydGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlSGFuZGxlRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRG5kTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRG5kTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJ0c2xpYl8xLl9fdmFsdWVzIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJFdmVudEVtaXR0ZXIiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkZvcm1BcnJheSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQU1JLDRCQUFtQixJQUFZO1lBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtTQUFLO2tDQUx0QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztrQ0FDOUIsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7a0NBQzlCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDO2tDQUM5QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztpQ0FKaEQ7Ozs7Ozs7QUNBQTs7b0NBT3NDLGdCQUFnQjtvQ0FDaEIsZ0JBQWdCO21DQUNqQixlQUFlO3VDQUNYLG1CQUFtQjs4QkFFaEIsa0JBQWtCLENBQUMsSUFBSTs4QkFDdkIsa0JBQWtCLENBQUMsSUFBSTs4QkFDbkMsTUFBTTtpQ0FFSCxTQUFTOzs7b0JBWDNDQSxhQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7NkJBTGhDOzs7Ozs7O0FDQUE7O29DQUsrQixFQUFFOzs7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