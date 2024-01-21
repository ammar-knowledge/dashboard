import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Interactives from "layouts/Interactives";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ResetPassord from "layouts/authentication/reset-password/cover/index"
import Icon from "@mui/material/Icon";
import Content from "layouts/Content";
import SmartDesk from "layouts/SmartDesk";
import CreateQuiz from 'layouts/CreateQuiz'
import Quiz from "layouts/Quiz";
import Quest from "layouts/Quest"
import QuestDetail from "layouts/Quest/QuestDetail";
import Assignment from "layouts/Assignment";
import Courses from "layouts/CourseListing"
import CreateCourse from 'layouts/Courses'
import Activities from "layouts/Activities";
import ActivityEditor from "layouts/ActivityCreation"
import CreateAssignment from "layouts/CreateAssignments"
import Sessions from 'layouts/Sessions'
import SessionEditor from 'layouts/SessionCreation'
import SessionDetail from 'layouts/SessionDetail'
import CourseDetail from 'layouts/CourseDetail'
import ActivityDetail from 'layouts/ActivityDetail'
import QuizDetail from 'layouts/QuizDetail'
import QuestDetailPage from "layouts/QuestDetail";
import AssignmentDeail from 'layouts/AssignmentDetail'
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Smart Desk",
    key: "smart-desk",
    icon: <Icon fontSize="small">desk_icon</Icon>,
    route: "/smart-desk",
    component: <SmartDesk />,
  },
  {
    type: "collapse",
    name: "Content",
    key: "content",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    component: <Content />,
    subRoute:[
      {
        type: "collapse",
        name: "Activities",
        key: "activities",
        icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
        route: "/content/activities",
        component: <Quiz />,
      },{
        type: "collapse",
        name: "Courses",
        key: "courses",
        icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
        route: "/content/courses",
        component: <Courses />,
      },{
        type: "collapse",
        name: "Sessions",
        key: "sessions",
        icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
        route: "/content/sessions",
        component: <Quiz />,
      }
    ]
  },
  {
    type: "collapse",
    name: "Interactives",
    key: "interactives",
    icon: <Icon fontSize="small">quiz_icon</Icon>,
    component: <Interactives />,
    subRoute:[
      {
        type: "collapse",
        name: "Quiz",
        key: "quiz",
        icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
        route: "/interactives/quiz",
        component: <Quiz />,
      },{
        type: "collapse",
        name: "Quest",
        key: "quest",
        icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
        route: "/interactives/quest",
        component: <Quest />,
      },{
        type: "collapse",
        name: "Assignment",
        key: "assignment",
        icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
        route: "/interactives/assignment",
        component: <Quiz />,
      }
    ]
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  }, {
    type: "collapse",
    name: "Forgot Password",
    key: "reset-password",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/reset-password",
    component: <ResetPassord />,
  },
  {
    type: "collapse",
    route: "/interactives/quiz/create",
    component: <CreateQuiz/>,
  },
  {
    type: "collapse",
    route: "/interactives/assignment/create",
    component: <CreateAssignment/>,
  },
  {
    type: "collapse",
    key: "quiz",
    route: "/interactives/quiz",
    component: <Quiz />,
  },{
    type: "collapse",
    key: "quest",
    route: "/interactives/quest",
    component: <Quest />,
  },{
    type: "collapse",
    key: "quest-detail",
    route: "/interactives/quest/detail",
    component: <QuestDetail />,
  },{
    type: "collapse",
    key: "assignment",
    route: "/interactives/assignment",
    component: <Assignment />,
  },
  {
    type: "collapse",    
    key: "activities",
    route: "/content/activities",
    component: <Activities />,
  },{
    type: "collapse",    
    key: "activities",
    route: "/content/activity/:id",
    component: <ActivityDetail />,
  },{
    type: "collapse",
    key: "courses",
    route: "/content/courses",
    component: <Courses />,
  },{
    type: "collapse",
    key: "courses",
    route: "/content/course/create",
    component: <CreateCourse />,
  },{
    type: "collapse",
    key: "courses",
    route: "/content/course/:id",
    component: <CourseDetail />,
  },
  {
    type: "collapse",
    key: "activities",
    route: "/content/activity/create",
    component: <ActivityEditor/>,
  },{
    type: "collapse",    
    key: "sessions",
    route: "/content/sessions",
    component: <Sessions />,
  },{
    type: "collapse",
    key: "sessions",
    route: "/content/session/create",
    component: <SessionEditor/>,
  },
  {
    type: "collapse",
    key: "sessions-detail",
    route: "/content/session/:id",
    component: <SessionDetail/>,
  },
  {
    type: "collapse",
    key: "quiz-detail",
    route: "/interactives/quiz/:id",
    component: <QuizDetail/>,
  },
  {
    type: "collapse",
    key: "quest-detail",
    route: "/interactives/quest/:id",
    component: <QuestDetailPage/>,
  },{
    type: "collapse",
    key: "assignment-detail",
    route: "/interactives/assignment/:id",
    component: <AssignmentDeail/>,                                                          
  },
];                                                                                      

export default routes;
