import React from 'react';

import Nav from '../../components/nav/index';
import Promocao from '../../components/promocao/index';
import Pizzas from '../../components/pizzasHome/index';
import Footer from '../../components/footer/index'





export default function Home(){
    return(
        <div>
            <Nav />
            <Promocao />
            <Pizzas />
            <Footer />
        </div>
    )
}