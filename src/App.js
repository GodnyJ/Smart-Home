import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import Menu from './Menu';
import HomeCard from './HomeCard';
import Main from './Main';
import WeatherCard from './WeatherCard';
import ChartCard from './ChartCard';
import RightBottomSideCard from './RightBottomSideCard';
import Button from './Button';
import WhiteElement from './WhiteElement';
import CardUnderHouseImg from './CardUnderHouseImg';
import EneryConsumptionChart from './EneryConsumptionChart';
import Dial from './Dial';
import LeaveHome from './LeaveHome';
import MySlider from './MySLider';

function App() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = '' //your api key
    const city = 'London'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => console.error("Error Data Fetching:", error));
  }, []);

  // if(!weather) return <div>Weather data loading..</div>

  const dataForTheChart = [
  { day: 'Mon', value: 10, startColor: '#1898b6', endColor: '#023454' },
  { day: 'Tue', value: 7, startColor: '#0062a5', endColor:'#062538'},
  { day: 'Wed', value: 20, startColor: '#79f2d6', endColor:'#042e54'},
  { day: 'Thu', value: 16, startColor: '#89f7d1', endColor:'#3fa1a8' },
  { day: 'Fri', value: 33, startColor: '#8bf2d5', endColor:'#034470'},
  { day: 'Sat', value: 19, startColor: '#ffca87', endColor:'#034470' },
  { day: 'Sun', value: 19, startColor: '#ffca87', endColor:'#034470' }
  ];
  
  const [value, setValue] = useState(0.5); 
  const [valueIntensity, setValueIntensity] = useState(0.5); 

  const getColorDial = (val) => {
    if (val < 0.2) {
      return '#104461';
    } else if (val < 0.4) {
      return '#46dfd0';
    } else if (val < 0.6) {
      return '#ffe083';
    } else if(val < 0.8) {
      return '#ff630d';
    } else if (val < 1) {
      return '#60316e'
    }
  };

  return (
    <div className="app">
      <NavBar>
        <Menu />
      </NavBar>
      <Main>
        <HomeCard /> 

        <CardUnderHouseImg
          locationCardUnderHouseImg={1}
          title={'Electricity'}
          number={'9'}
          unit={'kWh'}
          title2={'Gas'}
          number2={'4'}
          unit2={'m³'} />
        <CardUnderHouseImg
          title={'Cold water'}
          number={'115'}
          unit={'L'}
          title2={'Hot water'}
          number2={'210'}
          unit2={'L'}
          locationCardUnderHouseImg={2} />
        <CardUnderHouseImg
          title={'Heating'}
          number={'14'}
          unit={'kWh'}
          title2={'Cooling'}
          number2={'5'}
          unit2={'kWh'}
          locationCardUnderHouseImg={3} />
        
        <WeatherCard
          temperature={`${Math.round(weather?.main.temp)}°C`}
          description={'Temperature outside'}
          column={3}
          colorNumber={1}
          imgSrc={'img/sunbehindthecloud-removebg-preview.png'} />
        <WeatherCard
          temperature={'65%'}
          description={'Cloudy'}
          column={4}
          colorNumber={2}
          imgSrc={'img/cloud.png'}
        />
        <WeatherCard
          temperature={'47%'}
          description={'Required light intensity inside'}
          column={5}
          colorNumber={3}
          imgSrc={'img/zyro-image.png'}
        />

        <ChartCard />
        <RightBottomSideCard
          title={'Notifications'}
        />
        <Button
          location={1}
          title1={'Eco'}
          title2={'Comfort'}
        />
        <Button
          location={2}
          title1={'Filtration'}
          title2={'Purification'}
        />
        <Button
          location={3}
          title1={'Grid'}
          title2={'Storage'}
        />
        <Button
          location={4}
          icon={'img/attention-mark-line-drawing-svgrepo-com.svg'}
          title1={'Weather warnings'}
          title2={'UV informations'}
        />
        <Button
          location={5}
          title1={'Only house'}
          title2={'All buildings'}
        />

        <WhiteElement
          locationWhiteElement={1}
          title={'Energy Consumption (kWh)'}
        >
          <EneryConsumptionChart dataForTheChart={dataForTheChart} />
        </WhiteElement>
        

        <WhiteElement
          locationWhiteElement={2}
          title={'Settings'}
        >
          <div className="sliders-box">            
          
          <MySlider title='Sound Volume'/>
          <MySlider title='Fan Speed'/>
          <MySlider title='Moisturizing Intensity'/>
            <MySlider title='Blinds Darkening Level' />
            </div>
        </WhiteElement>

        
        <WhiteElement
          locationWhiteElement={3}
          title={'Light Settings '}
          
        >
          <div className='dials'>
            <Dial
              description={'Color'}
              icon={'img/color-set-icon.png'}
              value={value}
              onChange={setValue}
              circularProgressColor={getColorDial(value)}
            />  
            <Dial
              description={'Intensity'}
              icon={'img/intensity-set-icon.png'}
              value={valueIntensity}
              onChange={setValueIntensity}
              circularProgressColor={'#ff7d01'}
            />  
          </div>

        </WhiteElement>
        <WhiteElement
          locationWhiteElement={4}
          title={'Leave Home Mode'}
        >
        <LeaveHome />
        </WhiteElement>
        
      </Main>
      
    </div>
  );
}

export default App;