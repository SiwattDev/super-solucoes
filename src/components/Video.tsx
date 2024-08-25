import React from 'react'
import styled from 'styled-components'
import VideoSS from '../assets/super-soluções.mp4'

const Title = styled.h1`
    font-size: 1.8rem;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    color: #e4bf5e;
    margin-bottom: 20px;
`

export default function Video() {
    return (
        <React.Fragment>
            <Title>Assista o vídeo</Title>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <video
                    controls
                    style={{
                        width: '100%',
                        maxWidth: '750px',
                    }}
                >
                    <source
                        src={VideoSS}
                        type='video/mp4'
                    />
                </video>
            </div>
        </React.Fragment>
    )
}
