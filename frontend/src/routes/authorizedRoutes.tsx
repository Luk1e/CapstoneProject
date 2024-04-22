import { lazyLayouts } from "../layouts";
import { lazyPages } from "../pages";

import RouterProps from "./RouterProps";

// Export Public router
export default function AuthorizedRoutes({ user, loading }: RouterProps) {
  const { AuthorizedLayout } = lazyLayouts;

  return {
    path: "/",
    element: <AuthorizedLayout user={user} loading={loading} />,
    children: [
      // Classrooms
      {
        path: "/classroom",
        element: <lazyPages.ClassroomsPage />,
      },

      // Classroom
      {
        path: "/classroom/:id",
        element: <lazyPages.ClassroomPage />,
      },

      // Classroom students
      {
        path: "/classroom/:id/students",
        element: <lazyPages.StudentsPage />,
      },

      // Homework
      {
        path: "/homework/:id",
        element: <lazyPages.HomeworkPage />,
      },

      // Create homework
      {
        path: "/homework/create",
        element: <lazyPages.CreateHomeworkPage />,
      },

      // Students' homeworks
      {
        path: "/classroom/:id/:homeworkId",
        element: <lazyPages.CreateHomeworkPage />,
      },
    ],
  };
}
