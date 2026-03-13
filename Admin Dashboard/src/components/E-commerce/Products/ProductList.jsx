import { useNavigate } from "react-router-dom";
import useProduct from "/src/hooks/useProduct";

export default function ProductList() {
    const navigate = useNavigate();
    const [products] = useProduct();
    const productsArray = products.map((product) => {
        return (
            <tr key={product.id} className="not-last:border-b border-border">
                <td className="table-cell text-body-medium">{product.name}</td>
                <td className="table-cell text-body-medium">
                    {product.category}
                </td>
                <td className="table-cell text-body-medium">
                    {product.quantity}
                </td>
                <td className="table-cell text-body-medium">{product.sku}</td>
                <td className="table-cell text-body-medium">{product.price}</td>
                <td className="table-cell text-body-medium">
                    <span
                        className={`px-2 py-1  rounded-xl ${product.tags === "In Stock" ? "text-[#3EB900] bg-[#E7FFF4]" : "text-danger bg-[#F6D1DA]"}`}
                    >
                        {product.tags}
                    </span>
                </td>
                <td className="table-cell text-body-medium">
                    <button
                        className="cursor-pointer"
                        onClick={() =>
                            navigate(`/e-commerce/products/${product.id}/edit`)
                        }
                    >
                        Edit
                    </button>
                </td>
            </tr>
        );
    });
    return (
        <div className="flex-1 p-4 bg-white rounded shadow overflow-scroll">
            <table className=" w-full rounded min-w-4xl">
                <thead className="p-4">
                    <tr>
                        <th className="table-head-cell text-title-medium">
                            Product
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Category
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Quantity
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Sku
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Salary
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Status
                        </th>
                        <th className="table-head-cell text-title-medium">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>{productsArray}</tbody>
            </table>
        </div>
    );
}
