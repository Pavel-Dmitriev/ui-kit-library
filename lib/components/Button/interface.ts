export interface ButtonProps {
  /**Тип*/
  type?: "primary" | "secondary";
  /** Цвет фона кнопки*/
  textColor?: string;
  /** Размер кнопки*/
  size?: "small" | "medium" | "large";
  /** Контент кнопки*/
  label: string;
  /** Обработчик клика на кнопку*/
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
