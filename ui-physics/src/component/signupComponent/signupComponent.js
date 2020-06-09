import React from 'react';
import './signupComponent.css';
import {Link} from 'react-router-dom'

import {Hoc} from '../../hoc/hoc';
import Input from '../inputComponent/inputcomponent'
const SignupComponent=props=>{
    return(
        <Hoc>
            <div class="sign-container">
                <div class="sub-sign-container">
                    <div class="signup-box">
                        <div class="sign-Heading">
<h1>SignUp</h1>
                        </div>
                        <div class="login-Form">
                    <form>
                        
                        <Input label="Name" holder="Name"></Input>
                       
                        <Input label="Email Id" holder="Email Id"></Input>
                        <Input label="Password" holder="Password"></Input>
                        <Input label="Mobile Number" holder="Mobile Number"></Input>
                        <button type="submit" class="btn">Signup</button>

                        
                    </form>
                </div>
                    </div>
                </div>
            </div>
        </Hoc>
    )
        
    
}

export default SignupComponent 