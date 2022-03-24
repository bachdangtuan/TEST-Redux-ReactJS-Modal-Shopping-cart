import React, { Component } from 'react'
import DanhsachSP from './DanhsachSP'
import data from '../data/data.json'

export default class Trangchu extends Component {

  render() {
    return (
      <div>
          <DanhsachSP danhsachSP={data}></DanhsachSP>
      </div>
    )
  }
}

/**
 Hướng làm 
 */