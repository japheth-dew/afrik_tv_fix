import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

export default function MyModal({click}) {
  let [isOpen, setIsOpen] = useState(true)

//   function closeModal() {
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={click}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center mb-2"
                  >
                    Operation Fortune
                  </Dialog.Title>
				  <div className='bg-gray-100 w-full h-60 flex items-center justify-center'>Trailer</div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-2">
                      While trying to maintain a stable family, Jason comes across many enemies seeking for revenge
                    </p>
                    <p className="text-sm text-gray-500">
                      CASTS: Jason Statham, Dwayne Johnson, Emma Thompson, Albert Einstein
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={close}
                    >
                      <PlayArrowIcon/> Play
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
// import React from 'react'
// import CloseIcon from '@mui/icons-material/Close'

// function Moviemodal({ click }) {
// 	return (
// 				<div className="fixed top-[25%] left-[15%] sm:left-[25%] w-3/4 sm:w-3/5 p-4 flex flex-col justify-center items-center border border-[gray]  bg-white z-10">
// 					<button onClick={click}>
// 						<CloseIcon
// 							className="absolute top-3 right-3"
// 							style={{ color: '#060825' }}
// 						/>
// 					</button>
// 					<div className='w-full mt-8 h-52 bg-yellow-100 flex justify-center items-center'>MOVIE TRAILER</div>

// 					<h1 className='w-full my-2 text-2xl sm:text-3xl font-medium'>Red Notice</h1>
// 					<p className='text-base sm:text-lg'>After his parents were brutally murdered, David tries to find a way to exert revenge on those responsible for their deaths</p>
// 					<div className='mt-2'>
// 						<button className=' py-2.5 px-24 bg-[#060825] text-white flex justify-center items-center  text-lg font-bold rounded-xl'>Play</button>
// 					</div>
// 				</div>
// 	)
// }

// export default Moviemodal
