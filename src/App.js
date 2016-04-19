/**
 * Created by mikalai.lushchytski on 4/5/2016.
 */

import BillsTable from './components/BillsTable';
import React from 'react';
import ReactDOM from 'react-dom';

const items = [
    {
        id: 1,
        dueDate: new Date().setMonth(1),
        description: 'Due in a month'
    },
    {
        id: 2,
        dueDate: new Date().setMonth(2),
        description: 'Due in two months'
    }
];

ReactDOM.render(
    <BillsTable items={items}/>,
    document.getElementById('root')
);