export interface TableAutorsEvents {
    id: number;
    action: TableAutorsActions;
}

export type TableAutorsActions = 'detail' | 'edit' | 'delete';