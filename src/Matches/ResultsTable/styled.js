import styled from "styled-components";

export const TableContainer = styled.div`
    max-height: 550px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
`

export const Table = styled.table`
    border-collapse: collapse;
    text-align: center;
`

export const TableCaption = styled.caption`
    padding: 5px;
    font-size: 20px;
`

// .resultsTable__row {
//     border-bottom: 1px solid white;
//     padding: 10px;
//     color: white;
// }

// .resultsTable__row:nth-child(even):hover {
//     background-color: hsl(239, 94%, 23%);
// }

// .resultsTable__row:nth-child(odd) {
//     background-color: hsl(239, 94%, 17%);
// }

// .resultsTable__row:nth-child(odd):hover {
//     background-color: hsl(239, 94%, 25%);
// }

// .resultsTable__headRow {
//     color: #ADE8F4;
//     border-bottom: 1px solid white;
//     padding: 10px;
// }

// .resultsTable__rowItem {
//     border-bottom: 1px solid white;
//     padding: 10px;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     max-width: 100px;
// }

// @media (max-width: 550px) {
//     .resultsTable__rowItem {
//         padding: 10px 5px;
//         max-width: 60px;
//     }
// }

// @media (max-width: 350px) {
//     .resultsTable__rowItem {
//         padding: 10px 3px;
//         max-width: 60px;
//     }
// }

// .resultsTable__rowItem--headItem {
//     border-bottom: 1px solid white;
// }

// .resultsTable__rowItem--points {
//     font-weight: 700;
//     color: #00B4D8;
// }