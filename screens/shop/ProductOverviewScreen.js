import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import ProductItem from '../../components/ProductItem'
import * as cartActions from '../../store/actions/cart'

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.product.availableProducts)
    const dispatch = useDispatch()

    return <FlatList 
    keyExtractor={item => item.id}
    data={products}
    renderItem={(itemData) => <ProductItem 
    image={itemData.item.imageUrl}
    title={itemData.item.title}
    price={itemData.item.price}
    onViewDetail={() => {
        props.navigation.navigate({
            routeName: 'ProductDetail',
            params: {
                productId: itemData.item.id,
                productTitle: itemData.item.title
            }
        })
    }}
    onAddToCart={() => {
        dispatch(cartActions.addToCart(itemData.item))
    }}
    />}
    />
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen