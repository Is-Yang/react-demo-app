import React from 'react'
import { connect } from 'react-redux' // Connect负责从外部获取组件需要的参数
import { addGUN, removeGUN, addGunAsync } from './index.redux'
import { WhiteSpace, Button } from 'antd-mobile'
// const mapStatetoProps = (state) => {
//     return { num: state }
// }
// const actionCreators = { addGUN, removeGUN, addGunAsync }
// App = connect(mapStatetoProps, actionCreators)(App);
@connect(
    state=>({num:state.counter}),
    { addGUN, removeGUN, addGunAsync }
)
class App extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
                <WhiteSpace />
                <Button type="ghost" size="small" inline onClick={this.props.addGUN}>申请加</Button>
                <Button type="ghost" size="small" inline onClick={this.props.removeGUN}>申请减</Button>
                <Button type="ghost" size="small" inline onClick={this.props.addGunAsync}>延迟加</Button>
            </div>
        )
    }
}

export default App