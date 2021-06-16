export interface LoginPayload  {
	user: {
		id: string,
		name: string,
		email: string,
		cpf: string,
		phone: string,
		role: number,
		avatar_url: string,
		days: [],
		instructor_id: string,
		created_at: string,
		updated_at: string,
		role_name: string
	}
	token: string
}