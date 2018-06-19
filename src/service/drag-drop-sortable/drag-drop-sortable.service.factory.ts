import { DragDropConfig } from "../../config/drag-drop-config";
import { DragDropSortableService } from "./drag-drop-sortable.service";

export function dragDropSortableServiceFactory(config: DragDropConfig): DragDropSortableService  {
    return new DragDropSortableService(config);
}
