import { OrganizationSwitcher, SignedIn, SignOutButton } from '@clerk/nextjs'
import '@clerk/themes'
import Image from 'next/image'
import Link from 'next/link'

function Topbar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/logo.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-dark-1 max-xs:hidden'>Talks</p>
      </Link>

      <div className='flex items-center gap-1'>
        <OrganizationSwitcher />
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  title='logout'
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
