import { ResponsiveBar } from '@nivo/bar'
import Skyrim from '../../data/Skyrim.json'

const BarChart = () => (
    <ResponsiveBar
        data={Skyrim}
        colors={['#ffb957', 
                '#96eeff', 
                '#b8eca8', 
                '#f7f379', 
                '#ff7575',
                '#4141415a',
                '#db89cff8'
                ]}
        // colors={{ scheme: 'nivo' }}
        keys={[
            'value',
        ]}
        indexBy="id"
        enableGridX={true}
        margin={{ top:20, right: 40, bottom: 50, left: 150 }}
        padding={0.1}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'None'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'None'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Score',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        // labelTextColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             1.6
        //         ]
        //     ]
        // }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)

export default BarChart