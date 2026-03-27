export default function Heading({ heading, description, size, margin }) {
    return (
        <>
            <div className={`${margin ? `mb-${margin}` : ``}`}>
                <h1
                    className={` ${size.head ? `text-heading-${size?.head}` : ``}  text-text`}
                >
                    {heading}
                </h1>
                <p
                    className={`${size.description ? `text-body-${size.description}` : ``} text-text-light`}
                >
                    {description}
                </p>
            </div>
        </>
    );
}
