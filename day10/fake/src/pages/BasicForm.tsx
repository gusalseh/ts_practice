import type { FormEvent, ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Title } from "../components";
import { Input } from "../theme/daisyui";

export default function BasicForm() {
  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>BasicForm</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={()=>{}}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <Input value={0} onChange={()=>{}} id="name" type="text" 
              placeholder="enter your name" className="input-primary" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">email</span>
            </label>
            <Input value={0} onChange={()=>{}} id="email" type="email" 
              placeholder="enter your email" className="input-primary" />
          </div>
          <div className="flex justify-center mt-4">
            <input type="submit" value="SUBMIT" className="w-1/2 btn btn-sm btn-primary" />
            <input type="button" defaultValue="CANCEL" className="w-1/2 ml-4 btn btn-sm" />
          </div>
        </form>
      </div>
    </section>
  )
}
