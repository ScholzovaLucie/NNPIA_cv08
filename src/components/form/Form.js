import LoggingButton from './LoggingButton';

function Form() {
    function handleSubmit(e) {
      e.preventDefault();    console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
       <LoggingButton />
      </form>
    );
  }
  export default Form;