const ROOT_URL = 'https://www.hikingproject.com/data/'
const API_KEY = '200731291-e2620666ef9b936d8ed6d61c398780b2'

export const getTrails = (latitude, longitude, maxDistance = 10, saveDataCallback) => {
    // if(typeof(latitude) !== typeof(Number)) throw new Error('Invlalid Latitude')
    // if(typeof(longitude) !== typeof(Number)) throw new Error('Invalid Longitude')
    // if(typeof(maxDistance) !== typeof(Number)) throw new Error('Invalid Distance')

    const requestUrl = `${ROOT_URL}get-trails?lat=${parseFloat(latitude.toFixed(3))}&lon=${parseFloat(longitude.toFixed(3))}&maxDistance=${maxDistance}&key=${API_KEY}`

    fetch(requestUrl)
        .then(response => response.json())
        .then(saveDataCallback)
}

