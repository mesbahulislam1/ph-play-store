
import { useContext } from 'react'
import DownloadImg from '../assets/img/icon-downloads.png'
import StarIcon from '../assets/img/icon-ratings.png'
import ReviewIcon from '../assets/img/icon-review.png'
import { useLoaderData, useParams } from 'react-router'
import { TotalAppProvider } from '../Context/SingleContext'
import { toast } from 'react-toastify'

const AppsDetails = () => {
    const {install, setInstall} = useContext(TotalAppProvider)
    console.log(install)
    const {id} = useParams()
    const appData = useLoaderData()
    
    const SimilarData = appData.find((data)=> data.id == id)

    const InstallHandel=()=>{
      
            const findApp = install.find((app)=> app.id == id)
      if (findApp) {
        toast.error('App is already installed')
      }else{
        setInstall([...install, SimilarData])
        toast.success('Installed successfully');
      }
    }
  return (
    <div className='bg-[#F5F5F5]'>
      <div className='max-w-[1440px]  mx-auto px-5 space-y-8 pt-12'>
      <div className='flex gap-8 flex-col sm:flex-row'>
      <div className='flex-1 bg-white p-5'>
        <img src={SimilarData.image} alt="" className='w-[80%] mx-auto'/>
      </div>
      <div className='flex-2'>
        <div className='border-b border-black/20 py-5'>
          <h1 className='text-3xl font-bold'>SmPlan:ToDo List with Reminder</h1>
        <h2 className='text-[20px] text-[#627382]'>Developed by <span className='bg-linear-to-l to-[#632EE3] from-[#9F62F2] font-semibold bg-clip-text text-transparent '>productive.io</span></h2>
        </div>
        <div>
          <div className='flex gap-19 mt-9'>
          <div className=''>
          <img src={DownloadImg} alt="" className='' />
          <h3 className='mt-4'>Average Ratings</h3>
          <h1 className='text-[40px] font-extrabold'>4.9</h1>
        </div>
        <div className=''>
          <div className='bg-white'>
            <img src={StarIcon} alt="" className='' />
          </div>
          <h3 className='mt-4'>Downloads</h3>
          <h1 className='text-[40px] font-extrabold'>8M</h1>
        </div>
        <div className=''>
          <img src={ReviewIcon} alt="" className='' />
          <h3 className='mt-4'>Total Reviews</h3>
          <h1 className='text-[40px] font-extrabold'>54K</h1>
        </div>
        </div>
        <button onClick={InstallHandel} className='btn btn-accent text-white font-medium'>Install Now (291 MB)</button>
        </div>
      </div>
    </div>
      <div>
        <h2 className='text-2xl font-bold'>Description</h2>
        <p>{SimilarData.description}</p>
      </div>
    </div>
    </div>
  )
}

export default AppsDetails