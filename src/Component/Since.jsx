import React, { Component } from 'react'
export default class timeBanner extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
   this.setState({ data: this.props.duration });
  }

    render(){
        return(
          <div class="box-register">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="since">ตั้งแต่วันที่</div>
              </div>
              <div class="col-12">
                <div class="time">{this.state.data}</div>
              </div>
              <div class="col-12"><a href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" target="_blank">
                  <button class="btn register">ลงทะเบียน เฟส 2<br/>
           ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br/>
           (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)<br/>
           </button>
                  <hr/></a></div>
            </div>
          </div>
        </div>
        )
    }
}