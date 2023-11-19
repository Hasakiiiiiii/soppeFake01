import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import "../App.css";
import { listItem } from "../data/listItem";

function Main() {
    return (
        <div id="wrap">
            <div className="h1W">
                <h1 className="h1">Danh Sách Sản Phẩm</h1>
                <Link to="/add" className="add-item-link"><span className="add-item">+</span></Link>
            </div>

            <div className="main">
                {listItem.map((item) => (
                    <Link to={`detail/${item.id}`} className="item">
                        <img className="img" src={item.img} />
                        <p className="name">{item.name}</p>
                        <div id="text">
                            <p className="price">{item.price}</p>
                            <p className="sale">{item.sale}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export { listItem };
export default Main;
