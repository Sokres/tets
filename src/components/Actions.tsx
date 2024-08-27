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
{
	/* {data.service_permissions[permissions].permissions.map(
							(item, i) => (
								<>
									<thead>
										<tr>
											<th
												style={{ border: '1px solid #9365E1', padding: '10px' }}
												key={i}
											>
												{item.description}
											</th>
										</tr>
									</thead>
									<tbody></tbody>
								</>
							)
						)} */
}
/* 
Привет. Практическое задание.
С бэка получаешь данные (об этом подробнее позже), на основе которых создаешь таблицу. 
Это пример того, как таблица может выглядеть, стили и вид таблицы делаешь максимально примитивными.
С бэка получаешь доступные пермишены, для каждого создается таблица. В шапке количество колонок
 и их названия могут быть разными, поэтому вычисляем динамически для каждого пермишена.
 Чекбоксы рисуем только для тех прав, которые доступны для этого права. */
