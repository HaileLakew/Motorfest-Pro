import Image from "next/image";
import Accordion from './components/Accordion'
import carData from './carstats.json'

export default function Home() {

  return (
    <div className="flex justify-center align-center overflow-hidden">
      <img className="absolute top-1/3 object-none opacity-[.05]" src='/motorfest-logo.png' />

      <div className="flex flex-col">
        <Accordion 
            label="MY SETUPS" 
            icon="/globe.svg" 
            cars={carData} 
        />

        <Accordion 
            label="COMMUNITY BUILDS" 
            icon="/globe.svg" 
            cars={carData} 
        />
      </div>


    </div>
  );
}
