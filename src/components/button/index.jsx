import "./button.scss";

export function Button(props) {
  const { description = "" } = props;

  return (
    <>
      <input
        className="buttonComponent"
        type="submit"
        value={description ? description : "Button"}
        onClick={props.onClick}
      />
    </>
  );
}
