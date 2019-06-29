import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

class TableWrapper extends Component {
  render() {
    const { columns, list } = this.props;

    return (
      <Table className={"mb-0"}>
        <thead>
        <tr>
          {
            columns && columns.length > 0 &&
            columns.map((v, i) => (
              <td key={i}>{v}</td>
            ))
          }
        </tr>
        </thead>
        <tbody>
        {
          list && list.length > 0 &&
          list.map((v, i1) => (
            <tr key={i1}>
              {
                Object.keys(v).map((k, i2) => (
                  <td key={i2}>{v[k]}</td>
                ))
              }
            </tr>
          ))
        }
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: {}
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {}
  }
};

TableWrapper.propTypes = {
  columns: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWrapper);
