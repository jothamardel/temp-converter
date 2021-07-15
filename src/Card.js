

const Card = (props) => (
	<div className="card">
		<input 
			type='number' 
			value={props.value} 
			onChange={props.setValue}
			name={props.inputname}
		/>
		<select value={props.converter} name={props.name} onChange={props.setConverter}>
			<option value="celsius">Celsius</option>
			<option value="fahrenheit">Fahrenheit</option>
			<option value="kelvin">Kelvin</option>
		</select>
	</div>
);


export default Card;