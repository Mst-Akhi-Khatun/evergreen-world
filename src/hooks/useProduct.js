import { useEffect, useState } from "react"

const useProduct = () => {
    const [plants, setPlants] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/plants')
            .then(res => res.json())
            .then(data => setPlants(data))
    }, [])

    return [plants, setPlants];
}

export default useProduct;