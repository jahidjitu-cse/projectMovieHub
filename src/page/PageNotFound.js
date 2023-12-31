import React, { useEffect } from 'react'
import pageNotFound from "../assets/images/pageNotFound.png";
import { Link } from 'react-router-dom';
import { Button } from '../components';

export const PageNotFound = () => {
  useEffect(()=>{
    document.title=`Page Not Found/MovieHub`
  })
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className=' flex flex-col items-center my-4'>
        <p className='text-4xl text-grey-700 font-bold my-10 dark:text-white'>404 Page Not Found,Please Type Something Valid</p>
        <div className='max-w-lg'>
        <img className='rounded' src={pageNotFound} alt="page not found" />
        </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to={'/'}>
          <Button>
            Return Home
          </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
