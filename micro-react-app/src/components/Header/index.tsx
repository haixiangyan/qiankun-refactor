import { Layout as AntLayout } from "antd";

const { Header: AntHeader } = AntLayout;

const Header = () => {
  return (
    <AntHeader className="site-layout-background" style={{ padding: 0 }}>
      Header
    </AntHeader>
  )
}

export default Header;
