import { useCallback, useState, useMemo } from "react";
import { Title, Div } from "../components";
import { Icon } from "../theme/daisyui";
import * as D from "../data";

export default function ArrayState() {
  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4">
        {/* <div data-tip="add image" className="tooltip"> */}
        <div data-tip="add image" className="">
          <Icon
            name="add"
            onClick={() => {}}
            className="mr-12 btn-primary"
            iconClassName="text-3xl"
          />
        </div>
        {/* <div data-tip="add image" className="tooltip"> */}
        <div data-tip="clear all" className="">
          <Icon name="clear_all" onClick={() => {}} iconClassName="text-3xl" />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{}</div>
    </section>
  );
}
