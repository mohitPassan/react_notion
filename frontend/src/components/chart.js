import styled from "styled-components";

const Chart = styled.div`
    background-color: red;
    width: 100%;
    height: 100px;
    grid-area: ${props => props.area};
`;

export default Chart;