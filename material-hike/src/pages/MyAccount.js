import React, { useState} from 'react'

const MyAccount = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)

    /* events */
    const updateUsername = event => setUsername(event.target.value)
    const updatePassword = event => setPassword(event.target.value)
}