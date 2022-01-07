import React from 'react';
import styled from 'styled-components';

const Movies = () => {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img
                        src={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/015C354B3092752412B326D12474E6F426883BF0058B6B208328151391433D44/scale?width=1200&aspectRatio=1.78&format=jpeg`}
                        alt={`img`}/>
                </Wrap><Wrap>
                <img
                    src={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/015C354B3092752412B326D12474E6F426883BF0058B6B208328151391433D44/scale?width=1200&aspectRatio=1.78&format=jpeg`}
                    alt={`img`}/>
            </Wrap><Wrap>
                <img
                    src={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/015C354B3092752412B326D12474E6F426883BF0058B6B208328151391433D44/scale?width=1200&aspectRatio=1.78&format=jpeg`}
                    alt={`img`}/>
            </Wrap><Wrap>
                <img
                    src={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/015C354B3092752412B326D12474E6F426883BF0058B6B208328151391433D44/scale?width=1200&aspectRatio=1.78&format=jpeg`}
                    alt={`img`}/>
            </Wrap><Wrap>
                <img
                    src={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/015C354B3092752412B326D12474E6F426883BF0058B6B208328151391433D44/scale?width=1200&aspectRatio=1.78&format=jpeg`}
                    alt={`img`}/>
            </Wrap><Wrap>
                <img
                    src={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/015C354B3092752412B326D12474E6F426883BF0058B6B208328151391433D44/scale?width=1200&aspectRatio=1.78&format=jpeg`}
                    alt={`img`}/>
            </Wrap><Wrap>
                <img
                    src={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/015C354B3092752412B326D12474E6F426883BF0058B6B208328151391433D44/scale?width=1200&aspectRatio=1.78&format=jpeg`}
                    alt={`img`}/>
            </Wrap><Wrap>
                <img
                    src={`https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/015C354B3092752412B326D12474E6F426883BF0058B6B208328151391433D44/scale?width=1200&aspectRatio=1.78&format=jpeg`}
                    alt={`img`}/>
            </Wrap>
            </Content>
        </Container>
    );
};

export default Movies;

const Container = styled.div`

`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  cursor: pointer;
  margin-bottom: 100px;
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0, 0,0/69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;