(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('tslib'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng2-dnd', ['exports', '@angular/core', 'tslib', '@angular/forms'], factory) :
    (factory((global['ng2-dnd'] = {}),global.ng.core,global.tslib,global.ng.forms));
}(this, (function (exports,core,tslib_1,forms) { 'use strict';

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
        return typeof obj === "string";
    }
    /**
     * Check and return true if an object not undefined or null
     * @param {?} obj
     * @return {?}
     */
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    /**
     * Check and return true if an object is type of Function
     * @param {?} obj
     * @return {?}
     */
    function isFunction(obj) {
        return typeof obj === "function";
    }
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
     * Call the function
     * @param {?} fun
     * @return {?}
     */
    function callFun(fun) {
        return fun();
    }

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
    var DragDropConfig = (function () {
        function DragDropConfig() {
            this.onDragStartClass = "dnd-drag-start";
            this.onDragEnterClass = "dnd-drag-enter";
            this.onDragOverClass = "dnd-drag-over";
            this.onSortableDragClass = "dnd-sortable-drag";
            this.dragEffect = DataTransferEffect.MOVE;
            this.dropEffect = DataTransferEffect.MOVE;
            this.dragCursor = "move";
            this.defaultCursor = "pointer";
        }
        return DragDropConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DragDropData = (function () {
        function DragDropData() {
        }
        return DragDropData;
    }());
    /**
     * @return {?}
     */
    function dragDropServiceFactory() {
        return new DragDropService();
    }
    var DragDropService = (function () {
        function DragDropService() {
            this.allowedDropZones = [];
        }
        DragDropService.decorators = [
            { type: core.Injectable },
        ];
        return DragDropService;
    }());
    /**
     * @param {?} config
     * @return {?}
     */
    function dragDropSortableServiceFactory(config) {
        return new DragDropSortableService(config);
    }
    var DragDropSortableService = (function () {
        function DragDropSortableService(_config) {
            this._config = _config;
        }
        Object.defineProperty(DragDropSortableService.prototype, "elem", {
            get: /**
             * @return {?}
             */ function () {
                return this._elem;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} elem
         * @return {?}
         */
        DragDropSortableService.prototype.markSortable = /**
         * @param {?} elem
         * @return {?}
         */
            function (elem) {
                if (isPresent(this._elem)) {
                    this._elem.classList.remove(this._config.onSortableDragClass);
                }
                if (isPresent(elem)) {
                    this._elem = elem;
                    this._elem.classList.add(this._config.onSortableDragClass);
                }
            };
        DragDropSortableService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        DragDropSortableService.ctorParameters = function () {
            return [
                { type: DragDropConfig, },
            ];
        };
        return DragDropSortableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var AbstractComponent = (function () {
        function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
            var _this = this;
            this._dragDropService = _dragDropService;
            this._config = _config;
            this._cdr = _cdr;
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
            // Assign default cursor unless overridden
            this._defaultCursor = _config.defaultCursor;
            this._elem = elemRef.nativeElement;
            this._elem.style.cursor = this._defaultCursor; // set default cursor on our element
            //
            // DROP events
            //
            this._elem.ondragenter = function (event) {
                _this._onDragEnter(event);
            };
            this._elem.ondragover = function (event) {
                _this._onDragOver(event);
                //
                if (event.dataTransfer != null) {
                    event.dataTransfer.dropEffect = _this._config.dropEffect.name;
                }
                return false;
            };
            this._elem.ondragleave = function (event) {
                _this._onDragLeave(event);
            };
            this._elem.ondrop = function (event) {
                _this._onDrop(event);
            };
            //
            // Drag events
            //
            this._elem.onmousedown = function (event) {
                _this._target = event.target;
            };
            this._elem.ondragstart = function (event) {
                if (_this._dragHandle) {
                    if (!_this._dragHandle.contains(/** @type {?} */ (_this._target))) {
                        event.preventDefault();
                        return;
                    }
                }
                _this._onDragStart(event);
                //
                if (event.dataTransfer != null) {
                    event.dataTransfer.setData('text', '');
                    // Change drag effect
                    event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                    // Change drag image
                    if (isPresent(_this.dragImage)) {
                        if (isString(_this.dragImage)) {
                            ((event.dataTransfer)).setDragImage(createImage(/** @type {?} */ (_this.dragImage)));
                        }
                        else if (isFunction(_this.dragImage)) {
                            ((event.dataTransfer)).setDragImage(callFun(/** @type {?} */ (_this.dragImage)));
                        }
                        else {
                            var /** @type {?} */ img = (_this.dragImage);
                            ((event.dataTransfer)).setDragImage(img.imageElement, img.x_offset, img.y_offset);
                        }
                    }
                    else if (isPresent(_this._config.dragImage)) {
                        var /** @type {?} */ dragImage = _this._config.dragImage;
                        ((event.dataTransfer)).setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                    }
                    else if (_this.cloneItem) {
                        _this._dragHelper = /** @type {?} */ (_this._elem.cloneNode(true));
                        _this._dragHelper.classList.add('dnd-drag-item');
                        _this._dragHelper.style.position = "absolute";
                        _this._dragHelper.style.top = "0px";
                        _this._dragHelper.style.left = "-1000px";
                        _this._elem.parentElement.appendChild(_this._dragHelper);
                        ((event.dataTransfer)).setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                    }
                    // Change drag cursor
                    var /** @type {?} */ cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                    if (_this._dragEnabled) {
                        cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                    }
                    else {
                        cursorelem.style.cursor = _this._defaultCursor;
                    }
                }
            };
            this._elem.ondragend = function (event) {
                if (_this._elem.parentElement && _this._dragHelper) {
                    _this._elem.parentElement.removeChild(_this._dragHelper);
                }
                // console.log('ondragend', event.target);
                // console.log('ondragend', event.target);
                _this._onDragEnd(event);
                // Restore style of dragged element
                var /** @type {?} */ cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                cursorelem.style.cursor = _this._defaultCursor;
            };
        }
        Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._dragEnabled;
            },
            set: /**
             * @param {?} enabled
             * @return {?}
             */ function (enabled) {
                this._dragEnabled = !!enabled;
                this._elem.draggable = this._dragEnabled;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} elem
         * @return {?}
         */
        AbstractComponent.prototype.setDragHandle = /**
         * @param {?} elem
         * @return {?}
         */
            function (elem) {
                this._dragHandle = elem;
            };
        /******* Change detection ******/
        /**
         * **** Change detection *****
         * @return {?}
         */
        AbstractComponent.prototype.detectChanges = /**
         * **** Change detection *****
         * @return {?}
         */
            function () {
                var _this = this;
                // Programmatically run change detection to fix issue in Safari
                setTimeout(function () {
                    if (_this._cdr && !((_this._cdr)).destroyed) {
                        _this._cdr.detectChanges();
                    }
                }, 250);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragEnter = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
                if (this._isDropAllowed(event)) {
                    // event.preventDefault();
                    this._onDragEnterCallback(event);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragOver = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
                if (this._isDropAllowed(event)) {
                    // The element is over the same source element - do nothing
                    if (event.preventDefault) {
                        // Necessary. Allows us to drop.
                        event.preventDefault();
                    }
                    this._onDragOverCallback(event);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragLeave = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
                if (this._isDropAllowed(event)) {
                    // event.preventDefault();
                    this._onDragLeaveCallback(event);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDrop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // console.log('ondrop._isDropAllowed', this._isDropAllowed);
                if (this._isDropAllowed(event)) {
                    // Necessary. Allows us to drop.
                    this._preventAndStop(event);
                    this._onDropCallback(event);
                    this.detectChanges();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._isDropAllowed = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if ((this._dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
                    // First, if `allowDrop` is set, call it to determine whether the
                    // dragged element can be dropped here.
                    if (this.allowDrop) {
                        return this.allowDrop(this._dragDropService.dragData);
                    }
                    // Otherwise, use dropZones if they are set.
                    if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                        return true;
                    }
                    for (var /** @type {?} */ i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                        var /** @type {?} */ dragZone = this._dragDropService.allowedDropZones[i];
                        if (this.dropZones.indexOf(dragZone) !== -1) {
                            return true;
                        }
                    }
                }
                return false;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._preventAndStop = /**
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
        AbstractComponent.prototype._onDragStart = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                //console.log('ondragstart.dragEnabled', this._dragEnabled);
                if (this._dragEnabled) {
                    this._dragDropService.allowedDropZones = this.dropZones;
                    // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
                    this._onDragStartCallback(event);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragEnd = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this._dragDropService.allowedDropZones = [];
                // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
                this._onDragEndCallback(event);
            };
        //**** Drop Callbacks ****//
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragEnterCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragOverCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragLeaveCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDropCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        //**** Drag Callbacks ****//
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragStartCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        /**
         * @param {?} event
         * @return {?}
         */
        AbstractComponent.prototype._onDragEndCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { };
        AbstractComponent.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        AbstractComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: DragDropService, },
                { type: DragDropConfig, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return AbstractComponent;
    }());
    var AbstractHandleComponent = (function () {
        function AbstractHandleComponent(elemRef, _dragDropService, _config, _Component, _cdr) {
            this._dragDropService = _dragDropService;
            this._config = _config;
            this._Component = _Component;
            this._cdr = _cdr;
            this._elem = elemRef.nativeElement;
            this._Component.setDragHandle(this._elem);
        }
        return AbstractHandleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DraggableComponent = (function (_super) {
        tslib_1.__extends(DraggableComponent, _super);
        function DraggableComponent(elemRef, dragDropService, config, cdr) {
            var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
            /**
             * Callback function called when the drag actions happened.
             */
            _this.onDragStart = new core.EventEmitter();
            _this.onDragEnd = new core.EventEmitter();
            /**
             * Callback function called when the drag action ends with a valid drop action.
             * It is activated after the on-drop-success callback
             */
            _this.onDragSuccessCallback = new core.EventEmitter();
            _this._defaultCursor = _this._elem.style.cursor;
            _this.dragEnabled = true;
            return _this;
        }
        Object.defineProperty(DraggableComponent.prototype, "draggable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DraggableComponent.prototype, "dropzones", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dropZones = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
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
        Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
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
        DraggableComponent.prototype._onDragStartCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this._dragDropService.isDragged = true;
                this._dragDropService.dragData = this.dragData;
                this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
                this._elem.classList.add(this._config.onDragStartClass);
                //
                this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DraggableComponent.prototype._onDragEndCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this._dragDropService.isDragged = false;
                this._dragDropService.dragData = null;
                this._dragDropService.onDragSuccessCallback = null;
                this._elem.classList.remove(this._config.onDragStartClass);
                //
                this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
            };
        DraggableComponent.decorators = [
            { type: core.Directive, args: [{ selector: '[dnd-draggable]' },] },
        ];
        /** @nocollapse */
        DraggableComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: DragDropService, },
                { type: DragDropConfig, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        DraggableComponent.propDecorators = {
            "draggable": [{ type: core.Input, args: ["dragEnabled",] },],
            "onDragStart": [{ type: core.Output },],
            "onDragEnd": [{ type: core.Output },],
            "dragData": [{ type: core.Input },],
            "onDragSuccessCallback": [{ type: core.Output, args: ["onDragSuccess",] },],
            "dropzones": [{ type: core.Input, args: ["dropZones",] },],
            "effectallowed": [{ type: core.Input, args: ["effectAllowed",] },],
            "effectcursor": [{ type: core.Input, args: ["effectCursor",] },],
            "dragImage": [{ type: core.Input },],
            "cloneItem": [{ type: core.Input },],
        };
        return DraggableComponent;
    }(AbstractComponent));
    var DraggableHandleComponent = (function (_super) {
        tslib_1.__extends(DraggableHandleComponent, _super);
        function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
            return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
        }
        DraggableHandleComponent.decorators = [
            { type: core.Directive, args: [{ selector: '[dnd-draggable-handle]' },] },
        ];
        /** @nocollapse */
        DraggableHandleComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: DragDropService, },
                { type: DragDropConfig, },
                { type: DraggableComponent, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return DraggableHandleComponent;
    }(AbstractHandleComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DroppableComponent = (function (_super) {
        tslib_1.__extends(DroppableComponent, _super);
        function DroppableComponent(elemRef, dragDropService, config, cdr) {
            var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
            /**
             * Callback function called when the drop action completes correctly.
             * It is activated before the on-drag-success callback.
             */
            _this.onDropSuccess = new core.EventEmitter();
            _this.onDragEnter = new core.EventEmitter();
            _this.onDragOver = new core.EventEmitter();
            _this.onDragLeave = new core.EventEmitter();
            _this.dropEnabled = true;
            return _this;
        }
        Object.defineProperty(DroppableComponent.prototype, "droppable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dropEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.allowDrop = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableComponent.prototype, "dropzones", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dropZones = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
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
        Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
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
        DroppableComponent.prototype._onDragEnterCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._dragDropService.isDragged) {
                    this._elem.classList.add(this._config.onDragEnterClass);
                    this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DroppableComponent.prototype._onDragOverCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._dragDropService.isDragged) {
                    this._elem.classList.add(this._config.onDragOverClass);
                    this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DroppableComponent.prototype._onDragLeaveCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._dragDropService.isDragged) {
                    this._elem.classList.remove(this._config.onDragOverClass);
                    this._elem.classList.remove(this._config.onDragEnterClass);
                    this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DroppableComponent.prototype._onDropCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var /** @type {?} */ dataTransfer = ((event)).dataTransfer;
                if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
                    this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                    if (this._dragDropService.onDragSuccessCallback) {
                        this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
                    }
                    this._elem.classList.remove(this._config.onDragOverClass);
                    this._elem.classList.remove(this._config.onDragEnterClass);
                }
            };
        DroppableComponent.decorators = [
            { type: core.Directive, args: [{ selector: '[dnd-droppable]' },] },
        ];
        /** @nocollapse */
        DroppableComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: DragDropService, },
                { type: DragDropConfig, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        DroppableComponent.propDecorators = {
            "droppable": [{ type: core.Input, args: ["dropEnabled",] },],
            "onDropSuccess": [{ type: core.Output },],
            "onDragEnter": [{ type: core.Output },],
            "onDragOver": [{ type: core.Output },],
            "onDragLeave": [{ type: core.Output },],
            "allowdrop": [{ type: core.Input, args: ["allowDrop",] },],
            "dropzones": [{ type: core.Input, args: ["dropZones",] },],
            "effectallowed": [{ type: core.Input, args: ["effectAllowed",] },],
            "effectcursor": [{ type: core.Input, args: ["effectCursor",] },],
        };
        return DroppableComponent;
    }(AbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableContainer = (function (_super) {
        tslib_1.__extends(SortableContainer, _super);
        function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
            var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
            _this._sortableDataService = _sortableDataService;
            _this._sortableData = [];
            _this.dragEnabled = false;
            return _this;
        }
        Object.defineProperty(SortableContainer.prototype, "draggable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableContainer.prototype, "sortableData", {
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
        Object.defineProperty(SortableContainer.prototype, "dropzones", {
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
        SortableContainer.prototype._onDragEnterCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._sortableDataService.isDragged) {
                    var /** @type {?} */ item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
                    // Check does element exist in sortableData of this Container
                    if (this.indexOf(item) === -1) {
                        // Let's add it
                        // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                        // Remove item from previouse list
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
        SortableContainer.prototype.getItemAt = /**
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
        SortableContainer.prototype.indexOf = /**
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
        SortableContainer.prototype.removeItemAt = /**
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
        SortableContainer.prototype.insertItemAt = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                this.sortableHandler.insertItemAt(this._sortableData, item, index);
            };
        SortableContainer.decorators = [
            { type: core.Directive, args: [{ selector: '[dnd-sortable-container]' },] },
        ];
        /** @nocollapse */
        SortableContainer.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: DragDropService, },
                { type: DragDropConfig, },
                { type: core.ChangeDetectorRef, },
                { type: DragDropSortableService, },
            ];
        };
        SortableContainer.propDecorators = {
            "draggable": [{ type: core.Input, args: ["dragEnabled",] },],
            "sortableData": [{ type: core.Input },],
            "dropzones": [{ type: core.Input, args: ["dropZones",] },],
        };
        return SortableContainer;
    }(AbstractComponent));
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
    var SortableComponent = (function (_super) {
        tslib_1.__extends(SortableComponent, _super);
        function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
            var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
            _this._sortableContainer = _sortableContainer;
            _this._sortableDataService = _sortableDataService;
            /**
             * Callback function called when the drag action ends with a valid drop action.
             * It is activated after the on-drop-success callback
             */
            _this.onDragSuccessCallback = new core.EventEmitter();
            _this.onDragStartCallback = new core.EventEmitter();
            _this.onDragOverCallback = new core.EventEmitter();
            _this.onDragEndCallback = new core.EventEmitter();
            _this.onDropSuccessCallback = new core.EventEmitter();
            _this.dropZones = _this._sortableContainer.dropZones;
            _this.dragEnabled = true;
            _this.dropEnabled = true;
            return _this;
        }
        Object.defineProperty(SortableComponent.prototype, "draggable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dragEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableComponent.prototype, "droppable", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.dropEnabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortableComponent.prototype, "effectallowed", {
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
        Object.defineProperty(SortableComponent.prototype, "effectcursor", {
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
        SortableComponent.prototype._onDragStartCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
                this._sortableDataService.isDragged = true;
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
                this._sortableDataService.markSortable(this._elem);
                // Add dragData
                this._dragDropService.isDragged = true;
                this._dragDropService.dragData = this.dragData;
                this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
                //
                this.onDragStartCallback.emit(this._dragDropService.dragData);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableComponent.prototype._onDragOverCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
                    // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
                    this._sortableDataService.sortableContainer = this._sortableContainer;
                    this._sortableDataService.index = this.index;
                    this._sortableDataService.markSortable(this._elem);
                    this.onDragOverCallback.emit(this._dragDropService.dragData);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableComponent.prototype._onDragEndCallback = /**
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
                this._dragDropService.isDragged = false;
                this._dragDropService.dragData = null;
                this._dragDropService.onDragSuccessCallback = null;
                //
                this.onDragEndCallback.emit(this._dragDropService.dragData);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableComponent.prototype._onDragEnterCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._sortableDataService.isDragged) {
                    this._sortableDataService.markSortable(this._elem);
                    if ((this.index !== this._sortableDataService.index) ||
                        (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                        // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                        // Get item
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
        SortableComponent.prototype._onDropCallback = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._sortableDataService.isDragged) {
                    // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
                    this.onDropSuccessCallback.emit(this._dragDropService.dragData);
                    if (this._dragDropService.onDragSuccessCallback) {
                        // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                        this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
                    }
                    // Refresh changes in properties of container component
                    this._sortableContainer.detectChanges();
                }
            };
        SortableComponent.decorators = [
            { type: core.Directive, args: [{ selector: '[dnd-sortable]' },] },
        ];
        /** @nocollapse */
        SortableComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: DragDropService, },
                { type: DragDropConfig, },
                { type: SortableContainer, },
                { type: DragDropSortableService, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        SortableComponent.propDecorators = {
            "index": [{ type: core.Input, args: ['sortableIndex',] },],
            "draggable": [{ type: core.Input, args: ["dragEnabled",] },],
            "droppable": [{ type: core.Input, args: ["dropEnabled",] },],
            "dragData": [{ type: core.Input },],
            "effectallowed": [{ type: core.Input, args: ["effectAllowed",] },],
            "effectcursor": [{ type: core.Input, args: ["effectCursor",] },],
            "onDragSuccessCallback": [{ type: core.Output, args: ["onDragSuccess",] },],
            "onDragStartCallback": [{ type: core.Output, args: ["onDragStart",] },],
            "onDragOverCallback": [{ type: core.Output, args: ["onDragOver",] },],
            "onDragEndCallback": [{ type: core.Output, args: ["onDragEnd",] },],
            "onDropSuccessCallback": [{ type: core.Output, args: ["onDropSuccess",] },],
        };
        return SortableComponent;
    }(AbstractComponent));
    var SortableHandleComponent = (function (_super) {
        tslib_1.__extends(SortableHandleComponent, _super);
        function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
            return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
        }
        SortableHandleComponent.decorators = [
            { type: core.Directive, args: [{ selector: '[dnd-sortable-handle]' },] },
        ];
        /** @nocollapse */
        SortableHandleComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: DragDropService, },
                { type: DragDropConfig, },
                { type: SortableComponent, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return SortableHandleComponent;
    }(AbstractHandleComponent));

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
            { type: core.NgModule, args: [{
                        declarations: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
                        exports: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
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
    exports.AbstractComponent = AbstractComponent;
    exports.AbstractHandleComponent = AbstractHandleComponent;
    exports.DataTransferEffect = DataTransferEffect;
    exports.DragImage = DragImage;
    exports.DragDropConfig = DragDropConfig;
    exports.DragDropData = DragDropData;
    exports.dragDropServiceFactory = dragDropServiceFactory;
    exports.DragDropService = DragDropService;
    exports.dragDropSortableServiceFactory = dragDropSortableServiceFactory;
    exports.DragDropSortableService = DragDropSortableService;
    exports.DraggableComponent = DraggableComponent;
    exports.DraggableHandleComponent = DraggableHandleComponent;
    exports.DroppableComponent = DroppableComponent;
    exports.SortableContainer = SortableContainer;
    exports.SortableComponent = SortableComponent;
    exports.SortableHandleComponent = SortableHandleComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRuZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nMi1kbmQvc3JjL2RuZC51dGlscy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLmNvbmZpZy50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZG5kLnNlcnZpY2UudHMiLCJuZzovL25nMi1kbmQvc3JjL2Fic3RyYWN0LmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZHJhZ2dhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvZHJvcHBhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWRuZC9zcmMvc29ydGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZzItZG5kL3NyYy9kbmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IGlzIHR5cGUgb2Ygc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOmFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IG5vdCB1bmRlZmluZWQgb3IgbnVsbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBGdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgSW1hZ2UgZWxlbWVudCB3aXRoIHNwZWNpZmllZCB1cmwgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3JjOiBzdHJpbmcpIHtcclxuICAgIGxldCBpbWc6SFRNTEltYWdlRWxlbWVudCA9IG5ldyBIVE1MSW1hZ2VFbGVtZW50KCk7XHJcbiAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgcmV0dXJuIGltZztcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgdGhlIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsbEZ1bihmdW46IEZ1bmN0aW9uKSB7XHJcbiAgICByZXR1cm4gZnVuKCk7XHJcbn0iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICcuL2RuZC51dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVRyYW5zZmVyRWZmZWN0IHtcclxuXHJcbiAgICBzdGF0aWMgQ09QWSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ2NvcHknKTtcclxuICAgIHN0YXRpYyBMSU5LID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbGluaycpO1xyXG4gICAgc3RhdGljIE1PVkUgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdtb3ZlJyk7XHJcbiAgICBzdGF0aWMgTk9ORSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ25vbmUnKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdJbWFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaW1hZ2VFbGVtZW50OiBhbnksXHJcbiAgICAgICAgcHVibGljIHhfb2Zmc2V0OiBudW1iZXIgPSAwLFxyXG4gICAgICAgIHB1YmxpYyB5X29mZnNldDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5pbWFnZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcclxuICAgICAgICAgICAgICAgIGxldCBpbWdTY3I6IHN0cmluZyA9IDxzdHJpbmc+dGhpcy5pbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRWxlbWVudCA9IG5ldyBIVE1MSW1hZ2VFbGVtZW50KCk7XHJcbiAgICAgICAgICAgICAgICAoPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5pbWFnZUVsZW1lbnQpLnNyYyA9IGltZ1NjcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdEcm9wQ29uZmlnIHtcclxuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSBcImRuZC1kcmFnLXN0YXJ0XCI7XHJcbiAgICBwdWJsaWMgb25EcmFnRW50ZXJDbGFzczogc3RyaW5nID0gXCJkbmQtZHJhZy1lbnRlclwiO1xyXG4gICAgcHVibGljIG9uRHJhZ092ZXJDbGFzczogc3RyaW5nID0gXCJkbmQtZHJhZy1vdmVyXCI7XHJcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gXCJkbmQtc29ydGFibGUtZHJhZ1wiO1xyXG5cclxuICAgIHB1YmxpYyBkcmFnRWZmZWN0OiBEYXRhVHJhbnNmZXJFZmZlY3QgPSBEYXRhVHJhbnNmZXJFZmZlY3QuTU9WRTtcclxuICAgIHB1YmxpYyBkcm9wRWZmZWN0OiBEYXRhVHJhbnNmZXJFZmZlY3QgPSBEYXRhVHJhbnNmZXJFZmZlY3QuTU9WRTtcclxuICAgIHB1YmxpYyBkcmFnQ3Vyc29yOiBzdHJpbmcgPSBcIm1vdmVcIjtcclxuICAgIHB1YmxpYyBkcmFnSW1hZ2U6IERyYWdJbWFnZTtcclxuICAgIHB1YmxpYyBkZWZhdWx0Q3Vyc29yOiBzdHJpbmcgPSBcInBvaW50ZXJcIjtcclxufSIsIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RHJhZ0Ryb3BDb25maWd9IGZyb20gJy4vZG5kLmNvbmZpZyc7XHJcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICcuL2RuZC51dGlscyc7XHJcbmltcG9ydCB7U29ydGFibGVDb250YWluZXJ9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcERhdGEge1xyXG4gICAgZHJhZ0RhdGE6IGFueTtcclxuICAgIG1vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5KCk6IERyYWdEcm9wU2VydmljZSAge1xyXG4gICAgcmV0dXJuIG5ldyBEcmFnRHJvcFNlcnZpY2UoKTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTZXJ2aWNlIHtcclxuICAgIGFsbG93ZWREcm9wWm9uZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT47XHJcbiAgICBkcmFnRGF0YTogYW55O1xyXG4gICAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5KGNvbmZpZzogRHJhZ0Ryb3BDb25maWcpOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSAge1xyXG4gICAgcmV0dXJuIG5ldyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZShjb25maWcpO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgaXNEcmFnZ2VkOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2VsZW06IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIGdldCBlbGVtKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb25maWc6RHJhZ0Ryb3BDb25maWcpIHt9XHJcblxyXG4gICAgbWFya1NvcnRhYmxlKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLl9lbGVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNQcmVzZW50KGVsZW0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge0luamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wQ29uZmlnLCBEcmFnSW1hZ2UgfSBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcFNlcnZpY2UgfSBmcm9tICcuL2RuZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNTdHJpbmcsIGlzRnVuY3Rpb24sIGlzUHJlc2VudCwgY3JlYXRlSW1hZ2UsIGNhbGxGdW4gfSBmcm9tICcuL2RuZC51dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbXBvbmVudCB7XHJcbiAgICBfZWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgICBfZHJhZ0hhbmRsZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBfZHJhZ0hlbHBlcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBfZGVmYXVsdEN1cnNvcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGFzdCBlbGVtZW50IHRoYXQgd2FzIG1vdXNlZG93bidlZFxyXG4gICAgICovXHJcbiAgICBfdGFyZ2V0OiBFdmVudFRhcmdldDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIG9iamVjdCBpcyBkcmFnZ2FibGUuIERlZmF1bHQgaXMgdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNldCBkcmFnRW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0VuYWJsZWQgPSAhIWVuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5kcmFnZ2FibGUgPSB0aGlzLl9kcmFnRW5hYmxlZDtcclxuICAgIH1cclxuICAgIGdldCBkcmFnRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZHJhZ0VuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgZHJvcCBvbiB0aGlzIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgZHJvcEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBlZmZlY3RcclxuICAgICAqL1xyXG4gICAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGN1cnNvclxyXG4gICAgICovXHJcbiAgICBlZmZlY3RDdXJzb3I6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc3RyaWN0IHBsYWNlcyB3aGVyZSBhIGRyYWdnYWJsZSBlbGVtZW50IGNhbiBiZSBkcm9wcGVkLiBFaXRoZXIgb25lIG9mXHJcbiAgICAgKiB0aGVzZSB0d28gbWVjaGFuaXNtcyBjYW4gYmUgdXNlZDpcclxuICAgICAqXHJcbiAgICAgKiAtIGRyb3Bab25lczogYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHBlcm1pdHMgdG8gc3BlY2lmeSB0aGUgZHJvcCB6b25lc1xyXG4gICAgICogICBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb21wb25lbnQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBkcm9wLXpvbmVzIGF0dHJpYnV0ZVxyXG4gICAgICogICBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgZHJvcHBhYmxlIGNvbXBvbmVudCBhY2NlcHRzIGRyb3Agb3BlcmF0aW9ucyBieVxyXG4gICAgICogICBhbGwgdGhlIGRyYWdnYWJsZSBjb21wb25lbnRzIHRoYXQgZG8gbm90IHNwZWNpZnkgdGhlIGFsbG93ZWQtZHJvcC16b25lc1xyXG4gICAgICpcclxuICAgICAqIC0gYWxsb3dEcm9wOiBhIGJvb2xlYW4gZnVuY3Rpb24gZm9yIGRyb3BwYWJsZSBjb21wb25lbnRzLCB0aGF0IGlzIGNoZWNrZWRcclxuICAgICAqICAgd2hlbiBhbiBpdGVtIGlzIGRyYWdnZWQuIFRoZSBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIGRyYWdEYXRhIG9mIHRoaXNcclxuICAgICAqICAgaXRlbS5cclxuICAgICAqICAgLSBpZiBpdCByZXR1cm5zIHRydWUsIHRoZSBpdGVtIGNhbiBiZSBkcm9wcGVkIGluIHRoaXMgY29tcG9uZW50XHJcbiAgICAgKiAgIC0gaWYgaXQgcmV0dXJucyBmYWxzZSwgdGhlIGl0ZW0gY2Fubm90IGJlIGRyb3BwZWQgaGVyZVxyXG4gICAgICovXHJcbiAgICBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xyXG4gICAgZHJvcFpvbmVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVyZSBpcyB0aGUgcHJvcGVydHkgZHJhZ0ltYWdlIHlvdSBjYW4gdXNlOlxyXG4gICAgICogLSBUaGUgc3RyaW5nIHZhbHVlIGFzIHVybCB0byB0aGUgaW1hZ2VcclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiL2ltYWdlcy9zaW1wbGVyLnBuZ1wiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAtIFRoZSBEcmFnSW1hZ2UgdmFsdWUgd2l0aCBJbWFnZSBhbmQgb3B0aW9uYWwgb2Zmc2V0IGJ5IHggYW5kIHk6XHJcbiAgICAgKiAgIGxldCBteURyYWdJbWFnZTogRHJhZ0ltYWdlID0gbmV3IERyYWdJbWFnZShcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIsIDAsIDApO1xyXG4gICAgICogLi4uXHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIm15RHJhZ0ltYWdlXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqIC0gVGhlIGN1c3RvbSBmdW5jdGlvbiB0byByZXR1cm4gdGhlIHZhbHVlIG9mIGRyYWdJbWFnZSBwcm9ncmFtbWF0aWNhbGx5OlxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJnZXREcmFnSW1hZ2Uoc29tZURhdGEpXCI+XHJcbiAgICAgKiAuLi5cclxuICAgICAqICAgZ2V0RHJhZ0ltYWdlKHZhbHVlOmFueSk6IHN0cmluZyB7XHJcbiAgICAgKiAgICAgcmV0dXJuIHZhbHVlID8gXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiIDogXCIvaW1hZ2VzL3NpbXBsZXIyLnBuZ1wiXHJcbiAgICAgKiAgIH1cclxuICAgICAqL1xyXG4gICAgZHJhZ0ltYWdlOiBzdHJpbmcgfCBEcmFnSW1hZ2UgfCBGdW5jdGlvbjtcclxuXHJcbiAgICBjbG9uZUl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX2RyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgX2NvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgICAgICAvLyBBc3NpZ24gZGVmYXVsdCBjdXJzb3IgdW5sZXNzIG92ZXJyaWRkZW5cclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q3Vyc29yID0gX2NvbmZpZy5kZWZhdWx0Q3Vyc29yO1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLl9kZWZhdWx0Q3Vyc29yOyAgLy8gc2V0IGRlZmF1bHQgY3Vyc29yIG9uIG91ciBlbGVtZW50XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBEUk9QIGV2ZW50c1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdlbnRlciA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnRW50ZXIoZXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdvdmVyID0gKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnT3ZlcihldmVudCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLl9jb25maWcuZHJvcEVmZmVjdC5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ2xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdMZWF2ZShldmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJvcCA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25Ecm9wKGV2ZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gRHJhZyBldmVudHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuX2VsZW0ub25tb3VzZWRvd24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdzdGFydCA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnSGFuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2RyYWdIYW5kbGUuY29udGFpbnMoPEVsZW1lbnQ+dGhpcy5fdGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdTdGFydChldmVudCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZHJhZyBlZmZlY3RcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gdGhpcy5lZmZlY3RBbGxvd2VkIHx8IHRoaXMuX2NvbmZpZy5kcmFnRWZmZWN0Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZHJhZyBpbWFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmRyYWdJbWFnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcodGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGNyZWF0ZUltYWdlKDxzdHJpbmc+dGhpcy5kcmFnSW1hZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGNhbGxGdW4oPEZ1bmN0aW9uPnRoaXMuZHJhZ0ltYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZzogRHJhZ0ltYWdlID0gPERyYWdJbWFnZT50aGlzLmRyYWdJbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoaW1nLmltYWdlRWxlbWVudCwgaW1nLnhfb2Zmc2V0LCBpbWcueV9vZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmVzZW50KHRoaXMuX2NvbmZpZy5kcmFnSW1hZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRyYWdJbWFnZTogRHJhZ0ltYWdlID0gdGhpcy5fY29uZmlnLmRyYWdJbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShkcmFnSW1hZ2UuaW1hZ2VFbGVtZW50LCBkcmFnSW1hZ2UueF9vZmZzZXQsIGRyYWdJbWFnZS55X29mZnNldCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xvbmVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlciA9IDxIVE1MRWxlbWVudD50aGlzLl9lbGVtLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLmNsYXNzTGlzdC5hZGQoJ2RuZC1kcmFnLWl0ZW0nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdIZWxwZXIuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLnN0eWxlLmxlZnQgPSBcIi0xMDAwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fZHJhZ0hlbHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UodGhpcy5fZHJhZ0hlbHBlciwgZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRyYWcgY3Vyc29yXHJcbiAgICAgICAgICAgICAgICBsZXQgY3Vyc29yZWxlbSA9ICh0aGlzLl9kcmFnSGFuZGxlKSA/IHRoaXMuX2RyYWdIYW5kbGUgOiB0aGlzLl9lbGVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5lZmZlY3RDdXJzb3IgPyB0aGlzLmVmZmVjdEN1cnNvciA6IHRoaXMuX2NvbmZpZy5kcmFnQ3Vyc29yO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3JlbGVtLnN0eWxlLmN1cnNvciA9IHRoaXMuX2RlZmF1bHRDdXJzb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtLm9uZHJhZ2VuZCA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW0ucGFyZW50RWxlbWVudCAmJiB0aGlzLl9kcmFnSGVscGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fZHJhZ0hlbHBlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VuZCcsIGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0VuZChldmVudCk7XHJcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgc3R5bGUgb2YgZHJhZ2dlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIGxldCBjdXJzb3JlbGVtID0gKHRoaXMuX2RyYWdIYW5kbGUpID8gdGhpcy5fZHJhZ0hhbmRsZSA6IHRoaXMuX2VsZW07XHJcbiAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREcmFnSGFuZGxlKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0hhbmRsZSA9IGVsZW07XHJcbiAgICB9XHJcbiAgICAvKioqKioqKiBDaGFuZ2UgZGV0ZWN0aW9uICoqKioqKi9cclxuXHJcbiAgICBkZXRlY3RDaGFuZ2VzICgpIHtcclxuICAgICAgICAvLyBQcm9ncmFtbWF0aWNhbGx5IHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGZpeCBpc3N1ZSBpbiBTYWZhcmlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLl9jZHIgJiYgISh0aGlzLl9jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qKioqKiogRHJvcHBhYmxlICoqKioqKiovL1xyXG4gICAgcHJpdmF0ZSBfb25EcmFnRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VudGVyLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdPdmVyKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdvdmVyLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGlzIG92ZXIgdGhlIHNhbWUgc291cmNlIGVsZW1lbnQgLSBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ092ZXJDYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0xlYXZlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdsZWF2ZS5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Ecm9wKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyb3AuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcclxuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcclxuICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cclxuICAgICAgICAgICAgdGhpcy5fcHJldmVudEFuZFN0b3AoZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fb25Ecm9wQ2FsbGJhY2soZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzRHJvcEFsbG93ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICgodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykpICYmIHRoaXMuZHJvcEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gRmlyc3QsIGlmIGBhbGxvd0Ryb3BgIGlzIHNldCwgY2FsbCBpdCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGVcclxuICAgICAgICAgICAgLy8gZHJhZ2dlZCBlbGVtZW50IGNhbiBiZSBkcm9wcGVkIGhlcmUuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93RHJvcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgdXNlIGRyb3Bab25lcyBpZiB0aGV5IGFyZSBzZXQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyb3Bab25lcy5sZW5ndGggPT09IDAgJiYgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkcmFnWm9uZTogc3RyaW5nID0gdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMuaW5kZXhPZihkcmFnWm9uZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ByZXZlbnRBbmRTdG9wKGV2ZW50OiBFdmVudCk6IGFueSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vKioqKioqKioqKiogRHJhZ2dhYmxlICoqKioqKioqKiovL1xyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ29uZHJhZ3N0YXJ0LmRyYWdFbmFibGVkJywgdGhpcy5fZHJhZ0VuYWJsZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IHRoaXMuZHJvcFpvbmVzO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnc3RhcnQuYWxsb3dlZERyb3Bab25lcycsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKTtcclxuICAgICAgICAgICAgdGhpcy5fb25EcmFnU3RhcnRDYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lcyA9IFtdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbmQuYWxsb3dlZERyb3Bab25lcycsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKTtcclxuICAgICAgICB0aGlzLl9vbkRyYWdFbmRDYWxsYmFjayhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8qKioqIERyb3AgQ2FsbGJhY2tzICoqKiovL1xyXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuICAgIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuICAgIF9vbkRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbiAgICBfb25Ecm9wQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cclxuXHJcbiAgICAvLyoqKiogRHJhZyBDYWxsYmFja3MgKioqKi8vXHJcbiAgICBfb25EcmFnU3RhcnRDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxyXG4gICAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudCB7XHJcbiAgICBfZWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX2RyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgX2NvbmZpZzogRHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgcHJpdmF0ZSBfQ29tcG9uZW50OiBBYnN0cmFjdENvbXBvbmVudCwgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBlbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fQ29tcG9uZW50LnNldERyYWdIYW5kbGUodGhpcy5fZWxlbSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdENvbXBvbmVudCwgQWJzdHJhY3RIYW5kbGVDb21wb25lbnR9IGZyb20gJy4vYWJzdHJhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZywgRHJhZ0ltYWdlfSBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZSwgRHJhZ0Ryb3BEYXRhfSBmcm9tICcuL2RuZC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtZHJhZ2dhYmxlXScgfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKSBzZXQgZHJhZ2dhYmxlKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbnMgaGFwcGVuZWQuXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBvbkRyYWdTdGFydDogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGF0YSB0aGF0IGhhcyB0byBiZSBkcmFnZ2VkLiBJdCBjYW4gYmUgYW55IEpTIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBkcmFnRGF0YTogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9uIGVuZHMgd2l0aCBhIHZhbGlkIGRyb3AgYWN0aW9uLlxyXG4gICAgICogSXQgaXMgYWN0aXZhdGVkIGFmdGVyIHRoZSBvbi1kcm9wLXN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgQE91dHB1dChcIm9uRHJhZ1N1Y2Nlc3NcIikgb25EcmFnU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIEBJbnB1dChcImRyb3Bab25lc1wiKSBzZXQgZHJvcHpvbmVzKHZhbHVlOkFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLmRyb3Bab25lcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoXCJlZmZlY3RBbGxvd2VkXCIpIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgZWZmZWN0IGN1cnNvclxyXG4gICAgICovXHJcbiAgICBASW5wdXQoXCJlZmZlY3RDdXJzb3JcIikgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlcmUgaXMgdGhlIHByb3BlcnR5IGRyYWdJbWFnZSB5b3UgY2FuIHVzZTpcclxuICAgICAqIC0gVGhlIHN0cmluZyB2YWx1ZSBhcyB1cmwgdG8gdGhlIGltYWdlXHJcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcclxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcclxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIi9pbWFnZXMvc2ltcGxlci5wbmdcIj5cclxuICAgICAqIC4uLlxyXG4gICAgICogLSBUaGUgRHJhZ0ltYWdlIHZhbHVlIHdpdGggSW1hZ2UgYW5kIG9mZnNldCBieSB4IGFuZCB5OlxyXG4gICAgICogICBsZXQgbXlEcmFnSW1hZ2U6IERyYWdJbWFnZSA9IG5ldyBEcmFnSW1hZ2UoXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiLCAwLCAwKTtcclxuICAgICAqIC4uLlxyXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXHJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXHJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJteURyYWdJbWFnZVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAtIFRoZSBjdXN0b20gZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSB2YWx1ZSBvZiBkcmFnSW1hZ2UgcHJvZ3JhbW1hdGljYWxseTpcclxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxyXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxyXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiZ2V0RHJhZ0ltYWdlKHNvbWVEYXRhKVwiPlxyXG4gICAgICogLi4uXHJcbiAgICAgKiAgIGdldERyYWdJbWFnZSh2YWx1ZTphbnkpOiBzdHJpbmcge1xyXG4gICAgICogICAgIHJldHVybiB2YWx1ZSA/IFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiA6IFwiL2ltYWdlcy9zaW1wbGVyMi5wbmdcIlxyXG4gICAgICogICB9XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGRyYWdJbWFnZTogc3RyaW5nIHwgRHJhZ0ltYWdlIHwgRnVuY3Rpb247XHJcblxyXG4gICAgXHJcbiAgICBASW5wdXQoKSBjbG9uZUl0ZW06IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZyxcclxuICAgICAgICBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdEN1cnNvciA9IHRoaXMuX2VsZW0uc3R5bGUuY3Vyc29yO1xyXG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gdGhpcy5kcmFnRGF0YTtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vbkRyYWdTdGFydENsYXNzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdTdGFydENsYXNzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1kcmFnZ2FibGUtaGFuZGxlXScgfSlcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0SGFuZGxlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsIF9Db21wb25lbnQ6IERyYWdnYWJsZUNvbXBvbmVudCxcclxuICAgICAgICBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIF9Db21wb25lbnQsIGNkcik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2LTIwMTggU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxyXG5cclxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtBYnN0cmFjdENvbXBvbmVudH0gZnJvbSAnLi9hYnN0cmFjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZSwgRHJhZ0Ryb3BEYXRhfSBmcm9tICcuL2RuZC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtZHJvcHBhYmxlXScgfSlcclxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoXCJkcm9wRW5hYmxlZFwiKSBzZXQgZHJvcHBhYmxlKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRyb3BFbmFibGVkID0gISF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcm9wIGFjdGlvbiBjb21wbGV0ZXMgY29ycmVjdGx5LlxyXG4gICAgICogSXQgaXMgYWN0aXZhdGVkIGJlZm9yZSB0aGUgb24tZHJhZy1zdWNjZXNzIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgb25Ecm9wU3VjY2VzczogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG4gICAgQE91dHB1dCgpIG9uRHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xyXG5cclxuICAgIEBJbnB1dChcImFsbG93RHJvcFwiKSBzZXQgYWxsb3dkcm9wKHZhbHVlOiAoZHJvcERhdGE6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYWxsb3dEcm9wID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KFwiZHJvcFpvbmVzXCIpIHNldCBkcm9wem9uZXModmFsdWU6QXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIGFsbG93ZWQgZWZmZWN0XHJcbiAgICAgKi9cclxuICAgIEBJbnB1dChcImVmZmVjdEFsbG93ZWRcIikgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBlZmZlY3QgY3Vyc29yXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dChcImVmZmVjdEN1cnNvclwiKSBzZXQgZWZmZWN0Y3Vyc29yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdEN1cnNvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsXHJcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xyXG5cclxuICAgICAgICB0aGlzLmRyb3BFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnRW50ZXIuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ092ZXJDYWxsYmFjayAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnT3Zlci5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX29uRHJhZ0xlYXZlQ2FsbGJhY2sgKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0xlYXZlLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfb25Ecm9wQ2FsbGJhY2sgKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGRhdGFUcmFuc2ZlciA9IChldmVudCBhcyBhbnkpLmRhdGFUcmFuc2ZlcjtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCB8fCAoZGF0YVRyYW5zZmVyICYmIGRhdGFUcmFuc2Zlci5maWxlcykpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkRyb3BTdWNjZXNzLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUFycmF5fSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge0Fic3RyYWN0Q29tcG9uZW50LCBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudH0gZnJvbSAnLi9hYnN0cmFjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZSwgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2V9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2RuZC1zb3J0YWJsZS1jb250YWluZXJdJyB9KVxyXG5leHBvcnQgY2xhc3MgU29ydGFibGVDb250YWluZXIgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KFwiZHJhZ0VuYWJsZWRcIikgc2V0IGRyYWdnYWJsZSh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc29ydGFibGVEYXRhOiBBcnJheTxhbnk+fEZvcm1BcnJheSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzb3J0YWJsZUhhbmRsZXI6IFNvcnRhYmxlRm9ybUFycmF5SGFuZGxlcnxTb3J0YWJsZUFycmF5SGFuZGxlcjtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgc29ydGFibGVEYXRhKHNvcnRhYmxlRGF0YTogQXJyYXk8YW55PnxGb3JtQXJyYXkpIHtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGEgPSBzb3J0YWJsZURhdGE7XHJcbiAgICAgICAgaWYgKHNvcnRhYmxlRGF0YSBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlciA9IG5ldyBTb3J0YWJsZUFycmF5SGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSAhIXRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxlY3Rpb24gaXMgY2hhbmdlZCwgZHJvcCBlbmFibGVkOiBcIiArIHRoaXMuZHJvcEVuYWJsZWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvcnRhYmxlRGF0YSgpOiBBcnJheTxhbnk+fEZvcm1BcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoXCJkcm9wWm9uZXNcIikgc2V0IGRyb3B6b25lcyh2YWx1ZTpBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLCBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfc29ydGFibGVEYXRhU2VydmljZTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdFbnRlckNhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTphbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLmdldEl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgZG9lcyBlbGVtZW50IGV4aXN0IGluIHNvcnRhYmxlRGF0YSBvZiB0aGlzIENvbnRhaW5lclxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTGV0J3MgYWRkIGl0XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29udGFpbmVyLl9vbkRyYWdFbnRlckNhbGxiYWNrLiBkcmFnIG5vZGUgWycgKyB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4LnRvU3RyaW5nKCkgKyAnXSBvdmVyIHBhcmVudCBub2RlJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnJlbW92ZUl0ZW1BdCh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLl9zb3J0YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBuZXcgbGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRJdGVtQXQoaXRlbSwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggY2hhbmdlcyBpbiBwcm9wZXJ0aWVzIG9mIGNvbnRhaW5lciBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1BdChpbmRleDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YSwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4T2YoaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0YWJsZUhhbmRsZXIuaW5kZXhPZih0aGlzLl9zb3J0YWJsZURhdGEsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW1BdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3J0YWJsZUhhbmRsZXIucmVtb3ZlSXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YSwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEl0ZW1BdChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNvcnRhYmxlSGFuZGxlci5pbnNlcnRJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhLCBpdGVtLCBpbmRleCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNvcnRhYmxlQXJyYXlIYW5kbGVyIHtcclxuICAgIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRhYmxlRGF0YVtpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXhPZihzb3J0YWJsZURhdGE6IGFueSwgaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gc29ydGFibGVEYXRhLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc29ydGFibGVEYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0SXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzb3J0YWJsZURhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU29ydGFibGVGb3JtQXJyYXlIYW5kbGVyIHtcclxuICAgIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5hdChpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXhPZihzb3J0YWJsZURhdGE6IGFueSwgaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gc29ydGFibGVEYXRhLmNvbnRyb2xzLmluZGV4T2YoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc29ydGFibGVEYXRhLnJlbW92ZUF0KGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNvcnRhYmxlRGF0YS5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlXScgfSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgnc29ydGFibGVJbmRleCcpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KFwiZHJhZ0VuYWJsZWRcIikgc2V0IGRyYWdnYWJsZSh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KFwiZHJvcEVuYWJsZWRcIikgc2V0IGRyb3BwYWJsZSh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGF0YSB0aGF0IGhhcyB0byBiZSBkcmFnZ2VkLiBJdCBjYW4gYmUgYW55IEpTIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBkcmFnRGF0YTogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoXCJlZmZlY3RBbGxvd2VkXCIpIHNldCBlZmZlY3RhbGxvd2VkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgZWZmZWN0IGN1cnNvclxyXG4gICAgICovXHJcbiAgICBASW5wdXQoXCJlZmZlY3RDdXJzb3JcIikgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cclxuICAgICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoXCJvbkRyYWdTdWNjZXNzXCIpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KFwib25EcmFnU3RhcnRcIikgb25EcmFnU3RhcnRDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoXCJvbkRyYWdPdmVyXCIpIG9uRHJhZ092ZXJDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoXCJvbkRyYWdFbmRcIikgb25EcmFnRW5kQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KFwib25Ecm9wU3VjY2Vzc1wiKSBvbkRyb3BTdWNjZXNzQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZyxcclxuICAgICAgICBwcml2YXRlIF9zb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfc29ydGFibGVEYXRhU2VydmljZTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsXHJcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XHJcbiAgICAgICAgdGhpcy5kcm9wWm9uZXMgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kcm9wWm9uZXM7XHJcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ1N0YXJ0Q2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdTdGFydENhbGxiYWNrLiBkcmFnZ2luZyBlbGVtIHdpdGggaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyID0gdGhpcy5fc29ydGFibGVDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5fZWxlbSk7XHJcbiAgICAgICAgLy8gQWRkIGRyYWdEYXRhXHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gdGhpcy5kcmFnRGF0YTtcclxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0Q2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkICYmIHRoaXMuX2VsZW0gIT09IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuZWxlbSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ092ZXJDYWxsYmFjay4gZHJhZ2dpbmcgZWxlbSB3aXRoIGluZGV4ICcgKyB0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcclxuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5fZWxlbSk7XHJcbiAgICAgICAgICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnRW5kQ2FsbGJhY2suIGVuZCBkcmFnZ2luZyBlbGVtIHdpdGggaW5kZXggJyArIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUobnVsbCk7XHJcbiAgICAgICAgLy8gQWRkIGRyYWdHYXRhXHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLm9uRHJhZ0VuZENhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5fZWxlbSk7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5pbmRleCAhPT0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCkgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSAhPT0gdGhpcy5fc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbXBvbmVudC5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5pbmRleCArICddIG92ZXIgbm9kZSBbJyArIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGl0ZW1cclxuICAgICAgICAgICAgICAgIGxldCBpdGVtOmFueSA9IHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZ2V0SXRlbUF0KHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSBwcmV2aW91c2UgbGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5yZW1vdmVJdGVtQXQodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBuZXcgbGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuaW5zZXJ0SXRlbUF0KGl0ZW0sIHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3BFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uRHJvcENhbGxiYWNrIChldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pc0RyYWdnZWQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uRHJvcENhbGxiYWNrLm9uRHJvcFN1Y2Nlc3NDYWxsYmFjay5kcmFnRGF0YScsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkRyb3BDYWxsYmFjay5vbkRyYWdTdWNjZXNzQ2FsbGJhY2suZHJhZ0RhdGEnLCB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUmVmcmVzaCBjaGFuZ2VzIGluIHByb3BlcnRpZXMgb2YgY29udGFpbmVyIGNvbXBvbmVudFxyXG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLXNvcnRhYmxlLWhhbmRsZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0SGFuZGxlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsIF9Db21wb25lbnQ6IFNvcnRhYmxlQ29tcG9uZW50LFxyXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgICAgICBzdXBlcihlbGVtUmVmLCBkcmFnRHJvcFNlcnZpY2UsIGNvbmZpZywgX0NvbXBvbmVudCwgY2RyKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuL2RuZC5jb25maWcnO1xyXG5pbXBvcnQge0RyYWdEcm9wU2VydmljZSwgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsIGRyYWdEcm9wU2VydmljZUZhY3RvcnksIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcbmltcG9ydCB7RHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnR9IGZyb20gJy4vZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RHJvcHBhYmxlQ29tcG9uZW50fSBmcm9tICcuL2Ryb3BwYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnR9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vYWJzdHJhY3QuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9kbmQuY29uZmlnJztcclxuZXhwb3J0ICogZnJvbSAnLi9kbmQuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZHJvcHBhYmxlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBsZXQgcHJvdmlkZXJzID0gW1xyXG4gICAgRHJhZ0Ryb3BDb25maWcsXHJcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSB9LFxyXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbRHJhZ0Ryb3BDb25maWddIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRHJhZ2dhYmxlQ29tcG9uZW50LCBEcmFnZ2FibGVIYW5kbGVDb21wb25lbnQsIERyb3BwYWJsZUNvbXBvbmVudCwgU29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0cyA6IFtEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCwgRHJvcHBhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50XSxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEbmRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEbmRNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkVsZW1lbnRSZWYiLCJDaGFuZ2VEZXRlY3RvclJlZiIsInRzbGliXzEuX19leHRlbmRzIiwiRXZlbnRFbWl0dGVyIiwiRGlyZWN0aXZlIiwiSW5wdXQiLCJPdXRwdXQiLCJGb3JtQXJyYXkiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT0Esc0JBQXlCLEdBQU87UUFDNUIsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7S0FDbEM7Ozs7OztBQUtELHVCQUEwQixHQUFRO1FBQzlCLE9BQU8sR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0tBQzVDOzs7Ozs7QUFLRCx3QkFBMkIsR0FBUTtRQUMvQixPQUFPLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQztLQUNwQzs7Ozs7O0FBS0QseUJBQTRCLEdBQVc7UUFDbkMscUJBQUks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