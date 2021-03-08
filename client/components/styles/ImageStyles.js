import styled from 'styled-components';

const ImageStyles = styled.div`
  position: relative;
  width: 130px;
  margin: 0 auto;

  img {
    height: 200px;
    width: 130px;
    object-fit: cover;
    margin: 10px auto;
    box-shadow: var(--bs);
  }

  img:hover {
    box-shadow: none;
  }
`;

export default ImageStyles;
