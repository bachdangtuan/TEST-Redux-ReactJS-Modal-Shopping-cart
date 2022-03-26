import React, { Component } from 'react';

class ModalSP extends Component {
    renderGioHang = () => {
<<<<<<< HEAD
        let { gioHang } = this.props
        return gioHang.map((sp, index) => {
            return <tr key={index}>
                <td scope="row">{sp.name}</td>
                <td><img src={sp.image} alt="" width={50} /></td>
                <td>{sp.price}</td>
                <td>{sp.description}</td>
                <td>
                    <button onClick={() => {
                        this.props.tanggiamsoluon(sp.id, true)
                    }}> + </button>
                    {sp.soluong}
                    <button onClick={() => {
                        this.props.tanggiamsoluon(sp.id, false)
                    }}> - </button>

                </td>
                <td>{sp.price * sp.soluong}</td>
                <td>
                    <button className='btn btn-primary' onClick={() => { this.props.xoasanpham(sp.id) }}>Delete</button>
                </td>
            </tr>
=======
        let  {gioHang}  = this.props
        return gioHang.map((sp,index)=>{
        return <tr key={index}>
            <td scope="row">{sp.name}</td>
            <td><img src={sp.image} alt="" width={50} /></td>
            <td>{sp.price}</td>
            <td>{sp.description}</td>
            <td>
                <button onClick={()=>{
                    this.props.tangGiamSoLuong(sp.id,true)
                }}> + </button>
                {sp.soluong}
                <button onClick={()=>{
                    this.props.tangGiamSoLuong(sp.id,false)
                }}> - </button>
                
                </td>
            <td>{sp.price * sp.soluong}</td>
            <td><button className='btn btn-danger' onClick={()=> this.props.xoasanpham(sp.id)}>Xóa</button></td>
        </tr>
>>>>>>> ae536e87378399e77d0c2f0bac8eec931c1bcd85

        })


    }
    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Test Gio hang cua ban</h5>
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
                                    {this.renderGioHang()}
                                </tbody>
                                <tfoot>
                                    <tr>
<<<<<<< HEAD
                                        <td colSpan='4'></td>
                                        <td>Tổng Tiền</td>
                                        <td>
                                            {this.props.tongtien}
                                        </td>

=======
                                        <td colSpan={4}></td>
                                        <td>
                                            <span>Tổng Tiền</span>
                                        </td>
                                        <td> {
                                            this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                                                return (tongTien += spGioHang.price * spGioHang.soluong).toLocaleString()
                                            },0)
                                            
                                            }
                                        </td>
>>>>>>> ae536e87378399e77d0c2f0bac8eec931c1bcd85
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ModalSP;
