var SortableFormArrayHandler = /** @class */ (function () {
    function SortableFormArrayHandler() {
    }
    SortableFormArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData.at(index);
    };
    SortableFormArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.controls.indexOf(item);
    };
    SortableFormArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.removeAt(index);
    };
    SortableFormArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.insert(index, item);
    };
    return SortableFormArrayHandler;
}());
export { SortableFormArrayHandler };
