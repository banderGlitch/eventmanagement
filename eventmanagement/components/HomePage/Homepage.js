import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
    <div className="home_body">
        {console.log('data', data)}
        {data?.map((ev) => (
            <Link href={`/events/${ev.id}`}>
                <div className="image">
                    <Image width={600} height={400} alt={ev.title} src={ev.image} />
                </div>
                <div className="content">
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                </div>
            </Link>
        ))}
    </div>
)