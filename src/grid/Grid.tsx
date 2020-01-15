import * as React from 'react';
import { GridProps } from './Grid.props';
import TableHeader from '../components/table-header/TableHeader';
import TableBody from '../components/table-body/TableBody';
import classNames from './Grid.css';
interface GridState {
    data: any[]
    tsi: number,
    checked: boolean
}
class Grid extends React.Component<GridProps>{
    state: GridState = {
        data: [],
        tsi: 0,
        checked: false
    }
    constructor(props: GridProps) {
        super(props);
        this.checkAll = this.checkAll.bind(this);
        this.checkRow = this.checkRow.bind(this);
        this.state.data = props.data.map(e => {
            e._uuId = Math.random() * 10;
            return e;
        });
    }
    // componentDidUpdate(prevProps){
    //     if(Array)
    // }
    checkRow(row: any) {
        let rowObject = this.state.data.find(rowData => row._uuId === rowData._uuId);
        rowObject.checked = !rowObject.checked;
        this.setState({ checked: this.state.data.reduce((a: any, b: any) => a.checked && b.checked) }, () => { console.log(this.state) })
    }
    checkAll() {
        let data = this.state.data.map(e => { e.checked = !this.state.checked; return e });
        this.setState((state: GridState) => {
            state.data = data;
            state.checked = !state.checked;
            return state;
        }, () => console.log(this.state));
    }
    render() {
        return (
            <table className={classNames.gridContainer}>
                <TableHeader columnDef={this.props.columnDef} checkAll={this.checkAll} checked={this.state.checked} />
                <TableBody columnDef={this.props.columnDef} data={this.state.data} rowChecked={this.checkRow} />
                <tfoot>

                </tfoot>
            </table>
        )
    }

}
export default Grid;