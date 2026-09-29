import React from 'react'
import TextLoop from './TextLoop';

export interface DividerProps {
  text: string;
}

const Divider = ({
  text,
}: DividerProps) => {
  return (
    <div className='w-screen -mt-24 -mb-24'>
      <TextLoop
        text={text}
        shape="line"
        speed={40}
        direction="forward"
        separator="•"
        curviness={76}
        fontSize={54}
        fontWeight={650}
        letterSpacing={3}
        uppercase
        color="#ffffff"
        ribbon
        ribbonColor="#2b73fc"
        ribbonWidth={96}
        pauseOnHover={false}
      />      
    </div>
  )
}

export default Divider
