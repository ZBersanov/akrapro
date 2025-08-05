import Stars from "../Stars"

const StatCard = ({ title, subtitle, description, count, spanClass = "", colSpan = "" }) => {
  return (
    <div className={`flex flex-col h-full ${colSpan}`}>
      <div className="min-h-[90px]">
        <span className={`font-grandis text-5xl text-[var(--orange)] ${spanClass}`}>{count} </span>
        {title}
      </div>
      <div className="bg-[var(--gray)] flex-1 px-6 py-7 space-y-5">
        <Stars count={subtitle} />
        <h2 className="font-grandis text-xl">{description.title}</h2>
        <p className="text-[#B7B7B7]">{description.text}</p>
      </div>
    </div>
  )
}

export default StatCard
