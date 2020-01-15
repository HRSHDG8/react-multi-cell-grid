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
      label: "Last Name",
      sortable: true
    }
  ]
}
]

const data = [{ id: 19, firstName: "Harsh", lastName: "Maheshwari", checked: true },
{ id: 100, firstName: "Aditya", lastName: "Asawa ", checked: false },
{ id: 13, firstName: "Arun", lastName: "Prajapati", checked: false }]
export default class App extends Component {
  gridApi;
  constructor(props) {
    super(props);
    this.gridReady = this.gridReady.bind(this);
  }
  gridReady(gridApi) {
    this.gridApi = gridApi;
  }
  render() {
    return (
      <ExampleComponent columnDef={columnDef} data={data} gridReady={this.gridReady} />
    )
  }
}
