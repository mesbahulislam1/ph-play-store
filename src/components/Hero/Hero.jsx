import PlayStoreImg from '../../assets/img/playstore.png'
import AppleStoreImg from '../../assets/img/app-store.png'
const Hero = () => {
  return (
    
      <div className=" max-w-[1440px]  mx-auto pt-[50px]">
        <h1 className="text-[60px] font-bold text-[#001931]">
          We Build <br />
          <span className="bg-linear-to-l to-[#632EE3] from-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] font-[20px]">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

        <div className='flex gap-2 justify-center items-center mt-7'>
          <button className="font-semibold btn"><img src={PlayStoreImg} alt=""  className='w-[20px]'/>Google Play</button>
          <button className="font-semibold btn"><img src={AppleStoreImg} alt=""  className='w-[20px]'/>App Store</button>
        </div>
      </div>
  );
};

export default Hero;
