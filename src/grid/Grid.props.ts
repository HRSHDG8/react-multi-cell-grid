import type { ColumnDefination } from "../defination/column/column-defination";
import { Theme } from "../theme/ThemeProvider";

export type GridProps = {
    data: any[];
    columnDef: ColumnDefination[];
    gridReady?: Function;
    theme: any;
}