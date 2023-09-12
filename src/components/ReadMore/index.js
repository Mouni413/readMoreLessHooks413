// Write your code here
import {useState} from 'react'

import {
  ReactBackgroundContainer,
  ReactHooksHeading,
  ReactParagraph,
  ReactImage,
  ReactCardContainer,
  ReactDescription,
  ReactButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadText, setReadText] = useState(true)
  const reactDescription = isReadText
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription
  const buttonText = isReadText ? 'Read More' : 'Read Less'
  const onClickReadTextButton = () => {
    setReadText(prevState => !prevState)
  }
  return (
    <ReactBackgroundContainer>
      <ReactHooksHeading>React Hooks</ReactHooksHeading>
      <ReactParagraph>Hooks are a new addition to React</ReactParagraph>
      <ReactCardContainer>
        <ReactImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <ReactDescription>{reactDescription}</ReactDescription>
        <ReactButton type="button" onClick={onClickReadTextButton}>
          {buttonText}
        </ReactButton>
      </ReactCardContainer>
    </ReactBackgroundContainer>
  )
}

export default ReadMore
