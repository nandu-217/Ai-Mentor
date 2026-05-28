# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetCourseById*](#getcoursebyid)
  - [*ListAllCourses*](#listallcourses)
- [**Mutations**](#mutations)
  - [*EnrollUserInCourse*](#enrolluserincourse)
  - [*SubmitAssignment*](#submitassignment)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetCourseById
You can execute the `GetCourseById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCourseById(vars: GetCourseByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetCourseByIdData, GetCourseByIdVariables>;

interface GetCourseByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCourseByIdVariables): QueryRef<GetCourseByIdData, GetCourseByIdVariables>;
}
export const getCourseByIdRef: GetCourseByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCourseById(dc: DataConnect, vars: GetCourseByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetCourseByIdData, GetCourseByIdVariables>;

interface GetCourseByIdRef {
  ...
  (dc: DataConnect, vars: GetCourseByIdVariables): QueryRef<GetCourseByIdData, GetCourseByIdVariables>;
}
export const getCourseByIdRef: GetCourseByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCourseByIdRef:
```typescript
const name = getCourseByIdRef.operationName;
console.log(name);
```

### Variables
The `GetCourseById` query requires an argument of type `GetCourseByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCourseByIdVariables {
  courseId: UUIDString;
}
```
### Return Type
Recall that executing the `GetCourseById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCourseByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetCourseById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCourseById, GetCourseByIdVariables } from '@dataconnect/generated';

// The `GetCourseById` query requires an argument of type `GetCourseByIdVariables`:
const getCourseByIdVars: GetCourseByIdVariables = {
  courseId: ..., 
};

// Call the `getCourseById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCourseById(getCourseByIdVars);
// Variables can be defined inline as well.
const { data } = await getCourseById({ courseId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCourseById(dataConnect, getCourseByIdVars);

console.log(data.course);

// Or, you can use the `Promise` API.
getCourseById(getCourseByIdVars).then((response) => {
  const data = response.data;
  console.log(data.course);
});
```

### Using `GetCourseById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCourseByIdRef, GetCourseByIdVariables } from '@dataconnect/generated';

// The `GetCourseById` query requires an argument of type `GetCourseByIdVariables`:
const getCourseByIdVars: GetCourseByIdVariables = {
  courseId: ..., 
};

// Call the `getCourseByIdRef()` function to get a reference to the query.
const ref = getCourseByIdRef(getCourseByIdVars);
// Variables can be defined inline as well.
const ref = getCourseByIdRef({ courseId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCourseByIdRef(dataConnect, getCourseByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.course);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.course);
});
```

## ListAllCourses
You can execute the `ListAllCourses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllCourses(options?: ExecuteQueryOptions): QueryPromise<ListAllCoursesData, undefined>;

interface ListAllCoursesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllCoursesData, undefined>;
}
export const listAllCoursesRef: ListAllCoursesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllCourses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllCoursesData, undefined>;

interface ListAllCoursesRef {
  ...
  (dc: DataConnect): QueryRef<ListAllCoursesData, undefined>;
}
export const listAllCoursesRef: ListAllCoursesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllCoursesRef:
```typescript
const name = listAllCoursesRef.operationName;
console.log(name);
```

### Variables
The `ListAllCourses` query has no variables.
### Return Type
Recall that executing the `ListAllCourses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllCoursesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAllCoursesData {
  courses: ({
    id: UUIDString;
    title: string;
    description: string;
    difficulty: string;
    imageUrl?: string | null;
  } & Course_Key)[];
}
```
### Using `ListAllCourses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllCourses } from '@dataconnect/generated';


// Call the `listAllCourses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllCourses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllCourses(dataConnect);

console.log(data.courses);

// Or, you can use the `Promise` API.
listAllCourses().then((response) => {
  const data = response.data;
  console.log(data.courses);
});
```

### Using `ListAllCourses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllCoursesRef } from '@dataconnect/generated';


// Call the `listAllCoursesRef()` function to get a reference to the query.
const ref = listAllCoursesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllCoursesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.courses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.courses);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## EnrollUserInCourse
You can execute the `EnrollUserInCourse` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
enrollUserInCourse(vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface EnrollUserInCourseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
enrollUserInCourse(dc: DataConnect, vars: EnrollUserInCourseVariables): MutationPromise<EnrollUserInCourseData, EnrollUserInCourseVariables>;

interface EnrollUserInCourseRef {
  ...
  (dc: DataConnect, vars: EnrollUserInCourseVariables): MutationRef<EnrollUserInCourseData, EnrollUserInCourseVariables>;
}
export const enrollUserInCourseRef: EnrollUserInCourseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the enrollUserInCourseRef:
```typescript
const name = enrollUserInCourseRef.operationName;
console.log(name);
```

### Variables
The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface EnrollUserInCourseVariables {
  courseId: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `EnrollUserInCourse` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `EnrollUserInCourseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface EnrollUserInCourseData {
  enrollment_insert: Enrollment_Key;
}
```
### Using `EnrollUserInCourse`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, enrollUserInCourse, EnrollUserInCourseVariables } from '@dataconnect/generated';

// The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`:
const enrollUserInCourseVars: EnrollUserInCourseVariables = {
  courseId: ..., 
  status: ..., 
};

// Call the `enrollUserInCourse()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await enrollUserInCourse(enrollUserInCourseVars);
// Variables can be defined inline as well.
const { data } = await enrollUserInCourse({ courseId: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await enrollUserInCourse(dataConnect, enrollUserInCourseVars);

console.log(data.enrollment_insert);

// Or, you can use the `Promise` API.
enrollUserInCourse(enrollUserInCourseVars).then((response) => {
  const data = response.data;
  console.log(data.enrollment_insert);
});
```

### Using `EnrollUserInCourse`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, enrollUserInCourseRef, EnrollUserInCourseVariables } from '@dataconnect/generated';

// The `EnrollUserInCourse` mutation requires an argument of type `EnrollUserInCourseVariables`:
const enrollUserInCourseVars: EnrollUserInCourseVariables = {
  courseId: ..., 
  status: ..., 
};

// Call the `enrollUserInCourseRef()` function to get a reference to the mutation.
const ref = enrollUserInCourseRef(enrollUserInCourseVars);
// Variables can be defined inline as well.
const ref = enrollUserInCourseRef({ courseId: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = enrollUserInCourseRef(dataConnect, enrollUserInCourseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.enrollment_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.enrollment_insert);
});
```

## SubmitAssignment
You can execute the `SubmitAssignment` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
submitAssignment(vars: SubmitAssignmentVariables): MutationPromise<SubmitAssignmentData, SubmitAssignmentVariables>;

interface SubmitAssignmentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SubmitAssignmentVariables): MutationRef<SubmitAssignmentData, SubmitAssignmentVariables>;
}
export const submitAssignmentRef: SubmitAssignmentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
submitAssignment(dc: DataConnect, vars: SubmitAssignmentVariables): MutationPromise<SubmitAssignmentData, SubmitAssignmentVariables>;

interface SubmitAssignmentRef {
  ...
  (dc: DataConnect, vars: SubmitAssignmentVariables): MutationRef<SubmitAssignmentData, SubmitAssignmentVariables>;
}
export const submitAssignmentRef: SubmitAssignmentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the submitAssignmentRef:
```typescript
const name = submitAssignmentRef.operationName;
console.log(name);
```

### Variables
The `SubmitAssignment` mutation requires an argument of type `SubmitAssignmentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SubmitAssignmentVariables {
  lessonId: UUIDString;
  codeContent: string;
  status: string;
}
```
### Return Type
Recall that executing the `SubmitAssignment` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SubmitAssignmentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SubmitAssignmentData {
  submission_insert: Submission_Key;
}
```
### Using `SubmitAssignment`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, submitAssignment, SubmitAssignmentVariables } from '@dataconnect/generated';

// The `SubmitAssignment` mutation requires an argument of type `SubmitAssignmentVariables`:
const submitAssignmentVars: SubmitAssignmentVariables = {
  lessonId: ..., 
  codeContent: ..., 
  status: ..., 
};

// Call the `submitAssignment()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await submitAssignment(submitAssignmentVars);
// Variables can be defined inline as well.
const { data } = await submitAssignment({ lessonId: ..., codeContent: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await submitAssignment(dataConnect, submitAssignmentVars);

console.log(data.submission_insert);

// Or, you can use the `Promise` API.
submitAssignment(submitAssignmentVars).then((response) => {
  const data = response.data;
  console.log(data.submission_insert);
});
```

### Using `SubmitAssignment`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, submitAssignmentRef, SubmitAssignmentVariables } from '@dataconnect/generated';

// The `SubmitAssignment` mutation requires an argument of type `SubmitAssignmentVariables`:
const submitAssignmentVars: SubmitAssignmentVariables = {
  lessonId: ..., 
  codeContent: ..., 
  status: ..., 
};

// Call the `submitAssignmentRef()` function to get a reference to the mutation.
const ref = submitAssignmentRef(submitAssignmentVars);
// Variables can be defined inline as well.
const ref = submitAssignmentRef({ lessonId: ..., codeContent: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = submitAssignmentRef(dataConnect, submitAssignmentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.submission_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.submission_insert);
});
```

