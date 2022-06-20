import React, { useEffect } from 'react'
import { styled } from '../stitches.config'

const MapDiv = styled('div', {
  square: 450,
})

const Map = ({ center, zoom }) => {
  // Initialize and add the map
  const initMap = () => {

    // The map, centered at center prop
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoom,
      center: center,
    })
    // The marker, positioned at center prop
    const marker = new google.maps.Marker({
      position: center,
      map: map,
    })
  }

  useEffect(() => {
    initMap()
  })

  return <MapDiv id='map'></MapDiv>
}

export default Map
