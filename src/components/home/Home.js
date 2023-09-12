import items from "./items.js"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/actions.js";
export default function Home() {
    
    const cartItems = useSelector((state) => state.cartItems)
    const dispatch = useDispatch();
    function handleClick(item){
        dispatch(addToCart(item));
    }
    return (
        <div>
            <h1>Products</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-wrap",
                margin: "10px"
            }}>
                    <ul>
                        {
                            items.map((item, index) => (
                                <li key={index}>
                                    <div className="card" style={{ width: "18rem", padding: "15px", alignItems: "center", backgroundColor: "grey" }}>
                                        <img className="card-img-top" src={item.url} alt={item.name} style={{ margin: "5px", borderRadius: "5px" }} />
                                        <div style={{ backgroundColor: "lightPink", borderRadius: "5px", margin: "2px" }}>
                                            <label>Name  :</label><span>{item.name}</span>
                                        </div>
                                        <div style={{ backgroundColor: "lightBlue", borderRadius: "5px", margin: "2px" }}>
                                            <label>Price:</label><span>{item.price}</span>
                                        </div>
                                        <div style={{ margin: "5px" }}>
                                            <button 
                                            onClick={handleClick(item)}
                                            style={{ borderRadius: "5px" }}>Add to Cart</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
    )
}