import styled from 'styled-components'

const LoaderLayer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .6);
    z-index: 999;
`

const LoaderText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    color:#fff;
    font-size: 20px;
`

export {
    LoaderLayer,
    LoaderText
}