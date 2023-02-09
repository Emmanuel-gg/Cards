export default function CardHeader({ src, alt }) {
    return (
        <figure className="rounded-lg overflow-hidden" style={{marginTop:"20px"}}>
            <img className="w-full" src={src} alt={alt}/>
        </figure>
    )
}