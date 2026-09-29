import React from 'react'
import Button from "@/components/Button";

const ContactSection = () => {
  return (
    <div className='flex-col items-center justify-center text-center font-albert bg-mainblue py-24 space-y-12'>
      <div className='text-mainwhite space-y-8'>
        <p className='text-6xl font-bold'>
            Let's Build<br/>Something Amazing
        </p>
        <p className='text-xl'>
            Lorem ipsum dolor eyyoo click here!
        </p>
      </div>
      <Button variant="secondary">Get in Touch</Button>
    </div>
  )
}

export default ContactSection
