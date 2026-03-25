export default function Heading({ heading, description, size, margin }) {
    return (
        <>
            <div className={`mb-${margin}`}>
                <h1 className={`text-heading-${size?.head} text-text`}>
                    {heading}
                </h1>
                <p className={`text-body-${size?.description} text-text-light`}>
                    {description}
                </p>
            </div>
        </>
    );
}
