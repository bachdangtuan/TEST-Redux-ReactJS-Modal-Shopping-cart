import React, { Component } from 'react'
import ChitietSP from './ChitietSP';
import ModalSP from './ModalSP';

export default class DanhsachSP extends Component {

    state = {
        gioHang: [{
            "id": 1,
            "name": "Adidas Prophere",
            "soluong": 1,
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }]
    }
    //ThemSanPhamVaoGioHang
    themsanpham = (SPclick) => {
        // B1: tu SP duoc chon tao ra SP gio hang
        let spGioHang = {
            "id": SPclick.id,
            "name": SPclick.name,
            "soluong": 1,
            "price": SPclick.price,
            "description": SPclick.description,
            "shortDescription": SPclick.shortDescription,
            "quantity": 995,
            "image": SPclick.image
        }
        //Kiem tra san pham co trong gio hang chua
        let gioHangUpdate = [...this.state.gioHang]
        let index = gioHangUpdate.findIndex(sp => sp.id === spGioHang.id);
        if (index !== -1) {
            gioHangUpdate[index].soluong += 1;
        } else {
            //San pham k trung index thì đẩy vào giỏ hàng
            gioHangUpdate.push(spGioHang);
        }



        this.setState({
            gioHang: gioHangUpdate
        })
    }
    //Đặt sự kiện xóa giỏ hàng tại 
    xoasanpham = (maSP) => {
        //Tìm trong giỏ hàng có sp chứa maSP được click thì xóa nó đi
        // var giohangUpdate = [...this.state.gioHang]
        // let index = giohangUpdate.findIndex(sp => sp.id === maSP)
        // if (index !== -1) {
        //     giohangUpdate.splice(index,1);
        // }

        //Xoa bang filter
        //Cật nhật lại state và render giao diện
        // Xác nhận xóa
        if (window.confirm("Bạn có chắc chắn xuống xóa giỏ hàng")) {
            var giohangUpdate = this.state.gioHang.filter(sp => sp.id !== maSP)
            this.setState({
                gioHang: giohangUpdate
            })
        }
    }
    //Tang giam so luon
    tangGiamSoLuong = (maSP,tanggiam) =>{
         var gioHangUpdate = [... this.state.gioHang]
         let index = gioHangUpdate.findIndex((sp)=>{
             return sp.id === maSP
         })
        // Xu ly tang giam
        if (tanggiam) {
            gioHangUpdate[index].soluong +=1;
        }else{
            if ( gioHangUpdate[index].soluong > 1) {
                gioHangUpdate[index].soluong -=1;
            }
        }
        //Update state
        this.setState({
            gioHang: gioHangUpdate
        })
    }


    render() {

        let tongsoluong = this.state.gioHang.reduce((tsl, spGH, index) => {
            return tsl += spGH.soluong;
        }, 0)
        let arrSP = this.props.danhsachSP
        return (
            <div className='container text-center '>
                <h1 className='pb-5'>Test Gio Hàng</h1>
                <ModalSP xoasanpham={this.xoasanpham} tangGiamSoLuong={this.tangGiamSoLuong} gioHang={this.state.gioHang}></ModalSP>
                <h2 className='pb-5' data-toggle="modal" data-target="#modelId" style={{
                    cursor: 'pointer'
                }}>GIO HANG({tongsoluong})</h2>
                <ChitietSP themsanpham={this.themsanpham} arrSP={arrSP}></ChitietSP>
            </div>
        )
    }
}
