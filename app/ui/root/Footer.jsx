import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-[#967259] text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Francis.dev  All rights reserved.</p>
      <p>
        <Link href="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link> | 
        <Link href="/terms-of-service" className="text-white hover:underline"> Terms of Service</Link>
      </p>
    </footer>
  )
}

export default Footer