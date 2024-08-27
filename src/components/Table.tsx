import { Root, ServicePermissions } from '../interface.ts';
import { FC } from 'react';
interface TableProps {
	data: Root;
}
const Table: FC<TableProps> = ({ data }) => {
	const tables = Object.keys(data.service_permissions) as Array<
		keyof ServicePermissions
	>;
	const tablesSet = Array.from(new Set(tables));

	// });
	const countAction = (arg: keyof ServicePermissions) => {
		const permissions = data.service_permissions[arg].permissions;

		const actionsArray = new Set();

		permissions.forEach((permission) => {
			permission.actions.forEach((action) => {
				actionsArray.add(action.description);
			});
		});

		const uniqueActionNamesArray = Array.from(actionsArray);
		return uniqueActionNamesArray;
	};
	// console.log(countAction('Заявки'));

	return (
		<>
			{tablesSet.map((permissions, i) => (
				<>
					<table
						style={{ border: '1px solid #9365E1', padding: '10px' }}
						key={i}
					>
						<thead style={{ backgroundColor: '#9365E1', color: '#ffffff' }}>
							<tr>
								<th>{permissions}</th>
								{countAction(permissions).map((item, k) => (
									<th key={k}>{String(item)}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.service_permissions[permissions].permissions.map(
								(item, i) => {
									const ac = {};
									item.actions.forEach((info) => {
										ac[info.description] = info.description;
										ac[info.name] = info.name;
										// console.log(ac);
									});
									return (
										<tr
											key={i}
											style={{
												boxShadow: '0 0 0 1px #0C0835 ',
												margin: '10px',
											}}
										>
											{item.description}

											{countAction(permissions).map((actionn, j) => {
												console.log(ac);
												return (
													<td
														key={j}
														style={{
															padding: '10px',
															boxShadow: '0 0 0 1px #0C0835 ',
															margin: '10px',
														}}
													>
														{item.actions.map((info) => {
															// console.log(ac[info.name]);
															return (
																<>
																	{ac[actionn] === actionn &&
																	info.description === actionn ? (
																		<label>
																			<input type="checkbox" name={info.name} />
																		</label>
																	) : (
																		''
																	)}
																</>
															);
														})}
													</td>
												);
											})}
										</tr>
									);
								}
							)}
						</tbody>
					</table>
				</>
			))}
		</>
	);
};

export default Table;
