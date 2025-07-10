import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './componants/Header';
import InputBox from './componants/InputBox';
import UseCurrencyInformation from './hooks/UseCurrencyInformation';

function App() {


  const [amount, setAmount] = useState(0);
  const [from, SetFrom] = useState('USD');
  const [to, SetTo] = useState('INR');
  const [onCurrencyChange, SetonCurrencyChange] = useState(0);
  const [convertedAmount, SetConvetedamount] = useState(0);

  const currencyInfo = UseCurrencyInformation(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    SetFrom(to);
    SetTo(from);
    setAmount(onCurrencyChange);
    SetConvetedamount(amount);
  }

  const convert = () => {

    SetConvetedamount((onCurrencyChange * currencyInfo[to]));

  }




  return (
    <>
      <Header />
      <div className='container my-4'>
        <div className="card p-4">
          <InputBox
            label="From"
            amount={onCurrencyChange}
            currency={to}
            onChangeAmount={(currency) => SetonCurrencyChange(currency)}
            currencyOptions={options}
            onCurrencyChange={SetTo}
            disableAmountInput={true} />
          <div className=" d-flex justify-content-center my-1">
            <button type="button" className="btn btn-primary my-1 ">swap</button>
          </div>
          <InputBox
            label="TO"
            amount={convertedAmount}
            currency={to}
            currencyOptions={options}
            onCurrencyChange={SetTo}
            onChangeAmount={(currency) => SetonCurrencyChange(currency)}
            disableAmountInput={true} />

          <button onClick={convert} className='btn btn-primary'>Convert</button>
        </div>
      </div>
    </>
  )
}

export default App
