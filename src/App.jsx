import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Buildings from './Components/Buildings/Buildings';
import VirtualMeetingAd from './Components/VirtualMeetingAd/VirtualMeetingAd';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Buildings />
      <VirtualMeetingAd />
      <Footer />
    </div>
  );
}
export default App;
