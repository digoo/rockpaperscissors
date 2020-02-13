import styled from 'styled-components';
import { darken } from 'polished';

// import scissors from '../../assets/images/basic/scissors.png';
// import rock from '../../assets/images/basic/rock.png';
// import paper from '../../assets/images/basic/paper.png';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 600px;
  border: 2px solid #333;
  margin: 16px auto;
`;

export const PlayerSide = styled.div`
    width: 190px;
    height: 190px;
    margin: 19px;
    border-radius: 50%;
    background-color: ${props => props.bg};
    background-image: ${props =>
      `url('./assets/images/custom/${props.symbol}.png')`};
    text-align: center;
    border: 2px solid #ffe;
    opacity: 1;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 350px;
  height: 40px;
  margin: 20px;
  justify-content: space-evenly;
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
