'use client'

import { useState } from "react"
import { motion } from "motion/react"

const SubAccordion = ({ car }) => {
    const [isInnerOpen, setIsInnerOpen] = useState(false)

    return (
        <motion.div 
            className="flex flex-col bg-neutral-800 rounded-lg w-[95%] overflow-hidden mb-2 last:mb-0 border border-white/5"
            animate={{ height: isInnerOpen ? 'auto' : '52px' }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={(e) => {
                e.stopPropagation()
                setIsInnerOpen(!isInnerOpen)
            }}
        >
            <div className="flex h-[52px] items-center px-4 justify-between shrink-0">
                <div className="flex items-center gap-3">
                    {car.icon && (
                        <img className="h-5 w-5 object-contain" src={car.icon} alt={car.brand} />
                    )}
                    <div className="flex flex-col">
                        <span className="text-sm font-bold leading-tight">{car.name}</span>
                        <span className="text-[10px] uppercase tracking-widest opacity-50">
                            {car.brand} • {car.country}
                        </span>
                    </div>
                </div>
                <motion.span 
                    animate={{ rotate: isInnerOpen ? 180 : 0 }}
                    className="text-[10px] opacity-40"
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.span>
            </div>

            <div className="px-4 pb-4">
                <div className="w-full border-t border-neutral-700 pt-3 flex flex-col gap-2">
                    {car.stats?.map((stat, i) => (
                        <div key={i} className="flex justify-between items-center">
                            <span className="text-xs text-neutral-400">{stat.label}</span>
                            <span className="text-xs font-mono text-white bg-neutral-900 px-2 py-0.5 rounded">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function Accordion({ 
    label = "Vehicle Setup", 
    icon = "/globe.svg", 
    cars = [] 
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div 
            className="w-[95vw] flex flex-col my-1 bg-neutral-700 text-white overflow-hidden rounded-xl cursor-pointer border border-white/10 shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ height: '56px' }}
            animate={{ height: isOpen ? 'auto' : '56px' }} 
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
            <div className="flex w-full justify-between items-center h-[56px] px-4 shrink-0">
                <div className="flex items-center gap-3">
                    <img className="h-6 w-6" src={icon} alt="main-icon"/>
                    <span className="font-bold tracking-wide text-lg">{label}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.div>
            </div>

            <div className="w-full flex flex-col items-center py-4 bg-neutral-700/50">
                {cars && cars.length > 0 ? (
                    cars.map((car, index) => (
                        <SubAccordion key={index} car={car} />
                    ))
                ) : (
                    <div className="py-4 text-center">
                        <p className="text-sm text-neutral-400">No vehicles found</p>
                    </div>
                )}
            </div>
        </motion.div>
    )
}