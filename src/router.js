import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Bundle from './utils/bundles'
import Index from 'bundle-loader?lazy&name=index!@/index' 
import Test from 'bundle-loader?lazy&name=test!@/test'


const createComponent = (Com) => () => (
    <Bundle load={Com}>
        {
            (Com) => Com ? <Com/> : ''
        }
    </Bundle>
)


const getRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={createComponent(Index)} />
            <Route  path="/test" component={createComponent(Test)} />
        </div>
    </Router>
)


export default getRouter