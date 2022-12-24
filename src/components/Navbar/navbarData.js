import { UsersIcon} from "@heroicons/react/outline";
import ProjectIcon from '../../images/project-Icon.png';
import TaskIcon from '../../images/task-icon.png';
import ReportIcon from '../../images/report-icon.png';
import SupportIcon from '../../images/life-buoy.png';
import SettingsIcon from '../../images/settings-icon.png';
export const navLinks = [  
  {
    id: 0,
    title: "Projects",
    icon: <img src={ProjectIcon} style={{ height:19, width:16 }}  alt='project-icon' className="nav-icon" />,
  },
  {
    id: 1,
    title: "Tasks",
    icon: <img src={TaskIcon} style={{ height:19, width:16 }}  alt="task-icon" className="nav-icon" />,
  },
  {
    id: 2,
    title: "Reporting",
    icon: <img src={ReportIcon} style={{ height:19, width:16 }}  alt="report-icon"  className="nav-icon" />,
  },
  {
    id: 3,
    title: "Users",
    icon: <UsersIcon style={{ height:22, width:22 }}   className="nav-icon" />,
  },
  
  {
    id: 4,
    title: "Settings",
    icon: <img src={SettingsIcon} style={{ height:22, width:22 }}  alt="support-icon" className="nav-icon" />,
  },
  {
    id: 5,
    title: "Support",
    icon: <img src={SupportIcon} style={{ height:22, width:22 }}  alt="support-icon" className="nav-icon" />,
  },
];
