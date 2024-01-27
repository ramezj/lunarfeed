import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import { Fragment, useState } from 'react'
import AuthModal from "../Auth/AuthModal"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Toggle } from "../navbar/Toggle";
import { Profile } from "../navbar/Avatar";
import { TryForFree } from "../navbar/TryForFree";

export default function Header(props) {
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
    return (
        <div className="top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b dark:border-white/10 bg-background/95 backdrop-blur z-20">
          <nav className="h-14 flex items-center justify-between px-4">
            <div className="lg:block">
              <Link
                href='/'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-6 w-6"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
              </Link>
            </div>
            <div className="block lg:!hidden">
              {/* <MobileSidebar /> */}
            </div>
            <div className="flex items-center gap-3">
              <Toggle />
              {
                    props.session 
                    ?
                    <>
                    <Profile session={props.session} />
                    </> 
                    : 
                    <>
                    <TryForFree onClick={openModal}/>
                    </>
                }
            </div>
          </nav>
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
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-[1px]" />
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
                <Dialog.Panel className="w-[22.5rem] max-w-md transform overflow-hidden align-middle transition-all">
                  <AuthModal />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </div>
        
      );
}