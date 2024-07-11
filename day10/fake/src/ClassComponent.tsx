import { Component } from "react";

export type ClassComponentProps = {
  href: string;
  text: string;
};

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const { href, text } = this.props;
    return (
      <li>
        <a href="http://www.google.com">
          <p>go to google</p>
        </a>
      </li>
    );
  }
}
