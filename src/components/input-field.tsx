interface InputFieldsProps {
	type: string;
	placeholder: string;
	title?: string;
	value: string;
	pattern?: string;
	inputOnChange: React.ChangeEventHandler<HTMLInputElement>;
	classes: string;
}
const InputField = ({
	type,
	title,
	placeholder,
	value,
	pattern,
	inputOnChange,
	classes,
}: InputFieldsProps) => (
	<input
		required
		autoComplete="off"
		className={classes}
		type={type}
		title={title}
		placeholder={placeholder}
		value={value}
		pattern={pattern}
		onChange={inputOnChange}
	/>
);
export default InputField;
