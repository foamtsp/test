import React, { Component } from 'react'
import banner from '../img/logo/banner.png'
export default class mainBanner extends Component{
    render(){
        return(
            <div class="banner">
            <div class="row no-gutters">
              <div class="col-4 cover-img-1"></div>
              <div class="col-4 cover-img-2">
                <div class="row h-100 justify-content-center align-items-center">
                  <div class="col-12">
                    <div class="logo-box"><img src={banner}/></div>
                  </div>
                </div>
              </div>
              <div class="col-4 cover-img-3"></div>
            </div>
          </div>
        )
    }
}