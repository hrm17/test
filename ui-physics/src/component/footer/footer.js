import React from 'react';
import './footer.css';
import {Hoc} from '../../hoc/hoc';

export const Footer =props=>{

    return(<Hoc>

<div class="footer-container">
        <div class="footer-sub-container">
        <div class="main-container">
            <div class="first-box">
                <h3>EDUNOMICS</h3>
                <p>contact@edunomics.in</p>
                <div class="icon">
                <i class="fab fa-facebook"></i>

                <i class="fab fa-twitter"></i>

                <i class="fab fa-instagram"></i>


                </div>
            </div>
            <div class="second-box">
                <p><a href="">JOIN US</a></p>
                <p><a href="">COOKIE POLICY</a></p>
                <p><a href="">TERM OF USE</a></p>
                <p><a href="">TECH</a></p>
                <p><a href="">PRIVACY POLICY</a></p>
                
            </div>
        </div>

        </div>
</div>



    </Hoc>)



}