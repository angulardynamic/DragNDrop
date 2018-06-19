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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRuZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nMi1kbmQvc3JjL2NvbmZpZy9kYXRhLXRyYW5zZmVyLWVmZmVjdC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RyYWctZHJvcC1jb25maWcudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wL2RyYWctZHJvcC5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZS5mYWN0b3J5LnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL2lzLXN0cmluZy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvY29uZmlnL2RyYWctaW1hZ2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3V0aWwvaXMtcHJlc2VudC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvdXRpbC9zb3J0YWJsZS1hcnJheS1oYW5kbGVyLnRzIiwibmc6Ly9uZzItZG5kL3NyYy91dGlsL3NvcnRhYmxlLWZvcm0tYXJyYXktaGFuZGxlci50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UudHMiLCJuZzovL25nMi1kbmQvc3JjL3NlcnZpY2UvZHJhZy1kcm9wLXNvcnRhYmxlL2RyYWctZHJvcC1zb3J0YWJsZS5zZXJ2aWNlLmZhY3RvcnkudHMiLG51bGwsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdC9hYnN0cmFjdC1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2RyYWdnYWJsZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kaXJlY3RpdmVzL2Ryb3BwYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtY29udGFpbmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZGlyZWN0aXZlcy9zb3J0YWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kbmQvc3JjL2RpcmVjdGl2ZXMvc29ydGFibGUtaGFuZGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuICAgIHN0YXRpYyBDT1BZID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnY29weScpO1xyXG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XHJcbiAgICBzdGF0aWMgTU9WRSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ21vdmUnKTtcclxuICAgIHN0YXRpYyBOT05FID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59IiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRyYW5zZmVyRWZmZWN0fSBmcm9tICcuL2RhdGEtdHJhbnNmZXItZWZmZWN0JztcclxuaW1wb3J0IHtEcmFnSW1hZ2V9IGZyb20gJy4vZHJhZy1pbWFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctc3RhcnQnO1xyXG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9ICdkbmQtZHJhZy1lbnRlcic7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSAnZG5kLWRyYWctb3Zlcic7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gJ2RuZC1zb3J0YWJsZS1kcmFnJztcclxuXHJcbiAgICBwdWJsaWMgZHJhZ0VmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJvcEVmZmVjdDogRGF0YVRyYW5zZmVyRWZmZWN0ID0gRGF0YVRyYW5zZmVyRWZmZWN0Lk1PVkU7XHJcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gJ21vdmUnO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9ICdwb2ludGVyJztcclxufSIsImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEcmFnRHJvcERhdGF9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wU2VydmljZSB7XHJcbiAgYWxsb3dlZERyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuICBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+O1xyXG4gIGRyYWdEYXRhOiBhbnk7XHJcbiAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcbiIsImltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gXCIuL2RyYWctZHJvcC5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTZXJ2aWNlKCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcclxufVxyXG4iLCJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWwvaXMtc3RyaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnSW1hZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGltYWdlRWxlbWVudDogYW55LCBwdWJsaWMgeF9vZmZzZXQ6IG51bWJlciA9IDAsIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Njcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD50aGlzLmltYWdlRWxlbWVudCkuc3JjID0gaW1nU2NyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59IiwiLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3Qgbm90IHVuZGVmaW5lZCBvciBudWxsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQcmVzZW50KG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVBcnJheUhhbmRsZXIge1xyXG4gIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhW2luZGV4XTtcclxuICB9XHJcblxyXG4gIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmluZGV4T2YoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyIHtcclxuICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5hdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzb3J0YWJsZURhdGEucmVtb3ZlQXQoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcyc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXN0IGVsZW1ldCB0aGF0IHdhcyBtYXJrZWQgc29ydGFibGUuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlO1xyXG5cclxuICBpc0RyYWdnZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuICAvKipcclxuICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UuXHJcbiAgICogQHBhcmFtIGNvbmZpZyBUaGUgRHJhZ0Ryb3BDb25maWcuXHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IERyYWdEcm9wQ29uZmlnKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgdGhhdCB3YXMgbWFya2VkIHNvcnRhYmxlLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQG1lbWJlcm9mIERyYWdEcm9wU29ydGFibGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ25zIHRoZSBgb25Tb3J0YWJsZURyYWdDbGFzc2AgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZSBUaGUgZWxlbWVudCB0byBhc3NpZ24gdGhlIENTUyBjbGFzcyB0by5cclxuICAgKiBAbWVtYmVyb2YgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VcclxuICAgKi9cclxuICBtYXJrU29ydGFibGUoZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1ByZXNlbnQoZSkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudCA9IGU7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vblNvcnRhYmxlRHJhZ0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2RyYWctZHJvcC1jb25maWdcIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgfSBmcm9tIFwiLi9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeShjb25maWc6IERyYWdEcm9wQ29uZmlnKTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgIHtcclxuICAgIHJldHVybiBuZXcgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UoY29uZmlnKTtcclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWJzdHJhY3REaXJlY3RpdmUgfSBmcm9tICcuL2Fic3RyYWN0LmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RIYW5kbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgcHVibGljIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBkaXJlY3RpdmU6IEFic3RyYWN0RGlyZWN0aXZlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRSZWZlcmVuY2UubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZGlyZWN0aXZlLmRyYWdIYW5kbGUgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGlyZWN0aXZlLmRyYWdIYW5kbGUgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIFZpZXdSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZywgRHJhZ0ltYWdlfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZSc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgXHJcbiAgcHJpdmF0ZSBfZHJhZ0hhbmRsZTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgZHJhZ0hlbHBlcjogSFRNTEVsZW1lbnQ7XHJcbiAgZGVmYXVsdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG5cclxuICBwcml2YXRlIF9kcmFnRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGRyb3BFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGVmZmVjdEFsbG93ZWQ6IHN0cmluZztcclxuXHJcbiAgZWZmZWN0Q3Vyc29yOiBzdHJpbmc7XHJcblxyXG4gIGRyb3Bab25lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgYWxsb3dEcm9wOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbjtcclxuXHJcbiAgZHJhZ0ltYWdlOiBzdHJpbmd8RHJhZ0ltYWdlfEZ1bmN0aW9uO1xyXG5cclxuICBjbG9uZUl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsIHB1YmxpYyBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgcHVibGljIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5kZWZhdWx0Q3Vyc29yID0gdGhpcy5jb25maWcuZGVmYXVsdEN1cnNvcjtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRSZWZlcmVuY2UubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jdXJzb3IgPSB0aGlzLmRlZmF1bHRDdXJzb3I7XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgZHJvcCBldmVudHNcclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdlbnRlciA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJhZ0VudGVyKGV2ZW50KTtcclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdsZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHRoaXMuZHJhZ0xlYXZlKGV2ZW50KTtcclxuICAgIHRoaXMuZWxlbWVudC5vbmRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmRyb3AoZXZlbnQpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5kcmFnT3ZlcihldmVudCk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LmRhdGFUcmFuc2ZlcikpIHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuY29uZmlnLmRyb3BFZmZlY3QubmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSZWdpc3RlciBkcmFnIGV2ZW50c1xyXG4gICAgdGhpcy5lbGVtZW50Lm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub25kcmFnc3RhcnQgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCAmJiBpc1ByZXNlbnQodGhpcy5kcmFnSGFuZGxlKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGUuY29udGFpbnModGhpcy50YXJnZXQgYXMgRWxlbWVudCkpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRyYWdTdGFydChldmVudCk7XHJcblxyXG4gICAgICBpZiAoaXNQcmVzZW50KGV2ZW50LmRhdGFUcmFuc2ZlcikpIHtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBkcmFnRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIHNldCBkcmFnRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZHJhZ0VuYWJsZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkcmFnSGFuZGxlKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnSGFuZGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRyYWdIYW5kbGUodmFsdWU6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLl9kcmFnSGFuZGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSdW4gY2hhbmdlIGRldGVjdGlvbiBtYW51YWxseSB0byBmaXggYW4gaXNzdWUgaW4gU2FmYXJpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIEFic3RyYWN0RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgZGV0ZWN0Q2hhbmdlcygpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZHIgJiYgISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDI1MCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnT3ZlcihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIGlmIChpc1ByZXNlbnQoZXZlbnQucHJldmVudERlZmF1bHQpKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZHJhZ092ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYWdMZWF2ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0xlYXZlQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcChldmVudCk7XHJcblxyXG4gICAgICB0aGlzLmRyb3BDYWxsYmFjayhldmVudCk7XHJcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmFnU3RhcnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gdGhpcy5kcm9wWm9uZXM7XHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICBcclxuICAgICAgLy8gRml4ZWQgZHJhZ0RhdGEgb2YgbmVzdGVkIGRyYWdnYWJsZSBlbGVtZW50LlxyXG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhZ0VuZChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSBbXTtcclxuICAgIHRoaXMuZHJhZ0VuZENhbGxiYWNrKGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEcm9wQWxsb3dlZChldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykpICYmIHRoaXMuZHJvcEVuYWJsZWQpIHtcclxuICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmFsbG93RHJvcCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0Ryb3AodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5kcm9wWm9uZXMubGVuZ3RoID09PSAwICYmIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZHJvcFpvbmUgb2YgdGhpcy5kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcykge1xyXG4gICAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5pbmRleE9mKGRyb3Bab25lKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBQcmV2ZW50IHRoZSBnaXZlbiBldmVudHMgZGVmYXVsdCBhY3Rpb24gZnJvbSBiZWluZyBjYWxsZWQgYW5kIHN0b3BzIGl0IGZyb20gYmVpbmcgcHJvcGFnYXRlZCBmdXJ0aGVyLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIEFic3RyYWN0RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwcmV2ZW50QW5kU3RvcChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkcmFnTGVhdmVDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge31cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2V9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BEYXRhfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3Bab25lcycpXHJcbiAgc2V0IGRyb3B6b25lcyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZHJhZ0ltYWdlOiBzdHJpbmd8RHJhZ0ltYWdlfEZ1bmN0aW9uO1xyXG4gIEBJbnB1dCgpIGNsb25lSXRlbTogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdTdWNjZXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG4gICAgdGhpcy5kZWZhdWx0Q3Vyc29yID0gdGhpcy5lbGVtZW50LnN0eWxlLmN1cnNvcjtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZHJhZ1N0YXJ0Q2FsbGJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzO1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBkcmFnRW5kQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSBudWxsO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ1N0YXJ0Q2xhc3MpO1xyXG4gICAgdGhpcy5vbkRyYWdFbmQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0SGFuZGxlRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuaW1wb3J0IHtEcmFnZ2FibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3IgKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZS1oYW5kbGUnfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhhbmRsZURpcmVjdGl2ZSBleHRlbmRzIEFic3RyYWN0SGFuZGxlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgZWxlbWVudFJlZmVyZW5jZTogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgIGRpcmVjdGl2ZTogRHJhZ2dhYmxlRGlyZWN0aXZlLCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmZXJlbmNlLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgZGlyZWN0aXZlLCBjZHIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wRGF0YX0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UnO1xyXG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0JztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4ICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1kcm9wcGFibGVdJ30pXHJcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcm9wRW5hYmxlZCcpXHJcbiAgc2V0IGRyb3BwYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FsbG93RHJvcCcpXHJcbiAgc2V0IGFsbG93ZHJvcCh2YWx1ZTogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWxsb3dEcm9wID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Ryb3Bab25lcycpXHJcbiAgc2V0IGRyb3B6b25lcyh2YWx1ZTogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZWZmZWN0QWxsb3dlZCcpXHJcbiAgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RBbGxvd2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2VmZmVjdEN1cnNvcicpXHJcbiAgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIG9uRHJvcFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcbiAgQE91dHB1dCgpIG9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gIEBPdXRwdXQoKSBvbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1lbnRSZWZlcmVuY2U6IEVsZW1lbnRSZWYsXHJcbiAgICAgIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLFxyXG4gICAgICBjb25maWc6IERyYWdEcm9wQ29uZmlnLFxyXG4gICAgICBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWZlcmVuY2UsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjaGFuZ2VEZXRlY3Rvcik7XHJcblxyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmFnRW50ZXJDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcclxuICAgICAgdGhpcy5vbkRyYWdFbnRlci5lbWl0KHtkcmFnRGF0YTogdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmFnT3ZlckNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCh0aGlzLmNvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpKTtcclxuICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICB0aGlzLm9uRHJhZ0xlYXZlLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyb3BDYWxsYmFjayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0YVRyYW5zZmVyID0gKGV2ZW50IGFzIGFueSkuZGF0YVRyYW5zZmVyO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGlzUHJlc2VudChkYXRhVHJhbnNmZXIpICYmIGlzUHJlc2VudChkYXRhVHJhbnNmZXIuZmlsZXMpKSkge1xyXG4gICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3MuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG5cclxuICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnT3ZlckNsYXNzKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcbmltcG9ydCB7U29ydGFibGVBcnJheUhhbmRsZXIsIFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcn0gZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Fic3RyYWN0L2Fic3RyYWN0LmRpcmVjdGl2ZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSBkaXJlY3RpdmUtc2VsZWN0b3Igbm8tb3V0cHV0LW9uLXByZWZpeCAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtY29udGFpbmVyXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdkcmFnRW5hYmxlZCcpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zb3J0YWJsZURhdGE6IEFycmF5PGFueT58Rm9ybUFycmF5ID0gW107XHJcbiAgcHJpdmF0ZSBzb3J0YWJsZUhhbmRsZXI6IFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcnxTb3J0YWJsZUFycmF5SGFuZGxlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc29ydGFibGVEYXRhKHNvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkpIHtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YSA9IHNvcnRhYmxlRGF0YTtcclxuICAgIGlmIChzb3J0YWJsZURhdGEgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcclxuICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIgPSBuZXcgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUFycmF5SGFuZGxlcigpO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29sbGVjdGlvbiBpcyBjaGFuZ2VkLCBkcm9wIGVuYWJsZWQ6IFwiICsgdGhpcy5kcm9wRW5hYmxlZCk7XHJcbiAgfVxyXG4gIGdldCBzb3J0YWJsZURhdGEoKTogQXJyYXk8YW55PnxGb3JtQXJyYXkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZHJvcFpvbmVzJylcclxuICBzZXQgZHJvcHpvbmVzKHZhbHVlOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSkge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRyYWdFbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICBjb25zdCBpdGVtOiBhbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgLy8gQ2hlY2sgZG9lcyBlbGVtZW50IGV4aXN0IGluIHNvcnRhYmxlRGF0YSBvZiB0aGlzIENvbnRhaW5lclxyXG4gICAgICBpZiAodGhpcy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgIC8vIExldCdzIGFkZCBpdFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb250YWluZXIuX29uRHJhZ0VudGVyQ2FsbGJhY2suIGRyYWcgbm9kZSBbJyArIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgudG9TdHJpbmcoKSArICddXHJcbiAgICAgICAgLy8gb3ZlciBwYXJlbnQgbm9kZScpOyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuX3NvcnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBuZXcgbGlzdFxyXG4gICAgICAgIHRoaXMuaW5zZXJ0SXRlbUF0KGl0ZW0sIDApO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQXQoaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YSwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgaW5kZXhPZihpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGVIYW5kbGVyLmluZGV4T2YodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5pbnNlcnRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtLCBpbmRleCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0RGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Fic3RyYWN0JztcclxuaW1wb3J0IHtTb3J0YWJsZUNvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi9zb3J0YWJsZS1jb250YWluZXIuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciBuby1vdXRwdXQtb24tcHJlZml4IG5vLW91dHB1dC1yZW5hbWUgbm8taW5wdXQtcmVuYW1lICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZV0nfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlRGlyZWN0aXZlIGV4dGVuZHMgQWJzdHJhY3REaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgnc29ydGFibGVJbmRleCcpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgnZHJhZ0VuYWJsZWQnKVxyXG4gIHNldCBkcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkcm9wRW5hYmxlZCcpXHJcbiAgc2V0IGRyb3BwYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0YSB0aGF0IGhhcyB0byBiZSBkcmFnZ2VkLiBJdCBjYW4gYmUgYW55IEpTIG9iamVjdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRyYWdEYXRhOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIERyYWcgYWxsb3dlZCBlZmZlY3RcclxuICAgKi9cclxuICBASW5wdXQoJ2VmZmVjdEFsbG93ZWQnKVxyXG4gIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhZyBlZmZlY3QgY3Vyc29yXHJcbiAgICovXHJcbiAgQElucHV0KCdlZmZlY3RDdXJzb3InKVxyXG4gIHNldCBlZmZlY3RjdXJzb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cclxuICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoJ29uRHJhZ1N1Y2Nlc3MnKSBvbkRyYWdTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoJ29uRHJhZ1N0YXJ0Jykgb25EcmFnU3RhcnRDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCdvbkRyYWdPdmVyJykgb25EcmFnT3ZlckNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJhZ0VuZCcpIG9uRHJhZ0VuZENhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoJ29uRHJvcFN1Y2Nlc3MnKSBvbkRyb3BTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcclxuICAgICAgcHJpdmF0ZSBfc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSxcclxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICB0aGlzLmRyb3Bab25lcyA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3Bab25lcztcclxuICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnU3RhcnRDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5lbGVtZW50KTtcclxuICAgIC8vIEFkZCBkcmFnRGF0YVxyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gdGhpcy5kcmFnRGF0YTtcclxuICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgLy9cclxuICAgIHRoaXMub25EcmFnU3RhcnRDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICB9XHJcblxyXG4gIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQgJiYgdGhpcy5lbGVtZW50ICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmVsZW1lbnQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdPdmVyQ2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQodGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdFbmRDYWxsYmFjay4gZW5kIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gbnVsbDtcclxuICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UubWFya1NvcnRhYmxlKG51bGwpO1xyXG4gICAgLy8gQWRkIGRyYWdHYXRhXHJcbiAgICAvL0ZpeCBkcmFnIGVuZCBjYWxsYmFjayB0byBlbWl0IGRyYWdEYXRhXHJcbiAgICBjb25zdCBkcmFnRGF0YSA9IHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhO1xyXG4gICAgdGhpcy5kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgLy9cclxuICAgIHRoaXMub25EcmFnRW5kQ2FsbGJhY2suZW1pdChkcmFnRGF0YSk7XHJcbiAgfVxyXG5cclxuICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICBpZiAoKHRoaXMuaW5kZXggIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpIHx8XHJcbiAgICAgICAgICAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEgIT09IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcG9uZW50Ll9vbkRyYWdFbnRlckNhbGxiYWNrLiBkcmFnIG5vZGUgWycgKyB0aGlzLmluZGV4ICsgJ10gb3ZlciBub2RlIFsnICtcclxuICAgICAgICAvLyB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ICsgJ10nKTsgR2V0IGl0ZW1cclxuICAgICAgICBjb25zdCBpdGVtOiBhbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuaW5zZXJ0SXRlbUF0KGl0ZW0sIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCkge1xyXG4gICAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfb25Ecm9wQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ29uRHJvcENhbGxiYWNrLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5kcmFnRGF0YScsIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgdGhpcy5vbkRyb3BTdWNjZXNzQ2FsbGJhY2suZW1pdCh0aGlzLmRyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBSZWZyZXNoIGNoYW5nZXMgaW4gcHJvcGVydGllcyBvZiBjb250YWluZXIgY29tcG9uZW50XHJcbiAgICAgIHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7QWJzdHJhY3RIYW5kbGVEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3QvYWJzdHJhY3QtaGFuZGxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7U29ydGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc29ydGFibGUuZGlyZWN0aXZlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlIGRpcmVjdGl2ZS1zZWxlY3RvciAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtaGFuZGxlXSd9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVIYW5kbGVEaXJlY3RpdmUgZXh0ZW5kcyBBYnN0cmFjdEhhbmRsZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6IERyYWdEcm9wQ29uZmlnLCBfQ29tcG9uZW50OiBTb3J0YWJsZURpcmVjdGl2ZSxcclxuICAgICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIF9Db21wb25lbnQsIGNkcik7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZHJhZy1kcm9wLWNvbmZpZyc7XHJcbmltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9kcmFnLWRyb3AvZHJhZy1kcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZS5mYWN0b3J5JztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UuZmFjdG9yeSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZSwgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBTb3J0YWJsZURpcmVjdGl2ZSwgU29ydGFibGVIYW5kbGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IERyb3BwYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcHBhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMvYWJzdHJhY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7XHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vZHJvcHBhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzJztcclxuXHJcbmV4cG9ydCBsZXQgcHJvdmlkZXJzID0gW1xyXG4gICAgRHJhZ0Ryb3BDb25maWcsXHJcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSB9LFxyXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbRHJhZ0Ryb3BDb25maWddIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbi8vICAgZGVjbGFyYXRpb25zOiBbXHJcbi8vICAgICAgIERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnRcclxuLy8gICBdLFxyXG4vLyAgIGV4cG9ydHMgOiBbXHJcbi8vICAgICAgICBEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCwgRHJvcHBhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50XHJcbi8vICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIERyYWdnYWJsZURpcmVjdGl2ZSwgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBTb3J0YWJsZURpcmVjdGl2ZSwgU29ydGFibGVIYW5kbGVEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIERuZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IERuZE1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwidHNsaWJfMS5fX3ZhbHVlcyIsInRzbGliXzEuX19leHRlbmRzIiwiRXZlbnRFbWl0dGVyIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJGb3JtQXJyYXkiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFNSSw0QkFB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