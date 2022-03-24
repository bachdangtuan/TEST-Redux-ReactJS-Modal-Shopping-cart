import React, { Component } from 'react';

class ModalSP extends Component {
    renderGioHang = () => {
        let  {gioHang}  = this.props
        return gioHang.map((sp,index)=>{
        return <tr key={index}>
            <td scope="row">{sp.name}</td>
            <td><img src={sp.image} alt="" width={50} /></td>
            <td>{sp.price}</td>
            <td>{sp.description}</td>
            <td>{sp.soluong}</td>
            <td>{sp.price * sp.soluong}</td>
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
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ModalSP;
