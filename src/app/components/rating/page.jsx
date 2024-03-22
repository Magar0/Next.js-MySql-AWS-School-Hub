"use client"
import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rating = () => {
    const [value, setValue] = useState(4);
    return (
        <Flex gap="middle" vertical>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span>{desc[value - 1]}</span> : null}
        </Flex>
    );
};
export default Rating;