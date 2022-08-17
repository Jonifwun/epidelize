import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries
} from 'react-vis';
import ChartLabel from 'react-vis/dist/plot/chart-label';

const Graph = ({ data }) => {
  return (
    <>
        { data.length ?
        <XYPlot width={250} height={250} color='#6466F1' className='bg-white rounded-md' margin={{left: 50}}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />  
        <YAxis />
        <ChartLabel
            text="Days"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.9}
            yPercent={1.22}
        />
        <ChartLabel
            text="ng"
            className="alt-y-label"
            includeMargin={false}
            xPercent={-0.2}
            yPercent={1.2}
        />
        <LineMarkSeries
            className="linemark-series-example-2"
            curve={'curveMonotoneX'}
            data={ data }
            color='#6466F1'
        />
        </XYPlot>
        : 
        <p className='uppercase tracking-wide text-sm text-black mt-12'>No data available</p>
        }
    </>
  )
}

export default Graph