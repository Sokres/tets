import { FC } from 'react';
import { Action, Action2 } from '../interface';
interface ActionsProps {
	data: Action[] | Action2[];
}
const Actions: FC<ActionsProps> = ({ data }) => {
	return (
		<tr>
			{data.map((item, i) => (
				<td
					style={{
						border: '1px solid #9365E1',
						padding: '1px',
						textAlign: 'center',
					}}
					key={i}
				>
					<label>
						<span>{item.description}</span> <input type="checkbox" />
					</label>
				</td>
			))}
		</tr>
	);
};

export default Actions;
