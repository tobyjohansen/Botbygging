import "./TextBox.css";

export default function TextBox({ title, children }) {
  return (
    <div className="textbox">
      {title && <h3 className="textbox-title">{title}</h3>}
      <div className="textbox-content">{children}</div>
    </div>
  );
}
