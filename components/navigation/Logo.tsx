import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <div className="flex flex-row">
      <Link href="/#logo" className="flex items-center justify-center h-full">
        <div className="relative h-[58px] w-[100px] sm:w-[130px]">
          <Image 
            src="/logo_adv.png" 
            alt="Advance Computer Logo" 
            fill 
            className="object-contain" 
          />
        </div>
      </Link>
    </div>
  )
}

export default Logo
