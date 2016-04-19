/**
 * Created by mikalai.lushchytski on 4/5/2016.
 */

import BillsTable from './components/BillsTable';
import NewItemButton from './components/NewItemButton/NewItemButton';
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
    <div className="main">
        <BillsTable items={items} />
        <NewItemButton />
    </div>
    ,
    document.getElementById('root')
);