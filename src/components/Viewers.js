import React from 'react';
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src={`/images/viewers-disney.png`} alt={`viewers`}/>
            </Wrap>
            <Wrap>
                <img src={`/images/viewers-disney.png`} alt={`viewers`}/>
            </Wrap>
            <Wrap>
                <img src={`/images/viewers-disney.png`} alt={`viewers`}/>
            </Wrap>
            <Wrap>
                <img src={`/images/viewers-disney.png`} alt={`viewers`}/>
            </Wrap>
            <Wrap>
                <img src={`/images/viewers-disney.png`} alt={`viewers`}/>
            </Wrap>
        </Container>
    );
};

export default Viewers;

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: 1fr;

`;

const Wrap = styled.div`
  img{
    width: 100%;
  }
`;