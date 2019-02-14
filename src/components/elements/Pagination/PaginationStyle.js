import styled from 'styled-components';

const PaginationStyle = styled.div`
  margin-top: 3rem;
  padding: 0 3rem;

  ::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export default PaginationStyle;
