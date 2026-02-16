import { FaArrowLeft } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import TotalPriceCard from '../Components/TotalPriceCard';
import PaymentCard from '../Components/PaymentCard';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const CheckOut = () => {


  return (
    <>
      <ScrollToTop />
      <div className='max-w-6xl mx-auto mt-5 h-auto  px-4 border border-zinc-200 rounded-md bg-white shadow-sm mb-10'>
        {/* Header Section */}
        <div className='w-full min-h-15 flex items-center justify-between flex-row'>
          <div className='w-full flex items-center justify-start flex-row gap-2 text-zinc-800'>
            <FaArrowLeft />
            <p className='font-semibold '>Complete Payment</p>
          </div >
          <div className='w-full flex items-center justify-end flex-row text-zinc-500'>
            <MdSecurity />
            <span>100% Secure</span>
          </div>
        </div>

        <main className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Left Section - Payment Options */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm">

                {/* Payment Methods */}
                <PaymentCard />


                {/* Gift Card */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/gift-card-logo-09082023.svg"
                        alt="Gift Card" className="w-6 h-6" />
                      <h3 >Have a <span className="font-semibold">ZeloCart</span> Gift Card?</h3>
                    </div>
                    <button className="text-blue-600 font-medium">Add</button>
                  </div>
                </div>


                {/* ZeloCart EMI (Unavailable) */}
                <div className="p-4 border-t border-zinc-300 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/bnpl-icon-23082023.svg"
                        alt="Flipkart EMI" className="w-6 h-6 text-zinc-400" />
                      <span className="font-medium text-zinc-400">ZeloCart EMI</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <span>Unavailable</span>
                      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/help-icon-grey.svg"
                        alt="Help" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Price Summary */}
            <TotalPriceCard />
          </div>
        </main>
      </div>
    </>
  )
}

export default CheckOut
