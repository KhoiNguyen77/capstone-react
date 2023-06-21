import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import { createBrowserHistory } from 'history'
const { Header, Content, Footer } = Layout;
export const customNavigate = createBrowserHistory();
const MenuProps = [{
    label: 'Register',
    key: '/register',
    icon: <Register></Register>
}]
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

                />
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
                    <HistoryRouter history={customNavigate}>
                        <Routes>
                                <Route path='register' element={<Register></Register>}></Route>
                        </Routes>
                    </HistoryRouter>
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