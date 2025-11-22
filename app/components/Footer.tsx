import Image from "next/image";

export default function Footer() {
  return (
    <>
      <Image src="/logo-black.png" width={150} height={150} alt="logo" className=" px-4 my-8" />

      <footer 
        className="relative border-t border-red-500 animate-fade-in-up mb-6 px-2 py-6"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Logo and Contact Section */}

          {/* Registration Form */}
          <div className="ml-4  shadow-2xl p-8 rounded-3xl border-2 mb-6 ">
            <div className="mb-6">
              <h2 className="bg-linear-to-r from-red-600 to-red-800 bg-clip-text text-transparent text-3xl font-bold mb-2">
                Registration
              </h2>
              <p className="text-gray-700 text-sm font-medium">Join us for TEDx</p>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">
                Full Name
              </label>
              <input 
                type="text"
                className="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-300 hover:border-red-300 shadow-sm" 
                placeholder="John Doe" 
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2">
                Email Address
              </label>
              <input 
                type="email"
                className="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-300 hover:border-red-300 shadow-sm" 
                placeholder="john@example.com" 
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-800 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input 
                type="tel"
                className="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all duration-300 hover:border-red-300 shadow-sm" 
                placeholder="+971 50 123 4567" 
              />
            </div>
            
            <button 
              className="w-full bg-linear-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white text-base font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg transform active:scale-95"
            >
              Register Now
            </button>
          </div>

          <div className="flex flex-col gap-4 items-end">
            <div className="p-8 mx-auto bg-linear-to-br from-gray-50 to-white rounded-3xl shadow-xl border-2 border-gray-200">
              <h1 className="bg-linear-to-r from-gray-800 to-black bg-clip-text text-transparent text-3xl font-bold">
                CONTACT US
              </h1>
              <a href="mailto:tedxcisdubai@gmail.com" className="text-red-600 hover:text-red-700 font-semibold text-lg mt-3 inline-block transition-colors duration-300 hover:underline">
                tedxcisdubai@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-gray-700 px-4 mb-2 font-semibold text-center w-full border-t-2 border-gray-300 pt-6 mt-8">
          This is an independent TEDx event operated under license from TED.
        </div>
      </footer>
    </>
  );
}
