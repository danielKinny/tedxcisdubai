import Image from "next/image";

const stripes = Array.from({ length: 6 });

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-red-500 bg-white text-gray-700">
      <div className="mx-18 flex w-full flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-black.png"
              width={140}
              height={140}
              alt="TEDxCIS Dubai logo"
              className="h-16 w-auto"
            />
            <div>
              
            </div>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-red-600">
                Ideas Worth Spreading
              </p>
        <div className="space-y-2">
          {stripes.map((_, index) => (
            <div
              key={`stripe-${index}`}
              className="h-1 rounded-full bg-red-600"
              style={{ width: `${45 + index * 8}%` }}
            />
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Sign up to watch!
            </p>
            <h2 className="mt-1 text-3xl font-semibold">
              Sign up to watch TEDxCIS Dubai
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-600">
              Register to attend the event in person — secure your seat and
              receive your ticket, venue details, arrival time, and any access
              instructions so you can join us live.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                  placeholder="john@example.com"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-full hover:scale-104 transition-all cursor-pointer bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-red-700"
              >
                Register
              </button>
            </form>
          </div>

          <div className=" max-w-2/3 mx-auto p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]  text-red-600">
              Volunteers
            </p>
            <h3 className="mt-1 text-2xl font-semibold">
              Want to be part of it?
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              We are always looking for energetic volunteers to help bring
              TEDxCIS Dubai to life.
            </p>
            <a
              href="https://youtube.com/"
              className="mt-4 inline-block w-full text-center hover:scale-104 duration-300 transition-transform font-semibold bg-red-500 text-white p-4 rounded-2xl"
            >
              Volunteer Here
            </a>
          </div>

          <div className="p-8 mx-auto max-w-2/3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Contact us
            </p>
            <h3 className="mt-1 text-2xl font-semibold">Say hello</h3>
            <a
              href="mailto:tedxcisdubai@gmail.com"
              className="mt-4 block font-semibold text-red-600 hover:text-red-700"
            >
              tedxcisdubai@gmail.com
            </a>
            <p className="mt-3 text-sm text-gray-600">
              We are here for partnerships, speakers, and community
              collaboration.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-sm text-gray-700 text-center">
          <p>
            This is an indepedent TEDx event operated under licensed from TED
          </p>
        </div>
      </div>
    </footer>
  );
}
