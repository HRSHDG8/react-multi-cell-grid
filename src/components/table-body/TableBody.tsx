import * as React from 'react';
import { TableBodyProps } from './TableBody.props';
import { ColumnData, ColumnDefination } from '../../defination/column/column-defination';
import DataType from '../../util/grid.data.type';
import classNames from './TableBody.css';
class TableBody extends React.Component<TableBodyProps>{
    render() {
        return (
            <tbody className={this.props.theme.tableBody}>
                {this.props.data.map((row: any, index: number) => {
                    return <tr key={index} className={this.props.theme.tdBorderBottom}>
                        {this.props.columnDef.map((columnData: ColumnDefination, index: number) => {
                            if (columnData.type === DataType.checkbox) {
                                return <td key={index} className={classNames.bodyDataTd}>
                                    <>
                                        {columnData.data.map((cellElem: ColumnData) => {
                                            return (
                                                <div key={cellElem.key}>
                                                    <input type="checkbox" checked={row[cellElem.key]} onChange={() => { this.props.rowChecked(row) }} />
                                                </div>
                                            )
                                        })}
                                    </>
                                </td>
                            } else {
                                return (
                                    <td key={index} className={classNames.bodyDataTd}>
                                        <>
                                            {columnData.data.map((cellElem: ColumnData) => {
                                                return (
                                                    <div key={cellElem.key}>
                                                        {row[cellElem.key]}
                                                    </div>
                                                )
                                            })}
                                        </>
                                    </td>
                                )
                            }
                        })}
                    </tr>
                })}
            </tbody>
        )
    }
}
export default TableBody;