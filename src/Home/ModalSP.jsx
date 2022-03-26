import React, { Component } from 'react';

class ModalSP extends Component {
    renderGioHang = () => {
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
                                        <td colSpan='4'></td>
                                        <td>Tổng Tiền</td>
                                        <td>
                                            {this.props.tongtien}
                                        </td>

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
