/**
 * Created by mikalai.lushchytski on 4/19/2016.
 */

import React, {Component} from 'react';

class BillItem extends Component {
    render() {
        return <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.dueDate}</td>
            <td>{this.props.data.description}</td>
        </tr>;
    }
}

export default BillItem;