import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { fetchLogsForGrid } from '../rest/ajax.js';
import store from "../stores/store.js";

const columns = [
  { key: "ipaddress", name: "SOURCE IP", sortable: true },
  { key: "type", name: "SEVERITY", sortable: true },
  { key: "message", name: "DESCRIPTION", sortable: true },
  { key: "timestamp", name: "TIMESTAMP", sortable: true }
];

class Grid extends React.Component{
  constructor(props){
    super(props);
    store.subscribe(()=>{
        this.forceUpdate();
    });
    fetchLogsForGrid();
    console.log('Grid constructor...',store.getState());

  }
  render(){
    return(
      <ReactDataGrid
        columns={columns}
        rowGetter={i => store.getState().logs[i]}
        rowsCount={store.getState().logs.length}
    />);
  }
}

export default Grid;