import { FaYoutube } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Contacts = () => {
  return (
    <section
      className="py-[100px] bg-black text-[var(--white)] font-grandis"
      id="contacts"
    >
      <div className="container flex flex-col gap-6 md:flex-row md:justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold uppercase">Контакты</h2>

        <div className="text-[#D0D0D0] text-sm sm:text-base">
          Адрес: <br />
          <span className="text-white text-[16px] sm:text-[18px]">
            г. Грозный, ул. Ханкальская 81
          </span>
        </div>

        <div className="text-[#D0D0D0] text-sm sm:text-base">
          Телефон: <br />
          <span className="text-white text-[16px] sm:text-[18px] whitespace-nowrap">
            +7 (989) 930-66-55
          </span>
        </div>

        <div className="flex gap-3 text-[var(--orange)]">
          <Link href="#"><FaYoutube size={28} /></Link>
          <Link href="#"><FaVk size={28} /></Link>
          <Link href="#"><FaTelegram size={28} /></Link>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
