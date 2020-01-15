import DataType from "../../util/grid.data.type";

export interface ColumnDefination {
    type: DataType;
    data: ColumnData[];
}

export interface ColumnData {
    key: string;
    label: string;
    sortable?: boolean;
    sortDir: string | null;
    sort?: Function;
}

export const SortDirection = [null, "asc", "desc"];