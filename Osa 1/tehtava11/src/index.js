import React from 'react';
import ReactDOM from 'react-dom';


//Otsikko huolehtii kurssin nimen renderöimisestä, 
//Sisalto osista ja niiden tehtävämääristä ja 
//Yhteensa tehtävien yhteismäärästä.

const App = () => {


  /* Tehtävien 1.1 ja 1.2 määrittelyt
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
*/

/* Tehtävän 1.3 määritykset
const kurssi = 'Half Stack -sovelluskehitys'
const osa1 = {
  nimi: 'Reactin perusteet',
  tehtavia: 10
}
const osa2 = {
  nimi: 'Tiedonvälitys propseilla',
  tehtavia: 7
}
const osa3 = {
  nimi: 'Komponenttien tila',
  tehtavia: 14
}
*/

/* Tehtävä 1.4
const kurssi = 'Half Stack -sovelluskehitys'
const osat = [
  {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  },
  {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  },
  {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
] */


const kurssi = {
  nimi: 'Half Stack -sovelluskehitys',
  osat: [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]
}


    const Otsikko = (props) => {
      return (
        <div>
          <h1>{props.kurssi.nimi}</h1>
        </div>
      )
    }

    /* tehtavan 1.1 Sisalto
    const Sisalto = (props) => {
      return (
        <div>
          <p>{props.osa1} {props.tehtavia1}</p>
          <p>{props.osa2} {props.tehtavia2}</p>
          <p>{props.osa3} {props.tehtavia3}</p>
        </div>
      )
    } */

    /* Tehtävän 1.2 & 1.4 Sisalto
    const Sisalto = (props) => {
      return (
        <div>          
            <p>{osat[0].nimi} {osat[0].tehtavia}</p>
            <p>{osat[1].nimi} {osat[1].tehtavia}</p>
            <p>{osat[2].nimi} {osat[2].tehtavia}</p>
            
        </div>
      )
    } */

    const Sisalto = (props) => {
      return (
        <div>          
            <p>{kurssi.osat[0].nimi} {kurssi.osat[0].tehtavia}  </p>
            <p>{kurssi.osat[1].nimi} {kurssi.osat[1].tehtavia}  </p>
            <p>{kurssi.osat[2].nimi} {kurssi.osat[2].tehtavia}  </p>
           
            
        </div>
      )
    }
    //<p>{props.osat[1].nimi} {props[1].tehtavia}</p>
   // <p>{props[2].nimi} {props[2].tehtavia}</p>
    
//<p>{props.nimi} {props.tehtavia}</p>
    const Yhteensa = (props) => {
      return (
        <div>
          <p>yhteensä {kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia} tehtävää</p>
        </div>
      )
    }
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osat={kurssi} />
        <Yhteensa osat={kurssi} />
      </div>
    )
  }
 


ReactDOM.render(<App />, document.getElementById('root'));

