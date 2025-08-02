import { FaYoutube } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";


const Contacts = () => {
  return (
    <section className="py-[100px] bg-[var(--black)] text-[var(--white)] font-grandis" id="contacts">
      <div className="container flex justify-between">
        <h2 className="text-3xl font-semibold uppercase">Контакты</h2>
        <div className="text-[#D0D0D0]">Адрес: <br />
          <span className="text-white text-[18px]">г.Грозный, ул. Ханкальская 81</span>
        </div>
        <div className="text-[#D0D0D0]">Телефон: <br />
          <span className="text-white text-[18px]">+7 (989) 930-66-55</span>
        </div>
        <div className="flex gap-2 text-[var(--orange)]">
          <Link href={"#"}><FaYoutube size={30} /></Link>
          <Link href={"#"}><FaVk size={30} /></Link>
          <Link href={"#"}><FaTelegram size={30} /></Link>
        </div>
      </div>
    </section>
  )
}

export default Contacts