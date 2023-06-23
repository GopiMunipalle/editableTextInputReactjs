import {Component} from 'react'

import {
  EditableContainer,
  TextContainer,
  Heading,
  InputContainer,
  Input,
  Para,
  Button,
} from './styledComponents'

class EditableText extends Component {
  state = {EditableTextInput: '', isButtonClicked: false}

  onChangeInput = event => {
    this.setState({EditableTextInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditableTextInput, isButtonClicked} = this.state
    const EditText = isButtonClicked ? 'Edit' : 'Save'
    return (
      <EditableContainer>
        <TextContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <Para>{EditableTextInput}</Para>
            ) : (
              <Input
                type="text"
                value={EditableTextInput}
                onChange={this.onChangeInput}
              />
            )}
            <Button onClick={this.onClickButton}>{EditText}</Button>
          </InputContainer>
        </TextContainer>
      </EditableContainer>
    )
  }
}
export default EditableText
