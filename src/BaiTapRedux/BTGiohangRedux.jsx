import React, { Component } from 'react'
import ModalGioHangRedux from './ModalGioHangRedux'
import DanhSachSPredux from '../BaiTapRedux/DanhSachSPredux'
import { connect } from 'react-redux';

class BTGiohangRedux extends Component {
  render() {
    let arrSP = this.props.gioHang
    console.log(arrSP);
    let tongsoluong = arrSP.reduce((tsl,spGH,index)=>{
      return tsl += spGH.soluong;
    },0)

    return (
      <div className='container text-center'>
        <h3 className='text-center'> Bai Tap Gio hang</h3>
        <h1 data-toggle="modal" data-target="#modelId" style={{
          cursor:'pointer'
        }}>Gio Hang ({tongsoluong})</h1>
          <ModalGioHangRedux></ModalGioHangRedux>
          <DanhSachSPredux></DanhSachSPredux>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang
  }
}
export default connect(mapStateToProps, null)(BTGiohangRedux)
