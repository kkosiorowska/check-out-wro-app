import React, {Component} from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };
    SideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer };
        });
    };
    render () {
        return (
            <Auxiliary>
                <Toolbar
                    drawerToggleClicked={this.SideDrawerToogleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler}/>
                {this.props.children}
            </Auxiliary>
        )
    }
}

export default Layout;
