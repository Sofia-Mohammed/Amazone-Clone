import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCartDownload } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import classes from "./header.module.css";
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo section*/}
          <div className={classes.logo_container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazone logo"
              />
            </a>
            <div className={classes.delivery}>
              {/* delivery */}
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Deliver to</p>

                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <IoSearch size={25} />
          </div>
          {/* icon */}

          {/* right side link */}
          
            <div className={classes.order_container}>
            <a href="" className={classes.language}>  <img
                src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
                
                alt=""/>
              
              <select name='' id=''>
                <option value="">EN</option>
               </select>
               </a>
            
            {/* three components */}
            <a href="">
                <p>Sign In</p>
                <span>Account & Lists</span>
                <IoMdArrowDropdown />
              </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href='' className= {classes.cart}>
              <BiCartDownload size={35}/>
              {/* icon */}
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;