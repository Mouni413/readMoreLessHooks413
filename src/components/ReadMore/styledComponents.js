// Style your elements here
import styled from 'styled-components'

export const ReactBackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`
export const ReactHooksHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 30px;
`

export const ReactParagraph = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 18px;
`
export const ReactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`

export const ReactImage = styled.img`
  width: 500px;
  margin-top: 20px;
`
export const ReactDescription = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 20px;
`
export const ReactButton = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  border-width: 0px;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 10px;
`
