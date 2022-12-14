import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`
export const HeaderLogo = styled.img`
  height: 20px;
  width: 120px;
`
export const ThemeProfileLogout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
export const Profile = styled.img`
  height: 23px;
  width: 23px;
  margin: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuIcon = styled.div`
  margin: 10px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuContainer = styled.div`
  background-color: ${props => props.MenuColor};
  width: 375px;
  height: 432px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseButtonMenu = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  border: none;
  outline: none;
  align-self: flex-end;
  justify-content: flex-start;
  height: 30px;
  width: 30px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 60px;
`
export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`
export const MenuItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  align-self: flex-start;
  background-color: ${props => props.ActiveColor};
  height: 40px;
  width: 385px;
  padding-left: 120px;
`
export const MenuWord = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
`
export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.Logout};
  border-radius: 6px;
  width: 260px;
  height: 120px;
  padding: 20px;
`
export const LogoutContent = styled.p`
  color: grey;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
`
export const LogoutCancelButton = styled.button`
  background-color: transparent;
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.color};
  width: 60px;
  height: 25px;
  color: grey;
`
export const LogoutConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 2px;
  width: 60px;
  height: 25px;
  color: #ffffff;
  border-width: 0px;
  margin-left: 14px;
`
export const LogoutButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LogoutLarge = styled.button`
  background-color: #3b82f6;
  border-radius: 2px;
  width: 70px;
  height: 30px;
  color: #ffffff;
  color: 12px;
  padding: 2px;
  border-width: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
