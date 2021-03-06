import React from "react";
import money from "../images/money.svg";
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import logo from "../icons/123924428_705557600377412_3955865959784530213_n.jpg";
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  } 
from "../styles/theme.styles"

const Logo5 = styled.div`
.logo {
  z-index: 1;
  padding-top: 37px;
  position: absolute;
  top: -34px;
  left:1px;
  height:101px;
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 38px;
    height: 96px;
    width: 89px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}
`
const Link2Link = styled.div`
width: 100%;
.navbar-container {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background: #528E6F;

    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px;
      
      @media ${mobilePortrait} {
        z-index: 1;
        padding-top: 10px;
        margin-top:23px
      }
    }
    }
      li {
        padding: 0 15px;

       


      }
    }
  }
}
.logo-div {
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 10px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}

.nav--button {
  .plain-text();
  text-transform: capitalize;
  border: none;
  background: none;
  transition: color 0.3s ease-in-out;
  font-weight: bold;
  &:hover,
  &:focus {
    color: @nav-item-highlight;
  }
}
.nav--links {
  .plain-text();
  text-decoration: none;
  text-transform: capitalize;
  background: none;
  font-weight: bold;
  color:#F9FAF9;
  
  &:hover,
  &:focus,
  &.active {
    color: #A3E335;
  }
}
}
.nav--link {
  .plain-text();
  text-decoration: none;
  text-transform: capitalize;
  border: none;
  background: none;
  font-weight: bold;
  color:  #F9FAF9;

  &:hover,
  &:focus,
  &.active {
    color: #A3E335;
  }
}

@media ${tabletPortrait} {
  background-position: -180px 50px;
}
@media ${tabletLandscape} {
  background-position: bottom left;
}
@media ${mobileLandscape} {
  background-image: none;
}
@media ${mobilePortrait} {
  background-image: none;
  display: flex;
  flex-direction: column;
}
`;
export default function Payment() {
  const history = useHistory();
  const Logout = e => {
    localStorage.removeItem("token");
    history.push("/login");
  }
  return (
    <div className="signup">
       <Logo5>
            <div className="logo-div">
          <img src={logo} className="logo" alt ="" />
          </div>
          </Logo5>
        <Link2Link>
        <header className="navbar-container">
        <nav>
          <div className="logo-div">
          </div>
         
          <ul className="right-navbar">
            <li>
              <Link  to="/Dashboard" className="nav--link" replace>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav--links" onClick={Logout}>
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      </Link2Link>
      <h1>Buy Now</h1>
      <div className="dives">
        <div className="signup-card">
        <a target="_blank"  href="https://paystack.com/buy/unlimited-weekend-vbahtd"  rel="noopener noreferrer">
            <div className="img-wrapper">
              <img src={money} alt="money" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              weekend Unlimited
            </button>
          </a>
          <p>Spend just 100 naira for the weekend for unlimited ads clicks</p>
        </div>
        <div className="signup-card">
        <a target="_blank" href="https://paystack.com/buy/500-clicks-mcyaew" rel="noopener noreferrer">
            <div className="img-wrapper">
              <img src ={money} alt="money" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              500 clicks
            </button>
          </a>
          <p>Increase sales with greenhood ads for just 20kobo per click, 500 Clicks for just #100
          </p>
        </div>
      </div>
    </div>
  );
}