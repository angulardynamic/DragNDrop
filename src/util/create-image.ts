/**
 * Create Image element with specified url string
 */
export function createImage(src: string): HTMLImageElement {
  const img: HTMLImageElement = new HTMLImageElement();
  img.src = src;
  return img;
}
