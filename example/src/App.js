import React, { Component } from 'react'

import ExampleComponent, { createTheme } from 'react-multi-cell-grid'
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
      label: "Id",
      sortable: true
    }
  ]
}, {
  type: 'data',
  data: [
    {
      key: "firstName",
      label: "First Name",
      sortable: true,
      sort: (a, b) => a.firstName.length - b.firstName.length
    },
    {
      key: "lastName",
      label: "Last Name",
      sortable: true
    }
  ]
}, {
  type: 'data',
  data: [
    {
      key: "age",
      label: "Age",
      sortable: true
    },
    {
      key: "school",
      label: "School/College"
    }
  ]
}
]

const data = [{ id: 19, firstName: "Harsh", lastName: "Maheshwari", checked: true, age: 25, school: "DJSCOE" },
{ id: 100, firstName: "Aditya", lastName: "Asawa ", checked: false, age: 11, school: "RBK" },
{ id: 13, firstName: "Arun", lastName: "Prajapati", checked: false, age: 17, school: "JHPHS" },
{ id: 16, firstName: "Vedansh", lastName: "Asawa", checked: true, age: 15, school: "SSA" }]
export default class App extends Component {
  gridApi;
  state = {
    light: false
  }

  constructor(props) {
    super(props);
    this.gridReady = this.gridReady.bind(this);
  }
  gridReady(gridApi) {
    this.gridApi = gridApi;
  }
  render() {
    return (
      <div>
        <ExampleComponent columnDef={columnDef} data={data} gridReady={this.gridReady} theme={this.state.light ? createTheme("light") : createTheme("dark")} />
        <button onClick={() => this.setState(state => {
          state.light = !state.light;
          return state;
        })}>Toggle Theme</button>
      </div>
    )
  }
}
