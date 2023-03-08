import React from 'react';
import './style.css';

const forgotpassword = () => {
  return (

  
  <section class="bg-white">
	<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
	  <section
		class="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
	  >
	
  
		<div class="hidden lg:relative lg:block lg:p-12 contain-in">
		  <a class="block text-white" href="/">
			<span class="sr-only">Home</span>
			<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677597898/confused-face_1f615_ze6k7l.png" width="10%" />
		  </a>
  
		  <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
Forgotten Password - AfrikTV
		  </h2>
  
		  <p class="mt-4 leading-relaxed text-white/90">
Urgh, just input your email address in the input field - we're here to help you out!
		  </p>
		</div>
	  </section>
  
	  <main
		aria-label="Main"
		class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
	  >
		<div class="max-w-xl lg:max-w-3xl">
		  <div class="relative -mt-16">
			<a
			  class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
			  href="/"
			>
			  <span class="sr-only">Home</span>
			<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677599882/cloud-with-lightning-and-rain_26c8-fe0f_rnk5sp.png"/>
			</a>
  
			<h1
			  class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
			>
	Forgot your AfrikTV password?
			</h1>
  
			<p class="mt-4 leading-relaxed text-gray-500">
Don't worry - we're here to help. Fill in the form with your registered email address.
			</p>
		  </div>
  
		  <form action="#" class="mt-8 grid grid-cols-6 gap-6">
			
  
			<div class="col-span-6">
			  <label for="Email" class="block text-sm font-medium text-gray-700">
				Email
			  </label>
  
			  <input
				type="email"
				id="Email"
				name="email"
				class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
			  />
			</div>
  
	
  
	
  

  
			<div class="col-span-6 sm:flex sm:items-center sm:gap-4">
			  <button
				class="inline-block shrink-0 login-btn rounded-md border  px-12 py-3 text-sm font-medium text-white transition focus:outline-none "
			  >
				Forgotten Password
			  </button>
  
			
			</div>
		  </form>
		</div>
	  </main>
	</div>
  </section>
  


    )
}

export default forgotpassword