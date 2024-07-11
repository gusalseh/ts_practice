import {Title} from '../components'
import * as D from '../data'
import Card from './Card'

export default function CardContainer() {
  const children = D.makeArray(10)
    .map(D.makeRandomCard)
    .map(card => (
      <Card
        key={card.uuid}
        card={card}
        className=""
        width="30rem"
      />
    ))

  return (
    <section className="mt-4">
      <Title>CardContainer</Title>
      <div className="flex flex-wrap justify-center p-4 mt-4">{children}</div>
    </section>
  )
}
