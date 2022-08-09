import React from 'react'

export default function Display(props: {
  value: string
}) {
  return (
    <div>
     {props.value}
    </div>
  )
}
