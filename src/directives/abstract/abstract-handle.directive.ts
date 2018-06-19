import { ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';

import { DragDropConfig } from '../../config';
import { DragDropService } from '../../service';
import { AbstractDirective } from './abstract.directive';

export abstract class AbstractHandleDirective implements OnDestroy {
  element: HTMLElement;

  constructor(
      elementReference: ElementRef, public dragDropService: DragDropService, public config: DragDropConfig,
      private directive: AbstractDirective, private cdr: ChangeDetectorRef
  ) {
    this.element = elementReference.nativeElement;
    this.directive.dragHandle = this.element;
  }

  ngOnDestroy() {
    this.directive.dragHandle = undefined;
  }
}
