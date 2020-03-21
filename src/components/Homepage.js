import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
// import ToDoListItem from "./ToDoListItem";
// import Preloader from "./Preloader";

import { authRef } from "../config/firebase";

import * as data from "../data.json";

let map = null;

class MapList extends Component {
  constructor(props: Props) {
    super(props);
    //TODO: Use user's location
    this.state = {
      lat: 13.1734433,
      lng: -59.6276261,
      zoom: 6,
      addFormVisible: false,
      addFormValue: "",
      user: { name: "shannon" }
    };
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
  }

  componentWillUpdate(nextProps) {
    let { auth } = nextProps;
    console.log(auth);
  }

  render() {
    const { lng, lat, zoom, addFormVisible } = this.state;
    console.log(data);

    const activityList = data.posts.map(i => (
      <li className="collection-item avatar">
        <i className="material-icons circle">folder</i>
        <span className="title">{i.author}</span>
        <p>{i.comment}</p>
        {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
      </li>
    ));

    return (
      <div className="row">
        <div className="col s3">
          <h6>Recent Posts</h6>
          <ul className="collection">{activityList}</ul>
        </div>
        <div className="col s9">
          <h3>Ideas</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data, auth }) => {
  return {
    data,
    auth
  };
};

export default connect(mapStateToProps, actions)(MapList);
