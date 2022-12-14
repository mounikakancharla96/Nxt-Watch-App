import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => props.bgColor};
  width: 200px;
  margin-top: 0px;
  height: 89%;
  position: fixed;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0px;
  padding: 0px;
`
export const NavigationItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: ${props => props.ActiveColor};
  height: 40px;
  width: 200px;
  padding-left: 20px;
  cursor: pointer;
`
export const NavigationWord = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`
export const ContactUs = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`
export const LogosCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LogoImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;
`
export const ContactWord = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  width: 160px;
`
