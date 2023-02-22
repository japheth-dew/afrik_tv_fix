import React from "react";
import './style.css';

function Homepage() {
  return (
    <div>

      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="javascript:void(0)" className="flex items-center logo">
            <img
              src="/src/assets/afriklogo.png"
              className=""
              height="40px"
              width=""
              alt="AfrikTV Logo"
            />
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Get started
            </button>
          </div>
        </div>
      </nav> 

      {/* <div className="">
        <div className="">
          <h2 className="big-text">
            AfrikTV is a movie streaming platform for African Movies
            <div className="wrapper">
              <div>
                <a className="btn" href="#">
                  <img
                    src="src/assets/google-play-badge.png"
                    className="google-play"
                    width="200px"
                  />
                </a>
              </div>

              <div>
                <a className="btn right-btn" href="#">
                  <img
                    src="src/assets/appstore-badge.png"
                    className="google-play"
                    width="200px"
                  />
                </a>
              </div>
            </div>
          </h2>
        </div>

        <div className="">
          <img src="src/assets/first-img.png" />
        </div>
      </div> */}

    

<div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    

    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
     <section className="hey_sec">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg ">
    
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">AfrikTV is a movie streaming platform for African Movies</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
     
          <a className="btn right-btn" href="#">
<img src="src/assets/google-play-badge.png" className="google-play" width="200px"/>
      </a>

      <a className="btn right-btn" href="#">

<img src="src/assets/appstore-badge.png" className="google-play" width="200px"/>
      </a>
      
        </div>
      </div>
      </section>

      <p className="contain">
      <img src="src/assets/first-img.png" alt="Product screenshot" className="img-real down"/>
      <img src="src/assets/second-img.png" alt="Product screenshot" className="img-real" />
   </p>

    </div>
    
  </div>
</div>

<div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Get Unlimited access to African
movies</h1>
          </div>
          
          <div className="min-h-screen ">
  
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 p-5">
        <img className="p-10 rounded-lg" src="src/assets/woman-touch.png"/>
        <img className="p-10 rounded-lg" src="src/assets/woman-touch.png"/>
        <img className="p-10 rounded-lg" src="src/assets/woman-touch.png"/>
        </div>

        <div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
    
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Discover the best entertainment movies</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Whether you want to stream live TV or catch up on your
missed shows, binge watch your favourite series with
AfrikTV. Catch up with the fun in African movies and feel the
passion of blacks in the industries</p>
    <br/>
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start Watching</button>
      
        </div>
        </div>

        <p className="contain-right">
        <img src="src/assets/after-hero.png" alt="Product screenshot"/>
</p>

  </div>
  </div>
    </div>
    </div>

   

    <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
    <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-5xl">
Frequently Asked questions
        </h1>
<br />


        <br/>

        <div className="mx-auto max-w-lg">
  <div className="space-y-6">
    <details className="group rounded-xl shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
What is AfrikTV?
        <div className="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div className="px-6 pb-6 text-secondary-500">We're looking for a description here.</div>
    </details>
    <details className="group rounded-xl shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
       What can I watch on AfrikTV
        <div className="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div className="px-6 pb-6 text-secondary-500">We're looking for a description here.</div>
    </details>
    <details className="group rounded-xl shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
        How much does AfrikTV cost?
        <div className="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div className="px-6 pb-6 text-secondary-500">We're looking a description here.</div>
    </details>
  </div>
</div>


<div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
    
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe for updates 🚀
            </button>
        </div>
    

        <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

        <div className="flex flex-col items-center justify-between md:flex-row">
            <a href="#">
                <img className="w-auto h-7" src="src/assets/afriklogo.png" alt="" />
            </a>

            <div className="flex mt-4 md:m-0">
                <div className="-mx-4">
                <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Twitter</a>
                <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Instagram</a>
                <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Partners</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact Us 📧</a>
                    <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">We're hiring ✨</a>
                </div>
            </div>
        </div>
    </div>
</footer>

</div>


    
  );
}

export default Homepage;
