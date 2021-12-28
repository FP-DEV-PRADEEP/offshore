import './Button.css'
function Button(props) {
    return (
      <a href={props.href} class={"mainBtn" + " " +props.addclass}>{props.text}</a>
    );
  } 
export default Button;
  