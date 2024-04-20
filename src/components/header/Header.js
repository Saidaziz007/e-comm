import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import navLogo from "../../assets/nav-logo.svg";
import { NAV_ITEMS } from "../../static";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="container">
        <div className="nav-all">
          <div className="nav-1">
            <div className="nav-1-selector">
              <select name="language" id="">
                <option value="">EN</option>
                <option value="">RU</option>
                <option value="">UZ</option>
              </select>
              <select name="money" id="">
                <option value="">USD</option>
                <option value="">RUB</option>
                <option value="">EUR</option>
              </select>
            </div>
            <div className="nav-1-info">
              <div className="nav-1-account">
                <RiUser3Line />
                <p>My profile</p>
              </div>
              <div className="nav-1-like">
                <IoMdHeartEmpty />
              </div>
              <div className="nav-1-item">
                <p>Items</p>
                <span>$0.00</span>
              </div>
              <div className="nav-1-search">
                <IoIosSearch />
              </div>
            </div>
          </div>
          <div className="nav-2">
            <div className="nav-2-logo">
              <img src={navLogo} alt="" />
              <h1>E-Comm</h1>
            </div>
            <ul className="nav-2-list">
              {NAV_ITEMS?.map((el) => (
                <li style={{ color: el.color }} key={el.id}>
                  {el.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
