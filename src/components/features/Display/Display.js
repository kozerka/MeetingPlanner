import React, { Component } from 'react'
import styles from './Display.module.scss'
import GlassContainer from '../../layout/GlassContainer/GlassContainer'
import Button from '../../ui/Button/Button'
export class Display extends Component {
  state={activeBackground:'background2'}
  handleButtonClick = (backgroundStyle) => {
    if (this.props.changeBackground) {
      this.props.changeBackground(backgroundStyle);
    }
    this.setState({activeBackground:backgroundStyle})
  }
  render() {
    return (
      <GlassContainer className={styles.container}>
        <h3 className={styles.title}>Change the view</h3>
        <div className={styles.buttons}>
       <Button variant={this.state.activeBackground==='background1' ? 'active' : 'round'} buttonText="1" onClick={() => this.handleButtonClick('background1')}/>
          <Button variant={this.state.activeBackground==='background2' ? 'active' : 'round'} buttonText="2" onClick={() => this.handleButtonClick('background2')}/>
          <Button variant={this.state.activeBackground==='background3' ? 'active' : 'round'} buttonText="3" onClick={() => this.handleButtonClick('background3')}/>
          <Button variant={this.state.activeBackground==='background4' ? 'active' : 'round'} buttonText="4" onClick={() => this.handleButtonClick('background4')}/>
        </div>
      </GlassContainer>
    )
  }
}

export default Display