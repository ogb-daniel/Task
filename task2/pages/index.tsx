import type { NextPage } from 'next'
import Head from 'next/head'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

import { useState } from 'react'
const Home: NextPage = () => {
  const [date, setDate] = useState(new Date());
  function onChange(date:any) {
    setDate(date);
  }



  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 text-white back">
      <Head>
        <title>Task2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="body-font relative">
  <div className="container px-5 py-24 mx-auto ">

    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2 ">
      <div className="p-2 w-full">
          <div className="relative">
            <label className="leading-7 text-sm ">Your full given name:</label>
            <input type="text" id="name" name="name" className="w-full  bg-opacity-50 back rounded border  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label className="leading-7 text-sm ">Date of Birth</label>
            
          
<DatePicker dateFormat="MMMM d, yyyy" selected={date} onChange={onChange} className="inline-block w-full bg-opacity-50 back rounded border  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                   </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm ">Country of residence or citizenship</label>
            <input type="email" id="email" name="email" className="w-full bg-opacity-50 back rounded border  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label className="leading-7 text-sm ">What school do you plan to attend?</label>
            <input type="text" id="name" name="name" className="w-full bg-opacity-50 back rounded border  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-sm ">Please take a moment to describe your intended area of study:</label>
            <textarea id="message" name="message" placeholder='Enter details here' className="w-full bg-opacity-50 back rounded border  focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home
