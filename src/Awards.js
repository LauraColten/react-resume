import React, {Component} from 'react';
export default class Awards extends Component {
    navigateTo = (e, url) => {
        e.preventDefault()
        window.location = url;
      }
    render = () => {
        return (
            <center>
               <h3>
          <center>AWARDS and ACHIEVEMENTS</center>
        </h3>
        <br />
        <a href="#" onClick={e => this.navigateTo(e, "https://flic.kr/p/2cWFbDJ")}>
            <center><img src="./img/meatball.jpg" alt="Meatball" /></center>
        </a>
        <center>Member of the team that won 1st place at the NCAS 2018 internship at NASA Langley</center>
        <br />
        <br />
        <a href="#" onClick={e => this.navigateTo(e, "https://www.phikappaphi.org/")}>
            <center><img src="./img/pkp_circle.png" alt="PKP" /></center>
        </a>
        <center>Member of Phi Kappa Phi</center> 
            </center>
        )
    }
}