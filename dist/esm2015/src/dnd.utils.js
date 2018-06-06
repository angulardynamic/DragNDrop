/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Check and return true if an object is type of string
 * @param {?} obj
 * @return {?}
 */
export function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 * @param {?} obj
 * @return {?}
 */
export function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 * @param {?} obj
 * @return {?}
 */
export function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 * @param {?} src
 * @return {?}
 */
export function createImage(src) {
    let /** @type {?} */ img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 * @param {?} fun
 * @return {?}
 */
export function callFun(fun) {
    return fun();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLnV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWRuZC8iLCJzb3VyY2VzIjpbInNyYy9kbmQudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT0EsTUFBTSxtQkFBbUIsR0FBTztJQUM1QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0NBQ2xDOzs7Ozs7QUFLRCxNQUFNLG9CQUFvQixHQUFRO0lBQzlCLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUM7Q0FDNUM7Ozs7OztBQUtELE1BQU0scUJBQXFCLEdBQVE7SUFDL0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQztDQUNwQzs7Ozs7O0FBS0QsTUFBTSxzQkFBc0IsR0FBVztJQUNuQyxxQkFBSSxHQUFHLEdBQW9CLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQUNsRCxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDZDs7Ozs7O0FBS0QsTUFBTSxrQkFBa0IsR0FBYTtJQUNqQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxOCBTZXJnZXkgQWtvcGtva2h5YW50c1xyXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXHJcblxyXG4vKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajphbnkpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBub3QgdW5kZWZpbmVkIG9yIG51bGxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ByZXNlbnQob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBhbmQgcmV0dXJuIHRydWUgaWYgYW4gb2JqZWN0IGlzIHR5cGUgb2YgRnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIEltYWdlIGVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgdXJsIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaW1nOkhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSFRNTEltYWdlRWxlbWVudCgpO1xyXG4gICAgaW1nLnNyYyA9IHNyYztcclxuICAgIHJldHVybiBpbWc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsIHRoZSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxGdW4oZnVuOiBGdW5jdGlvbikge1xyXG4gICAgcmV0dXJuIGZ1bigpO1xyXG59Il19