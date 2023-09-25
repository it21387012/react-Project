import './App.css';
import './Student/components/css/styles-Student.css';
import './Dashboard/components/css/styles-Student.css';
import './Dashboard/components/css/ManageItems.css';
import './Dashboard/components/css/dashb.css';

import './sidebar.css';
import './Student/components/css/ManageItems.css';
import './Student/components/css/dash.css';
import Sidebar from "./Sidebar";
import AddStudent from "./Student/components/AddStudent";
import Dashboard from "./Student/components/Dashboard";
import ManageItems from "./Student/components/ManageItems";
import EditStudent from './Student/components/EditStudent';
import Studentreport from './Student/components/Reportgenarate';
import Home from './Home'
import Faddstudent from './Student/components/Faddstudent';
import StuLoginPage from'./Student/components/StuLoginPage';
import Frontstudentlog from'./Student/components/frontstudentdashbord';
import NoticeBord from'./Student/components/Noticebord';
import Chart from'./Student/components/Chart';
import teslog from'./Student/components/testlog'

import Admindashboard from './Dashboard/components/AdminDashboard';
import EditeProfile from './Dashboard/components/EditeProfile';
import ManageAdmin from './Dashboard/components/ManageAdmin';
import Register from './Dashboard/components/Register';
import ReportDownload from './Dashboard/components/ReportDownlaod';
import DashboardView from './Dashboard/components/DashboardView';
import AdminNotify from './Dashboard/components/AdminNotify';
import AdminLogin from './Dashboard/components/AdminLogin';

import AddExam from "./ExamUnit/components/AddExam";
import EditExam from "./ExamUnit/components/Editexam";
import ExamDashboard from "./ExamUnit/components/ExamDashboard";
import ManageExam from "./ExamUnit/components/ManageExam";
import ExamReportgenarate from './ExamUnit/components/ExamReportgenarate';

import './Teacher/components/css/styles-Teacher.css';
import './Teacher/components/css/ManageItems.css';
import './Teacher/components/css/dash.css';
import AddTeacher from "./Teacher/components/AddTeacher";
import TDashboard from "./Teacher/components/Tdashboard";
import ManageTeacher from "./Teacher/components/ManageTeacher";
import EditTeacher from './Teacher/components/EditTeacher';
import Teacherreport from './Teacher/components/TeacherReport';


import AddPayment from "./Payment/components/AddPayment";
import PDashboard from "./Payment/components/PDashboard";
import ManagePayments from "./Payment/components/ManagePayments";
import EditPayment from './Payment/components/EditPayment';
import PReportGenarate from './Payment/components/PReportGenarate';

import EmployeeaddStudent from "./Employee/components/AddEmployee";
import EmployeeDashboard from "./Employee/components/DashboradEmployee";
import EmployeeManageItems from "./Employee/components/Emanegeitem";
import EmployeeEditStudent from './Employee/components/EditEmployee';
import EmployeeStudentreport from './Employee/components/Reportgenarateemployee';


import AddEvent from "./Event/components/AddEvent";
import EventDash from "./Event/components/EventDashbord";
import ManageEvent from "./Event/components/ManageEvent";
import EditEvent from './Event/components/EditEvent';
import Eventrreport from './Event/components/EventReport';






import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <div>
        <Sidebar />
        
        

        <Router>
          <Routes>
          <Route path="/" exact element={<Home />} />
            <Route path='/AddStudent' element={<AddStudent/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/EditStudent/:id' element={<EditStudent/>} />
            <Route path='/ManageItems' element={<ManageItems/>} />
            <Route path='/report' element={<Studentreport/>} />
            <Route path='/faddstudent' element={<Faddstudent/>}/>
            <Route  path='/studentlog' exact element={<StuLoginPage/>} />
            <Route path='/frontsd' element={<Frontstudentlog/>}/>
            <Route path='/notice' element={<NoticeBord/>}/>
            <Route path='/chart' element={<Chart/>}/>

            

            <Route path='/admindashboard' element={<Admindashboard/>} />
            <Route path='/ManageAdmin' element={<ManageAdmin/>} />
            <Route path='/Register' element={<Register/>} />
            <Route path='/EditeProfile/:id' element={<EditeProfile/>} />
            <Route path='/ReportDownload' element={<ReportDownload/>} />
            <Route path='/DashboardView' element={<DashboardView/>} />
            <Route path='/AdminNotify' element={<AdminNotify/>} />
            <Route path='/AdminLogin' element={<AdminLogin/>} />
            

            

            <Route path='/AddExam' element={<AddExam/>} />
            <Route path='/ExamDashboard' element={<ExamDashboard/>} />
            <Route path='/EditExam/:id' element={<EditExam/>} />
            <Route path='/ManageExam' element={<ManageExam/>} />
            <Route path='/ExamReportgenerate' element={<ExamReportgenarate/>} />

            <Route path='/AddTeacher' element={<AddTeacher/>} />
            <Route path='/TDashboard' element={<TDashboard/>} />
            <Route path='/EditTeacher/:id' element={<EditTeacher/>} />
            <Route path='/ManageTeacher' element={<ManageTeacher/>} />
            <Route path='/Teacherreport' element={<Teacherreport/>} />

          <Route path='/AddPayment' element={<AddPayment />} />
          <Route path='/PDashboard' element={<PDashboard />} />
          <Route path='/EditPayment/:id' element={<EditPayment />} />
          <Route path='/ManagePayments' element={<ManagePayments />} />
          <Route path='/PReportGenarate' element={<PReportGenarate />} />

          <Route path='/AddEmployee' element={<EmployeeaddStudent/>} />
            <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>} />
            <Route path='/EditEmployee/:id' element={<EmployeeEditStudent/>} />
            <Route path='/EmployeeManageItems' element={<EmployeeManageItems/>} />
            <Route path='/Employeereport' element={<EmployeeStudentreport/>} />



            <Route path='/AddEvent' element={<AddEvent/>} />
            <Route path='/EventDash' element={<EventDash/>} />
            <Route path='/ManageEvent' element={<ManageEvent/>} />
            <Route path='/EditEvent/:id' element={<EditEvent/>} />
            <Route path='/Eventrreport' element={<Eventrreport/>} />
          


            


          </Routes>
        </Router>
      </div>
  );
}
export default App;