// Khoi tajo gia tri ban dau cua store

const stateGioHang = {
    gioHang: [
    ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //Xu ly logic them  gio hang
            let gioHangUpdate = [...state.gioHang ]

            let index = gioHangUpdate.findIndex(spGH => {
                return spGH.id === action.spGioHang.id
            })
            if (index !== -1) {
                gioHangUpdate[index].soluong += 1;
            }else{
                gioHangUpdate.push(action.spGioHang);
            }
            state.gioHang=gioHangUpdate;
            return {...state}
        }


            break;

        default:
            break;
    }



    return { ...state }
}

