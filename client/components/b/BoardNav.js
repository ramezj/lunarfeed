import { Fragment, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CursorArrowRaysIcon,
  XMarkIcon,
  CreditCardIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Feedback Widget', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BoardNav(props) {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
      setIsOpen(false)
    }
    function openModal() {
      setIsOpen(true)
    }
    const signUserIn = async () => {
        signIn('google');
    }
    const signUserOut = async () => {
      signOut();
    }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-transparent">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 outline-none">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto outline-none" src="/Logo.jpg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
        {
              props.session 
              ? <> 
              <img class="inline-block h-8 w-8 rounded-full" src={`${props.session.user.image}`} alt="" /></>
              : <> 
                <button className='px-8 py-2 bg-white text-black hover:bg-gray-200 rounded-xl font-bold flex justify-center items-center gap-2 duration-200' onClick={openModal}>
                log in
                </button>
                <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden rounded-2xl bg-transparent align-middle transition-all">
                  <center>
                  <button className='px-8 py-2 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  Sign in with Google</button>  
                  </center>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
                </>
            }
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
          <a className="text-sm font-bold leading-6 text-white flex gap-3">
            {
              props.session 
              ? <> 
              <img class="inline-block h-8 w-8 rounded-full" src={`${props.session.user.image}`} alt="" /></>
              : <> 
                <button className='px-8 py-2 bg-white text-black hover:bg-gray-200 rounded-xl font-bold flex justify-center items-center gap-2 duration-200' onClick={openModal}>
                log in
                </button>
                <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden rounded-2xl bg-transparent align-middle transition-all">
                  <center>
                  <button className='px-8 py-2 bg-white text-black rounded-xl font-bold flex justify-center items-center gap-2 duration-300' onClick={signUserIn}>
                  Sign in with Google</button>  
                  </center>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
                </>
            }
          </a>
        </div>
      </nav>
    </header>
  )
}
