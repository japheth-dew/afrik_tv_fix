import React from 'react';
import './style.css';

const SignUp = () => {
  return (

  
  <section class="bg-white">
	<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
	  <section
		class="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
	  >
	
  
		<div class="hidden lg:relative lg:block lg:p-12 contain-in">
		  <a class="block text-white" href="/">
			<span class="sr-only">Home</span>
			<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677231750/face-with-spiral-eyes_1f635-200d-1f4ab_lqjdgp.png" width="10%" />
		  </a>
  
		  <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
Create your AfrikTV account
		  </h2>
  
		  <p class="mt-4 leading-relaxed text-white/90">
		You can now create your AfrikTV account, shhhhh... your secret is safe 😅
		  </p>
		</div>
	  </section>
  
	  <main
		aria-label="Main"
		class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6 contain-all">
		<div class="max-w-xl lg:max-w-3xl">
		  <div class="relative -mt-16">
			<a
			  class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
			  href="/"
			>
			  <span class="sr-only">Home</span>
			<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1677231936/rocket_1f680_l8dux0.png"/>
			</a>
  
			<h1
			  class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
			>
				Let's create a new AfrikTV account
			</h1>
  
			<p class="mt-4 leading-relaxed text-gray-500">
			Now, fill in the required credentials to get started with AfrikTV
			</p>
		  </div>
  <br />
		  <form action="#">
		  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_fname" id="fname" class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_fname" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
      </div>
		
  
	  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_lname" id="lname" class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_lname" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
      </div>
		


	  <div class="relative z-0 w-full mb-6 group">
      <input type="email" name="floating_email" id="email" class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
      </div>
		
  
	  <div class="relative z-0 w-full mb-6 group">
      <input type="password" name="floating_pwd" id="password" class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_pwd" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>
		
  
	  <div class="relative z-0 w-full mb-6 group">
      <input type="password" name="floating_repwd" id="repeatpassword" class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repwd" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
      </div>

			<div class="col-span-6">
			  <label for="MarketingAccept" class="flex gap-4">
				<input
				  type="checkbox"
				  id="MarketingAccept"
				  name="marketing_accept"
				  class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
				/>
  
				<span class="text-sm text-gray-700">
				By creating an account, you agree to our <a href="#" class="text-gray-700 underline">terms and conditions
				</a> and <a href="#" class="text-gray-700 underline">privacy policy</a>.
				</span>
			  </label>
<br />
			  <p class="text-sm text-gray-700">
				Already have an account? <a href="#" class="text-gray-700 underline">Log in</a>.
			  </p>
			</div>
  <br />
			

			<div class="col-span-6 sm:flex sm:items-center sm:gap-4">
			  <button
				class="login-btn inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring"
			  >
				Create an account
			  </button>
  
			
			</div>
		  </form>
		</div>
	  </main>
	</div>
  </section>
  


    )
}

export default SignUp