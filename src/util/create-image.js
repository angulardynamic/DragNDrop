/**
 * Create Image element with specified url string
 */
export function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
