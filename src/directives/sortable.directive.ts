import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

import { DragDropConfig } from '../config';
import { DragDropService, DragDropSortableService } from '../service';

import { AbstractDirective } from '../directives/abstract';
import { SortableContainerDirective } from './sortable-container.directive';

/* tslint:disable directive-selector no-output-on-prefix no-output-rename no-input-rename */
@Directive({selector: '[dnd-sortable]'})
export class SortableDirective extends AbstractDirective {
  @Input('sortableIndex') index: number;

  @Input('dragEnabled')
  set draggable(value: boolean) {
    this.dragEnabled = !!value;
  }

  @Input('dropEnabled')
  set droppable(value: boolean) {
    this.dropEnabled = !!value;
  }

  /**
   * The data that has to be dragged. It can be any JS object
   */
  @Input() dragData: any;

  /**
   * Drag allowed effect
   */
  @Input('effectAllowed')
  set effectallowed(value: string) {
    this.effectAllowed = value;
  }

  /**
   * Drag effect cursor
   */
  @Input('effectCursor')
  set effectcursor(value: string) {
    this.effectCursor = value;
  }

  /**
   * Callback function called when the drag action ends with a valid drop action.
   * It is activated after the on-drop-success callback
   */
  @Output('onDragSuccess') onDragSuccessCallback: EventEmitter<any> = new EventEmitter<any>();

  @Output('onDragStart') onDragStartCallback: EventEmitter<any> = new EventEmitter<any>();
  @Output('onDragOver') onDragOverCallback: EventEmitter<any> = new EventEmitter<any>();
  @Output('onDragEnd') onDragEndCallback: EventEmitter<any> = new EventEmitter<any>();
  @Output('onDropSuccess') onDropSuccessCallback: EventEmitter<any> = new EventEmitter<any>();

  constructor(
      elemRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig,
      private _sortableContainer: SortableContainerDirective, private _sortableDataService: DragDropSortableService,
      cdr: ChangeDetectorRef) {
    super(elemRef, dragDropService, config, cdr);
    this.dropZones = this._sortableContainer.dropZones;
    this.dragEnabled = true;
    this.dropEnabled = true;
  }

  _onDragStartCallback(event: Event) {
    // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
    this._sortableDataService.isDragged = true;
    this._sortableDataService.sortableContainer = this._sortableContainer;
    this._sortableDataService.index = this.index;
    this._sortableDataService.markSortable(this.element);
    // Add dragData
    this.dragDropService.isDragged = true;
    this.dragDropService.dragData = this.dragData;
    this.dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
    //
    this.onDragStartCallback.emit(this.dragDropService.dragData);
  }

  _onDragOverCallback(event: Event) {
    if (this._sortableDataService.isDragged && this.element !== this._sortableDataService.element) {
      // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
      this._sortableDataService.sortableContainer = this._sortableContainer;
      this._sortableDataService.index = this.index;
      this._sortableDataService.markSortable(this.element);
      this.onDragOverCallback.emit(this.dragDropService.dragData);
    }
  }

  _onDragEndCallback(event: Event) {
    // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
    this._sortableDataService.isDragged = false;
    this._sortableDataService.sortableContainer = null;
    this._sortableDataService.index = null;
    this._sortableDataService.markSortable(null);
    // Add dragGata
    //Fix drag end callback to emit dragData
    const dragData = this.dragDropService.dragData;
    this.dragDropService.isDragged = false;
    this.dragDropService.dragData = null;
    this.dragDropService.onDragSuccessCallback = null;
    //
    this.onDragEndCallback.emit(dragData);
  }

  _onDragEnterCallback(event: Event) {
    if (this._sortableDataService.isDragged) {
      this._sortableDataService.markSortable(this.element);
      if ((this.index !== this._sortableDataService.index) ||
          (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
        // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' +
        // this._sortableDataService.index + ']'); Get item
        const item: any = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
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
  }

  _onDropCallback(event: Event) {
    if (this._sortableDataService.isDragged) {
      // console.log('onDropCallback.onDropSuccessCallback.dragData', this.dragDropService.dragData);
      this.onDropSuccessCallback.emit(this.dragDropService.dragData);
      if (this.dragDropService.onDragSuccessCallback) {
        // console.log('onDropCallback.onDragSuccessCallback.dragData', this.dragDropService.dragData);
        this.dragDropService.onDragSuccessCallback.emit(this.dragDropService.dragData);
      }
      // Refresh changes in properties of container component
      this._sortableContainer.detectChanges();
    }
  }
}
