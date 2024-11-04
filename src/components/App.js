import React, { useEffect, useState } from "react"

// create your App component here
function App() {
    const API_URL = "https://dog.ceo/api/breeds/image/random"
    const [dog, setDog] = useState()
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        fetch(API_URL)
        .then((r) => r.json())
        .then((data) => {
            setDog(data)
            setLoad(false)
        })
    }, [])
    return (
        <>
        {load ? <p>Loading...</p> : null}
        {dog ? <img src={dog.message} alt="A Random Dog"></img> : null}
        </>
    )
}

export default App