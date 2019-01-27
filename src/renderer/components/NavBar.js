import React from "react";
import path from "path";
import { Sidebar, Menu, Segment, Header, Icon , Image} from "semantic-ui-react";
const logopath = 'file://Users/milleniumfalcon/Documents/FullStack/CapStone/Enki/static/logo.png'
// const logo = require(logopath)
const SideBar = () => {
  return(
  <Sidebar.Pushable as={Segment}>
    <Image src={logopath}/> 
    <Sidebar as={Menu} animation="slide along" vertical width={"very thin"}>
      <Menu.Item> HI I AM ITEM </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as="h3">Application Content</Header>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>)
};

export default SideBar;
