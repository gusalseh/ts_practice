import { Title, Div, Icon, Overlay } from "../components";

export default function OverlayTest() {
  return (
    <section className="mt-4">
      <Title>CopyMe</Title>
      <Overlay opacityClass="bg-black/70">
        <Div className="relative flex items-center justify-center p-8 bg-white h-1/2">
          <Div className="absolute" right="1rem" top="1rem">
            <Icon name="close" className="text-gray-500"></Icon>
          </Div>
          <p className="text-5xl">modal dialog box</p>
        </Div>
      </Overlay>
    </section>
  );
}
