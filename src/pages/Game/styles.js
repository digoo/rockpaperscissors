import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-evenly;

  div.edges {
    align-content: center;
    justify-content: center;
    /* border: 2px solid #333; */
    margin-top: 90px;
    height: 160px;
    text-align: center;

    strong {
      font-size: 22px;
      color: #fff;
    }

    p {
      font-size: 16px;
      color: #fff;
    }
  }
`;

export const BestOf = styled.div`
  display: flex;
  width: 80px;
  height: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #eee;
  margin: 3px auto 0;
  color: #fff;
  font-weight: bold;

  &:first-child {
    margin-top: 16px;
  }

  & + & {
    margin-bottom: 10px;
    width: 130px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 600px;
  margin: 16px auto;

  div.sides {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 20px;
    margin-top: 20px;

    p {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const PlayerSide = styled.div`
  width: 190px;
  height: 190px;
  margin: 19px;
  border-radius: 50%;
  background-color: ${props => props.bg};
  background-image: ${props =>
    `url('./assets/images/symbol/${props.symbol}.png')`};
  text-align: center;
  border: 2px solid #ffe;
  opacity: 1;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Scorebox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ffe;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const Button = styled.button`
  display: flex;
  width: 350px;
  height: 40px;
  margin-top: 20px;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  border: 1px solid #eee;
  color: white;

  &:hover {
    background: ${darken(0.03, '#7159c1')};
  }

  &:active {
    background: ${darken(0.09, '#7159c1')};
  }
`;
