import { assets, blog_data } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({ image, category, title, description, id }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
        {image && (
          <Image src={image} alt="image" width={400} height={400} className="border-b border-black" />
        )}
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className="p-5">
        <h1 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h1>
        <p className="mb-3 text-sm tracking-tight text-gray-700" dangerouslySetInnerHTML={{__html:description.slice(0,120)}}></p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">
          Read more <Image src={assets.arrow} className='ml-2' alt='arrow' width={12} />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
