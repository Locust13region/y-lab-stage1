interface SubmitButtonProps {
	label: string;
	formName: string;
}
const SubmitButton = ({ label, formName }: SubmitButtonProps) => {
	return (
		<button
			form={formName}
			type="submit"
			className="selectedBtn btn"
		>
			{label}
		</button>
	);
};
export default SubmitButton;
