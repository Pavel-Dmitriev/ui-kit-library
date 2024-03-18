import classNames from "classnames";
import "./button.css";
import { ButtonProps } from "./interface";

/** Компонент Кнопка */
function Button(props: ButtonProps) {
  const {
    type = "primary",
    textColor,
    size = "medium",
    onClick,
    label,
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${type}`
      )}
      style={textColor ? { color: textColor } : {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
