import React from 'react'
import Card from './Card'

const Cardlist = () => {

    const data = [
        {id: 1 ,name: 'Man who laugh', desc: 'this book is about man who always laugh', characters: ['wolf','men','little girl']},
        {id: 2,name: 'Vefxistyaosani', desc: 'this book is 3 friend', characters: ['shota', 'avtandil', 'tariel']},
        {id: 3,name: 'who killed dzera', desc: 'this book is about who killed dzera', characters: ['gun','shota','dzera']}
    ]

    function action (title,characters) {
        console.log(`this is ${title}, characters: ${characters}`)
    }

  return (
    <>
        {data.map((el) => <Card key={el.id} name={el.name} desc={el.desc} characters={el.characters} action={action}/>)}
    </>
  )
}

export default Cardlist