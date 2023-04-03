import { Helmet } from "react-helmet";

export default function App() {
  return (
    <div className="App">

<div class="relative overflow-hidden">
  <div class="bg-white lg:overflow-hidden">
    <div class="mx-auto max-w-5xl lg:px-8">
      <div class="lg:grid lg:grid-cols-1">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
          <div class="lg:py-24">
            <h1 class="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"><span class="block">Join  </span><span class="block text-indigo-500">AfrikTV's</span> Waitlist 🥳</h1>
            <p class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Explore the best African movies from all over Africa. Instantly stream movies to your device, wherever you are in the world. Type your email to join the waitlist.</p>
            <div class="mt-10 sm:mt-12">

            
            <div class="launchlist-widget" data-key-id="031wad" data-height="180px"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  <footer class="mx-auto max-w-7xl overflow-hidden">
    <div class="flex justify-center space-x-6">
      <a href="https://twitter.com/afriktvHQ" class="text-blue-400 hover:text-blue-400"
        ><span class="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a
      >
    </div>
  </footer>


      <Helmet>
        <script
          src="https://getlaunchlist.com/js/widget.js"
          type="text/javascript"
          defer
        />
      </Helmet>

      {/* Widget End */}
    </div>
  );
}
