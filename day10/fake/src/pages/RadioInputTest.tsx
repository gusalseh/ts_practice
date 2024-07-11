import type { ChangeEvent } from "react";
import { useMemo, useCallback, useState } from "react";
import { Title, Subtitle } from "../components";
import * as D from "../data";

export default function RadioInputTest() {
  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4">
        <Subtitle>What is your job?</Subtitle>
        <Subtitle className="mt-4">Selected Job: {}</Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{}</div>
        </div>
      </div>
    </section>
  );
}
