import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'

import { AppstoreOutlined, UserOutlined, CoffeeOutlined, ShopOutlined, ProjectOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Employee from '../../components/Employee';
import loginIcon from '../../assets/images/logo.png';


const { Header, Content, Footer, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//         key: String(index + 1),
//         icon: React.createElement(icon),
//         label: `nav ${index + 1}`,
//     }),
// );

const items = [
    {
        key: String(1),
        icon: React.createElement(UserOutlined),
        label: `员工管理`,
    },
    {
        key: String(2),
        icon: React.createElement(AppstoreOutlined),
        label: `分类管理`,
    },
    {
        key: String(3),
        icon: React.createElement(CoffeeOutlined),
        label: `菜品管理`,
    },
    {
        key: String(4),
        icon: React.createElement(ShopOutlined),
        label: `套餐管理`,
    },

    {
        key: String(5),
        icon: React.createElement(ProjectOutlined),
        label: `订单明细`,
    }
]



export default function Home() {

    const navigate = useNavigate()
    const [userObj, setUserObj] = useState({})

    const [title, setTitle] = useState(items[0].label)

    useEffect(() => {
        //判断是否已经登录
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            const userObj = JSON.parse(userInfo);
            console.log("用户信息", userObj.data);

            setUserObj(userObj.data)

        } else {
            //跳转到登录页面
            navigate("/login")
        }
    }, [navigate])


    return (
        <Layout className='home-container'>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="home-logo-sider" >
                    <img src={loginIcon} style={{ height: '60px', width: '60px' }} alt='' />
                    <p id='title-home'>瑞吉外卖</p>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={({ item, key }) => {
                    const selectedItems = items.filter((item) => item.key === key)
                    setTitle(selectedItems[0].label)

                }} />
            </Sider>

            <Layout className='home-right-contianer'>
                <Header
                    id='home-header'
                    style={{
                        padding: 0,
                        background: "#fff",
                    }}
                >
                    <div id='header-menu-title'>{title}</div>
                    <div id='user-home'>
                        {console.log(userObj.username)}
                        <label>{userObj.username}</label>
                    </div>
                </Header>

                <Employee />

            </Layout>


        </Layout>
    )
}
