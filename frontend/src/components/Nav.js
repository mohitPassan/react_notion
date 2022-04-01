import styled from "styled-components";

const Nav = styled.div`
    padding: 20px 20px;
    background-color: ${props => props.theme.color};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    font-size: 1.125rem;
    color: #fff;
    font-weight: 400;

    @media (min-width: 768px) {
        padding: 20px 40px;
    }

    @media (min-width: 992px) {
        padding: 20px 70px;
    }
`

export default Nav;