import * as React from 'react'

export interface AddTodoButtonProps {
  onSubmit: (s: string) => void
}

class AddButton extends React.Component<AddTodoButtonProps, { input: string }> {
  constructor(props: AddTodoButtonProps) {
    super(props)
    this.state = {
      input: ''
    }
  }
  onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!this.state.input.trim()) {
      return
    }
    this.props.onSubmit(this.state.input)
    this.setState({
      input: ''
    })
  }
  onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      input: e.currentTarget.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input value={this.state.input} onChange={this.onInputChange} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddButton
