export interface Root {
    summary: Summary;
    courses: Course[];
}
export interface Summary {
    campus: string;
    enrolledCourses: string;
    average: string;
    relativeCycle: string;
    creditCount: string;
    meritOrder: string;
    weeklyHours: string;
    meritBelong: string;
}
export interface Course {
    courseId: string;
    title: string;
    catalogNumber: string;
    approvalStatus: string;
    professors: string[];
    teacher: string;
    courseMode: string;
    schedule: Schedule[];
    weeklyHours: string;
    credits: string;
    numberTimes: string;
    section: string;
    evaluations: Evaluation[];
    module: any;
    formula: string;
    average: string;
    relatedCourse: RelatedCourse;
}
export interface Schedule {
    class: number;
    courseId: string;
    day: string;
    endDate: string;
    sectionId: string;
    startDate: string;
}
export interface Evaluation {
    name: string;
    value: string;
    shortName: string;
}
export interface RelatedCourse {
    code: string;
    description: any;
}
