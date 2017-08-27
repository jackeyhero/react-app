import React, { Component } from 'react'

import Book from './component/book.js'
import logo from './logo.svg'
import './App.css'
import Header from './component/header/header.js'
import ArticleList from './component/section/section.js'
import Footer from './component/footer/footer.js'
import FilterableProductTable from './component/react/react.js'
class App extends Component {
  render() {
    return (
        <div>
            <Header menu={PRODUCTS}/>
            <ArticleList article={ARTICLE}/>
            <Footer/>
        </div>
    )
  }
}

let ARTICLE=[
    {name:"Sporting Goods",author:"Electronics",date:'2016-12-12'},
    {name:"Sporting Goods",author:"Electronics",date:'2016-12-12'},
    {name:"Sporting Goods",author:"Electronics",date:'2016-12-12'},
    {name:"Sporting Goods",author:"Electronics",date:'2016-12-12'},
    {name:"Sporting Goods",author:"Electronics",date:'2016-12-12'},
    {name:"Sporting Goods",author:"Electronics",date:'2016-12-12'}
]

let PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

export default App
