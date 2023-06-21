import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Register from '../pages/Register';
import { createBrowserHistory } from 'history'
const { Header, Content, Footer } = Layout;
export const customNavigate = createBrowserHistory();
const MenuProps = [{
    label: 'Register',
    key: '/register',
}]
const HomeTemplate = () => {
    const navigate = useNavigate()
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
                    items={MenuProps}
                    onClick={(key)=>{
                        navigate(key)
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                    fontSize: '16px'
                }}

            >
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        height: ''
                    }}
                >

                    <Routes>
                        <Route path='register' element={<Register></Register>}></Route>
                    </Routes>
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