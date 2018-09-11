import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.roudux'
import { Redirect } from 'react-router'
import { WingBlank, Button } from 'antd-mobile'

@connect(
    state => state.auth,
    { login }
)
class Auth extends React.Component{
    render() {
        const redirectToDashboard = <Redirect to="/dashboard" />
        return (
            <div>
                <WingBlank>
                    {this.props.isAuth ? redirectToDashboard : null}
                    <h2>没有权限，需要点击登录才能看</h2>
                    <Button type="primary" onClick={this.props.login}>登录</Button>
                </WingBlank>
            </div>    
        ) 
    }
}

export default Auth