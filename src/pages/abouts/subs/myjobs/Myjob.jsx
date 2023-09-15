import React from 'react'
import { useDispatch } from 'react-redux'
import {productAction} from '../../../../store/reducers/product.reducer'
export default function Myjob() {
  const dipatch = useDispatch();
  return (
    <div>
      <h2>Myjob</h2>
      <button onClick={() => {
        dipatch(productAction.incrementCount())
      }}>Tăng</button>

    <button onClick={() => {
        dipatch(productAction.setCount(1000))
      }}>set</button>
    </div>
  )
}
