import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './Components/App';
import './static/default.css'
import './static/widget.css'
import './static/index.css'





//	检测浏览器是否存在本地存储
async function exitLocalStorage(){
    return new Promise((rec,rej) => {
        if(window.localStorage && window.sessionStorage)rec()
        else rej()
    })
}
//	初始化localstorage
async function initSupermeGY() {
    return new Promise((rec,rej) => {
        try{
            //	如果不存在SupermeGY，则初始化
            if(localStorage.getItem('SupermeGY') == null)localStorage.setItem('SupermeGY', '');
            if(sessionStorage.getItem('SupermeGYSSS') == null)sessionStorage.setItem('SupermeGYSSS', '');
            rec()
        }catch (e){rej()}
    })
}
//	关联全局变量
async function setSupermeGY(){
    return new Promise(async (rec,rej) => {
        await initSupermeGY()
        //	存储JWT
        Object.defineProperty(window,'SupermeGY',{
            configurable:false,//	不可删除
            // writable:false,//	可修改,设置set和get后writable和value失效
            enumerable: false,//	不可枚举
            get:() => {
                return localStorage.getItem('SupermeGY')
            },
            set:(jwt) => {
                sessionStorage.setItem('SupermeGYSSS', jwt)
                localStorage.setItem('SupermeGY', jwt);
            }
        })
        Object.defineProperty(window,'SupermeGYSSS',{
            configurable:false,//	不可删除
            // writable:false,//	可修改,设置set和get后writable和value失效
            enumerable: false,//	不可枚举
            get:() => {
                return localStorage.getItem('SupermeGY').length != 0 ?  localStorage.getItem('SupermeGY') : sessionStorage.getItem('SupermeGYSSS')
            },
            set:(jwt) => {
                sessionStorage.setItem('SupermeGYSSS', jwt);
            }
        })
        //	存储用户名
        Object.defineProperty(window,'me',{
            configurable:false,//	不可删除
            // writable:false,//	可修改,设置set和get后writable和value失效
            enumerable: false,//	不可枚举
            get:() => {
                return localStorage.getItem('me')
            },
            set:(username) => {
                localStorage.setItem('me', username);
            }
        })
        rec()
    })
}

// 启动
async function start(){

    //	第一步设置JWT
    try{
        await exitLocalStorage()
        await setSupermeGY()
    }catch (e) {
        console.log('不支持LocalStorage!')
        ReactDom.render(<div>此浏览器不支持localStorage或sessionStorage，无法运行本程序</div>,document.getElementById('root'))
        return false
    }




    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    )
    // ReactDom.render(
    //     <Message/>,
    //     document.getElementById('message_window')
    // )
}
start()