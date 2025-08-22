
import Image from "next/image";
import "./loading.css";


const Loading = () => {
  return (
    <div className="loading-wrapper">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={80}
        height={80}
        className="loading-logo"
        priority
      />
    </div>
  );
};

export default Loading;
