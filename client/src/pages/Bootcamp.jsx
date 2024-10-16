import React, { useEffect } from "react";
import { useState } from "react";

const Bootcamp = () => {
    const id = 1695109843452;
    const [bootcamp, setBootcamp] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBootcamp = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/bootcamps/${id}`);
                if (!response.ok) {
                    throw new Error("Network response not ok")
                }
                const data = await response.json();
                setBootcamp(data);
                
            } catch (error) {
                setError(error.message);
            }
        };
        fetchBootcamp();
    }, [])

    if (error) {
        return (
            <div>
                Data fetching failed: {error}
            </div>
        );
    }

    return (
        <div>
            Here is the bootcamp name: {bootcamp.name}
        </div>
    );
}

export default Bootcamp;