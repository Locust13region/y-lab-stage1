interface RadioButtonProps {
	label: string;
	selected: boolean;
	onSelect: React.MouseEventHandler<HTMLButtonElement>;
}
const RadioButton = ({ label, selected, onSelect }: RadioButtonProps) => (
	<li className="radioButton btn">
		<button
			className={`radioButton btn ${
				selected ? "selectedBtn" : "unselectedBtn"
			}`}
			onClick={onSelect}
		>
			{label}
		</button>
	</li>
);
export default RadioButton;
