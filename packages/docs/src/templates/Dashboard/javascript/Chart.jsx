import Heading from '@growth-ui/react/elements/Heading';
import React from 'react';
import Segment from '@growth-ui/react/elements/Segment';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';

// Dummy data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const Chart = () => (
  <Segment>
    <Heading as="h3">Today</Heading>
    <ResponsiveContainer width="99%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 16,
          right: 16,
          bottom: 0,
          left: 24,
        }}
      >
        <XAxis dataKey="time" />
        <YAxis>
          <Label
            angle={270}
            position="left"
            style={{
              textAnchor: 'middle',
            }}
          >
            Sales ($)
          </Label>
        </YAxis>
        <Line
          type="monotone"
          dataKey="amount"
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </Segment>
);
export default Chart;
