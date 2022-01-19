import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>\
                <img src="/images/detail-mulan.png"/>
            </Background>
            <ImageTitle>
                <img src="/images/mulan-logo.png" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <img src="" />
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2020 • 7m • Action, Drama, Family, Fantasy
            </SubTitle>
            <Description>
                The eldest daughter of an honored warrior, masquerades as a man to take her ailing father's place during a general conscription to counter the Rouran army in Imperial China.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    margin-top: 60px;
    width: 35vw;
    min-width: 200px;
    /* padding: calc(3.5vw + 5px) 0; */

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    align-item: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;


    span{
        font-size: 30px;
        color: white;
        
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    margin-top: 26px;
`
const Description = styled.div`
    margin-top: 16px;
    line-height: 1.4;
    max-width: 730px;
    font-size: 20px;
    color: rgb(249, 249, 249);
`