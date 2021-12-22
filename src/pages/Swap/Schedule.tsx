import React from 'react'
import { Legend, Line, LineChart, Text } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, AreaChart, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartWrap = styled.div`
    width: 100%;
    height: 100%
`


const TimeTitle = styled.h3`
  margin: 10px 0;
  font-size: 30px;
`

const Schedule:React.FC = () => {
    const [cTime, setCTime] = React.useState<string>('12pm')
    const [cValue, setCValue] = React.useState<number>(123)

    const data = [
        {
          name: '12pm',
          uv: 53,
          amt: 53,
        },
        {
          name: '1pm',
          uv: 12,
          amt: 12,
        },
        {
          name: '2pm',
          uv: 55,
          amt: 55,
        },
        {
          name: '3pm',
          uv: 33,
          amt: 33,
        },
        {
          name: '4pm',
          uv: 18,
          amt: 18,
        },
        {
          name: '5pm',
          uv: 39,
          amt: 39,
        },
        {
          name: '6pm',
          uv: 34,
          amt: 34,
        },
        {
          name: '7pm',
          uv: 26,
          amt: 26,
        },
        {
          name: '8pm',
          uv: 36,
          amt: 36,
        },
        {
          name: '9pm',
          uv: 34,
          amt: 34,
        },
        {
          name: '10pm',
          uv: 12,
          amt: 12,
        },
        {
          name: '11pm',
          uv: 12,
          amt: 12,
        },
        {
          name: '12am',
          uv: 43,
          amt: 43,
        },
      ];


    const mousePoshandler = (e) => {
      /* setCTime(e.activeLabel)
      setCValue(data[e.activeTooltipIndex].uv) */
    }

    
    return (
        <ChartWrap>


          <ResponsiveContainer width='100%' height={250}> 
              <AreaChart 
                onMouseMove={e => mousePoshandler(e)}
                  data={data} 
                  margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2261DA" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#2261DA" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis hide/>
                  <Area name='что-то' dataKey="uv" stroke="#2261DA" fillOpacity={1} fill="url(#colorUv)" />
                  <Tooltip/>
              </AreaChart>
              
          </ResponsiveContainer>
        </ChartWrap>
    )
}

export default Schedule