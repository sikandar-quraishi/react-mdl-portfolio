import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import{Link} from 'react-router-dom'
// import { link } from 'fs';






export default class App extends Component {
  render() {
    return (
// {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}}to='/'>My Portfolio</Link>} scroll>
        {/* {<Link style={{textDecoration:'none',color:'white'}}to='/'>My Portfolio</Link>}  */}
        
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                                                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:'black'}}to='/'>My Portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}
