import styled from "styled-components"
import chefCap from "../assets/images/chef-cap.png"


const Navbar = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-between;
    align-items: center;

    padding: 15px 30px;

    background-color: #e3effb;
    border-bottom: 1px solid #fefefe;

    .nav{
        list-style: none;
    }
    .nav .nav-link{
        padding: 5px 10px;
        text-transform: capitalize;

        color: #fefefe;
        background-color: #ff5a00;
        border-radius: 10px;
        cursor: pointer;
    }

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
    margin-right: 15px;
    
`;
const Header = () => {
    return (
        <Navbar>
            <Logo> <LogoImage src={chefCap} alt="recipe-log" /> easy<span>Resipe</span></Logo>
            <ul className="nav">
                <li className="nav-link">recipes</li>
            </ul>
        </Navbar>
    )
} 
export default Header