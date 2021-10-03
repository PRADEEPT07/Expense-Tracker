import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, settext] = useState('');
    const [amount, setamount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id:Math.floor(Math.random()*10000000), text, amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='fomr-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(e) => settext(e.target.value)} placeholder='Enter Text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Amount<br /></label>
                    <input type='number'  value={amount} onChange={(e) => setamount(e.target.value)} placeholder='Enter amount...'/>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </>
    )
}
