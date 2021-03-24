import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import data from "../services/data.json";

function Item(props) {
  return(
    <React.Fragment>
      <div className="col mb-2">
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title">{props.el.nombre}</h3>
          <div className="card-text">
            <p><small>{props.el.direccion}</small></p>
            <a className="card-link" href={props.el.link} target="_blank" rel="noreferrer">Sitio Web</a>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
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
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3">
      { data.results.map((el,index) => <Item key={index} el={el} />) }
      </div>
    </div>
    </React.Fragment>
    )
  }
}