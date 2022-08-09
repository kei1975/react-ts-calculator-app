import React from 'react'

export default function Display(props: {
  value: string
}) {
  return (
    <div className="display">
     {props.value}
    </div>
  )
}
