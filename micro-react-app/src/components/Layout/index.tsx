import {FC} from "react";
import {Layout as AntLayout} from "antd";
import Sider from "../Sider";
import Header from "../Header";
import Content from "../Content";
import styles from './styles.module.less';

export const StandaloneLayout: FC = () => {
  return (
    <AntLayout className={styles.layout}>
      <Sider/>
      <AntLayout>
        <Header />
        <Content />
      </AntLayout>
    </AntLayout>
  )
}

export const MicroAppLayout = () => {
  return (
    <Content />
  )
}

