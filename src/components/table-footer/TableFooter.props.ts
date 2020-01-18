import { ColumnDefination } from "../../defination/column/column-defination";

export type TableFooterProps = {
    columnDef: ColumnDefination[];
    selected?: number;
    total?: number;
    theme: any;
}