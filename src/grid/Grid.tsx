import * as React from 'react';
import { GridProps } from './Grid.props';
import TableHeader from '../components/table-header/TableHeader';
import TableBody from '../components/table-body/TableBody';
import TableFooter from '../components/table-footer/TableFooter';
import classNames from './Grid.css';
import DataType from '../util/grid.data.type';
import { ColumnDefination, ColumnData, SortDirection } from '../defination/column/column-defination';
import GridApi from '../api/GridApi';
interface GridState {
    data: any[];
    checked: boolean;
}
class Grid extends React.Component<GridProps>{
    state: GridState = {
        data: [],
        checked: false
    }
    gridApi: GridApi = new GridApi(this);
    componentDidMount() {
        if (this.props.gridReady) {
            this.props.gridReady(this.gridApi);
        }
    }
    update() {
        this.setState({ update: Math.random() });
    }
    constructor(props: GridProps) {
        super(props);
        this.checkAll = this.checkAll.bind(this);
        this.checkRow = this.checkRow.bind(this);
        this.sort = this.sort.bind(this);
        this.state.data = props.data.map(e => {
            e._uuId = Math.random() * 10;
            return e;
        });
        props.columnDef.forEach((columnDef: ColumnDefination) => {
            if (columnDef.type === DataType.data) {
                columnDef.data.forEach((data: ColumnData) => {
                    if (data.sortable) {
                        data.sortDir = null;
                    }
                })
            }
        });
    }
    private sort(key: string) {
        let data = [...this.state.data];
        this.props.columnDef.forEach((value: ColumnDefination) => {
            let cellElem = value.data.find((e: ColumnData) => e.key === key);
            value.data.filter((e: ColumnData) => e.key !== key && e.sortable).forEach((e: ColumnData) => e.sortDir = null);
            if (cellElem) {
                cellElem.sortDir = SortDirection[(SortDirection.indexOf(cellElem.sortDir) + 1) % 3];
                const comparator = cellElem.sort || ((a: any, b: any) => a[key] > b[key] ? 1 : -1);
                switch (cellElem.sortDir) {
                    case "asc":
                        console.log(comparator)
                        data.sort(comparator);
                        break;
                    case "desc":
                        data.reverse();
                        break;
                    default: break;
                };
            }
        });
        this.setState({ data: data });
    }
    private checkRow(row: any) {
        let rowObject = this.state.data.find(rowData => row._uuId === rowData._uuId);
        rowObject.checked = !rowObject.checked;
        this.setState({ checked: this.state.data.reduce((a: boolean, b: any) => a && b.checked, true) });
    }
    private checkAll() {
        let data = this.state.data.map(e => { e.checked = !this.state.checked; return e });
        this.setState((state: GridState) => {
            state.data = data;
            state.checked = !state.checked;
            return state;
        });
    }
    render() {
        return (
            <table className={classNames.gridContainer + " " + this.props.theme.tableBorder}>
                <TableHeader columnDef={this.props.columnDef} checkAll={this.checkAll} checked={this.state.checked} onSort={this.sort} theme={this.props.theme} />
                <TableBody columnDef={this.props.columnDef} data={this.state.data} rowChecked={this.checkRow} theme={this.props.theme} />
                <TableFooter columnDef={this.props.columnDef} selected={this.state.data.filter(e => e.checked).length} total={this.state.data.length} theme={this.props.theme} />
            </table>
        )
    }

}
export default Grid;