import React, { useEffect } from 'react'
import { styled } from '../stitches.config'

const MapDiv = styled('div', {
  square: 450,
})

const Map = () => {
  // Initialize and add the map
  function initMap() {
    // The location of batteriGöteborg
    const batteriGöteborg = { lat: 57.6980118, lng: 11.9833662 }
    // The map, centered at batteriGöteborg
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: batteriGöteborg,
    })
    // The marker, positioned at batteriGöteborg
    const marker = new google.maps.Marker({
      position: batteriGöteborg,
      map: map,
    })
  }

  useEffect(() => {
    initMap()
  }, [])

  return (
    <>
      <div>Hi</div>
      <MapDiv id='map'></MapDiv>
    </>
  )
}

export default Map
