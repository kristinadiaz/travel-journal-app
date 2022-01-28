import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import data from './data';

export default function App() {
  const cards = data.map(card => {
    return(
      <Card 
      key={card.title}
      title={card.title}
      location={card.location}
      maps={card.googleMapsUrl}
      startDate={card.startDate}
      endDate={card.endDate}
      description={card.description}
      image={card.imageUrl}
      />
    )
  })

  return(
    <div>
      <Header />
      {cards}
    </div>
  )
}