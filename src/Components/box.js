import React, { Component } from 'react';
import {connect} from 'react-redux';
import cons from '../store/constents';

class Box extends Component {
    state = {  }

    render() { 
        const style = {
            background: this.props.color
        }
        return ( 
            <div>
                <div style ={ style } className="card box-card">
                    <div class="card-block">
                        <h4 class="card-title box-card-title">
                            {this.props.color}
                        </h4>
                        <a 
                        href="#"
                        class="card-btn btn btn-sm btn-outline-success rounded" 
                        ripple-radius>
                        <i className="fa fa-github fa-1x"></i>    fork me
                        </a>
                    </div>
                </div>
            </div>
         );
    }
}

const mapState = (state) => {
    return {
        color: state.color
    }
} 


 
export default connect(mapState)(Box);