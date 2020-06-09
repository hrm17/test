import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Hoc from '../../hoc/hoc';

export const Navbar =props=>{
    return(
        
        <div class="navbar">
                <div class="brand">
                    <h3>Welcome to Edunomics</h3>
                </div>
                <div class="link">
                    <ul>
                      {props.auth? <li><Link>Class</Link>
                        <ul>
                            <li><Link>11</Link>
                            <ul>
                                <li><Link>Physics</Link></li>
                                
                                <li><Link>Mathmatics</Link></li>
                               

                            </ul>
                            </li>
                            <li><Link>12</Link>
                            <ul>
                                <li><Link>Physics</Link></li>
                                
                                <li><Link>Mathmatics</Link></li>
                               

                            </ul>

                            </li>

                        </ul>

                        </li>:null}

                       {props.auth?null: <li><Link to="/">Login</Link></li>}
                       {props.auth?null:<li><Link to="/signup">Signup</Link></li>
                      }
                       {props.auth? <li><Link>MyAccount</Link>
                        <ul>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/">logout</Link></li>

                        </ul>
                        </li>:null}


                    </ul>
                </div>
            </div>
    )
}