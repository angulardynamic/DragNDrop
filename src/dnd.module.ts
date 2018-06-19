// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

import { ElementRef, ModuleWithProviders, NgModule } from "@angular/core";

import { DragDropConfig } from './config/drag-drop-config';
import { DragDropService } from './service/drag-drop/drag-drop.service';
import { dragDropServiceFactory } from './service/drag-drop/drag-drop.service.factory';

import { DragDropSortableService } from './service/drag-drop-sortable/drag-drop-sortable.service';
import { dragDropSortableServiceFactory } from './service/drag-drop-sortable/drag-drop-sortable.service.factory';
import { DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective, SortableHandleDirective } from "./directives";

// import { DraggableComponent, DraggableHandleComponent } from './draggable.component';
// import { DroppableComponent } from './droppable.component';
// import { SortableComponent, SortableContainer, SortableHandleComponent } from './sortable.component';

export * from './directives/abstract';
export * from './config';
// export * from './draggable.component';
// export * from './droppable.component';
// export * from './sortable.component';
export * from './directives';

export let providers = [
    DragDropConfig,
    { provide: DragDropService, useFactory: dragDropServiceFactory },
    { provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig] }
];

@NgModule({
//   declarations: [
//       DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent
//   ],
//   exports : [
//        DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent
//   ],
    declarations: [
        DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective, SortableHandleDirective
    ],
    exports: [
        DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective, SortableHandleDirective
    ],
    entryComponents: [
    ]

})
export class DndModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: DndModule,
            providers: providers
        };
    }
}
