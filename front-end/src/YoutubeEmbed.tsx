import './styles.css'
interface YoutubeEmbedProps {
  embedId: string;
}
export const YoutubeEmbed = ({ embedId }: YoutubeEmbedProps) => {
  return (
    <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  )
}