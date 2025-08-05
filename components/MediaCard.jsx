const MediaCard = ({ title, videoId }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-[var(--orange)] bg-[#0a0a0a]">
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allowFullScreen
        />
      </div>
      <div className="p-4 text-white font-grandis text-center">{title}</div>
    </div>
  )
}

export default MediaCard
