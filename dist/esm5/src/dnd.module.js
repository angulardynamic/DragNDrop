/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
import { NgModule } from "@angular/core";
import { DragDropConfig } from './config/drag-drop-config';
import { DragDropService } from './service/drag-drop/drag-drop.service';
import { dragDropServiceFactory } from './service/drag-drop/drag-drop.service.factory';
import { DragDropSortableService } from './service/drag-drop-sortable/drag-drop-sortable.service';
import { dragDropSortableServiceFactory } from './service/drag-drop-sortable/drag-drop-sortable.service.factory';
import { DraggableDirective, DraggableHandleDirective, DroppableDirective, SortableContainerDirective, SortableDirective, SortableHandleDirective } from "./directives";
// import { DraggableComponent, DraggableHandleComponent } from './draggable.component';
// import { DroppableComponent } from './droppable.component';
// import { SortableComponent, SortableContainer, SortableHandleComponent } from './sortable.component';
export { AbstractHandleDirective, AbstractDirective } from './directives/abstract';
export { DataTransferEffect, DragDropConfig, DragImage } from './config';
// export * from './draggable.component';
// export * from './droppable.component';
// export * from './sortable.component';
export { DraggableHandleDirective, DraggableDirective, DroppableDirective, SortableContainerDirective, SortableHandleDirective, SortableDirective } from './directives';
export var /** @type {?} */ providers = [
    DragDropConfig,
    { provide: DragDropService, useFactory: dragDropServiceFactory },
    { provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig] }
];
var DndModule = /** @class */ (function () {
    function DndModule() {
    }
    /**
     * @return {?}
     */
    DndModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DndModule,
            providers: providers
        };
    };
    DndModule.decorators = [
        { type: NgModule, args: [{
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
                    entryComponents: []
                },] },
    ];
    return DndModule;
}());
export { DndModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1kbmQvIiwic291cmNlcyI6WyJzcmMvZG5kLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFtQyxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUsa0JBQWtCLEVBQUUsMEJBQTBCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFNeEssMkRBQWMsdUJBQXVCLENBQUM7QUFDdEMsOERBQWMsVUFBVSxDQUFDOzs7O0FBSXpCLHlKQUFjLGNBQWMsQ0FBQztBQUU3QixNQUFNLENBQUMscUJBQUksU0FBUyxHQUFHO0lBQ25CLGNBQWM7SUFDZCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLHNCQUFzQixFQUFFO0lBQ2hFLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRTtDQUMzRyxDQUFDOzs7Ozs7O0lBb0JPLGlCQUFPOzs7SUFBZDtRQUNNLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxTQUFTO1NBQ3ZCLENBQUM7S0FDTDs7Z0JBdkJKLFFBQVEsU0FBQzs7Ozs7OztvQkFPTixZQUFZLEVBQUU7d0JBQ1Ysa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUsa0JBQWtCLEVBQUUsMEJBQTBCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCO3FCQUMzSTtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUsa0JBQWtCLEVBQUUsMEJBQTBCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCO3FCQUMzSTtvQkFDRCxlQUFlLEVBQUUsRUFDaEI7aUJBRUo7O29CQS9DRDs7U0FnRGEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoQykgMjAxNi0yMDE4IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcclxuXHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZHJhZy1kcm9wLWNvbmZpZyc7XHJcbmltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9kcmFnLWRyb3AvZHJhZy1kcm9wLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBkcmFnRHJvcFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC9kcmFnLWRyb3Auc2VydmljZS5mYWN0b3J5JztcclxuXHJcbmltcG9ydCB7IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2RyYWctZHJvcC1zb3J0YWJsZS9kcmFnLWRyb3Atc29ydGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vc2VydmljZS9kcmFnLWRyb3Atc29ydGFibGUvZHJhZy1kcm9wLXNvcnRhYmxlLnNlcnZpY2UuZmFjdG9yeSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZSwgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBTb3J0YWJsZURpcmVjdGl2ZSwgU29ydGFibGVIYW5kbGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IERyb3BwYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcHBhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IFNvcnRhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZXMvYWJzdHJhY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7XHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vZHJhZ2dhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vZHJvcHBhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzJztcclxuXHJcbmV4cG9ydCBsZXQgcHJvdmlkZXJzID0gW1xyXG4gICAgRHJhZ0Ryb3BDb25maWcsXHJcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSB9LFxyXG4gICAgeyBwcm92aWRlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbRHJhZ0Ryb3BDb25maWddIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbi8vICAgZGVjbGFyYXRpb25zOiBbXHJcbi8vICAgICAgIERyYWdnYWJsZUNvbXBvbmVudCwgRHJhZ2dhYmxlSGFuZGxlQ29tcG9uZW50LCBEcm9wcGFibGVDb21wb25lbnQsIFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnRcclxuLy8gICBdLFxyXG4vLyAgIGV4cG9ydHMgOiBbXHJcbi8vICAgICAgICBEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCwgRHJvcHBhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50XHJcbi8vICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIERyYWdnYWJsZURpcmVjdGl2ZSwgRHJhZ2dhYmxlSGFuZGxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmUsIFNvcnRhYmxlQ29udGFpbmVyRGlyZWN0aXZlLCBTb3J0YWJsZURpcmVjdGl2ZSwgU29ydGFibGVIYW5kbGVEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcmFnZ2FibGVIYW5kbGVEaXJlY3RpdmUsIERyb3BwYWJsZURpcmVjdGl2ZSwgU29ydGFibGVDb250YWluZXJEaXJlY3RpdmUsIFNvcnRhYmxlRGlyZWN0aXZlLCBTb3J0YWJsZUhhbmRsZURpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIERuZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IERuZE1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==