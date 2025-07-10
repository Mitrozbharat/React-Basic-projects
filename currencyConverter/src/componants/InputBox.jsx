import { useId } from "react";

function InputBox({
    label,
    amount,
    onChangeAmount,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'USD',
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountId = useId();

    return (

        <div className="row offset-md-3">
            <div className="col-md-4 mb-3">
                <label className="form-label fs-5" htmlFor={amountId}>
                    {label}
                </label>
                <input
                    type="number"
                    className="form-control"
                    id={amountId}
                    placeholder="Enter amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))}
                />
            </div>


            <div className="col-md-4 mb-3">
                <label className="form-label fs-5" >
                    Currency Type
                </label>
                <select
                    className="form-select"
                    id={`${amountId}-currency`}
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    );
}

export default InputBox;
