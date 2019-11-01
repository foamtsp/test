import React, { Component } from 'react'
import KTB from '../img/Banner_KTB_SQ.png';
import CGD from '../img/Banner_CGD_Sq.png';
import TAT from '../img/Banner_TAT_Hotline_Sq.png';
export default class heroBanner extends Component{
    render(){
        return(
            <div class="box-tat">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-4"><a href="tel:021111144"><img src={KTB}/></a></div>
                <div class="col-sm-12 col-md-4"><a href="tel:022706400"><img src={CGD}/></a></div>
                <div class="col-sm-12 col-md-4"><a href="tel:1672"><img src={TAT}/></a></div>
              </div>
            </div>
          </div>
        )
    }
}