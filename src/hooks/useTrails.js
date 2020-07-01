import { useState, useEffect } from 'react'
import { getTrails } from '../tools/TheHikingProject'

const denver = {
    latitude: 39.750, 
    longitude: -104.975, 
    accuracy: 1500, 
    updatedAt: Date.now()
}
export const useTrails = () => {
    const [position, setPosition] = useState(denver) 
    const [error, setError] = useState(null)
    const [trails, setTrails] = useState(null)

    const switchPosition = (latitude, longitude, accuracy = null) => {
        console.log('switching position')
        setPosition({
            latitude: latitude, 
            longitude: longitude, 
            accuracy: accuracy === null ? position.accuracy : accuracy, 
            updatedAt: Date.now()
        })
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setPosition({
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude, 
                    accuracy: position.coords.accuracy, 
                    updatedAt: new Date(position.timestamp)
                })
            }, 
            error => setError(error), 
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 })
    }, [])


    useEffect(() => {
        // console.log('requesting trails', position)
        if(position?.latitude !== undefined) {
            // console.log('getting trails')
            const latitude = parseFloat(position.latitude?.toFixed(3))
            const longitude = parseFloat(position.longitude?.toFixed(3))
            getTrails(latitude, longitude, 20, (data) => {
                console.log('data', data)
                setTrails(data.trails)
            })
        }  
    }, [position])

    return [position, error, trails, switchPosition] 
}