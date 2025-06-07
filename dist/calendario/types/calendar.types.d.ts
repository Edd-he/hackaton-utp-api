export interface Root {
    data: Data;
}
export interface Data {
    scheduleByDate: ScheduleByDate;
}
export interface ScheduleByDate {
    dates: Date[];
}
export interface Date {
    date: string;
    items: Item[];
}
export interface Item {
    name: string;
    typeSchedule: TypeSchedule;
    modality: Modality;
    hasCrossing: boolean;
    isRescheduled: boolean;
    period: string;
    date: number;
    startTime: number;
    endTime: number;
    class: Class;
}
export interface TypeSchedule {
    id: number;
    name: string;
}
export interface Modality {
    id: string;
    name: string;
    location: string;
}
export interface Class {
    id: string;
    start: number;
    end: number;
    type: string;
    classType: string;
    descAmb: string;
    professors: Professors;
    location: Location;
    instructionMode: string;
    isReprog: boolean;
    name: string;
    desc: string;
    linkZoom?: string;
    hours: number;
    isClass: boolean;
    isHybrid: boolean;
    linkCourseClass: string;
}
export interface Professors {
    firstName: string;
    lastName: string;
}
export interface Location {
    classRoom: ClassRoom;
    building: Building;
}
export interface ClassRoom {
    desc: string;
    id: string;
    floor: string;
}
export interface Building {
    id: string;
    image: any;
    desc: any;
    address: any;
    coordinates: any;
}
