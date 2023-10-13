import React from 'react'

function NavBar(){

    return (
        <div className="navbar bg-neutral text-neutral-content fixed z-10">
          <div className="flex-1">
            <a href='/' className="btn btn-ghost normal-case text-xl">PokeView</a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://avatars.githubusercontent.com/u/111511400?v=4" alt='nothing'/>
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href='https://github.com/Mioshido30' className="justify-between">
                    Profile
                    <span className="badge">Recommended</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default NavBar;