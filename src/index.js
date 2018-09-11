import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux' // Provide用于连接
// import { counter } from './index.roudux'
import reducers from './reducer'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'

// window.devToolsExtension 用于控制台redux 调试
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Redirect to="/dashboard" component={Dashboard}></Redirect>
            </Switch>    
        </BrowserRouter>
    </Provider>,    
    document.getElementById('root')
)
// 订阅state改变，state改变时会执行subscribe的参数（自己定义的一个函数）
// store.subscribe(render)
