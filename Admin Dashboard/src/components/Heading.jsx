export default function Heading({ heading, description }) {
    return (
        <>
            <div className="mb-4">
                <h1 className="text-heading-large text-text">{heading}</h1>
                <p className="text-body-small text-text-light">{description}</p>
            </div>
        </>
    );
}
