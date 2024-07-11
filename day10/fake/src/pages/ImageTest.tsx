import { Subtitle, Title, Div } from "../components";
import * as D from "../data";

const src = D.randomImage(3000, 1600);

export default function ImageTest() {
  return (
    <section className="mt-4">
      <Title>ImageTest</Title>
      <img src={src} className="bg-gray-300" width={400} height={400}></img>
      <Div className="mt-4 bg-gray-300 h-80" src={src}>
        <Subtitle className="text-gray-500">Some Text here</Subtitle>
      </Div>
    </section>
  );
}
