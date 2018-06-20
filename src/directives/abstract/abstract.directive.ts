import {ChangeDetectorRef, ElementRef, ViewRef} from '@angular/core';

import {DragDropConfig, DragImage} from '../../config';
import {DragDropService} from '../../service';
import {isPresent, isFunction, isString, createImage, callFunction} from '../../util';

export abstract class AbstractDirective {
  element: HTMLElement;
  
  private _dragHandle: HTMLElement | undefined;
  dragHelper: HTMLElement;
  defaultCursor: string;

    /**
     * Last element that was mousedown'ed
     */
  target: EventTarget;

    /**
     * Whether the object is draggable. Default is true.
     */
  private _dragEnabled: boolean = false;

    /**
     * Allows drop on this element
     */
  dropEnabled: boolean = false;

    /**
     * Drag effect
     */
  effectAllowed: string;

    /**
     * Drag cursor
     */
  effectCursor: string;

    /**
     * Restrict places where a draggable element can be dropped. Either one of
     * these two mechanisms can be used:
     *
     * - dropZones: an array of strings that permits to specify the drop zones
     *   associated with this component. By default, if the drop-zones attribute
     *   is not specified, the droppable component accepts drop operations by
     *   all the draggable components that do not specify the allowed-drop-zones
     *
     * - allowDrop: a boolean function for droppable components, that is checked
     *   when an item is dragged. The function is passed the dragData of this
     *   item.
     *   - if it returns true, the item can be dropped in this component
     *   - if it returns false, the item cannot be dropped here
     */
  allowDrop: (dropData: any) => boolean;

  dropZones: string[] = [];

    /**
     * Here is the property dragImage you can use:
     * - The string value as url to the image
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="/images/simpler.png">
     * ...
     * - The DragImage value with Image and optional offset by x and y:
     *   let myDragImage: DragImage = new DragImage("/images/simpler1.png", 0, 0);
     * ...
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="myDragImage">
     * ...
     * - The custom function to return the value of dragImage programmatically:
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="getDragImage(someData)">
     * ...
     *   getDragImage(value:any): string {
     *     return value ? "/images/simpler1.png" : "/images/simpler2.png"
     *   }
     */
  dragImage: string|DragImage|Function;

  cloneItem: boolean = false;

  constructor(
      elementReference: ElementRef, public dragDropService: DragDropService, public config: DragDropConfig,
      private cdr: ChangeDetectorRef
  ) {
    this.defaultCursor = this.config.defaultCursor;
    this.element = elementReference.nativeElement;
    this.element.style.cursor = this.defaultCursor;  // set default cursor on our element

    // Register drop events
    this.element.ondragenter = (event: Event) => this.dragEnter(event);

    this.element.ondragover = (event: DragEvent) => {
      this.dragOver(event);

      if (isPresent(event.dataTransfer)) {
        event.dataTransfer.dropEffect = this.config.dropEffect.name;
      }

      return false;
    };
    this.element.ondragleave = (event: Event) => this.dragLeave(event);
    this.element.ondrop = (event: Event) => this.drop(event);


    // Register drag events
    this.element.onmousedown = (event: MouseEvent) => {
      this.target = event.target;
    };

    this.element.ondragstart = (event: DragEvent) => {
      if (this.dragEnabled && isPresent(this.dragHandle)) {
        if (!this.dragHandle.contains(this.target as Element)) {
          event.preventDefault();
          return;
        }
      }

      this.dragStart(event);

      if (isPresent(event.dataTransfer)) {
        event.dataTransfer.setData('text', '');
        // Change drag effect
        event.dataTransfer.effectAllowed = this.effectAllowed || this.config.dragEffect.name;
        // Change drag image
        if (isPresent(this.dragImage)) {
            if (isString(this.dragImage)) {
                (<any>event.dataTransfer).setDragImage(createImage(<string>this.dragImage));
            } else if (isFunction(this.dragImage)) {
                (<any>event.dataTransfer).setDragImage(callFunction(<Function>this.dragImage));
            } else {
                let img: DragImage = <DragImage>this.dragImage;
                (<any>event.dataTransfer).setDragImage(img.imageElement, img.x_offset, img.y_offset);
            }
        } else if (isPresent(this.config.dragImage)) {
            let dragImage: DragImage = this.config.dragImage;
            (<any>event.dataTransfer).setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
        } else if (this.cloneItem) {
            this.dragHelper = <HTMLElement>this.element.cloneNode(true);
            this.dragHelper.classList.add('dnd-drag-item');
            this.dragHelper.style.position = "absolute";
            this.dragHelper.style.top = "0px";
            this.dragHelper.style.left = "-1000px";
            this.element.parentElement.appendChild(this.dragHelper);
            (<any>event.dataTransfer).setDragImage(this.dragHelper, event.offsetX, event.offsetY);
        }

        // Change drag cursor
        let cursorelem = (this._dragHandle) ? this._dragHandle : this.element;

        if (this._dragEnabled) {
            cursorelem.style.cursor = this.effectCursor ? this.effectCursor : this.config.dragCursor;
        } else {
            cursorelem.style.cursor = this.defaultCursor;
        }
      }
    };

    this.element.ondragend = (event: Event) => {
        if (this.element.parentElement && this.dragHelper) {
            this.element.parentElement.removeChild(this.dragHelper);
        }
        // console.log('ondragend', event.target);
        this.dragEnd(event);
        // Restore style of dragged element
        let cursorelem = (this._dragHandle) ? this._dragHandle : this.element;
        cursorelem.style.cursor = this.defaultCursor;
    };
  }

  get dragEnabled(): boolean {
    return this._dragEnabled;
  }

  set dragEnabled(value: boolean) {
    this._dragEnabled = value;
    this.element.draggable = value;
  }

  get dragHandle(): HTMLElement {
    return this._dragHandle;
  }

  set dragHandle(value: HTMLElement | undefined) {
    this._dragHandle = value;
  }

  /**
   * Run change detection manually to fix an issue in Safari.
   *
   * @memberof AbstractDirective
   */
  detectChanges() {
        // Programmatically run change detection to fix issue in Safari
    setTimeout(() => {
      if (this.cdr && !(this.cdr as ViewRef).destroyed) {
        this.cdr.detectChanges();
      }
    }, 250);
  }

    //****** Droppable *******//
  private dragEnter(event: Event): void {
    if (this.isDropAllowed(event)) {
      this.dragEnterCallback(event);
    }
  }

  private dragOver(event: Event): void {
    if (this.isDropAllowed(event)) {
            // The element is over the same source element - do nothing
      if (isPresent(event.preventDefault)) {
        event.preventDefault();
      }

      this.dragOverCallback(event);
    }

    // this.dragOverCallback(event);
  }

  private dragLeave(event: Event): void {
    if (this.isDropAllowed(event)) {
      this.dragLeaveCallback(event);
    }
  }

  private drop(event: Event): void {
    if (this.isDropAllowed(event)) {
        // Necessary. Allows us to drop.
        this.preventAndStop(event);

        this.dropCallback(event);
        this.detectChanges();
    }
  }

  private isDropAllowed(event: any): boolean {
    if ((this.dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
      if (isPresent(this.allowDrop)) {
        return this.allowDrop(this.dragDropService.dragData);
      }

      // Otherwise, use dropZones if they are set.
      if (this.dropZones.length === 0 && this.dragDropService.allowedDropZones.length === 0) {
        return true;
      }

      for (const dropZone of this.dragDropService.allowedDropZones) {
        if (this.dropZones.indexOf(dropZone) !== -1) {
          return true;
        }
      }
    }

    return false;
  }


  /**
   * Prevent the given events default action from being called and stops it from being propagated further.
   *
   * @memberof AbstractDirective
   */
  private preventAndStop(event: Event): void {
    if (event.preventDefault) {
      event.preventDefault();
    }

    if (event.stopPropagation) {
      event.stopPropagation();
    }
  }


  private dragStart(event: Event): void {
    if (this.dragEnabled) {
      this.dragDropService.allowedDropZones = this.dropZones;
      this.dragStartCallback(event);
      
      // Fixed dragData of nested draggable element.
      if (event.stopPropagation) {
        event.stopPropagation();
      }
    }
  }

  private dragEnd(event: Event): void {
    this.dragDropService.allowedDropZones = [];
    this.dragEndCallback(event);
  }
  dragEnterCallback(event: Event): void {}

  dragOverCallback(event: Event): void {}

  dragLeaveCallback(event: Event): void {}

  dropCallback(event: Event): void {}

  dragStartCallback(event: Event): void {}

  dragEndCallback(event: Event): void {}
}
