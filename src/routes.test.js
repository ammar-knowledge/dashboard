import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateCourse from 'layouts/Courses';
import Activities from "layouts/Activities";
import ActivityEditor from "layouts/ActivityCreation";
import CreateAssignment from "layouts/CreateAssignments";

const routes = [
  {
    type: "collapse",
    route: "/courses/create",
    component: <CreateCourse />,
  },
  {
    type: "collapse",
    route: "/activities",
    component: <Activities />,
  },
  {
    type: "collapse",
    route: "/activities/create",
    component: <ActivityEditor />,
  },
  {
    type: "collapse",
    route: "/assignments/create",
    component: <CreateAssignment />,
  },
];

describe('routes', () => {
  test('renders CreateCourse component', () => {
    render(<CreateCourse />);
    const createCourseElement = screen.getByRole('heading', { name: /create course/i });
    expect(createCourseElement).toBeInTheDocument();
  });

  test('renders Activities component', () => {
    render(<Activities />);
    const activitiesElement = screen.getByRole('heading', { name: /activities/i });
    expect(activitiesElement).toBeInTheDocument();
  });

  test('renders ActivityEditor component', () => {
    render(<ActivityEditor />);
    const activityEditorElement = screen.getByRole('heading', { name: /activity editor/i });
    expect(activityEditorElement).toBeInTheDocument();
  });

  test('renders CreateAssignment component', () => {
    render(<CreateAssignment />);
    const createAssignmentElement = screen.getByRole('heading', { name: /create assignment/i });
    expect(createAssignmentElement).toBeInTheDocument();
  });
});