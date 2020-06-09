import React from 'react';
import {Link} from 'react-router-dom'

import './header.css';
import {Hoc} from '../../../hoc/hoc';
import {Navbar} from '../../navBar/navbar'
export const Header =props=>{
    return(<Hoc>
        <div class="container">
            <div class="sub-container">
            <Navbar auth={false}></Navbar>
            
            <div class="middle-container">
                <div class="home-login-Form">
                    <form>
                        <div class="home-inputComponent">
                        <label>userName</label>
                        <input type="text" placeholder="Username" required></input>
                        </div>
                        <div class="home-inputComponent">
                        <label>Password</label>
                        <input type="text"  placeholder="Password"  required></input>
                        </div>
                        <button type="submit" class="btn"><Link to="/dashboard">Login</Link></button>
                    </form>
                </div>
            <div class="Title">
            <h1>Where Do You Want To Go Today?</h1>
            </div> 
            </div>

            
            </div> 
        </div>
    </Hoc>);
}
