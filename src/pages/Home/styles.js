import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* border: 1px solid #eee; */
    margin: 30px auto;

    strong {
      font-weight: bold;
      font-size: 22px;
      color: #fff;
      text-align: center;
      margin-bottom: 15px;
    }

    img {
      width: 300px;
      height: 300px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid #eee;
    margin: 30px auto;

    p {
      color: #fff;
      font-weight: bold;
      margin-top: 5px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 34px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 5px;

      &:hover {
        background: ${lighten(0.09, 'rgba(0, 0, 0, 0.1)')};
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    select {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 24px;
      padding: 0 5px;
      color: #fff;
      margin: 0 0 5px;

      &:hover {
        background: ${lighten(0.09, 'rgba(0, 0, 0, 0.1)')};
      }
    }
    option {
      color: #fff;
      background: #7159c1;
    }

    button {
      margin: 15px 0 0;
      height: 34px;
      width: 188px;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
      &:active {
        background: ${lighten(0.09, '#7159c1')};
      }
    }
  }
`;
