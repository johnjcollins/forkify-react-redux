import styled from 'styled-components';

const LikesStyle = styled.div`
  position: relative;
  align-self: stretch;
  padding: 0 !important;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};

  .likes__field {
    cursor: pointer;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    height: 100%;
    transition: all 0.3s;
  }

  .likes__field:hover {
    background-color: #f2efee;
  }

  .likes__panel:hover,
  .likes__field:hover + .likes__panel {
    visibility: visible;
    opacity: 1;
  }

  .likes__icon {
    fill: #f59a83;
    height: 3.75rem;
    width: 3.75rem;
  }

  .likes__panel {
    position: absolute;
    right: 0;
    top: 10rem;
    z-index: 10;
    padding: 2rem 0;
    width: 34rem;
    background-color: #fff;
    box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s 0.2s;
  }
`;

export default LikesStyle;
