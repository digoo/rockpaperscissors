import styled from 'styled-components';

import scissors from '../../assets/images/basic/scissors.png';
import rock from '../../assets/images/basic/rock.png';
import paper from '../../assets/images/basic/paper.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40rem;
  border: 2px solid #333;
  margin: 1rem auto;
`;

export const PlayerSide = styled.div`
    width: 12.5rem;
    height: 12.5rem;
    margin: 1.25rem;
    border-radius: 50%;
    background-color: ${props => props.bg};
    background-image: ${props =>
      `url('./assets/images/basic/${props.symbol}.png')`};
    /* background-size: cover; */
    text-align: center;
    line-height: 12.5rem;
    position: relative;
    display: inline-block;
    border: 2px solid #fff;
    opacity: 1;
    background-repeat: no-repeat;
    background-position: center center;
  }
  /* div.player:nth-last-child() {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
  } */
`;

export const Button = styled.button``;
