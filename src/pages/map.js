import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { useStyles } from '../hooks/useStyles'
import React, { createRef } from 'react'
import { greenIcon } from '../tools/CustomIcons'

const createTrailPopup = (trail) => {
    return (
        <Marker key={trail.id} 
                position={[trail.latitude, trail.longitude]} 
                icon={greenIcon}
            >
            <Popup>
               { trail.name }
            </Popup>
        </Marker>
    )
}


const MapPage = ({ position, error, trails, changePosition }) => {
    const classes = useStyles()
    const mapRef = createRef(Map) 
    const initialPosition = [parseFloat(position.latitude), parseFloat(position.longitude)]

    const handleMapClick = event => {
        const map = mapRef.current
        if(map !== null) {
            map.leafletElement.locate() 
        }
    }
    const handleLocationFound = event => {
        console.log(event.latlng)
    }
    const onViewportChanged = event => null

    return (
        <Map 
            className={classes.screen} 
            center={initialPosition} 
            zoom={10}
            ref={mapRef}
            onClick={handleMapClick}
            onlocationfound={handleLocationFound}
            onViewportChanged={onViewportChanged}
            onmove={onViewportChanged}
            >

            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            maxZoom={18}
        
            />
            
            {
                position !== null 
                    ? <Marker position={[position.latitude, position.longitude]} >
                      <Popup>Current Location</Popup>  
                    </Marker> 
                    : null
            }

            {
                trails !== null 
                    ? trails.map(t => createTrailPopup(t))
                    : null
            }
            
        </Map>
    )
}

export default MapPage