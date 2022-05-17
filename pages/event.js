import Link from 'next/link'
import getAllEvents from '../lib/get-all-events'
import getPageData from '../lib/get-page-data'
import Card from '../components/Card'

const Kurser = ({ events }) => {
  return events.map((event, slug) => {
    return (
      <Link href={`/event/${event.slug}`} key={slug} passHref>
        <div>
          <Card data={event} />
        </div>
      </Link>
    )
  })
}

export default Kurser

export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale })
  const { events } = await getAllEvents({ locale })

  return {
    props: {
      ...pageData,
      events,
    },
  }
}
