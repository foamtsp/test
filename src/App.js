import React, { Component }  from 'react';
import Navbar from './Component/navbar2';
import Banner from './Component/mainBanner';
import Since from './Component/Since';
import Desc from './Component/desc'
import HeroBanner from './Component/heroBanner';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './CSS/main.css';
import './CSS/page-home.css';

class App extends Component {

  
  render(){


    return (
      <body>
        <Navbar/>
        <Banner/>
        <Since/>
        <Desc/>
        <HeroBanner/>
        <Contact/>
        <Footer/>
     </body>
  )
}
}

export default App;
