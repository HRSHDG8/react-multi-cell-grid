import type { ColumnDefination } from "../../defination/column/column-defination";

export type TableBodyProps = {
    columnDef: ColumnDefination[],
    data: any[],
    rowChecked: Function
}