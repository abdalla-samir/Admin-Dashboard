import { useState } from "react";

export default function ProductInfo({ setProgress }) {
    const [inputs, setInputs] = useState({
        name: "",
        weight: "",
        sizes: "",
        category: "",
        description: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleProgress = () => {
        setProgress((prev) => ({ ...prev, productInfo: false, media: true }));
    };
    return (
        <>
            <div className="bg-neutral w-4/5 p-4 sm:p-8 rounded my-2 shadow">
                <h1 className="text-title-large text-center">
                    Product Information
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="p-4 flex-1 grid lg:grid-cols-2 md:grid-cols-1 gap-5">
                        <label className="input-label text-body-medium">
                            Name
                            <input
                                name="name"
                                value={inputs.name}
                                onChange={handleChange}
                                type="text"
                                required
                                className="input"
                            />
                        </label>
                        <label className="input-label text-body-medium">
                            Weight
                            <input
                                name="weight"
                                value={inputs.weight}
                                onChange={handleChange}
                                type="text"
                                required
                                className="input"
                            />
                        </label>
                        <label className="input-label text-body-medium ">
                            Sizes
                            <select
                                name="sizes"
                                className="input"
                                value={inputs.sizes}
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
                                value={inputs.category}
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
                            Description
                            <input
                                name="description"
                                value={inputs.description}
                                onChange={handleChange}
                                type="text"
                                required
                                className="input"
                            />
                        </label>
                    </div>
                    <button
                        className="btn block w-fit ml-auto"
                        onClick={handleProgress}
                    >
                        Next
                    </button>
                </form>
            </div>
        </>
    );
}
