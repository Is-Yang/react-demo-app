import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout, getUserData } from './Auth.roudux'
import { Redirect } from 'react-router';
import { WingBlank, Button, TabBar } from 'antd-mobile'
import './config'

function Erying() {
    return <h2>子页</h2>
}

class Test extends React.Component {
    render() {
        console.log(this.props)
        return <h2>测试组件</h2>
    }
}

@connect(
    state=>state.auth,
    { logout, getUserData}
)
class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getUserData()
    }
    render() {
        const match = this.props.match;
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <WingBlank>
                    <h2>我的名字是{this.props.user}, 年龄{this.props.age}</h2>

                    {this.props.isAuth ? <Button onClick={this.props.logout}>注销</Button> : null}
            
                    <div style={{ marginTop: 20, marginBottom: 20}}>
                        <Link to={`${match.url}/`} style={{ marginLeft: 20, color: '#108ee9' }}>
                            路由1
                        </Link>
                        
                        <Link to={`${match.url}/erying`} style={{ marginLeft: 20, color: '#108ee9' }}>
                            路由2
                        </Link>
                        <Link to={`${match.url}/test`} style={{ marginLeft: 20, color: '#108ee9' }}>
                            路由3
                        </Link>
                    </div>
        
                    <Route path={`${match.url}/`} exact component={App}></Route>   
                    <Route path={`${match.url}/erying`} component={Erying}></Route>   
                    <Route path={`${match.url}/test`} component={Test}></Route>  
                </WingBlank>
            </div>    
        )

        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard