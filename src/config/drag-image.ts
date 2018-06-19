import { isString } from '../util/is-string';

export class DragImage {
    constructor(public imageElement: any, public x_offset: number = 0, public y_offset: number = 0) {
            if (isString(this.imageElement)) {
                // Create real image from string source
                const imgScr: string = <string>this.imageElement;
                this.imageElement = new HTMLImageElement();
                (<HTMLImageElement>this.imageElement).src = imgScr;
            }
        }
}