import { DragDropService } from "./drag-drop.service";

export function dragDropServiceFactory(): DragDropService  {
    return new DragDropService();
}
