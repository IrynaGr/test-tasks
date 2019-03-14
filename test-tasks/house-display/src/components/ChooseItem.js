import React from 'react';
import ItemListOne from './ItemListOne';
import ItemListTwo from './ItemListTwo'

function ChooseItemOne(props) {
    return (
        <div className="mr-3">
            <button type="button" className="btn btn-outline-secondary" onClick={props.onClick}>
                House List 1
            </button>

        </div>
    );
}

function ChooseItemTwo(props) {
    return (
        <div>
            <button type="button" className="btn btn-outline-secondary" onClick={props.onClick}>
                House List 2
            </button>

        </div>
    );
}


function ActiveHouseList(props) {
    const isListActive = props.isListActive;
    if (isListActive === 1) {
        return (
            <div className="container mt-3">
                    <ItemListOne/>
            </div>
        );
    } else if (isListActive === 2) {
        return (
            <div className="container mt-3">
                <ItemListTwo/>
            </div>
        );
    }
}

    class ChooseItem extends React.Component {
        constructor(props) {
            super(props);
            this.handleItemOneClick = this.handleItemOneClick.bind(this);
            this.handleItemTwoClick = this.handleItemTwoClick.bind(this);
            this.state = {
                isListActive: 1,
            }
        }


        handleItemOneClick() {
            this.setState({isListActive: 1});
        }


        handleItemTwoClick() {
            this.setState({isListActive: 2});
        }


        render() {
            const isListActive = this.state.isListActive;
            let button = (
                <div className="button mt-3">
                    <ChooseItemOne onClick={this.handleItemOneClick}/>
                    <ChooseItemTwo onClick={this.handleItemTwoClick}/>
                </div>
            );

            return (
                <div>
                    {button}
                    <ActiveHouseList isListActive={isListActive} />
                </div>
            );
        }
    }

export default ChooseItem;