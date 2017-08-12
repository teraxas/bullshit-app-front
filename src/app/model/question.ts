
export interface QuestionEntity extends Question {
    explanation?: string;
    bullshit?: boolean;
}

export interface Question {
    id: string;
    question: string;
    creator: string;
}

export interface QuestionResponse {
    id: string;
    answer: boolean;
}
