import * as React from 'react';
import { GridProps } from './Grid.props';
import TableHeader from '../components/table-header/TableHeader';
import TableBody from '../components/table-body/TableBody';
import classNames from './Grid.css';
import DataType from '../util/grid.data.type';
import { ColumnDefination, ColumnData, SortDirection } from '../defination/column/column-defination';
interface GridState {
    data: any[];
    checked: boolean;
}
class Grid extends React.Component<GridProps>{
    state: GridState = {
        data: [],
        checked: false
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
    sort(key: string) {
        this.props.columnDef.forEach((value: ColumnDefination) => {
            let cellElem = value.data.find((e: ColumnData) => e.key === key);
            if (cellElem) {
                cellElem.sortDir = SortDirection[(SortDirection.indexOf(cellElem.sortDir) + 1) % 3];
                let data = [...this.state.data];
                switch (cellElem.sortDir) {
                    case "asc":
                        data.sort((a, b) => a[key] > b[key] ? 1 : -1);
                        break;
                    case "desc":
                        data.sort((a, b) => a[key] < b[key] ? 1 : -1);
                        break;
                    default: break;
                }

                this.setState({ data: data }, () => { console.log(this.state, this.props) });
            }
        })
    }
    checkRow(row: any) {
        let rowObject = this.state.data.find(rowData => row._uuId === rowData._uuId);
        rowObject.checked = !rowObject.checked;
        this.setState({ checked: this.state.data.reduce((a: any, b: any) => a.checked && b.checked) }, () => { console.log(this.state, this.props) })
    }
    checkAll() {
        let data = this.state.data.map(e => { e.checked = !this.state.checked; return e });
        this.setState((state: GridState) => {
            state.data = data;
            state.checked = !state.checked;
            return state;
        });
    }
    render() {
        return (
            <table className={classNames.gridContainer}>
                <TableHeader columnDef={this.props.columnDef} checkAll={this.checkAll} checked={this.state.checked} onSort={this.sort} />
                <TableBody columnDef={this.props.columnDef} data={this.state.data} rowChecked={this.checkRow} />
                <tfoot>

                </tfoot>
            </table>
        )
    }

}
export default Grid;