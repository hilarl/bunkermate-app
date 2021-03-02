import React from 'react'
import Map from 'components/Map'


const IndexPage = () => (
      <div>
        <Map width="400px" height="200px" />
      <Map
          height="200px"
          styles={['streets-v11', 'satellite-v9', 'dark-v9', 'light-v9']}
        />
      </div>
)

export default IndexPage
