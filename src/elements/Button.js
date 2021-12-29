import './Button.css'
function Button(props) {
    return (
      <a href={props.href} className={"mainBtn" + " " +props.addclass}>{props.text}</a>
    );
  } 
export default Button;
  