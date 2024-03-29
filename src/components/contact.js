import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                {/* <h1>This is contact page</h1> */}
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Pual hanna</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (1234) 5245-2546
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                    (1234) 5245-2546
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    someone@example.com
                                    </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    MySkypeID
                                    </ListItemContent>
                            </ListItem>
                           
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>

            </div>
        )
    }
}
