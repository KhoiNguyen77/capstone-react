import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const HomeTemplate = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                >
                    <NavLink>a</NavLink>
                </Menu>
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                    fontSize: '16px'
                }}

            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Men</Breadcrumb.Item>
                    <Breadcrumb.Item>Woman</Breadcrumb.Item>
                    <Breadcrumb.Item>Kid</Breadcrumb.Item>
                    <Breadcrumb.Item>Sport</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        height: ''
                    }}
                >
                    <router-outlet></router-outlet>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>

    )
}

export default HomeTemplate