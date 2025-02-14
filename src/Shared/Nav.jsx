
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useData from '../../Utils/useData'
import { FaUser } from "react-icons/fa";

const Nav = () => {

  const { dark, setDark, user, setLoading, logOut} = useData();

  const links = <>
          <li><NavLink to='/' className={({isActive}) => isActive ? 'border border-blue-500' : ''}>Home</NavLink></li>
          <li><NavLink to='/need-volunteer' className={({isActive}) => isActive ? 'border border-blue-500' : ''}>Need Volunteer</NavLink></li>
          {user && <li>
              <details>
                <summary className=''>My Profile</summary>
                <ul className="p-2 w-52 dark:bg-[#01060d]">
                  <li><NavLink to='/add-volunteer' className={({isActive}) => isActive ? 'border border-blue-500' : ''}>Add Volunteer Post</NavLink></li>
                  <li><NavLink to='/myposts' className={({isActive}) => isActive ? 'border border-blue-500' : ''}>Manage My Posts</NavLink></li>
                  <li><NavLink to='/requestes' className={({isActive}) => isActive ? 'border border-blue-500' : ''}>My Volunteer Requested Posts</NavLink></li>
                </ul>
              </details>
          </li>}
  </>



  return (
    <div className='w-[95%] mx-auto pt-4'>
      <div className="navbar dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-[#01060d] rounded-box w-52 z-10">
              {links}
            </ul>
          </div>
          <a className="text-xl md:text-4xl font-bold">Volunteer <br /> HUB</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-base z-10">

            {links}
            {/* <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li> */}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <label className="swap swap-rotate">
    
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" onClick={() => setDark(!dark)} />
            
            {/* sun icon */}
            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            
            {/* moon icon */}
            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
          </label>
          {user ? <div className='profile-img size-16 rounded-full cursor-pointer relative'>
              <div className='profile absolute right-0 top-12 scale-0 w-36 p-3 bg-white rounded-2xl dark:bg-black flex flex-col justify-center gap-5 z-10'>
                <h1 className='text-xl text-center dark:text-white flex gap-2 items-center justify-center'><FaUser/> {user.displayName}</h1>
                <button onClick={() => {
                  setLoading(false);
                  logOut()
                  .then(() => {
                    console.log('logged out')})
                  .catch(e => console.log('log out error: ', e))

                }} className='btn hover:bg-red-500 bg-red-400 text-white font-semibold text-lg px-4 py-2 rounded-full'>Log out</button>
              </div>
            <img src={user.photoURL} alt="" className='object-cover size-full rounded-full'/>
          </div> : <Link className="btn bg-blue-500 hover:bg-blue-500 text-white" to='/login'>Login</Link>}
        </div>
      </div>
    </div>
  )
}

export default Nav