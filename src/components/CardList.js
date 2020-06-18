import React from 'react'
import { Card } from './Card'
import './CardList.css'

export const CardList = ({Data}) => {
    const cardArray = Data.map((user,i)=>{
        return <Card key={i} id={Data[i].id} name={Data[i].name} email={Data[i].email} />
    })
    return (
        <div className="CardComponent" >
            {cardArray}
        </div>
    )
}
