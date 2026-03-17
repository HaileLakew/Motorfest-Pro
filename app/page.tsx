'use client'


import Image from "next/image";
import Accordion from './components/Accordion'
import { useEffect, useState } from "react"

export default function Home() {
const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/data/cars.json', { cache: 'no-store' }) 
            .then(res => res.json())
            .then(data => {
                setCars(data)
                setLoading(false)
            })
            .catch(err => console.error("Failed to load car data", err))
    }, [])

  return (
    <div className="flex justify-center align-center overflow-hidden">
      <img className="absolute top-1/3 object-none opacity-[.05]" src='/motorfest-logo.png' />

      <div className="flex flex-col">
        <Accordion 
            label="MY SETUPS" 
            icon="/globe.svg" 
            cars={cars} 
        />

        <Accordion 
            label="COMMUNITY BUILDS" 
            icon="/globe.svg" 
            cars={cars} 
        />
      </div>


    </div>
  );
}
