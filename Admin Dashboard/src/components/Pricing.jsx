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
                    name="facebookAccount"
                    type="text"
                    required
                    className="input"
                    placeholder="$100"
                />
            </label>
            <label className="input-label text-body-medium">
                Currency
                <input
                    value={pricingInputs.currency}
                    onChange={(event) =>
                        setPricingInputs((prev) => ({
                            ...prev,
                            currency: event.target.value,
                        }))
                    }
                    name="instagramAccount"
                    type="text"
                    required
                    className="input"
                    placeholder="USD"
                />
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
                    name="linkedinAccount"
                    type="text"
                    required
                    className="input"
                    placeholder="829672639"
                />
            </label>
            <label className="input-label text-body-medium">
                Tags
                <input
                    value={pricingInputs.tags}
                    onChange={(event) =>
                        setPricingInputs((prev) => ({
                            ...prev,
                            tags: event.target.value,
                        }))
                    }
                    name="dribbleAccount"
                    type="text"
                    required
                    className="input"
                    placeholder="In stock"
                />
            </label>
        </>
    );
}
