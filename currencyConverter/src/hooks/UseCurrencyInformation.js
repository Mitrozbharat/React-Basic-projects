import { useEffect, useState } from "react";


function UseCurrencyInformation(currency) {

    const [data, setData] = useState('');

    useEffect(() => {

        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then(response => response.json())
            .then(res => setData(res.rates));

        console.log('Currency data fetched:', data);

    }, [currency]);

    console.log('Currency data fetched:', data);

    return data;
}

export default UseCurrencyInformation;