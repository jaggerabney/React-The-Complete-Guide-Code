import React, { Component } from "react";

import "./App.css";

import Transition from "react-transition-group/Transition";

import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal() {
    this.setState({ modalIsOpen: true });
  }

  hideModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => {
            this.setState((prevState) => {
              return {
                showBlock: !prevState.showBlock,
              };
            });
          }}
        >
          Toggle Sqaure
        </button>
        <br />
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 300ms ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            />
          )}
        </Transition>
        <Modal
          show={this.state.modalIsOpen}
          closed={this.hideModal.bind(this)}
        />
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
