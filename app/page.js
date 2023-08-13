import Image from 'next/image'
import Table from './components/Table'

export default function Home() {
  return (
    <div className="px-5">
    <div className=" mt-10">
        <div className="flex-1">
            <h1 className="text-2xl font-bold captalize mb-3">View All records</h1>
        </div>
        <div className="border shadow-xl p-5"><Table/></div>

    </div>

</div>
  )
}
