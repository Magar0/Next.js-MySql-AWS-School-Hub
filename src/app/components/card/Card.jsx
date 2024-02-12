'use client'
import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;

const SchoolCard = ({ school }) => {


    const { id, name, address, city, image } = school;
    console.log(school);

    return (

        <Link href={`/${id}`}>
            < Card
                hoverable
                style={{
                    width: 240, height: "maxContent"
                }}
                cover={< img alt="example" src={image ? image : "/noImage.jpg"} />}
            >
                <Meta title={name} description={`${address}, ${city}`} />
            </Card >
        </Link>
    )
}
export default SchoolCard;