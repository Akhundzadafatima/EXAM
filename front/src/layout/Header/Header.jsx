import React from 'react'
import { Link, Outlet } from "react-router-dom"
import "./Header.css"
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaTabletScreenButton } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdCancel } from "react-icons/md";
const Header = () => {
    return (
        <>
        <div className="header">
            <div className="headerr">
                <div className='col'>
                <div className="logo"><img src="https://preview.colorlib.com/assets/img/logo.png" alt="" /></div>
                <div className="colos">+ COLOSHOP</div>
                </div>
                <div className="iconss">
                    <div className='iconn'><HiMiniComputerDesktop /></div>
                    <div className='iconn'><FaTabletScreenButton /></div>
                    <div className='iconn'><IoMdPhonePortrait /></div>
                    <div className='iconnn'><MdShoppingCart /></div>
                    <div className='iconn'><MdCancel /></div>
                </div>
            </div>

            <div className="nav">
                <div className='coloshop'>
                    <p className='colo'>COLO</p>
                    <p className='shop'>SHOP</p>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/shop">SHOP</Link></li>
                        <li><Link to="/promotion">PROMOTION</Link></li>
                        <li><Link to="/pages">PAGES</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>

                <div className='icons'>
                    <div className="icon"><FaSearch /></div>
                    <div><RiAccountCircleFill /></div>
                    <div><MdShoppingCart /></div>

                </div>
            </div>
        </div>
            <Outlet></Outlet>
        </>
    )
}

export default Header