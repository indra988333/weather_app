import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useEffect,useState} from "react";

function App() {
  const apiKey="f56f24967aaf51182d1d4df628297c6d"
  const [data, setData] = useState({})
  const getWeatherDetails=(cityName)=>{
    if(!cityName) return
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey
    axios.get(apiURL).then((res)=>{
      console.log("response",res.data)

      setData(res.data)

    }).catch((err)=>{
      console.log("err",err)
    })
  }
  const [inputCity, setInputCity]=useState("")
  

  const handleChangeInput=(e)=>{
    console.log("value",e.target.value)
      setInputCity(e.target.value)
  }



  const handleSearch=()=>{
    getWeatherDetails(inputCity)
  }
useEffect(()=>{
  getWeatherDetails("delhi")
},[])

  return (
    <div className="col-md-12">
      <div className="weatherBg">
      <h1 className="head">Weather App</h1>
      <div className="d-grid gap-4 col-4 mt-4">
      <input type="text"  className="form-control"
      value={inputCity}
      onChange={handleChangeInput}/>
      <button className="btn btn-primary" type="button" onClick={handleSearch}>
      Search

      </button>
      </div>
      </div>

        <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
      <img className="Wicon" src="https://img.freepik.com/premium-vector/cute-weather-icon-set-weather-forecast-icon-isolated-white-background_68708-952.jpg?w=1060"/>
              <h5 className="wCity">
                {data?.name}
              </h5>
              <h6 className="wTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div>
    </div>

  );
}

export default App;
