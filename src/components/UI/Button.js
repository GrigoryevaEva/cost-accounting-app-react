function Button (props) {
  const classes = `${props.className} button`;

  return <button className={classes} onClick={props.onClick} type={props.type}>{props.children}</button>;
}

export default Button;