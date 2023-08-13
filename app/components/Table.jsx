import React from 'react'
import Students from '../database/models/Students'
import Connect from '../database/Connect'
import { deleteStudent } from '../actions';
import Link from 'next/link';

const Table = async() => {
    await Connect();

    let callingStudent=await Students.find()
  return (
    <table className="w-full border">
        <thead>
            <tr>
                <th className='border p-3'>id</th>
                <th className='border p-3'>name</th>
                <th className='border p-3'>contact</th>
                <th className='border p-3'>email</th>
                <th className='border p-3'>city</th>
                <th className='border p-3'>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                callingStudent.map((value,key)=>(
                    <tr>
                <td className="border p2">{key+1}</td>
                <td className="border p2">{value.name}</td>
                <td className="border p2">{value.contact}</td>
                <td className="border p2">{value.email}</td>
                <td className="border p2">{value.city}</td>
                <td className="border p2">
                    <div className='flex gap-4 justify-center'>
                    <form action={deleteStudent} className='gap-8'>
                        <input type="hidden" name="id" value={value._id} id="" />
                        <input type="submit" value="Delete" className='bg-red-600 text-whi hover:bg-red-800 p-2 rounded' />
                    </form>
                    
                    <Link href={`/edit/${value._id}`} className='bg-cyan-600 text-whi hover:bg-cyan-800 p-2 rounded'>Edit</Link>
                    
                    </div>
                    

                </td>
                
                
            </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Table