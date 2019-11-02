import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
// import { CardText } from 'react-mdl/lib/Card';

export default class projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/*Prdoject 1 */}
                <Card shadow={5}style={{width: '450',margin:'auto'}} >
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://facebook.github.io/create-react-app/img/logo-og.png)center/cover'}}>React Card#1</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</CardText>
                    <CardActions border>
                        <Button colored> github</Button>
                        <Button colored> codepen</Button>
                        <Button colored> Livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                 {/*Prdoject 1 */}
                <Card shadow={5}style={{width: '450',margin:'auto'}} >
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://facebook.github.io/create-react-app/img/logo-og.png)center/cover'}}>React Card#2</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</CardText>
                    <CardActions border>
                        <Button colored> github</Button>
                        <Button colored> codepen</Button>
                        <Button colored> Livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                 {/*Prdoject 1 */}
                <Card shadow={5}style={{width: '450',margin:'auto'}} >
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://facebook.github.io/create-react-app/img/logo-og.png)center/cover'}}>React Card#3</CardTitle>
                    <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</CardText>
                    <CardActions border>
                        <Button colored> github</Button>
                        <Button colored> codepen</Button>
                        <Button colored> Livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                
                </div>
                
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            );

        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            );
        }
    }





    render() {
        return (
            <div className="categary-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabid) => this.setState({ activeTab: tabid })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                {/* <section className="projects-grid" >  */}
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>



{/* 
                </section> */}
            </div>
        )
    }
}
