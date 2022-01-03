// 更改 public path 一定要放在最上面
import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import MicroAppContext from "./context/MicroAppContext";

import 'antd/dist/antd.css';

const basename= window.__POWERED_BY_QIANKUN__ ? '/micro-react-app' : '/';

// 渲染
function render(props: any) {
  const { container, state, commit, dispatch } = props;

  const value = { state, commit, dispatch };

  const root = (
    <HashRouter basename={basename}>
      <MicroAppContext.Provider value={value}>
        <App />
      </MicroAppContext.Provider>
    </HashRouter>
  );

  ReactDOM.render(root, container
    ? container.querySelector('#root')
    : document.querySelector('#root'));
}

// 单独运行
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 作为 qiankun 微应用需要导出的生命周期
export async function bootstrap() {
  console.log('[micro-react-app] bootstrap');
}

export async function mount(props: any) {
  console.log('[micro-react-app] mount', props);
  props.onGlobalStateChange((state: any) => {
    console.log('[micro-react-app] vuex 状态更新')
    render(state);
  })
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
