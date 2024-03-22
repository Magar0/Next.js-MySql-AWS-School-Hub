"use client"

import { useParams } from 'next/navigation';
import React from 'react'

const School = () => {

    const param = useParams()
    const { id } = param;
    console.log(id);


    return (
        <>
            <h1>School details willl be here</h1>
        </>
    )
}

export default School