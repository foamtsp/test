import React, { Component } from 'react'
export default class Description extends Component{

  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      condition: []
    };
  }

  componentDidMount() {
    fetch('https://panjs.com/ywc.json')
      .then(response => response.json())
      .then(data => this.setState({ detail: data.detail,
                                    condition: data.condition }));
  }
    render(){
      
        return(
          <div class="box-detail">
          <div class="container">
            <div class="row">
              <div class="col-md-10">
                <div class="row">
                  <div class="col-12">
                    <div class="head-title d-none d-sm-block">มาตรการส่งเสริมการบริโภค <br/> ในประเทศ <span class="nowrap">“ชิมช้อปใช้”</span></div>
                    <div class="head-title d-sm-none">มาตรการส่งเสริมการบริโภคในประเทศ <span class="nowrap">“ชิมช้อปใช้”</span></div>
                  </div>
                  <div class="col-12 mt-4">
                    <div class="detail"><p dangerouslySetInnerHTML={{__html: this.state.detail}}/></div>
                  </div>
                  <div class="col-12 condition mt-4">
                    <div class="title">เงื่อนไขการเข้าร่วมมาตรการ</div>
                    <div class="detail ul mt-2">
                    <p dangerouslySetInnerHTML={{__html: this.state.condition}}/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-8"></div>
            </div>
          </div>
        </div>
        )
    }
}