import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const productStore = useSelector(store => store.productStore)
    const navigate = useNavigate()
    const [login, setLogin] = useState(true)
    return (
        <header>
            <section className='header_content'>
               <div className='left_content'>
                    <div onClick={() => {
                        navigate('/')
                    }} className='content_logo'>
                        <img className='logo_img' src="https://learn.rikkeiacademy.com/static/media/RIKKEI_ACADEMY_LOGO.e997e6f7.png"/>
                        <h1 className='logo_slogan'>Để Nông Dân Biết Code</h1>
                    </div>
               </div>
               <div className='mid_content'>
                    <Link to={'/abouts'}>About</Link>
                </div>
                <div className='right_content'>
                    {
                        login 
                        ?<div className='content_user'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <span className='title_hello'>Hi Nguyễn Phước</span>
                                    <img className='user_avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zCdxOLcBDbC4aOpBCapQVG9wKTRVHtl6lQ&usqp=CAU" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Purchase History</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        : <div className='content_member'>
                            <Link to={'/register'}>đăng ký</Link>
                        </div>
                    }
                    cart {productStore.count}
                </div>
            </section>
        </header>
    )
}
