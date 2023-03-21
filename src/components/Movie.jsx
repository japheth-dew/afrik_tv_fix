export default function Movie({ title, image }) {
  return (
    <div className="flex flex-col gap-2">
      <img src={image} alt="Movie image" className="w-32 h-36 rounded-md" />
      <div className="text-sm">{title}</div>
    </div>
  )
}