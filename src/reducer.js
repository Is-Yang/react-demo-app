// 合并所有redux 并且返回
import { combineReducers } from 'redux'
import { counter } from './index.roudux'
import { auth } from './Auth.roudux'

export default combineReducers({counter, auth})