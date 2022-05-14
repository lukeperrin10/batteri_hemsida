import React from 'react'
import getAllEvents from '../../lib/get-all-events'
import getPageData from '../../lib/get-page-data'
import getEventBySlug from '../../lib/get-event-slug'

const EventPage = ({ event }) => {
  return (
    <div>
      <h1>{event.name}</h1>
      <div>{event.description}</div>
    </div>
  )
}

export async function getStaticPaths() {
  let paths = []

  const { events } = await getAllEvents()

  paths = [
    ...paths,
    ...events.map((event) => ({
      params: { slug: event.slug },
    })),
  ]

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageData()
  const { event } = await getEventBySlug({
    slug: params.slug,
  })

  return {
    props: {
      event,
      ...pageData,
    },
  }
}

export default EventPage
