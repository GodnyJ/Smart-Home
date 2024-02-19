import React from "react";
import { useEffect, useRef } from "react";
import * as d3 from 'd3';

export default function EneryConsumptionChart({dataForTheChart}) {
    
  const d3Container = useRef(null);

  useEffect(() => {
    if (dataForTheChart && d3Container.current) {
      const margin = { top: 60, right: 10, bottom: -30, left: 10 };
      const width = 330 - margin.left - margin.right;
      const height = 160 - margin.top - margin.bottom;

      // Usuwanie poprzednich wykresów
      d3.select(d3Container.current).selectAll("*").remove();

      const svg = d3.select(d3Container.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3.scaleBand()
        .range([0, width])
        .padding(0.5);
      
      const y = d3.scaleLinear()
        .range([height, 0]);

      x.domain(dataForTheChart.map(d => d.day));
      y.domain([0, d3.max(dataForTheChart, d => d.value)]);

      svg.selectAll('.bar')
        .data(dataForTheChart)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.day))
        .attr('width', x.bandwidth())
        .attr('y', d => y(d.value))
        .attr('height', d => height - y(d.value))
        .attr('rx', 10)
        .attr('ry', 8)
        .attr('fill', (d, i) => 'url(#gradient' + i + ')');
        
      // Tworzenie osi X
      const xAxis = svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      // Zmiana koloru tekstu osi X
      xAxis.selectAll("text")
        .style("fill", "#99a5ad"); 

      // Zmiana koloru linii osi X
      xAxis.selectAll("path, line")
        .style("stroke", "transparent");   
        
      const defs = svg.append('defs');

      dataForTheChart.forEach((d, i) => {
        const gradient = defs.append('linearGradient')
          .attr('id', 'gradient' + i)
          .attr('x1', '0%')
          .attr('x2', '0%')
          .attr('y1', '0%')
          .attr('y2', '100%');

        // Kolory gradientu dynamicznie ustalane
        gradient.append('stop')
          .attr('offset', '0%')
          .attr('stop-color', d.startColor);

        gradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', d.endColor);
      });
        
      //dodanie wartości nad słupkiem
      svg.selectAll(".text")
        .data(dataForTheChart)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", (d) => x(d.day) + x.bandwidth() / 2) // Pozycja X tekstu (środek każdego słupka)
        .attr("y", (d) => y(d.value) - 5) // Pozycja Y tekstu (trochę powyżej góry słupka)
        .attr("text-anchor", "middle") // Wyśrodkowanie tekstu
        .text((d) => d.value)
        .style("fill", "#4a9caf"); // Wartość do wyświetlenia
    }
  }, [dataForTheChart]);
    
  return (
    <svg
      className="d3-energy-con-chart"
      ref={d3Container}
    />
  );
}