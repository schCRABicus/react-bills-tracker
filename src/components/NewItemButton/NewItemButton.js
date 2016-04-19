/**
 * Created by mikalai.lushchytski on 4/19/2016.
 */

import React, {Component} from 'react';

class NewItemButton extends Component {

    handleNewItemClick() {
        console.log("New Item button clicked");
    };

    render() {
        return <button
                type="button"
                className="btn"
                onClick={this.handleNewItemClick}>
                Add bill
            </button>
    };
}

export default NewItemButton;