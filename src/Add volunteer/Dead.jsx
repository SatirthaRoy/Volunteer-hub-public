import React from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const Dead = ({date, setDate, disabled}) => {

  

  return (
    <ReactDatePicker disabled={disabled} className='p-4 rounded-xl border border-gray-500 w-full h-14' selected={date} onChange={(date) => setDate(date)} />
  )
}

export default Dead