export default function Pricing({ pricingInputs, setPricingInputs }) {
    return (
        <>
            <label className="input-label text-body-medium">
                Price
                <input
                    value={pricingInputs.price}
                    onChange={(event) =>
                        setPricingInputs((prev) => ({
                            ...prev,
                            price: event.target.value,
                        }))
                    }
                    name="price"
                    type="text"
                    required
                    className="input"
                    placeholder="$100"
                />
            </label>
            <label className="input-label text-body-medium">
                Currency
                <select
                    value={pricingInputs.currency}
                    onChange={(event) =>
                        setPricingInputs((prev) => ({
                            ...prev,
                            currency: event.target.value,
                        }))
                    }
                    name="currency"
                    className="input"
                >
                    <option value="" disabled>
                        Select Currency
                    </option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="EGP">EGP - Egyptian Pound</option>
                    <option value="SAR">SAR - Saudi Riyal</option>
                    <option value="AED">AED - UAE Dirham</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                </select>
            </label>
            <label className="input-label text-body-medium">
                SKU
                <input
                    value={pricingInputs.sku}
                    onChange={(event) =>
                        setPricingInputs((prev) => ({
                            ...prev,
                            sku: event.target.value,
                        }))
                    }
                    name="sku"
                    type="text"
                    required
                    className="input"
                    placeholder="829672639"
                />
            </label>
            <label className="input-label text-body-medium">
                Tags
                <select
                    name="tags"
                    className="input"
                    value={pricingInputs.tags}
                    onChange={(event) =>
                        setPricingInputs((prev) => ({
                            ...prev,
                            tags: event.target.value,
                        }))
                    }
                >
                    <option value="" disabled>
                        Select Tags
                    </option>
                    <option value="In Stock">In Stock</option>
                    <option value="Out Of Stock">Out Of Stock</option>
                </select>
            </label>
        </>
    );
}
