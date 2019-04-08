import React from 'react';
import './ListOfQuotes.css';

const ListOfQuotes = (props)=>{

    
    const quotesList = props.quotes.map((quote,index) =>{
        return <li key={index} className="quote" onClick={()=>props.playQuote(quote)}>Ouote#{index+1} - {quote.text} {convertSecondsToMinutes(quote.offset)}</li>
    })

    function convertSecondsToMinutes(secondes){
        let numOfMinutes = Math.floor(secondes/60).toString();
        let numOfSecondes = (secondes%60).toString();

        if(numOfMinutes<10){
            numOfMinutes="0"+numOfMinutes;
        }

        if(numOfSecondes<10){
            numOfSecondes="0"+numOfSecondes;
        }

        return numOfMinutes + ":" + numOfSecondes;
    }

    return (
        <ul>
        {quotesList}
        </ul>
    );

}

export default ListOfQuotes;