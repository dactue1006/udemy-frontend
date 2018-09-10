import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class DropdownMenu extends React.Component{
  render(){
    return (
      <Dropdown simple text={this.props.text} pointing='left' className='link simple dropdown item'>
        <Dropdown.Menu icon='tag'>
          <Dropdown.Item >Inbox</Dropdown.Item>
          <Dropdown.Item>Starred</Dropdown.Item>
          <Dropdown.Item>Sent Mail</Dropdown.Item>
          <Dropdown.Item>Drafts (143)</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Spam (1009)</Dropdown.Item>
          <Dropdown.Item>Trash</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}