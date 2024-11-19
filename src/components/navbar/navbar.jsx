const Navbar = () => {
  const commonClass =
    "text-white font-mullish py-2 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group hover:border-b-4 hover:border-lightBlue -mt-[28px] h-[60px] mx-5";

  return (
    <div>
      <nav className="bg-deepBlue p-4 text-white h-[80px]">
        <div className="realtive w-[1080px] mx-auto flex items-center justify-between">
          <a href="/" className="cursor-pointer">
            <img
              src="/images/razorpay.png"
              className=" w-[150px] -mt-[48px] "
            ></img>
          </a>
          <ul className="flex">
            <li className={commonClass}>Payment</li>
            <li className={commonClass}>Banking</li>
            <li className={commonClass}>Payroll</li>
            <li className={commonClass}>Partners</li>
            <li className={commonClass}>Resources</li>
            <li className={commonClass}>Support</li>
            <li className={commonClass}>Pricing</li>
          </ul>
          <div className="flex">
            <img src="https://th.bing.com/th/id/OIP.YHufaYYtdq8EtHQRPAx_9QHaE8?rs=1&pid=ImgDetMain" className="w-7 h-5 -mt-[33px]  mr-2"></img>
            <button className="w-[80px] h-[45px] -mt-[45px] mr-2 border-2 border-grayBlue hover:bg-white hover:text-deepBlue">Log in</button>
            <button className="w-[80px] h-[45px] -mt-[45px] mr-5 border-2 text-deepBlue bg-white hover:bg-deepBlue hover:text-white">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
