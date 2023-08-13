import { addStudent, updateStudent } from "../actions"

const Form = ({update , data}) => {
   
  return (
<div className="flex-1">
    <form action={(update)?updateStudent:addStudent}  method='post'>
        <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' defaultValue={data?.name} name='name' placeholder='Enter name here' className="border px-5 py-3 w-full" />
        </div>
        <div className="mb-3">
            <label htmlFor="contact">Contact</label>
            <input type="text" id='contact' defaultValue={data?.contact} name='contact' placeholder='Enter contact here' className="border px-5 py-3 w-full" />
        </div>
        <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' defaultValue={data?.email} name='email' placeholder='Enter email here' className="border px-5 py-3 w-full" />
        </div>
        <div className="mb-3">
            <label htmlFor="city">City</label>
            <input type="text" id='city' defaultValue={data?.city} name='city' placeholder='Enter city here' className="border px-5 py-3 w-full" />
        </div>
        <div className="mb-3">
            {
                update && <input type="hidden" name="id" defaultValue={data._id}/>
            }
            <button type='submit' className='bg-teal-700 hover:bg-teal-800 text-white p-3 w-full rounded'>{update ? "Update":"Create"} Records</button>
        </div>
    </form>
</div>
    )
}

export default Form