import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="50"
          height="50"
          alt=""
        />
        Emoji Search!
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="50"
          height="50"
          alt=""
        />
      </header>
    );
  }
}
