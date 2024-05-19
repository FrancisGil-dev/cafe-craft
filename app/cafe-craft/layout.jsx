import React from 'react'
import SideNav from '../ui/shop/SideNav'
const layout = ({ children }) => {
  return (
  <div className="flex flex-row">
        <SideNav />
    <main className="flex min-h-screen itemscenter">
      {children}
    </main>
  </div>
  )
}

export default layout