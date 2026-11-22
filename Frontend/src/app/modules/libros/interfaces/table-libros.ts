export interface TableLibrosEvents {
    id: number;
    action: TableLibrosActions;
}

export type TableLibrosActions = 'detail' | 'edit' | 'delete';