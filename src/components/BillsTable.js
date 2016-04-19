/**
 * Created by mikalai.lushchytski on 4/19/2016.
 */

import React, {Component} from 'react';
import BillItem from './BillItem';

class BillsTable extends Component {
    render() {
        return <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Due Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {this.props.items.map(item => <BillItem key={item.id} data={item} />)}
            </tbody>
        </table>;
    }
}

export default BillsTable;