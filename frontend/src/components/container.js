import styled from 'styled-components';

const Container = styled.div`
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;

    grid-template-areas: 
        "chart1 chart1 chart1 chart1 chart1 chart1 chart1 chart2 chart2 chart2 chart2 chart2"
        "chart3 chart3 chart3 chart3 chart3 chart3 chart3 chart4 chart4 chart4 chart4 chart4";

    @media (min-width: 768px) {
        padding: 0 40px;
    }

    @media (min-width: 992px) {
        padding: 0 70px;
    }
`

export default Container;
