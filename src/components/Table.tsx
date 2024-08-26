import Actions from './Actions';
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
	return (
		<>
			{tablesSet.map((permissions, i) => (
				<>
					<h2>{permissions}</h2>
					<table
						style={{ border: '1px solid #9365E1', padding: '10px' }}
						key={i}
					>
						{data.service_permissions[permissions].permissions.map(
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
									<tbody>
										{item.actions && <Actions data={item.actions} />}
									</tbody>
								</>
							)
						)}
					</table>
				</>
			))}
		</>
	);
};

export default Table;
