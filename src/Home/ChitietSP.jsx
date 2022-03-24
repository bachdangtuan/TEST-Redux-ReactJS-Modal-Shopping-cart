import React, { Component } from 'react';

class ChitietSP extends Component {

    //Render SanPham
    renderSP = () => {
        let arrSP = this.props.arrSP
        
        return arrSP.map((sp, index) => {
            return <div className="col-4" key={index}>
                <div class="card text-dark">
                    <img className="card-img-top" src={sp.image} alt />
                    <div class="card-body">
                        <h4 class="card-title">{sp.name}</h4>
                        <button className='btn btn-dark' onClick={()=> this.props.themsanpham(sp)} >Them Gio Hang</button>
                    </div>
                </div>
            </div>
        })
    }
    // 


    render() {

        return (
            <div className='row'>
                {/* Render SP */}
                {this.renderSP()}
            </div>
        );
    }
}

export default ChitietSP;