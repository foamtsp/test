import React, { Component } from 'react'
import MOF from '../img/brand-logo/MOF.png';
import FPO from '../img/brand-logo/FPO.png';
import CGD from '../img/brand-logo/CGD.png';
import KTB from '../img/brand-logo/Krungthai.png';
import MOTS from '../img/brand-logo/MOTS.png';
import TAT from '../img/brand-logo/TAT.png';
export default class mainBanner extends Component{
    render(){
        return(
    <div class="box-ktc">
      <div class="container">
        <div class="row d-none d-sm-block">
          <div class="d-flex justify-content-around">
            <div class="p2"><a href="https://www.mof.go.th/th/home" target="_blank"><img src={MOF}/></a></div>
            <div class="p2"><a href="http://www.fpo.go.th" target="_blank"><img src={FPO}/></a></div>
            <div class="p2"><a href="https://www.cgd.go.th" target="_blank"><img src={CGD}/></a></div>
            <div class="p2"><a href="https://www.newcb.ktb.co.th" target="_blank"><img src={KTB}/></a></div>
            <div class="p2"><a href="https://www.mots.go.th" target="_blank"><img src={MOTS}/></a></div>
            <div class="p2"><a href="https://thai.tourismthailand.org" target="_blank"><img src={TAT}/></a></div>
          </div>
        </div>
        <div class="row d-sm-none">
          <div class="col-4 text-right"><a href="https://www.mof.go.th/th/home" target="_blank"><img src={MOF}/></a></div>
          <div class="col-4 text-center"><a href="http://www.fpo.go.th" target="_blank"><img src={FPO}/></a></div>
          <div class="col-4 text-left"><a href="https://www.cgd.go.th" target="_blank"><img src={CGD}/></a></div>
          <div class="col-4 text-right"><a href="https://www.newcb.ktb.co.th" target="_blank"><img src={KTB}/></a></div>
          <div class="col-4 text-center"><a href="https://www.mots.go.th" target="_blank"><img src={MOTS}/></a></div>
          <div class="col-4 text-left"><a href="https://thai.tourismthailand.org" target="_blank"><img src={TAT}/></a></div>
        </div>
      </div>
    </div>
        )
    }
}