import styled from "styled-components"
import chefCap from "../assets/images/chef-cap.png"


const Navbar = styled.div`
    width: 100%;
    /* background-color: #61a734; */
    background-color: #e3effb;
    border-bottom: 1px solid #fefefe;
    /* padding: 30px; */

`
const Logo = styled.a`
    display: flex;
    align-items: center;
    font-family: 'Inspiration', cursive;
    font-size: 38px;
    color: #61a734;
`

const LogoImage = styled.img`
    width: 60px;

    margin: 15px;
`;
const Header = () => {
    return (
        <Navbar>
            <Logo> <LogoImage src={chefCap} alt="recipe-log" /> easy <span>Resipe</span></Logo>
        </Navbar>
    )
} 
export default Header