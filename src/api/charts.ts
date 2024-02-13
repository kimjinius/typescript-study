import axios, { AxiosResponse } from 'axios';

const apiUrl = 'http://localhost:5000/chartData';

export interface ChartDataItem {
  // category: string;
  // value: number;
  [key: string]: any;
}

export interface ChartDataResponse {
  data: ChartDataItem[];
}

export const fetchChartData = async (): Promise<ChartDataResponse> => {
  try {
    const response: AxiosResponse<ChartDataResponse> = await axios.get(apiUrl);
    console.log("response.data");
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};
