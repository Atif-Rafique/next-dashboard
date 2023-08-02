import Link from 'next/link';


import Image from 'next/image';
import React, { useState } from 'react';


// ================ Ant Components ================
import { Layout, Menu, Button, Affix } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';



const { Header, Sider, Content } = Layout;



// ================ Interfaces ================
import { MenuItemType } from '@/types/layout-types';



// ================ Utils ================
import { getSession } from '@/utils/jwt';




// ================ Mock Data ================

// TODO: Will move to the mock folder in future
const sidebarData: MenuItemType[] = [
    {
        key: '1',
        label: 'Dashboard',
        path: "/dashboard"
    },

    {
        key: '2',
        label: 'Settings',
        path: "/settings"
    },
]




// ================ Aasets ================
// import userImg from "../../../public/assets/user/user.png";






const DashboardLayout = ({ children, ...other }: any) => {

    const [collapsed, setCollapsed] = useState(false);

    const { user, accessToken } = getSession();

    console.log("user", user, accessToken);


    return (
        <Layout className='min-h-screen bg-white' style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth={0} className='sidebar-bg' style={{ backgroundColor: "#fff" }}>
                <div className="demo-logo-vertical" />

                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    className='sidebar-bg text-white'
                >
                    {sidebarData.map((item) => (
                        <Menu.Item key={item.key}>
                            <Link href={item.path}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>

            <Layout className='h-screen'>
                <Affix offsetTop={0}>
                    <Header className='flex justify-between items-center p-0 bg-white' style={{ justifyContent: "space-between" }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className='text-base'
                            style={{
                                width: 64,
                                height: 64,
                            }}
                        />

                        <div className='flex items-center gap-4' style={{ marginRight: "1rem", gap: 8 }}>

                            {/* <Image src={userImg} className='rounded-full border-4 border-white' alt="user" style={{ borderRadius: "999px" }} /> */}
                            <span className='text-sm'>Admin</span>
                        </div>
                    </Header>
                </Affix>

                <Content className='h-100 my-6 mx-4 bg-white overflow-auto' style={{ padding: "1em", height: "100%", overflow: "auto" }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default DashboardLayout