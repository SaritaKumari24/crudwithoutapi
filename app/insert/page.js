import React from 'react'
import Form from '../components/Form'

const page = () => {
  return (
<div className="flex justify-center">
    <div className="w-1/2 mt-10">
        <div className="flex-1">
            <h1 className="text-2xl font-bold captalize mb-3">Insert Student record</h1>
        </div>
        <div className="border shadow-xl p-5"><Form/></div>

    </div>

</div>
    )
}

export default page