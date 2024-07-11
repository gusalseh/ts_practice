import { useState, useCallback } from "react";
import { Title } from "../components";
import { Icon } from "../theme/daisyui";

export default function NumberState() {
  //prettier-ignore
  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-1/4 mt-4">
          <Icon name="add" className="btn-primary btn-lg" iconClassName="text-4xl" onClick={()=>{}} />
          <p className="text-3xl text-bold text-primary">{0}</p>
          <Icon name="remove" className="btn-accent btn-lg" iconClassName="text-4xl" onClick={()=>{}} />
        </div>
      </div>
    </section>
  )
}
