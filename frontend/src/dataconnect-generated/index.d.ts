import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Course_Key {
  id: UUIDString;
  __typename?: 'Course_Key';
}

export interface EnrollUserInCourseData {
  enrollment_insert: Enrollment_Key;
}

export interface EnrollUserInCourseVariables {
  courseId: UUIDString;
  status: string;
}

export interface Enrollment_Key {
  userId: UUIDString;
  courseId: UUIDString;
  __typename?: 'Enrollment_Key';
}

export interface GetCourseByIdData {
  course?: {
    id: UUIDString;
    title: string;
    description: string;
    difficulty: string;
    estimatedCompletionTime?: string | null;
    imageUrl?: string | null;
    createdAt: TimestampString;
  } & Course_Key;
}

export interface GetCourseByIdVariables {
  courseId: UUIDString;
}

export interface Lesson_Key {
  id: UUIDString;
  __typename?: 'Lesson_Key';
}

export interface ListAllCoursesData {
  courses: ({
    id: UUIDString;
    title: string;
    description: string;
    difficulty: string;
    imageUrl?: string | null;
  } & Course_Key)[];
}

export interface Submission_Key {
  id: UUIDString;
  __typename?: 'Submission_Key';
}

export interface SubmitAssignmentData {
  submission_insert: Submission_Key;
}

export interface SubmitAssignmentVariables {
  lessonId: UUIDString;
  codeContent: string;
  status: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface GetCourseByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCourseByIdVariables): QueryRef<GetCourseByIdData, GetCourseByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCourseByIdVariables): QueryRef<GetCourseByIdData, GetCourseByIdVariables>;
  operationName: string;
}
export const getCourseByIdRef: GetCourseByIdRef;

export function getCourseById(vars: GetCourseByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetCourseByIdData, GetCourseByIdVariables>;
export function getCourseById(dc: DataConnect, vars: GetCourseByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetCourseByIdData, GetCourseByIdVariables>;

interface ListAllCoursesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllCoursesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllCoursesData, undefined>;
  operationName: string;
}
export const listAllCoursesRef: ListAllCoursesRef;

export function listAllCourses(options?: ExecuteQueryOptions): QueryPromise<ListAllCoursesData, undefined>;
export function listAllCourses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllCoursesData, undefined>;

interface EnrollUserInCourseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
  operationName: string;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;

export function enrollUserInCourse(vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;
export function enrollUserInCourse(dc: DataConnect, vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface SubmitAssignmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: SubmitAssignmentVariables): MutationRef<SubmitAssignmentData, SubmitAssignmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: SubmitAssignmentVariables): MutationRef<SubmitAssignmentData, SubmitAssignmentVariables>;
  operationName: string;
}
export const submitAssignmentRef: SubmitAssignmentRef;

export function submitAssignment(vars: SubmitAssignmentVariables): MutationPromise<SubmitAssignmentData, SubmitAssignmentVariables>;
export function submitAssignment(dc: DataConnect, vars: SubmitAssignmentVariables): MutationPromise<SubmitAssignmentData, SubmitAssignmentVariables>;

