import React, {Component} from "react";
import data from "../services/data.json";

function Item(props) {
  return(
    <div>{props.el.nombre}<br />{props.el.direccion}</div>
  )
}

export default class Elementos extends Component {
  constructor(props) {
    super(props);
    this.state = {contador: 0}
  }
  render() {
    return(
    <React.Fragment>
    <h1>Museos</h1>
    <div>{ data.results.map((el,index) => <Item key={index} el={el} />) }</div>
    </React.Fragment>
    )
  }
}