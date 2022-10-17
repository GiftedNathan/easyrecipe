import styled from "styled-components"


const Navbar = styled.div`
    width: 100%;
    padding: 30px

`
const Logo = styled.a`
    font-size: 18px;
    color: red;
`
const Header = () => {
    return (
        <Navbar>
            <Logo>ease recipe</Logo>
        </Navbar>
    )
} 
export default Header