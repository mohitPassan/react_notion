import styled from 'styled-components';

const Container = styled.div`
    padding: 0 20px;
    width: 100%;
    height: 100%;

    @media (min-width: 768px) {
        padding: 0 40px;
    }

    @media (min-width: 992px) {
        padding: 0 70px;
    }
`

export default Container;
