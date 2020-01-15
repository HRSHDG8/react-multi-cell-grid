import * as React from 'react';
import { TableFooterProps } from './TableFooter.props';

class TableFooter extends React.Component<TableFooterProps>{
    render() {
        return (
            <tfoot>
                <tr>
                    <td colSpan={this.props.columnDef.length}>
                        selected : {this.props.selected}
                    </td>
                </tr>
            </tfoot>
        )
    }
}
export default TableFooter;