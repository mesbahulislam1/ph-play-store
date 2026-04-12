import { Link } from 'react-router'
import ErrorImag from '../assets/img/error-404.png'
const ErrorPage = () => {
  return (
    <div className='flex justify-center min-h-screen items-center'>
        <div className='max-w-[1440px]  mx-auto text-center'>
            <img src={ErrorImag} alt="" className='mx-auto' />
            <h1 className='text-[40px] font-bold'>Oops, page not found!</h1>
            <p className='text-[#627382]'>The page you are looking for is not available.</p>

            <Link to={'/'} className='bg-linear-to-l to-[#632EE3] from-[#9F62F2] btn text-white mt-4'>Go Back!</Link>
        </div>
    </div>
  )
}

export default ErrorPage