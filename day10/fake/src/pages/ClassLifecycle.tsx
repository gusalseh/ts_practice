import { Component } from "react";
import { Title } from "../components";

export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer,
  };

  // componentDidMount 적용하기

  // componentWillUnmount 적용하기

  render() {
    const { today } = this.state;
    return (
      <section className="mt-4">
        <Title>ClassLIfecycle</Title>
        <div className="mt-4 flex flex-col items-center">
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
        </div>
      </section>
    );
  }
}
