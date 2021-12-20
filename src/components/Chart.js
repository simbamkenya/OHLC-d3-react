import React, { useContext } from 'react'
import { CryptoContext } from '../CryptoContext'
import { scaleLinear, scaleBand, min, max, select} from 'd3'

function Chart() {
    const state = useContext(CryptoContext)
    // console.log(state[0])

    // console.log(Object.values(state))
    console.log(state[0])

    //scale 
    // const xScale = scaleLinear
    //     .domain()
    //     .range()

    // const yScale = scaleBand
    //     .domain(min(state, d => d.low), max(state, d => d.high))
    //     .range([0, select('svg').attr('height')])
    //     console.log(yScale.domain())

    return (
        <>
           
            {/* { Object.keys(state).map((key) => (
                <div key={key}>
                    <span>{key} </span>
                    <span className="right">{state[key].time}</span>
                </div>
            ))} */}
             <svg height="500" width="960">
                {/* <rect
                x={}
                y={}
                width={}
                height={}
                /> */}
            </svg>

        </>
    )
}

export default Chart

