// YourComponent.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartActions } from '../store/reducers';
import { RootState } from '../store/store';
import CircleChart from './CircleChart';
import './ChartComponent.css';
import Block from '@uiw/react-color-block';

interface ChartComponentProps {}

const ChartComponent: React.FC<ChartComponentProps> = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state: RootState) => state.chartReducer);

  const [hex, setHex] = useState("#BF0404");

  useEffect(() => {
    dispatch(chartActions.getData());
  }, [dispatch]);

  const calculateAverage = (): number => {
    if (data.length === 0) return 0;
    const total = data.reduce((acc, item) => acc + item[1], 0);
    return total / data.length;
  };

  return (
    <div className="chart-container">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <div>
          <Block className="color-block"
            color={hex}
            onChange={(color) => setHex(color.hex)}
          />

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${calculateAverage()}%`,
                backgroundColor: hex,
              }}
            />
          </div>
          <div className="horizontal-chart">
            {data.map((item, index) => (
              <div key={index} className="chart-item">
                <CircleChart category={item[0]} value={item[1]} color={hex} />
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default ChartComponent;
