interface RadioButtonProps {
	label: string;
	selected: boolean;
	onSelect: React.MouseEventHandler<HTMLButtonElement>;
}
const RadioButton = ({ label, selected, onSelect }: RadioButtonProps) => (
	<li className="radioSocket">
		<button
			className={`btn radioButton  ${selected ? "selectedRadioBtn" : ""}`}
			onClick={onSelect}
		>
			{label}
		</button>
	</li>
);
export default RadioButton;
