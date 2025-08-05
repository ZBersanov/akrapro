import Image from "next/image"
import Link from "next/link"

const Logo = ({ onClick }) => (
  <Link href="/" onClick={onClick}>
    <Image src="/logo.svg" width={80} height={80} alt="logo" priority />
  </Link>
)

export default Logo
