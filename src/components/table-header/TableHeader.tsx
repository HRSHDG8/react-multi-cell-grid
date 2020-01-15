import * as React from 'react';
import { TableHeaderProps } from './TableHeader.props';
import { ColumnData, ColumnDefination } from '../../defination/column/column-defination';
import DataType from '../../util/grid.data.type';
import classNames from './TableHeader.css';
class TableHeader extends React.Component<TableHeaderProps>{

    render() {
        return (
            <thead>
                <tr className={classNames.headerRow}>
                    {this.props.columnDef.map((columnData: ColumnDefination, index: number) => {
                        if (columnData.type === DataType.checkbox) {
                            return <th key={index} className={classNames.headerDataTh}>
                                <>
                                    {columnData.data.map((cellElem: ColumnData) => {
                                        return (
                                            <div key={cellElem.key}>
                                                <input type="checkbox" checked={this.props.checked} onChange={() => { this.props.checkAll() }} />
                                            </div>
                                        )
                                    })}
                                </>
                            </th>
                        } else {
                            return (
                                <th key={index} className={classNames.headerDataTh}>
                                    <>
                                        {columnData.data.map((cellElem: ColumnData) => {
                                            return (
                                                <div key={cellElem.key}>
                                                    {cellElem.label}
                                                </div>
                                            )
                                        })}
                                    </>
                                </th>
                            )
                        }
                    })}
                </tr>
            </thead>
        )
    }
}
export default TableHeader;