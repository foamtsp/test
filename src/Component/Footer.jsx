import React, { Component } from 'react'
import footer from '../img/logo/footer.png';
export default class footerBanner extends Component{

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://panjs.com/ywc.json')
      .then(response => response.json())
      .then(data => this.setState({ data: data.navbarItems }));
  }

    render(){
        return(
          <footer>
          <div class="footer-1">
            <div class="container">
              <div class="row">
                <div class="col-md-3 col-sm-12"><img class="logo" src={footer}/></div>
                <div class="col-md-3 col-sm-4 col-xs-12">
                  <div class="head">ข้อมูลลงทะเบียนประชาชน</div>
                  <div class="detail">การรับสิทธิ การใช้งานแอปพลิเคชั่น <span class="nowrap">“เป๋าตัง”</span> และ <span class="nowrap">“ถุงเงิน”</span></div>
                  <div class="detail">ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.<a class="ml-1" href="tel:021111144"><span class="nowrap">0 2111 1144</span></a></div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12">
                  <div class="head">ข้อมูลลงทะเบียนผู้ประกอบการ</div>
                  <div class="detail">เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
                  <div class="detail">ติดต่อ โทร.<a class="ml-1" href="tel:022706400"><span class="nowrap">0 2270 6400 กด 7</span></a></div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-12">
                  <div class="head">ข้อมูลเที่ยวชิมช้อปใช้</div>
                  <div class="detail">ติดต่อ ททท.</div>
                  <div class="detail">โทร<a class="ml-1" href="tel:1672"><span>1672</span></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-2">
            <div class="container">
              <div class="row no-gutters">
                <div class="col-sm-12 col-md-3 col-lg-3">
                  <div class="copyright">Copyright © 2003-2019</div>
                </div>
                <div class="row col-sm-12 col-md-9 col-lg-9">
                  <ul class="nav col-sm-12">
                  {this.state.data.map((items,index) => 
                      <li class="col-sm-4 col-md-4 col-lg-4 nav-item"><a class="nav-link" href={items.href} target="_blank">{items.label}</a></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      
        )
    }
}