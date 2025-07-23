'use client'
import { assets } from '@/assets/assets'
import { Description } from '@mui/icons-material'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    title:"",
    description:"",
    category:"Startup",
    author:"Alex Bennet",
    authorImg:"/author_img.png"
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}));
    console.log(data);
    
  }
  return (
    <div>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor='image'>
          <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt=''/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className=' text-xl mt-4'>Blog title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border' placeholder='Type here' required />

        <p className=' text-xl mt-4'>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border' placeholder='Write content here' rows={6} required />

        <p className='text-xl mt-4'>Blog category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
      </form>
    </div>
  )
}

export default page
