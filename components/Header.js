import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Header = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="max-w-7xl flex justify-center mx-auto py-4">
                    <div className="flex-shrink-0 flex grow md:grow-0 items-center justify-center">
                        <Link href="/" className="block w-[168px] md:w-[252px] h-8 md:h-12 relative">
                            <Image
                                src="/assets/event-logo.svg"
                                alt="Flotiq"
                                width={252}
                                height={48}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Link>
                    </div>
                    <div className="-ml-2 mr-2 flex items-center md:hidden">
                        <Disclosure.Button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                        hover:text-gray-500 hover:bg-gray-100 focus:outline-none
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XIcon
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <MenuIcon
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            )}
                        </Disclosure.Button>
                    </div>
                </div>
                <Disclosure.Panel className="md:hidden">
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4 sm:px-6">
                            <p>Menu content here...</p>
                        </div>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
)

export default Header
