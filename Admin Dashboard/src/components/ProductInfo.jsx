export default function ProductInfo({
    productInfoInputs,
    setProductInfoInputs,
}) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProductInfoInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <>
            <label className="input-label text-body-medium">
                Name
                <input
                    name="name"
                    value={productInfoInputs.name}
                    onChange={handleChange}
                    type="text"
                    required
                    className="input"
                    placeholder="Enter your name"
                />
            </label>
            <label className="input-label text-body-medium">
                Weight
                <input
                    name="weight"
                    value={productInfoInputs.weight}
                    onChange={handleChange}
                    type="text"
                    required
                    className="input"
                    placeholder="Enter weight"
                />
            </label>
            <label className="input-label text-body-medium ">
                Sizes
                <select
                    name="sizes"
                    className="input"
                    value={productInfoInputs.sizes}
                    onChange={handleChange}
                >
                    <option value="">Sizes</option>
                    <option value="X-Small">X-Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select>
            </label>
            <label className="input-label text-body-medium ">
                Category
                <select
                    name="category"
                    className="input"
                    value={productInfoInputs.category}
                    onChange={handleChange}
                >
                    <option value="">Category</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Hoodies">Hoodies</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Sweaters">Sweaters</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Pants">Pants</option>
                    <option value="Shorts">Shorts</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Skirts">Skirts</option>
                    <option value="Activewear">Activewear</option>
                    <option value="Underwear">Underwear</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </label>
            <label className="input-label text-body-medium">
                Quantity
                <input
                    name="quantity"
                    value={productInfoInputs.quantity}
                    onChange={handleChange}
                    type="text"
                    required
                    className="input"
                    placeholder="Enter quantity"
                />
            </label>
            <label className="input-label text-body-medium">
                Description
                <input
                    name="description"
                    value={productInfoInputs.description}
                    onChange={handleChange}
                    type="text"
                    required
                    className="input"
                    placeholder="Enter description"
                />
            </label>
        </>
    );
}
