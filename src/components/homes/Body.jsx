import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Register from '../../pages/registers/Register'
import About from '../../pages/abouts/About'
import Myjob from './../../pages/abouts/subs/myjobs/Myjob';
import MyCompany from './../../pages/abouts/subs/mycompanies/MyCompany';
import MyClass from './../../pages/abouts/subs/myclass/MyClass';
import { useSelector } from 'react-redux';
export default function Body() {
    const productStore = useSelector(store => store.productStore)
    return (
        <section id='app_container'>
            <section className='app_container_content'>
                Cart {productStore.count}
                <Routes>
                    <Route path='/register' element={<Register/>}></Route>
                    <Route path='/abouts' element={<About/>}>
                        <Route path='my-jobs' element={<Myjob/>}></Route>
                        <Route path='my-company' element={<MyCompany/>}></Route>
                        <Route path='my-class' element={<MyClass/>}></Route>
                    </Route>
                </Routes>
            </section>
        </section>
    )
}
