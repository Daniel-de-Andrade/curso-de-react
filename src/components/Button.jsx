function Button(props) {
  return (
    <button
      className="bg-slate-400 p-2 rounded-md text-white"
      //   onClick={props.onClick}
      {...props} // Passa todas as props recebidas para o elemento button
    >
      {props.children}
    </button>
  );
}

export default Button;
