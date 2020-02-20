import React, {Component} from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <Auxiliary>
                <Toolbar/>
                {this.props.children}
            </Auxiliary>
        )
    }
}

export default Layout;
