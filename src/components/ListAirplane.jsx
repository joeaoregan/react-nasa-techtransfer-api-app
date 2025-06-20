import { useEffect, useState } from 'react';
import Airplane from './Airplane';

const API_KEY = import.meta.env.VITE_APP_NASA_API_KEY;

function ListAirplane() {
  const [obj, setObj] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setObj(data.results);
      // console.log(obj);
      setLoad(true);
    }
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4"> {
      load ? (
        obj.length != 0 ? (
          obj.map((o) => {
            // console.log(o);
            return (<Airplane key={o[0]} data={o} />)
          })
        ) : ("No data available")
      ) : ("Loading...")
    }</div>
  );
}

export default ListAirplane