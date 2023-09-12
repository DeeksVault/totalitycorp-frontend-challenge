
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const cartItems = useSelector((state) => state.cartItems)

    return (

        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
        }}>
            <ul>
                {
                    cartItems.map((item, index) => (
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
                                    <button style={{ borderRadius: "5px" }}>-</button>
                                    Count
                                    <button style={{ borderRadius: "5px" }}>+</button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}