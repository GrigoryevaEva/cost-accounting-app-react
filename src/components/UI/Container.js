function Container(props) {
  const classes = `${props.className} container`;

  return (
    <div className={classes} onSubmit={props.onSubmit}>
      {props.children}
    </div>
  );
}

export default Container;
