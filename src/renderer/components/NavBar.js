import React from "react";
import path from "path";
import { Sidebar, Menu, Segment, Header, Icon , Image} from "semantic-ui-react";
import logopath from '/Users/milleniumfalcon/Documents/FullStack/CapStone/Enki/static/logo.png'
// const logo = require(logopath)
const SideBar = () => {
  return(
  <Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} animation="slide along" vertical visible width='thin'>
    <Image src={logopath} /> 
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
