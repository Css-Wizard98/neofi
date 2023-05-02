import React, { Fragment, useEffect, useState } from "react";
import classes from "./crypto.module.css";
import dropdownIcon from "../utils/dropdown.svg";
import Search from "./search";
import axios from "axios"
const Crypto = (props) => {
    const [showPopup,setshowPopup] = useState(false);
    const [selectedCoin,setselectedCoin] = useState({name : "Bitcoin",icon : "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",tag  : 'BTCUSDT',});
    const [currentPrice,setCurrentPrice] = useState();
    const [coins,setCoins] = useState();
    const [money,setMoney] = useState();


    function popUpHandler(){
        setshowPopup((prev)=>{
            return !prev
        })
    }
    function SelectCoinHandler(val){
        console.log(val);
        setselectedCoin(val);
        setMoney();
        setCoins();
    }

    useEffect(()=>{
        const url = `https://www.binance.com/api/v3/ticker/price?symbol=${selectedCoin.tag}`;
        console.log("API URL--->",url);
        axios.get(url).then(res => {
            console.log(res);
            setCurrentPrice(Number(res.data.price))
        })
    },[selectedCoin])

    function amounthandler(event){
        let amount = Number(event.target.value);
        console.log(amount);
        let coins = (amount/(currentPrice*80)).toFixed(5);
        setCoins(coins)
    }
    

    return (
        <div className={classes.card}>
            <div className={classes.body}>
                <div className={classes.Currprice}>
                    <span className={classes.priceHeading}>Current value</span>
                    <span className={classes.price}>&#x20B9; {(currentPrice*80).toFixed(3)}</span>
                </div>
                <div onClick={popUpHandler} className={classes.chooseCoin}>
                    <div className={classes.coinIcon}>
                        <img height='25px' src={selectedCoin.icon} alt="" />
                        {selectedCoin.name}
                    </div>
                    <div>
                        <img src={dropdownIcon} alt="" />
                    </div>
                </div>
                <div className={classes.amount}>
                    <label htmlFor="amount">Amount you want to invest</label>
                    <input value={money} onChange={amounthandler} type="number" placeholder="0.00"/>
                    <div className={classes.currency}>INR</div>
                </div>

                <div className={classes.amount}>
                    <label htmlFor="amount">Estimate Number of {(selectedCoin.tag).replace('USDT','')} You will Get</label>
                    <input value={coins} type="number" className={classes.value} disabled placeholder="0.00"/>
                </div>

                <button className={classes.buy}>Buy</button>

            </div>
            <div className={classes.top}>
                <img className={classes.cryptoIcon} src={selectedCoin.icon} alt=""/>
            </div>
        {showPopup && <Search selectedCoin={selectedCoin} closePopup={popUpHandler} selectCoin={SelectCoinHandler}></Search>}

        </div>
        )
}

export default Crypto;