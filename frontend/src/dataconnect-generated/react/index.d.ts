import { GetCourseByIdData, GetCourseByIdVariables, ListAllCoursesData, EnrollUserInCourseData, EnrollUserInCourseVariables, SubmitAssignmentData, SubmitAssignmentVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetCourseById(vars: GetCourseByIdVariables, options?: useDataConnectQueryOptions<GetCourseByIdData>): UseDataConnectQueryResult<GetCourseByIdData, GetCourseByIdVariables>;
export function useGetCourseById(dc: DataConnect, vars: GetCourseByIdVariables, options?: useDataConnectQueryOptions<GetCourseByIdData>): UseDataConnectQueryResult<GetCourseByIdData, GetCourseByIdVariables>;

export function useListAllCourses(options?: useDataConnectQueryOptions<ListAllCoursesData>): UseDataConnectQueryResult<ListAllCoursesData, undefined>;
export function useListAllCourses(dc: DataConnect, options?: useDataConnectQueryOptions<ListAllCoursesData>): UseDataConnectQueryResult<ListAllCoursesData, undefined>;

export function useEnrollUserInCourse(options?: useDataConnectMutationOptions<EnrollUserInCourseData, FirebaseError, EnrollUserInCourseVariables>): UseDataConnectMutationResult<EnrollUserInCourseData, EnrollUserInCourseVariables>;
export function useEnrollUserInCourse(dc: DataConnect, options?: useDataConnectMutationOptions<EnrollUserInCourseData, FirebaseError, EnrollUserInCourseVariables>): UseDataConnectMutationResult<EnrollUserInCourseData, EnrollUserInCourseVariables>;

export function useSubmitAssignment(options?: useDataConnectMutationOptions<SubmitAssignmentData, FirebaseError, SubmitAssignmentVariables>): UseDataConnectMutationResult<SubmitAssignmentData, SubmitAssignmentVariables>;
export function useSubmitAssignment(dc: DataConnect, options?: useDataConnectMutationOptions<SubmitAssignmentData, FirebaseError, SubmitAssignmentVariables>): UseDataConnectMutationResult<SubmitAssignmentData, SubmitAssignmentVariables>;
