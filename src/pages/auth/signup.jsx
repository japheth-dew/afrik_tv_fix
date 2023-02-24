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
  
		  <form action="#" class="mt-8 grid grid-cols-6 gap-6">
			<div class="col-span-6 sm:col-span-3">
			  <label
				for="FirstName"
				class="block text-sm font-medium text-gray-700"
			  >
				First Name
			  </label>
  
			  <input
				type="text"
				id="FirstName"
				name="first_name"
				class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
			  />
			</div>
  
			<div class="col-span-6">
			  <label
				for="LastName"
				class="block text-sm font-medium text-gray-700"
			  >
				Last Name
			  </label>
		

			  <input
				type="text"
				id="LastName"
				name="last_name"
				class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
			  />
			  </div>
  
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
  
			<div class="col-span-6">
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
			  <label
				for="PasswordConfirmation"
				class="block text-sm font-medium text-gray-700"
			  >
				Password Confirmation
			  </label>
  
			  <input
				type="password"
				id="PasswordConfirmation"
				name="password_confirmation"
				class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
			  />
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