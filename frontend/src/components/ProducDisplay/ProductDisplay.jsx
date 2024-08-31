import React, { useContext } from 'react'
import '../ProducDisplay/productdisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'



const ProductDisplay = ({ category }) => {

    const { product_item_list } = useContext(StoreContext)

    return (
        <div className='product-display' id='product-display'>
            <h2 className='product-display-header'>Shop our Products</h2>
            <div className="product-display-list">
                {product_item_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        { console.log(category, item.category) }
                        return <ProductItem key={index} id={item._id} name={item.name} desc_1={item.desc_1} desc_2={item.desc_2} price={item.price} image={item.image} />
                    }

                })}
            </div>

        </div>
    )
}

export default ProductDisplay
