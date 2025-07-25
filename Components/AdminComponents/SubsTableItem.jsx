import React from 'react'

const SubsTableItem = ({email,mongoId,deleteEmail,date}) => {
  const emailDate = new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email?email:'No Email'}
      </th>
      <th className='px-6 py-4 sm:block'>
        {emailDate.toDateString()}
      </th>
      <th className='px-6 py-4 cursor-pointer' onClick={()=>deleteEmail(mongoId)}>
        x
      </th>
    </tr>
  )
}

export default SubsTableItem
