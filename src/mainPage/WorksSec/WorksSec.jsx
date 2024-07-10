import React from 'react'
import WorksSecTHREE from './WorksSecThree'
import WorksSecInfo from './WorksSecInfo'

function WorksSec({classname}) {
  return (
    <section className={classname}>
        <WorksSecTHREE/>
        <WorksSecInfo/>
    </section>
  )
}

export default WorksSec