/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'
import Grid from './grid/Grid'

export type Props = { text: string }
export default Grid;
export class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}
