import { SiPolestar } from "react-icons/si"

const Stars = ({ count = 1, size = 25 }) => (
  <div className="flex gap-2">
    {Array.from({ length: count }).map((_, i) => (
      <SiPolestar key={i} size={size} className="text-[var(--orange)]" />
    ))}
  </div>
)

export default Stars
