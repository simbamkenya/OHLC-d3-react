import React from 'react'
import styled from 'styled-components'
import { FaBandcamp } from "react-icons/fa";
// import { json } from 'd3'

const SidebarContainer = styled.div`
display: flex;
flex-direction: column;
align-items: left;
height: 100vh;
background-color: #252529;
color: #fff;
@media (max-width: 375px) {
  display: none;
}
`
const SidebarMenu = styled.ul`
display: flex;
align-items: center;
flex-direction: column;
list-style: none;
width: 100%;
border: 1px solid red;
padding: 0px 30px;
`
const SidebarMenuItem = styled.li`
display: flex;
align-items: center;
width: 100%;
height: 40px;
padding-left: 30px;
&:hover{
    background: rgba(255, 255, 255, 0.05);
    box-shadow: inset 3px 0 0 0 #ffffff;
    cursor: pointer;
}
`
const Icon = styled.div`
display:block;
width: 20px;
height: 20px;
border: 1px solid green;
/* background: yellow; */
`

const SidebarMenuItemLabel = styled.p`
margin-top: 0;
font-family: 'Roboto', sans-serif;
color: #fff;
font-size: 14px;
line-height: 1.5;
font-weight: 500;
text-align: left;
padding: 12px 0px;
color: #ffffff;
margin-left: 20px;
`
const MenuLogo = styled.div`
display: flex;

align-items: center;
justify-content: start;
gap: 16px;
font-size: 18px;
line-height: 1.5;
font-weight: 600;
height: 45px;
color: #fff;
margin: 0px 30px 30px 30px;
padding-bottom: 20px;
border-bottom: 1px solid #2e2e33;
/* background-color: pink; */

width: 100%;
padding-left: 30px;
`
const MenuSignOut = styled.div`
font-size: 14px;
line-height: 1.5;
font-weight: 500;
color: #fff;
margin: 200px 30px 60px 30px;
padding: 20px 0px 0px 30px;
border-top: 1px solid #2e2e33;
`


function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarMenu >
                <MenuLogo>
                   <FaBandcamp></FaBandcamp>
                   Logo
                </MenuLogo>
                
                <SidebarMenuItem>
                    <Icon><FaBandcamp /></Icon>
                    <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <Icon><FaBandcamp /></Icon>
                    <SidebarMenuItemLabel>Service Alert</SidebarMenuItemLabel>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <Icon><FaBandcamp /></Icon>
                    <SidebarMenuItemLabel>Customer Tickets</SidebarMenuItemLabel>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <Icon><FaBandcamp /></Icon>
                    <SidebarMenuItemLabel>Archive</SidebarMenuItemLabel>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <Icon><FaBandcamp /></Icon>
                    <SidebarMenuItemLabel>Libraries</SidebarMenuItemLabel>
                </SidebarMenuItem>

                <SidebarMenuItem>
                    <Icon><FaBandcamp /></Icon>
                    <SidebarMenuItemLabel>Deliveries</SidebarMenuItemLabel>
                </SidebarMenuItem>

                <MenuSignOut>Sign Out</MenuSignOut>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
