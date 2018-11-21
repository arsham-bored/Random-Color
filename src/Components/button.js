import React, { Component } from 'react';
import {connect} from 'react-redux';
import cons from '../store/constents';
import axios from 'axios';

class Buttton extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                  <div className="card button-card hoverable">
                    <div class="card-block">
                        <h4 class="card-title">
                            Powered by <a href="#">colr API</a>
                            <p>
                                {this.props.Text}
                            </p>
                        </h4>
                        <a onClick={this.props.changeColor} href="#" class="btn-btn btn btn-md btn-outline-info rounded" ripple-radius>
                        <i className="fa fa-ok fa-1x"></i>    new color
                        </a>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapState = (state) => {
    return {
        Text: state.Text
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeColor: () => {
            fetch('http://www.colr.org/json/color/random')
            .then(Response => Response.json())
                .then(data => {
                    console.log(data.new_color);
                    return data.new_color;
                })
                    .then(data => {
                        const store = {
                            type: cons.changeColor,
                            color: '#' + data
                        }
                        dispatch(store)
                    })

        }
    }
}

export default connect(mapState, mapDispatch)(Buttton);