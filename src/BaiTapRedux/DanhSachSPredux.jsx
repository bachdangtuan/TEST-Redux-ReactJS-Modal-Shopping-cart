import React, { Component } from 'react'
// Import data
import data from '../data/data.json'
// Connect store
import { connect } from 'react-redux'


class DanhSachSPredux extends Component {

  renderSP = () => {
    return data.map((sp, index) => {
      return <div className='col-4' key={index}>
        <div className="card">
          <img className="card-img-top" src={sp.image} alt='' />
          <div className="card-body">
            <h4 className="card-title">{sp.name}</h4>
            <p className="card-text">{sp.description}</p>
          </div>
          <button onClick={() => {this.props.themgiohang(sp)}} className='btn btn-primary'>Buy to Cart</button>
        </div>
      </div>
    })
  }

  render() {
  
    return (
      <div className='container'>
        <div className="row">
          {this.renderSP()}
        </div>

      </div>
    )
  }
}
//Xay dung ham tao ra props va xu ly giu lieu va dua du lieu len store

const mapStateToProps = (dispatch) => {
  return {
    // Tao prop component (la function dua du lieu len store )
    themgiohang: (sp)=>{
      const spGioHang = {
        id: sp.id,
        name: sp.name,
        alias: sp.alias,
        price: sp.price,
        description:sp.description,
        image:sp.image,
        soluong:1
      }
      // Tao action dua du lieu len store
      const action = {
        type: 'THEM_GIO_HANG',
        spGioHang:spGioHang //Noi dung gui len reducer
      }
      // console.log(action);
      //Dung dispacth dua du lieu len reducer
      dispatch(action)
    }
  }
}
export default connect(null,mapStateToProps)(DanhSachSPredux)

