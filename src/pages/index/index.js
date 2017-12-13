import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {doAdd,doDecrease} from '@redux/actions/'

import {post} from '@utils/fetch'
class Index extends Component{
    componentDidMount(){
        post('/api/index',{name:'ck',age: 18}).then((res)=>{
            console.log(res)
        })
    }
    render(){
        console.log(this.props)
        const {add,counter} = this.props
        return(
            <div>
                <Link to="/test">test page</Link>
                <h3>{counter}</h3>
                <button onClick={add.bind(this,2)}>加+</button>
                {/* <button onClick={doAdd.bind(this,1)}>减-</button> */}
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (num) => {dispatch((doAdd(num)))},
        // doDecrease: dispatch(doDecrease)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Index)