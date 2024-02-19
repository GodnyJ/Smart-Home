import React from "react";
import { XYPlot, LineSeries,HorizontalGridLines,VerticalGridLines, GradientDefs, AreaSeries, XAxis, YAxis } from 'react-vis';

export default function ChartCard() {
  const data = [
    {x: 0, y: 15},
    {x: 1, y: 16},
    {x: 2, y: 16},
    {x: 3, y: 16},
    {x: 4, y: 16},
    {x: 5, y: 16},
    {x: 6, y: 17},
    {x: 7, y: 17},
    {x: 8, y: 17},
    {x: 9, y: 18},
    {x: 10, y: 18},
    {x: 11, y: 19},
    {x: 12, y: 21},
    {x: 13, y: 23},
    {x: 14, y: 24},
    {x: 15, y: 24},
    {x: 16, y: 23},
    {x: 17, y: 22},
    {x: 18, y: 21},
    {x: 19, y: 20},
    {x: 20, y: 19},
    {x: 21, y: 18},
    {x: 22, y: 17},
    {x: 23, y: 15},
  ];
    
    const axisStyle = {
      line: {stroke: '#ADDDE1'},
      ticks: {stroke: '#ADDDE1'},
      text: {stroke: 'none', fill: '#fff', fontWeight: 600}
    };

    return (
      <div className='chart-card'>
        <h2>Temperature</h2>
        <XYPlot className="chart" height={175} width={400} margin={{ left: 55, right: 0, top: 30, bottom: 40 }} >
          <HorizontalGridLines style={{ stroke: '#B7E9ED', strokeWidth: 1, opacity: 0.5 }} />
          <VerticalGridLines style={{ stroke: '#B7E9ED', strokeWidth: 1, opacity: 0.5 }} />
          <LineSeries data={data} />
          <GradientDefs>
            <linearGradient id="myGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="20%" stopColor="#fdbd86" stopOpacity={1} />
              <stop offset="55%" stopColor="#63e4db" stopOpacity={1} />
              <stop offset="100%" stopColor="#1b799b" stopOpacity={1} />
            </linearGradient>
          </GradientDefs>
          <AreaSeries data={data} fill="url(#myGradient)" stroke="url(#myGradient)" />
          <XAxis style={axisStyle} />
          <YAxis style={axisStyle}/>
        </XYPlot>
      </div>
  );
}