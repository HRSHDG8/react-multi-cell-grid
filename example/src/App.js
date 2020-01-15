import React, { Component } from 'react'

import ExampleComponent from 'react-multi-cell-grid'
const columnDef = [{
  type: 'checkbox',
  data: [
    {
      key: "checked",
      label: ""
    }
  ]
}, {
  type: 'data',
  data: [
    {
      key: "id",
      label: "Id"
    }
  ]
}, {
  type: 'data',
  data: [
    {
      key: "firstName",
      label: "First Name",
      sortable: true
    },
    {
      key: "lastName",
      label: "Last Name"
    }
  ]
}
]

const data = [{ id: 1, firstName: "Harsh", lastName: "Maheshwari", checked: true }, { id: 2, firstName: "Aditya", lastName: "Asawa ", checked: false }]
export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent columnDef={columnDef} data={data} />
      </div>
    )
  }
}
