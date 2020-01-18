import * as React from 'react';
import { TableFooterProps } from './TableFooter.props';
import classNames from './TableFooter.css';
class TableFooter extends React.Component<TableFooterProps>{
    render() {
        return (
            <tfoot className={this.props.theme.tableFooter}>
                <tr>
                    <td colSpan={this.props.columnDef.length} >
                        <span className={classNames.footerAlign}>
                            <span>
                                Selected : {this.props.selected}
                            </span>
                            &nbsp;|&nbsp;
                            <span>
                                Total : {this.props.total}
                            </span>
                        </span>
                    </td>
                </tr>
            </tfoot>
        )
    }
}
export default TableFooter;