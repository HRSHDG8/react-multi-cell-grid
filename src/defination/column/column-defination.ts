import DataType from "../../util/grid.data.type";
import { comparator } from "../../util/funtion.type";

export interface ColumnDefination {
    type: DataType;
    data: ColumnData[];
}

export interface ColumnData {
    key: string;
    label: string;
    sortable?: boolean;
    sortDir: string | null;
    sort?: comparator;
}

export const SortDirection = [null, "asc", "desc"];