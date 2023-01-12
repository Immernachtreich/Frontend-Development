import './Chart.css';

import ChartBar from './ChartBar';

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {
                /* Props will have dataPoints which will be an array of objects
                *   dataPoints = [obj1, obj2, obj3, .... objN]
                *   objN = {
                *       value: number,
                *       label: string
                *   }
                */
                props.dataPoints.map(dataPoint => {
                    return (
                        <ChartBar 
                            key={ dataPoint.label }
                            value={ dataPoint.value }
                            maxValue={ totalMaximum }
                            label={ dataPoint.label }
                        />
                    )
                })
            }
        </div>
    )
}

export default Chart;