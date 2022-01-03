import { Layout as AntLayout } from "antd";

const { Content: AntContent } = AntLayout;

const Content = () => {
  return (
    <AntContent
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      Content
    </AntContent>
  )
}

export default Content;
