
import { User } from './user';

export interface QuestionEntity extends Question {
    explanation?: string;
    bullshit?: boolean;
}

export interface Question {
    id: string;
    question: string;
    creator: User;
}

export interface QuestionResponse {
    id: string;
    answer: boolean;
}
