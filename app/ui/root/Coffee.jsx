import React from 'react';
import Macchiato from '@/public/picture/Macchiato.png';
import Americano from "@/public/picture/Cafe.png";
import Cappuccino from "@/public/picture/cappuccino.png";
import Image from 'next/image';
import Espresso from "@/public/picture/espresso.png"
import Cortado from "@/public/picture/cortado.png"
import Latte from "@/public/picture/Coffee-3.png"
const Coffee = () => {
    // data
    const coffees = [
        {
            image: Americano,
            name: "Americano Coffee",
            price: "$25"
        },{
            image: Cappuccino,
            name: "Cappuccino Coffee",
            price: "$25"
        },{
            image: Macchiato,
            name: "Macchiato Coffee",
            price: "$25"
        },{
            image: Espresso,
            name: "Espresso Coffee",
            price: "$25"
        },{
            image: Cortado,
            name: "Cortado Coffee",
            price: "$25"
        },{
            image: Latte,
            name: "Latte Coffee",
            price: "$25"
        },
    ];

    return (
        <div className='flex justify-center items-center min-h-[90vh]'>
            <div className='grid grid-cols-3 gap-16 w-[75%] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-3'>
                {coffees.map((coffee, index) => (
                    <div key={index} className='border shadow-xl rounded-lg bg-[#967259] text-white p-2 flex items-center gap-3 max-lg:p-0 w-auto max-md:pr-2'>
                        <div className="flex justify-center">
                            <Image src={coffee.image} className='rounded-full max-sm:h-20' height={100} alt='coffee'/>
                        </div>
                        <div className=" flex gap-5 items-center">
                            <h1 className='text-xl font-bold max-md:text-sm'>{coffee.name}</h1>
                            <span className='text-lg max-md:text-md max-sm:text-sm'>{coffee.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coffee;
