import * as React from 'react';
import { TableHeaderProps } from './TableHeader.props';
import { ColumnData, ColumnDefination } from '../../defination/column/column-defination';
import DataType from '../../util/grid.data.type';
import classNames from './TableHeader.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons';
library.add(faSortUp, faSortDown, faSort);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class TableHeader extends React.Component<TableHeaderProps>{
    getSortIcon(sortDir: any): JSX.Element {
        switch (sortDir) {
            case "asc":
                return <FontAwesomeIcon icon="sort-up" className={classNames.iconPad} />
            case "desc":
                return <FontAwesomeIcon icon="sort-down" className={classNames.iconPad} />
            default:
                return <FontAwesomeIcon icon="sort" className={classNames.iconPad} />
        }
    }
    handleSort(cellElem: ColumnData) {
        if (cellElem.sortable) {
            this.props.onSort(cellElem.key);
        }
    }
    render() {
        return (
            <thead className={this.props.theme.tableHeader}>
                <tr className={classNames.headerRow}>
                    {this.props.columnDef.map((columnData: ColumnDefination, index: number) => {
                        return <th key={index} className={classNames.headerDataTh}>
                            <>
                                {columnData.type === DataType.checkbox ?
                                    columnData.data.map((cellElem: ColumnData) => {
                                        return (
                                            <div key={cellElem.key}>
                                                <input type="checkbox" checked={this.props.checked} onChange={() => { this.props.checkAll() }} />
                                            </div>
                                        )
                                    }) :
                                    columnData.data.map((cellElem: ColumnData) => {
                                        return (
                                            <div key={cellElem.key} className={cellElem.sortable ? (classNames.sortableColumn) : ""} onClick={() => { this.handleSort(cellElem) }}>
                                                {cellElem.label}
                                                {cellElem.sortable ? this.getSortIcon(cellElem.sortDir) : <></>}
                                            </div>
                                        )
                                    })
                                }
                            </>
                        </th>
                    })}
                </tr>
            </thead>
        )
    }
}
export default TableHeader;