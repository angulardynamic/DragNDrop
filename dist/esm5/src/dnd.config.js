/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { isString } from './dnd.utils';
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
export { DataTransferEffect };
function DataTransferEffect_tsickle_Closure_declarations() {
    /** @type {?} */
    DataTransferEffect.COPY;
    /** @type {?} */
    DataTransferEffect.LINK;
    /** @type {?} */
    DataTransferEffect.MOVE;
    /** @type {?} */
    DataTransferEffect.NONE;
    /** @type {?} */
    DataTransferEffect.prototype.name;
}
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
export { DragImage };
function DragImage_tsickle_Closure_declarations() {
    /** @type {?} */
    DragImage.prototype.imageElement;
    /** @type {?} */
    DragImage.prototype.x_offset;
    /** @type {?} */
    DragImage.prototype.y_offset;
}
var DragDropConfig = /** @class */ (function () {
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
export { DragDropConfig };
function DragDropConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    DragDropConfig.prototype.onDragStartClass;
    /** @type {?} */
    DragDropConfig.prototype.onDragEnterClass;
    /** @type {?} */
    DragDropConfig.prototype.onDragOverClass;
    /** @type {?} */
    DragDropConfig.prototype.onSortableDragClass;
    /** @type {?} */
    DragDropConfig.prototype.dragEffect;
    /** @type {?} */
    DragDropConfig.prototype.dropEffect;
    /** @type {?} */
    DragDropConfig.prototype.dragCursor;
    /** @type {?} */
    DragDropConfig.prototype.dragImage;
    /** @type {?} */
    DragDropConfig.prototype.defaultCursor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZG5kLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7SUFTakMsNEJBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0tBQUs7OEJBTHRCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDOzhCQUM5QixJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzs4QkFDOUIsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7OEJBQzlCLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDOzZCQVhoRDs7U0FNYSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7QUFVL0IsSUFBQTtJQUNJLG1CQUNXLGNBQ0EsVUFDQTs7O1FBRkEsaUJBQVksR0FBWixZQUFZO1FBQ1osYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTtRQUNYLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUU5QixxQkFBSSxNQUFNLHFCQUFtQixJQUFJLENBQUMsWUFBWSxDQUFBLENBQUM7WUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDM0MsbUJBQW1CLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1NBQ3REO0tBQ0o7b0JBM0JUO0lBNEJDLENBQUE7QUFaRCxxQkFZQzs7Ozs7Ozs7O0FBRUQsSUFBQTs7Z0NBQ3NDLGdCQUFnQjtnQ0FDaEIsZ0JBQWdCOytCQUNqQixlQUFlO21DQUNYLG1CQUFtQjswQkFFaEIsa0JBQWtCLENBQUMsSUFBSTswQkFDdkIsa0JBQWtCLENBQUMsSUFBSTswQkFDbkMsTUFBTTs2QkFFSCxTQUFTOzt5QkF4QzVDO0lBeUNDLENBQUE7QUFYRCwwQkFXQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7aXNTdHJpbmd9IGZyb20gJy4vZG5kLnV0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhVHJhbnNmZXJFZmZlY3Qge1xyXG5cclxuICAgIHN0YXRpYyBDT1BZID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnY29weScpO1xyXG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XHJcbiAgICBzdGF0aWMgTU9WRSA9IG5ldyBEYXRhVHJhbnNmZXJFZmZlY3QoJ21vdmUnKTtcclxuICAgIHN0YXRpYyBOT05FID0gbmV3IERhdGFUcmFuc2ZlckVmZmVjdCgnbm9uZScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0ltYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpbWFnZUVsZW1lbnQ6IGFueSxcclxuICAgICAgICBwdWJsaWMgeF9vZmZzZXQ6IG51bWJlciA9IDAsXHJcbiAgICAgICAgcHVibGljIHlfb2Zmc2V0OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh0aGlzLmltYWdlRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSByZWFsIGltYWdlIGZyb20gc3RyaW5nIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgbGV0IGltZ1Njcjogc3RyaW5nID0gPHN0cmluZz50aGlzLmltYWdlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICg8SFRNTEltYWdlRWxlbWVudD50aGlzLmltYWdlRWxlbWVudCkuc3JjID0gaW1nU2NyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BDb25maWcge1xyXG4gICAgcHVibGljIG9uRHJhZ1N0YXJ0Q2xhc3M6IHN0cmluZyA9IFwiZG5kLWRyYWctc3RhcnRcIjtcclxuICAgIHB1YmxpYyBvbkRyYWdFbnRlckNsYXNzOiBzdHJpbmcgPSBcImRuZC1kcmFnLWVudGVyXCI7XHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSBcImRuZC1kcmFnLW92ZXJcIjtcclxuICAgIHB1YmxpYyBvblNvcnRhYmxlRHJhZ0NsYXNzOiBzdHJpbmcgPSBcImRuZC1zb3J0YWJsZS1kcmFnXCI7XHJcblxyXG4gICAgcHVibGljIGRyYWdFZmZlY3Q6IERhdGFUcmFuc2ZlckVmZmVjdCA9IERhdGFUcmFuc2ZlckVmZmVjdC5NT1ZFO1xyXG4gICAgcHVibGljIGRyb3BFZmZlY3Q6IERhdGFUcmFuc2ZlckVmZmVjdCA9IERhdGFUcmFuc2ZlckVmZmVjdC5NT1ZFO1xyXG4gICAgcHVibGljIGRyYWdDdXJzb3I6IHN0cmluZyA9IFwibW92ZVwiO1xyXG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDdXJzb3I6IHN0cmluZyA9IFwicG9pbnRlclwiO1xyXG59Il19