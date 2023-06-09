import AllEvents from "@/components/events/events-page";

const EventsPage = ({ data }) => {
    return <AllEvents data={data} />
}

export default EventsPage;


export async function getServerSideProps() {
    const { events_categories } = await import('../../data/data.json')
    return {
        props: {
            data: events_categories,
        }
    }
}