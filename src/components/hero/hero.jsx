const Hero = () => {
  return (
    <div>
        <div className="flex bg-deepBlue justify-center">
            <div className="text-white">
                <p className="font-extrabold text-4xl text-justify mt-[120px]">Power Of Finance ,<br/>Grow your business</p>
                
                <p className="w-[350px] my-5 mt-10 text-start">Accept payments from customers. Automate payouts to vendors & employees Never run out of working capital</p>
                <button className="border-2 w-[100px] h-[50px] bg-lightBlue500 -ml-[250px] mt-5">Sign Up</button>
            </div>
            <img src="https://razorpay.com/build/browser/static/illustration-desktop.ec7028e0.jpg"
            className="h-auto w-2/5 mb-[50px] ml-[80px]"></img>
        </div>
    </div>
  )
}

export default Hero