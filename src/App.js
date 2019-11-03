import React, { Component }  from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/MainBanner';
import Since from './Component/Since';
import Desc from './Component/Desc'
import HeroBanner from './Component/HeroBanner';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './CSS/main.css';
import './CSS/page-home.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navBarItems: [],
      duration: "",
      detail:"",
      condition:""
    };
  }

  componentDidMount() {
    fetch('https://panjs.com/ywc.json')
      .then(response => response.json())
      .then(data => this.setState({ navBarItems: data.navbarItems,
                                    duration: data.duration,
                                    detail: data.detail,
                                    condition: data.condition }
                                    ));
  }

  
  render(){
    return (
      <body>
        {this.state.navBarItems.length > 0 && <Navbar navBarItems = {this.state.navBarItems}/>}
        <Banner/>
        {this.state.duration.length > 0 && <Since duration = {this.state.duration}/>}
        {this.state.detail.length > 0 && this.state.condition.length > 0 && <Desc detail = {this.state.detail} condition = {this.state.condition}/>}
        <HeroBanner/>
        <Contact/>
        {this.state.navBarItems.length > 0 && <Footer navBarItems = {this.state.navBarItems}/>}
     </body>
  )
}
}

export default App;
