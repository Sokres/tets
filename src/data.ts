export const data = {
	service_permissions: {
		Договора: {
			updateDateTime: '2024-07-10 12:55:07.346651+03',
			permissions: [
				{
					name: 'Authentication',
					description: 'Аутентификация в Админ-панели',
					actions: [
						{
							name: 'Activate',
							description: 'Активировать',
						},
					],
				},
			],
		},
		Заявки: {
			updateDateTime: '2024-07-10 12:55:07.346651+03',
			permissions: [
				{
					name: 'rolesAndRights',
					description: 'Отображение вкладки Роли и Права',
					actions: [
						{
							name: 'show',
							description: 'Отображение',
						},
						{
							name: 'read',
							description: 'Чтение',
						},
					],
				},
				{
					name: 'employeeRightsMatrix',
					description: 'Редактирование Матрицы прав сотрудников',
					actions: [
						{
							description: 'Редактирование',
							name: 'edit',
						},
						{
							name: 'show',
							description: 'Отображение',
						},
						{
							name: 'read',
							description: 'Чтение',
						},
					],
				},
			],
		},
	},
};
