export interface Root {
	service_permissions: ServicePermissions;
}

export interface ServicePermissions {
	Договора: GeneratedType;
	Заявки: GeneratedType2;
}

export interface GeneratedType {
	updateDateTime: string;
	permissions: Permission[];
}

export interface Permission {
	name: string;
	description: string;
	actions: Action[];
}

export interface Action {
	name: string;
	description: string;
}

export interface GeneratedType2 {
	updateDateTime: string;
	permissions: Permission2[];
}

export interface Permission2 {
	name: string;
	description: string;
	actions: Action2[];
}

export interface Action2 {
	name: string;
	description: string;
}
