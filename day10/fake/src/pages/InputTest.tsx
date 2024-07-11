import type { ChangeEvent } from "react";
import { useState, useCallback } from "react";
import { Title } from "../components";
import { Input } from "../theme/daisyui";

export default function InputTest() {
  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <Input
          type="text"
          value={0}
          onChange={() => {}}
          className="input-primary input-sm"
        />
        <input
          type="checkbox"
          checked={true}
          onChange={() => {}}
          className="ml-4 checkbox checkbox-primary input-sm"
        />
      </div>
    </section>
  );
}
