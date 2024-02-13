'use client'
import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import Rating from '../rating/page';
const { Meta } = Card;

const SchoolCard = ({ school }) => {


    const { id, name, address, city, image } = school;

    return (

        <Link href={`/${id}`}>
            < Card
                hoverable
                style={{
                    width: 240, height: "maxContent"
                }}
                cover={< Image className='image-school' alt="example" src={image ? image.substring(8) : "/noImage.jpg"} height={200} width={150} />}
            >
                <Rating />
                <Meta title={name} description={`${address}, ${city}`} />
            </Card >
        </Link>
    )
}
export default SchoolCard;