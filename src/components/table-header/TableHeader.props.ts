import type { ColumnDefination } from "../../defination/column/column-defination";
import type { CheckAll } from "../../util/funtion.type";

export type TableHeaderProps = {
    columnDef: ColumnDefination[];
    checkAll: CheckAll;
    checked: boolean;
    onSort: Function;
    theme: any;
}