import type { ColumnDefination } from "../../defination/column/column-defination";

export type TableHeaderProps = {
    columnDef: ColumnDefination[],
    checkAll: Function,
    checked: boolean,
    onSort: Function
}