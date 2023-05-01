import React, { Fragment, useState } from "react";
import classes from "./search.module.css";
import search from "../utils/search.svg";
import cross from "../utils/cross.svg";
import select from "../utils/select.svg";
import { coins } from "../constants"

const Search = (props) => {
    console.log(props);
    const [result, setResult] = useState([]);
    function searchHandler(event) {
        let searchString = event.target.value;
        let result = [];
        result = coins.filter(ele => {
            let coinname = ele.name.toLowerCase();
            return coinname.includes((searchString.toLowerCase()));
        })
        console.log(result);
        setResult(result);
        // props.seachResult(result)
    }
    function coinClickhandler(ele){
        console.log(ele);
        props.selectCoin(ele);
        props.closePopup();

    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    // let result = [{ name: 'Ethereum', icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" }, { name: 'Ethereum', icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" }]
    return (<Fragment>
        <div className={classes.overlay} onClick={props.closePopup}>
            <div onClick={stopPropagation} className={`${classes.modal} ${classes.animate}`}>
                <div className={classes.body}>
                    <div onClick={props.closePopup} className={classes.cross}><img height="10px" src={cross} alt="" /></div>
                    <div className={classes.seachDiv}>
                        <input onChange={searchHandler} type="text" className={classes.search} placeholder="Seacrh chains" />
                        <img className={classes.seachIcon} src={search} alt="" />
                    </div>
                    <div className={classes.resultDiv}>
                        {result.map((ele, ind) => {
                            return (<div key={ind} onClick={() => coinClickhandler(ele)} className={classes.result}>
                                <div className={classes.selectionIcon}>
                                    <img height="25px" src={ele.icon} alt="" />
                                    {ele.name}
                                </div>
                                {ele.name == props.selectedCoin.name && <img src={select} alt="" />}
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)
}

export default Search;