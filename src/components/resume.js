import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'


export default class resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://jmc.edu.ph/wp-content/uploads/2018/02/pic.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Paul hanna</h2>
                        <h4 style={{ color: 'grey' }}>Programer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Adress  </h5>
                        <p>1 Hacker way Menlo park, 98658 </p>
                        <h5>Phone</h5>
                        <p>(1254) 9568-6584</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h1>Education</h1>
                        <Education
                        startYear={2010}
                        endYear={2013}
                        schollName={"My university"}
                        schoolDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                        />
                         <Education
                        startYear={2013}
                        endYear={2015}
                        schollName={"My university"}
                        schoolDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                        />
                        <hr style={{ borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience
                        startYear={2015}
                        endYear={2017}
                        jobName={"First Job"}
                        jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                        />
                        <Experience
                        startYear={2017}
                        endYear={2018}
                        jobName={"Second Job"}
                        jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                        />
                        <hr style={{ borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                        skill={"HTML5"}
                        progress={90}
                        />
                         <Skills 
                        skill={"CSS3"}
                        progress={72}
                        />
                         <Skills 
                        skill={"JavaScript"}
                        progress={70}
                        />
                         <Skills 
                        skill={"React.js"}
                        progress={75}
                        />
                         <Skills 
                        skill={"Bootstrap"}
                        progress={60}
                        />


                    </Cell>
                </Grid>
            </div>
        );
    }
}
