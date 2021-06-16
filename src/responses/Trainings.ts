export interface TrainingsPayload {
	id: string;
	student_id: string;
	instructor_id: string;
	trainings_sequencies: TrainingsSequencies[];
	days: number[];
	created_at: Date;
	updated_at: Date;
}

interface TrainingsSequencies {
	id: string;
	sequency: {
		id: string,
		exercise_id: string,
		exercise: {
			id: string,
			name: string,
			category_id: string,
			category: {
				id: string,
				name: string,
				created_at: string,
				updated_at: string
			},
			video_url: string,
			created_at: string,
			updated_at: string
		}
	}
	sequency_id: string;
	training_id: string;
	created_at: Date;
	updated_at: Date;
}