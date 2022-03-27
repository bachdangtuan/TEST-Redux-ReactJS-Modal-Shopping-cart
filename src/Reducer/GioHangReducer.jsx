// Khoi tajo gia tri ban dau cua store

const stateGioHang = {
    gioHang: [
    ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
    let gioHangUpdate = [...state.gioHang]
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //Xu ly logic them  gio hang

            let index = gioHangUpdate.findIndex(spGH => {
                return spGH.id === action.spGioHang.id
            })
            if (index !== -1) {
                gioHangUpdate[index].soluong += 1;
            } else {
                gioHangUpdate.push(action.spGioHang);
            }
            state.gioHang = gioHangUpdate;
            return { ...state }
        }
        case "XOA_GIO_HANG": {

            gioHangUpdate.splice(action.index, 1);
            state.gioHang = gioHangUpdate;
            return { ...state }

        }
        case "TANG_GIAM_SO_LUONG": {
            const {index,tanggiam} = action;
            console.log('action la',action);
            if (tanggiam) {
                gioHangUpdate[index].soluong += 1;
            } else {
                if (gioHangUpdate[index].soluong > 1) {
                    gioHangUpdate[index].soluong -= 1;
                }
            }
            state.gioHang = gioHangUpdate;
            return { ...state }
        }
        default:
            break;
    }



    return { ...state }
}


