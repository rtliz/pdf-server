export interface Answer {
    AnswerText: string;
    AnswerText_EN: string;
}

export interface Question {
    Answers: Answer[] | null;
    QuestionTitle: string;
    QuestionTitle_EN: string;
    CRMInterface: string;
    PaperLengthChoiceConfigNo?: number;
}

export interface Part {
    PartNo: string;
    Questions: Question[];
}

export type Questionnaire = Part[];