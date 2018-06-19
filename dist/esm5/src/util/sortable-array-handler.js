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
export { SortableArrayHandler };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUtYXJyYXktaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvdXRpbC9zb3J0YWJsZS1hcnJheS1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFBOzs7Ozs7OztJQUNFLHdDQUFTOzs7OztJQUFULFVBQVUsWUFBaUIsRUFBRSxLQUFhO1FBQ3hDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUI7Ozs7OztJQUVELHNDQUFPOzs7OztJQUFQLFVBQVEsWUFBaUIsRUFBRSxJQUFTO1FBQ2xDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOzs7Ozs7SUFFRCwyQ0FBWTs7Ozs7SUFBWixVQUFhLFlBQWlCLEVBQUUsS0FBYTtRQUMzQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMvQjs7Ozs7OztJQUVELDJDQUFZOzs7Ozs7SUFBWixVQUFhLFlBQWlCLEVBQUUsSUFBUyxFQUFFLEtBQWE7UUFDdEQsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3JDOytCQWZIO0lBZ0JDLENBQUE7QUFoQkQsZ0NBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNvcnRhYmxlQXJyYXlIYW5kbGVyIHtcclxuICBnZXRJdGVtQXQoc29ydGFibGVEYXRhOiBhbnksIGluZGV4OiBudW1iZXIpOiBhbnkge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YVtpbmRleF07XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKHNvcnRhYmxlRGF0YTogYW55LCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHNvcnRhYmxlRGF0YS5pbmRleE9mKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbUF0KHNvcnRhYmxlRGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzb3J0YWJsZURhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIGluc2VydEl0ZW1BdChzb3J0YWJsZURhdGE6IGFueSwgaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzb3J0YWJsZURhdGEuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcclxuICB9XHJcbn1cclxuIl19