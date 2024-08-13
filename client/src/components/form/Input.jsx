/**
 * @typedef {Object} CustomInputProps
 * @property {string} name - 인풋 필드의 이름
 * @property {React.ReactNode} children - 레이블에 포함될 자식 노드
 * @property {React.LabelHTMLAttributes<HTMLLabelElement>} labelProps - 레이블의 나머지 속성
 * @property {React.InputHTMLAttributes<HTMLInputElement} props - 인풋 필드의 나머지 속성
 */
/** @type {(customProps: CustomInputProps) => JSX.Element} */
export default function Input({ name, children, labelProps, ...props }) {
  const inputId = `input-${name || Math.random().toString(36).slice(6)}`;

  return (
    <>
      <label htmlFor={inputId} {...labelProps}>
        {children}
      </label>
      <input id={inputId} name={name} {...props} />
    </>
  );
}
