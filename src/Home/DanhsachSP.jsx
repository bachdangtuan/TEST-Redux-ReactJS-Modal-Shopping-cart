import React, { Component } from 'react'
import ChitietSP from './ChitietSP';
import ModalSP from './ModalSP';

export default class DanhsachSP extends Component {

    state = {
        gioHang :   [
            ]
    }
    //ThemSanPhamVaoGioHang
    themsanpham = (SPclick) =>{
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
            gioHangUpdate[index].soluong +=1;
          }else{
              //San pham k trung index thì đẩy vào giỏ hàng
              gioHangUpdate.push(spGioHang);
          }



        this.setState({
            gioHang: gioHangUpdate
        })
    }

    //Xóa Sản Phẩm khỏi giỏ hàng
    xoasanpham = (idSP)=>{
        
        //Hàm filter lọc ra những sản phẩm không có mã sản phẩm giống với mã sản phẩm truyền vào
        var gioHangUpdate = this.state.gioHang.filter(sp => sp.id !== idSP);

        // Đẩy dữ liệu vào state Render man hinh
        this.setState ({
            gioHang:gioHangUpdate
        })
    }

    //Tăng Giảm Sản Phẩm
    tanggiamsoluon = (idSP,tanggiam) =>{ //True: tăng số lượng, false giảm số lượng
    // Xủ lý tăng giảm
    let gioHangUpdate = [...this.state.gioHang]
    let index = gioHangUpdate.findIndex(sp => sp.id === idSP)
     if (tanggiam) {
        gioHangUpdate[index].soluong +=1;
     }else{
         if (gioHangUpdate[index].soluong > 1) {
            gioHangUpdate[index].soluong -=1;
         }
     }
     //Render lai gio hang
     this.setState({
         gioHang:gioHangUpdate
     })
    }
    
    render() {
        
        let tongsoluong = this.state.gioHang.reduce((tsl,spGH,index)=>{
            return tsl += spGH.soluong;
        },0)
        
        //Tính Tổng Tiền
        let tongtien = this.state.gioHang.reduce((tongtien,spGH,index)=>{
            return tongtien += spGH.soluong * spGH.price;
        },0)
        let arrSP = this.props.danhsachSP
        return (
            <div className='container text-center '>
                <h1 className='pb-5'>Test Gio Hàng</h1>
                <ModalSP tongtien={tongtien} tanggiamsoluon={this.tanggiamsoluon} xoasanpham={this.xoasanpham} gioHang ={this.state.gioHang}></ModalSP>
                <h2 className='pb-5' data-toggle="modal" data-target="#modelId" style={{
                    cursor:'pointer'
                }}>GIO HANG({tongsoluong})</h2>
                <ChitietSP themsanpham={this.themsanpham} arrSP={arrSP}></ChitietSP>
            </div>
        )
    }
}

// Tạo giao diện
// Import Hoặc get API về render ra giao diện bố cục trước đã
// Xác định state mặc định bạn đầu
// Xử lý trên state


/* Xử lý thuật toán Thêm sản phẩm vào giỏ hàng
thêm vào object vào state:
    - Xác định id được chọn từ mảng sản phẩm
    - Kiểm tra sản phẩm có trong giỏ hàng chưa
    So sánh id object được chọn với id có sẵn nếu chưa có thì push vào, có rồi thì cộng thêm 1 đơn vị
    - Cập nhật lại state render ra màn
*/

/*Xử lý thuật toán xóa sản phẩm trong giỏ hàng
    - Sử dụng filter để lấy ra mảng sản phẩm có những phần tử  có id khác với id sản phẩm được truyền vào.
    - set lại state và render ra màn hình
*/