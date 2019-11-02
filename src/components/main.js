import React from 'react'
import {Switch, Route} from "react-router-dom";

import Leandingpage from './leandingpage'
import Aboutme from './aboutme'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'

const Main = () => (
    <Switch>
        <Route path="/" exact component={Leandingpage} />
        <Route path="/aboutme/" component={Aboutme} />
        <Route path="/contact/" component={Contact} />
        <Route path="/projects/" component={Projects} />
        <Route path="/resume/" component={Resume} />

    </Switch>
)
export default Main;