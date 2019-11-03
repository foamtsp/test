import React, { Component } from 'react'
import banner from '../img/logo/footer.png'
import '../CSS/nav.css'
export default class navbar2 extends Component{

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isOpen: false,
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.navBarItems });
  }

  handleClick(){
     this.setState({isOpen: !this.state.isOpen})


  }

    render(){
        return(
            <header>
            <div class="header-link-mobile">
              <nav class="navbar navbar-light amber lighten-4">
                <a class="navbar-brand" href="#"><img src={banner} width="33.3" height="40" alt=""/></a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>this.handleClick()}>
                    <div class={this.state.isOpen ? "animated-icon1 open" : "animated-icon1"}><span></span><span></span><span></span></div>
                    {/* <span class="navbar-toggler-icon"></span> */}
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent20">
                  
                  <ul class="navbar-nav mr-auto">
                    {this.state.data.map((items,index) => 
                      <li key = {index} class="nav-item"><a class="nav-link" href={items.href} target="_blank">{items.label}</a></li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <ul class="header-links">
                    {this.state.data.map((items,index) => 
                      <li key = {index}><a href={items.href} target="_blank">{items.label}</a></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </header>
          
          
        )
    }
}