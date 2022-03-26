import React, { Component } from 'react'

// Ket noi redux
import { connect } from 'react-redux';

class ModalGioHangRedux extends Component {
  renderSPModal = () => {
    let modal = this.props.gioHang
    return modal.map((sp, index) => {
      return <tr key={index}>
        <td scope="row">{sp.name}</td>
        <td><img src={sp.image} alt="" width={50} /></td>
        <td>{sp.price}</td>
        <td>{sp.description}</td>
        <td>
          <button onClick={() => {
        
          }}> + </button>
          {sp.soluong}
          <button onClick={() => {
        
          }}> - </button>

        </td>
        <td>{sp.price * sp.soluong}</td>
        <td>
          <button className='btn btn-primary'>Delete</button>
        </td>
      </tr>
    })
  }
  render() {
    console.log('modal', this.props.gioHang);
    return (
      <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderSPModal()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang
  }
}
export default connect(mapStateToProps, null)(ModalGioHangRedux)


