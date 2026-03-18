export default function EarningsCard({ amount, currency, note }) {
    return (
        <div className="flex flex-col gap-6 bg-white rounded p-4 items-center">
            <h2 className="text-title-large text-text">
                Your earning this month
            </h2>
            <span className="text-6xl text-primary font-bold">
                {amount}
                {currency}
            </span>
            <p className="w-45 text-center text-text-light">{note}</p>
            <button className="bg-white block cursor-pointer w-fit rounded py-2 px-8 shadow-sm border border-border text-primary">
                Withdraw All Earnings
            </button>
        </div>
    );
}
