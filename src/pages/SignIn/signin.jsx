import React from 'react';
import './style.css';

const SignIn = () => {
  return (

  
  <section class="bg-white">
	<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
	  <section
		class="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
	  >
	
  
		<div class="hidden lg:relative lg:block lg:p-12 contain-in">
		  <a class="block text-white" href="/">
			<span class="sr-only">Home</span>
			<img src="src/assets/closed-mouth.gif" width="10%" />
		  </a>
  
		  <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
Sign In to your AfrikTV account
		  </h2>
  
		  <p class="mt-4 leading-relaxed text-white/90">
		We're excited to see you here again...
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
			<img src="src/assets/star_struck.gif"/>
			</a>
  
			<h1
			  class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
			>
		Connect with African Movies 😅🍿
			</h1>
  
			<p class="mt-4 leading-relaxed text-gray-500">
			Now, sign in to your AfrikTV account to watch the best African Blockbuster movies...
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
  
			<div class="col-span-6 sm:col-span-3">
			  <label
				for="Password"
				class="block text-sm font-medium text-gray-700"
			  >
				Password
			  </label>
  
			  <input
				type="password"
				id="Password"
				name="password"
				class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
			  />
			</div>
  
			<div class="col-span-6">
			<p class="mt-4 text-sm text-gray-500 sm:mt-0">
				<a href="#" class="text-gray-700 underline">Forgotten Password?</a>
			  </p>
			</div>
  

  
			<div class="col-span-6 sm:flex sm:items-center sm:gap-4">
			  <button
				class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
			  >
				Sign In
			  </button>
  
			
			</div>
		  </form>
		</div>
	  </main>
	</div>
  </section>
  


    )
}

export default SignIn