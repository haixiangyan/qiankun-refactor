import React from 'react';
import { StandaloneLayout, MicroAppLayout } from "./components/Layout";

const Layout = window.__POWERED_BY_QIANKUN__ ? MicroAppLayout : StandaloneLayout;

function App() {
  return (
    <Layout/>
  );
}

export default App;
