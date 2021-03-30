import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const FormStyles = styled.form`
  /* box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05); */
  background: rgba(var(--cream), 0.2);
  border-radius: 10px;
  border: 5px solid white;
  padding: 20px;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  width: clamp(50%, 90%, 700px);

  label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  input,
  textarea,
  select {
    font-family: var(--textFont);
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid rgba(var(--cream), 0.5);
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #ff3019 0%,
        #e2b04a 50%,
        #ff3019 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default FormStyles;
