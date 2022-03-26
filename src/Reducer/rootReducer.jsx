import {combineReducers} from 'redux';
import { GioHangReducer } from './GioHangReducer';

//store total

export const rootReducer = combineReducers({
    // Noi se chua reducer cho nghiep vu (store con)
    GioHangReducer: GioHangReducer
})