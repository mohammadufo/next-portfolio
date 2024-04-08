'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col items-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-2/5 w-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/me.png"
            alt=""
            fill
            className="object-cover rounded-full border border-gray-200 lg:pb-32 hidden lg:block"
          />
          <Image
            src="/me2.jpeg"
            alt=""
            fill
            className="object-cover rounded-full border border-gray-200 block lg:hidden"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-3/5 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi 👋🏻 Im Muhammad Zanganeh
          </h1>
          {/* DESC */}
          <p className=" md:block md:text-xl">
            As a skilled <code className="bg-black text-white">Full Stack</code>{' '}
            developer with experience in React JS and Node JS, I am committed to
            delivering high-quality, responsive web applications that meet
            client expectations.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
