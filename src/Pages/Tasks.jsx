import React from 'react'

export default function Tasks() {
  return (
    <div>
         <div className="flex justify-end m-12">
            <button className="btn bg-green-500 cursor-pointer">Add New Task</button>
          </div>

          <div className="mt-12">
          <p className="text-center font-semibold text-xl">
            Manage Your Tasks Here
          </p>
            <div className="grid my-5 w-[90%] justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>To Do</div>

              <div>In Progress</div>

              <div>Done</div>
            </div>
          </div>
    </div>
  )
}
