import axios from "axios"
import { setProducts } from "../store/action/Index"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
const Feature = () => {
    const dispatch = useDispatch()
    const fetchProduct = async () => {
    const  response = await axios.get("https://api.pujakaitem.com/api/products")
    .catch((err) => { console.log("Error", err) }) 

    dispatch(setProducts(response))
}
useEffect(() => { fetchProduct() }, [])
const products=useSelector((state)=>state.ToggleReducer.featureProducts);
console.log("FeatureProducts",products);

    return (
        <div>
<h1>Click for Products</h1>
        </div>
    )
}

export default Feature
