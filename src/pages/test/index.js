import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {doDecrease} from '@redux/actions'
import css from './index.css'
class Test extends Component{
    render(){
        console.log(this.props)
        const {decrease,counter} = this.props
        return (
            <div>
                <Link className={css.test} to="/">index page</Link>
                <h3>{counter}</h3>
                <button onClick={decrease.bind(this,2)}>减-</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        decrease: (num) => {
            dispatch(doDecrease(num))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Test)