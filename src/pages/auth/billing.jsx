import React from 'react';
import './style.css';

const billing = () => {
  return (

  
  <section class="bg-white">
	<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
	  <section
		class="relative flex h-32  bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
	  >
	
  
		<div class="hidden lg:relative lg:block lg:p-12 contain-in">
		  <a class="block text-white" href="/">
			<span class="sr-only">Home</span>
			<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1678180300/credit-card_1f4b3_f5rsbk.png" width="10%" />
		  </a>
  
		  <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
Billing - AfrikTV
		  </h2>
  
		  <p class="mt-4 leading-relaxed text-white/90">
		End to end encryption process for payment. Inout your credit card details to start your subscription with AfrikTV.
		  </p>
          <img class="h-20 start-img max-w-lg rounded-lg" src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1678191574/Untitled_design__3_-removebg-preview_be3dol.png" alt="image description" />
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
			<img src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1678178688/money-mouth-face_1f911_szaj0g.png"/>
			</a>
  
			<h1
			  class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
			>
                Set Up your Credit or Debit Card - AfrikTV
			</h1>
  
			<p class="mt-4 leading-relaxed text-gray-500">
            <img class="h-20 start-img max-w-lg rounded-lg" src="https://res.cloudinary.com/dwdb9tvii/image/upload/v1678191574/Untitled_design__3_-removebg-preview_be3dol.png" alt="image description" />			</p>
		  </div>
  
		  <form action="#" class="">
		
          <div class="relative z-0 w-full mb-6 group">
      <input type="card_number" name="floating_cardnum" id="card-number" class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_cardnum" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Card Number</label>
      </div>

      <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_expirydate" maxlength="4" pattern="[0-9]*" id="expirydate" class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_expirydate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expiration Date (MM)/(YY)</label>
      </div>
  
      <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_expirydate" maxlength="3" pattern="[0-9]" id="expirydate" class="block py-2.5 px-0 w-full text-sm text-black  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_expirydate" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CVV Code (3 digits behind your card)</label>
      </div>

      
<div id="toast-interactive" class="w-full  p-4 text-white-500 bg-white rounded-lg dark:bg-white-800 dark:text-black-400" role="alert">
    <div class="flex">
      
        <div class="ml-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-black-900 dark:text-black">$5.99/mo</span>
            <div class="mb-2 text-sm font-normal">Basic Plan</div> 
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <a href="#" class="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white login-btn rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none">Change</a>
                </div>
              
            </div>    
        </div>
    
    </div>

    
</div>
  <label for="MarketingAccept" class="flex gap-4">
				<input
				  type="checkbox"
				  id="MarketingAccept"
				  name="marketing_accept"
				  class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
				/>
  
				<span class="text-sm text-gray-700">
                By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 13. AfrikTV will automatically continue your membership and charge the membership fee (currently $5.99/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
				</span>
			  </label>

<br />
			  <button
				class="login-btn inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring"
			  >
				Pay Now
			  </button>
  
			
	

		  </form>
		</div>
	  </main>
	</div>
  </section>
  


    )
}

export default billing