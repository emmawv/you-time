import styled from 'styled-components';

const PriceTag = styled.span`
  background: rgb(var(--cream));
  color: white;
  padding: 5px 15px;
  line-height: 1;
  font-size: 1.1rem;
  display: inline-block;
  position: absolute;
  top: 160px;
  right: -10px;
  border: 1px solid rgba(var(--brown), 0.2);

  &::before {
    content: ' ';
    display: block;
    width: 22px;
    height: 100%;
    background: rgb(var(--cream));
    position: absolute;
    top: -11px;
    right: -23px;
    border-right: 17px solid white;
    border-top: 17px solid rgb(var(--cream));
    border-bottom: 17px solid rgb(var(--cream));
  }

  &::after {
    content: ' ';
    display: block;
    width: 10px;
    height: 10px;
    background: rgb(var(--brown));
    position: absolute;
    top: -11px;
    right: -1px;
    border-top: 5px solid rgb(var(--cream));
    border-right: 5px solid rgb(var(--cream));
    border-left: 5px solid rgb(var(--brown));
    border-bottom: 5px solid rgb(var(--brown));
  }
`;

export default PriceTag;
