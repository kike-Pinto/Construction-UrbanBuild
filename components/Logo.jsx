import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href=''>
      <Image src='assets/img/logo.svg' width={230} height={48} alt='' />
    </Link>
  )
}

export default Logo
