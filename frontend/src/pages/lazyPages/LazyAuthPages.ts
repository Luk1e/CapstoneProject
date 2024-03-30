// Import lazy load
import { lazyLoadComponent } from "../../utils/helpers/LazyLoad";

/* Lazily loaded pages */
// Classroom
const ClassroomPage = lazyLoadComponent(
  () => import("../auth/classroom/ClassroomPage")
);

// Classrooms
const ClassroomsPage = lazyLoadComponent(
  () => import("../auth/classrooms/ClassroomsPage")
);

// Homework
const HomeworkPage = lazyLoadComponent(
  () => import("../auth/homework/HomeworkPage")
);

// Create homework
const CreateHomeworkPage = lazyLoadComponent(
  () => import("../auth/createHomework/CreateHomeworkPage")
);

// Students homeworks
const StudentHomeworksPage = lazyLoadComponent(
  () => import("../auth/studentHomeworks/StudentHomeworksPage")
);

// Students
const StudentsPage = lazyLoadComponent(
  () => import("../auth/students/StudentsPage")
);

// Export lazy Public pages
export const lazyAuthPages = {
  ClassroomPage,
  ClassroomsPage,
  HomeworkPage,
  CreateHomeworkPage,
  StudentHomeworksPage,
  StudentsPage,
};
