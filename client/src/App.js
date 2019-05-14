import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import './App.css'
import Signin from './Components/Signin';
import Nav from './Components/Nav';
import Review from './Components/Review';
import Details from './Components/Details';
import productupload from './Components/productupload'
import './layout.css'
import { Layout, Menu, Breadcrumb,Button, Icon, Input, notification } from 'antd';
 

const Search = Input.Search;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

class App extends Component {
  constructor (props){
        super(props);
         this.state = {
          value: '',
        }
      }
      handleChange=(e)=>{
        this.setState({
          value: e.target.value
        })
      }
    
      handleMenuClick=(e)=>{
        console.log('click', e);
      }
  render () {
    return(

<Layout>
<Header className="header">
  <div className="logo" />
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['2']}
    style={{ lineHeight: '64px' }}
  > 
    <Menu.Item key="1"> USE N SHARE (RENTAL) </Menu.Item>
    <Menu.Item key="2"> Home </Menu.Item>
    <Menu.Item key="3"> Product Upload </Menu.Item>
    {/* <Menu.Item align="center"> 
    <Search placeholder="Search here" onSearch={value => console.log(value)} enterButton />
     </Menu.Item> */}

    {/* <Search
      placeholder="input search text"
      enterButton="Search"
      // size="large"
      onSearch={value => console.log(value)}
    /> */}
    {/* <Button type="primary" icon="search"> Search </Button> */}
      </Menu>
</Header>
<Content style={{ padding: '0 50px' }}>
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
    <Breadcrumb.Item align="right"> 
     <Button type="primary" onClick={openNotification}>
        Notification box
     </Button> 
     </Breadcrumb.Item>
  </Breadcrumb>
  <Layout style={{ padding: '24px 0', background: '#fff' }}>
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              Catogiries
            </span>
          }
        >
          <Menu.Item key="1"> Clothing </Menu.Item>
          <Menu.Item key="2"> Hand Bags</Menu.Item>
          <Menu.Item key="3"> Jewelery </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Content style={{ padding: '0 24px', minHeight: 280 }}> 
      <BrowserRouter>
      <div>
         <Nav />
         <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signin" component={Signin} />
            <Route path="/profile" component={Profile} />
            <Route path="/review" component={Review} />
            <Route path="/Details" component={Details}/>
            <Route path="/productupload" component={productupload}/>
        </Switch>
       </div> 
      </BrowserRouter>
   </Content>
  </Layout>
</Content>
<Footer style={{ textAlign: 'center' }}> Use N Share ©2019 Created by Pranuthi, Meghana, Shravani</Footer>
</Layout>
);
}
}
export default App;

