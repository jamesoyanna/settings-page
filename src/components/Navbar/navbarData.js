import { HomeIcon, UsersIcon} from "@heroicons/react/outline";
import Barchat from '../../images/Icon.png';
import ProjectIcon from '../../images/project-Icon.png';
import TaskIcon from '../../images/task-icon.png';
import ReportIcon from '../../images/report-icon.png';
import SupportIcon from '../../images/life-buoy.png';
import SettingsIcon from '../../images/settings-icon.png';
export const navLinks = [
  {
    id: 0,
    title: "Home",
    icon: <HomeIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Dashboard",
    icon: <img src={Barchat} alt='chart' style={{ height:19, width:16 }} className="nav-icon" />,
  },
  {
    id: 2,
    title: "Projects",
    icon: <img src={ProjectIcon} style={{ height:19, width:16 }}  alt='project-icon' className="nav-icon" />,
  },
  {
    id: 3,
    title: "Tasks",
    icon: <img src={TaskIcon} style={{ height:19, width:16 }}  alt="task-icon" className="nav-icon" />,
  },
  {
    id: 4,
    title: "Reporting",
    icon: <img src={ReportIcon} style={{ height:19, width:16 }}  alt="report-icon"  className="nav-icon" />,
  },
  {
    id: 5,
    title: "Users",
    icon: <UsersIcon style={{ height:22, width:22 }}   className="nav-icon" />,
  },
  
  {
    id: 6,
    title: "Settings",
    icon: <img src={SettingsIcon} style={{ height:22, width:22 }}  alt="support-icon" className="nav-icon" />,
  },
  {
    id: 7,
    title: "Support",
    icon: <img src={SupportIcon} style={{ height:22, width:22 }}  alt="support-icon" className="nav-icon" />,
  },
];
