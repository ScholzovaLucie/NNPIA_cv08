class LoggingButton {
    // This syntax ensures `this` is bound within handleClick.  
    handleClick = () => {    console.log('this is:', this);  };  render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }

export default LoggingButton;