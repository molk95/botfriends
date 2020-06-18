import React from 'react'
import { Card } from './Card'

export const CardList = ({Data}) => {
    const cardComponents = Data.map((user,i)=>{
        return <Card id={Data[i].id} name={Data[i].name} email={Data[i].email} />
    })
    return (
        <div>
            {cardComponents}
        </div>
    )
}
