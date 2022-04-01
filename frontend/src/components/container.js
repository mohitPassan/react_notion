import styled from 'styled-components';

const Container = styled.div`
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;

    grid-template-areas: 
        "cc cc cc cc cc cc cc b b b b b"
        "c1 c1 c1 c1 c1 c1 c1 c2 c2 c2 c2 c2"
        "c3 c3 c3 c3 c3 c3 c3 c4 c4 c4 c4 c4";

    @media (min-width: 768px) {
        padding: 0 40px;
    }

    @media (min-width: 992px) {
        padding: 0 70px;
    }
`

export default Container;
