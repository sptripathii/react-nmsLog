import React from "react";
import ReactSvgPieChart from "react-svg-piechart";
import { fetchCount } from '../rest/ajax.js';
import store from "../stores/store.js";

const data = [
  { title: "Warning", value: 100, color: "#22594e" },
  { title: "Error", value: 60, color: "#2f7d6d" },
  { title: "Info", value: 30, color: "#3da18d" },
  { title: "Alert", value: 20, color: "#69c2b0" }
]

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.forceUpdate();
    });
    fetchCount();
    console.log('Dashboard constructor...', store.getState());

  }
  render() {
    return (
      <ReactSvgPieChart
        data={store.getState().count}
        viewBoxSize={50}
        // If you need expand on hover (or touch) effect
        expandOnHover
        // If you need custom behavior when sector is hovered (or touched)
        onSectorHover={(d, i, e) => {
          if (d) {
            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
          } else {
            console.log("Mouse leave - Index:", i, "Event:", e)
          }
        }}
      />
    );
  }
}

export default Dashboard;