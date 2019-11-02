import React, { Component } from 'react'
import Grid from 'react-mdl/lib/Grid';
import Cell from 'react-mdl/lib/Grid/Cell';

export default class leandingpage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="leanding-grid">
                    <Cell col={12}>
                        <img
                            src="https://jmc.edu.ph/wp-content/uploads/2018/02/pic.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />


                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
                            <div className="social-links">

                                {/*LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/*GitHub */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/*Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                                </a>

                                {/*Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>

                            </div>



                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}
