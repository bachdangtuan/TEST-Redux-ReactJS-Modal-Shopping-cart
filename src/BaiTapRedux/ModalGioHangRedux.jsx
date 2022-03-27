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
            this.props.tanggiamsoluong(index, true)
          }}> + </button>
          {sp.soluong}
          <button onClick={() => {
            this.props.tanggiamsoluong(index, false)
          }}> - </button>

        </td>
        <td>{sp.price * sp.soluong}</td>
        <td>
          <button className='btn btn-primary' onClick={() => { this.props.xoasanphamIndex(index) }}>Delete</button>
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
                <tfoot>
                  <tr>
                    <td colSpan='4'></td>
                    <td>Tổng Tiền</td>
                    <td>
                      {this.props.gioHang.reduce((tongtien,SPGH,index)=>{
                        return tongtien += SPGH.soluong * SPGH.price;
                      },0)}
                    </td>

                  </tr>
                </tfoot>
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
// Tạo nút xử lý tại component nào thì sử dụng mapdispatchtoprops
const mapDispatchToProps = (dispatch) => {
  return {
    xoasanphamIndex: (index) => {
      const action = {
        type: 'XOA_GIO_HANG',
        index // Giá trị gửi lên
      }
      //Dua Action len reducer
      dispatch(action)
    },
    tanggiamsoluong: (index, tanggiam) => {
      const action = {
        type: 'TANG_GIAM_SO_LUONG',
        index,
        tanggiam// Giá trị gửi lên
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux)

