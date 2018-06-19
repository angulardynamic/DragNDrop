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
export { SortableFormArrayHandler };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUtZm9ybS1hcnJheS1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy91dGlsL3NvcnRhYmxlLWZvcm0tYXJyYXktaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBQTs7Ozs7Ozs7SUFDRSw0Q0FBUzs7Ozs7SUFBVCxVQUFVLFlBQWlCLEVBQUUsS0FBYTtRQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7Ozs7O0lBRUQsMENBQU87Ozs7O0lBQVAsVUFBUSxZQUFpQixFQUFFLElBQVM7UUFDbEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVDOzs7Ozs7SUFFRCwrQ0FBWTs7Ozs7SUFBWixVQUFhLFlBQWlCLEVBQUUsS0FBYTtRQUMzQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzlCOzs7Ozs7O0lBRUQsK0NBQVk7Ozs7OztJQUFaLFVBQWEsWUFBaUIsRUFBRSxJQUFTLEVBQUUsS0FBYTtRQUN0RCxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNsQzttQ0FmSDtJQWdCQyxDQUFBO0FBaEJELG9DQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTb3J0YWJsZUZvcm1BcnJheUhhbmRsZXIge1xyXG4gIGdldEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmF0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIGluZGV4T2Yoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc29ydGFibGVEYXRhLmNvbnRyb2xzLmluZGV4T2YoaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHNvcnRhYmxlRGF0YS5yZW1vdmVBdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc29ydGFibGVEYXRhLmluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==