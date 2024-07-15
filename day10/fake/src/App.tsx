// import * as D from "./data";

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="go to google" />
//         <ClassComponent href="http://www.x.com" text="go to x(twitter)" />
//       </ul>
//     );
//   }
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";
// import ArrowComponent from "./ArrowComponent";
// import P from "./P";

// export default function App() {
//   return <div>Hello function-keyword component!</div>;
// }

// const App = () => {
//   return (
//     <ul>
//       <ClassComponent href="http://www.google.com" text="go to google" />
//       <ArrowComponent href="http://www.X.com" text="go to X(twitter)" />
//     </ul>
//   );
// };

// const App = () => {
//   // refactoring map 함수 사용
//   // [...].map((item, index)=> <tag>)
//   // const texts = [<p key="1">hello</p>, <p key="2">world</p>];
//   // const texts = ["hello", "world"].map((item, index) => (<p key={index} >{item}</p>));
//   // const texts = ["hello", "world"].map((item, index) => (
//   //   <p key={index} children={item} />
//   // ));
//   const texts = ["hello", "world"].map((item, index) => (
//     <P key={index} children={item} />
//   ));
//   return <div children={texts} />;
// };

// export default App;

// event 처리 부분
// import EventLisner from "./pages/EventListner";
// import OnClick from "./pages/OnClick";
// import ReactOnClick from "./pages/ReactOnClick";
// import DispatchEvent from "./pages/DispatchEvent";
// import EventBubbling from "./pages/EventBubbling";
// import StopPropagation from "./pages/StopPropagation";
// import VariousInputs from "./pages/VariousInputs";
// import OnChange from "./pages/OnChange";
// import FileInput from "./pages/FileInput";
// import DragDrop from "./pages/DragDrop";
// import FileDrop from "./pages/FileDrop";

// export default function App() {
//   return (
//     <div>
//       <FileDrop />
//       <DragDrop />
//       <FileInput />
//       <OnChange />
//       <VariousInputs />
//       <StopPropagation />
//       <EventBubbling />
//       <DispatchEvent />
//       <ReactOnClick />
//       <OnClick />
//       <EventLisner />
//     </div>
//   );
// }

// import Bootstrap from "./pages/Bootstrap";
// import Icon from "./pages/Icon";
// import Style from "./pages/Styles";

// // import UsingIcon from './pages/UsingIcon';
// // import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass';

// export default function App() {
//   return (
//     <div>
//       {/* <UsingIconWithCSSClass />
//       <UsingIcon />

//        */}
//       <Style />
//       <Icon />
//       <Bootstrap />
//     </div>
//   );
// }

// import Tailwindcss from "./pages/Tailwindcss";
// import Color from "./pages/Color";
// import TextsTest from "./pages/TextsTest";

// export default function App() {
//   return (
//     <div>
//       <TextsTest />
//       <Color />
//       <Tailwindcss />
//     </div>
//   );
// }

// import DivTest from "./pages/DivTest";
// import ViewportTest from "./pages/ViewportTest";
// import HeightTest from "./pages/HeightTest";
// import PaddingTest from "./pages/PaddingTest";
// import MarginTest from "./pages/MarginTest";
// import ImageTest from "./pages/ImageTest";
// import BackgroundImageTest from "./pages/BackgroundImageTest";
// import DisplayTest from "./pages/DisplayTest";
// import DisplayNoneTest from "./pages/DisplayNoneTest";
// import AvatarTest from "./pages/AvatarTest";
// import PositionTest from "./pages/PositionTest";
// import OverlayTest from "./pages/OverlayTest";

// export default function App() {
//   return (
//     <main>
//       <OverlayTest />
//       <PositionTest />
//       <AvatarTest />
//       <DisplayNoneTest />
//       <DisplayTest />
//       <BackgroundImageTest />
//       <ImageTest />
//       <MarginTest />
//       <PaddingTest />
//       <HeightTest />
//       <ViewportTest />
//       <DivTest />
//     </main>
//   );
// }

// import DirectionTest from "./pages/DirectionTest";
// import WrapTest from "./pages/WrapTest";
// import MinMaxTest from "./pages/MinMaxTest";
// import JustifyCenterTest from "./pages/JustifyCenterTest";
// import AlignTest from "./pages/AlignTest";
// import UserContainer from "./pages/UserContainer";
// import CardContainer from "./pages/CardContainer";

// export default function App() {
//   return (
//     <main>
//       <CardContainer />
//       <UserContainer />
//       <AlignTest />
//       <JustifyCenterTest />
//       <MinMaxTest />
//       <WrapTest />
//       {/* <DirectionTest /> */}
//     </main>
//   );
// }

// import { useEffect, useRef, useState } from "react";
// import Clock from "./pages/Clock";

// export default function App() {
//   const [today, setToday] = useState(new Date());
//   useEffect(() => {
//     const duration = 1000;
//     const id = setInterval(() => {
//       // 시간을 세팅하는 코드를 구현하여 브라우저에서 현재 시각을 업데이트하시오.
//       setToday(new Date())
//     }, duration);
//     return () => clearInterval(id);
//   }, []);
//   return <Clock today={today} />;
// }

// import Clock from "./pages/Clock";
// import { useClock } from "./hooks";

// export default function App() {
//   const today = useClock();
//   return <Clock today={today} />;
// }

// import UseOrCreateTest from "./pages/UseOrCreateTest";
// import Memo from "./pages/Memo";
// import Callback from "./pages/Callback";
// import HighOrderCallback from "./pages/HighOrderCallback";

// export default function App() {
//   return (
//     <div>
//       <HighOrderCallback />
//       <Callback />
//       <UseOrCreateTest />
//       <Memo />
//     </div>
//   );
// }

import NumberState from "./pages/NumberState";
import InputTest from "./pages/InputTest";
import ShowHideModal from "./pages/ShowHideModal";
import RadioInputTest from "./pages/RadioInputTest";
import HigherOrderRadioInputTest from "./pages/HigherOrderRadioInputTest";
import BasicForm from "./pages/BasicForm";
import ObjectState from "./pages/ObjectState";
import ArrayState from "./pages/ArrayState";

export default function App() {
  return (
    <div>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </div>
  );
}

// import ClassLifecycle from "./pages/ClassLifecycle";
// import WindowResizeTet from "./pages/WindowResizeTest";
// import FetchTest from "./pages/FetchTest";

// export default function App() {
//   return (
//     <main>
//       <FetchTest />
//       <WindowResizeTet />
//       <ClassLifecycle />
//     </main>
//   );
// }

// import ClickTest from "./pages/ClickTest";
// import FileDrop from "./pages/FileDrop";
// import InputFocusTest from "./pages/InputFocusTest";
// import InputValueTest from "./pages/InputValueTest";
// import ForwardRefTest from "./pages/ForwardRefTest";
// import ValidatableInputTest from "./pages/ValidatableInputTest";

// export default function App() {
//   return (
//     <main>
//       <ValidatableInputTest />
//       <ForwardRefTest />
//       <InputValueTest />
//       <InputFocusTest />
//       <FileDrop />
//       <ClickTest />
//     </main>
//   );
// }

// import ResponsiveContextTest from "./pages/ResponsiveContextTest";
// import { ResponsiveProvider } from "./contexts";

// export default function App() {
//   return (
//     <ResponsiveProvider>
//       <main>
//         <ResponsiveContextTest />
//       </main>
//     </ResponsiveProvider>
//   );
// }
