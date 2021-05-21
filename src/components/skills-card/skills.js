import { v4 as uuidv4 } from 'uuid'
import {
  ReactComponent as ReactIcon
} from '../../assets/reactIcon.svg'
import {
  ReactComponent as JavaScriptIcon
} from '../../assets/JavaScriptIcon.svg'
import {
  ReactComponent as ReduxIcon
} from '../../assets/reduxIcon.svg'
import {
  ReactComponent as RubyIcon
} from '../../assets/rubyIcon.svg'
import {
  ReactComponent as RailsIcon
} from '../../assets/railsIcon.svg'
import {
  ReactComponent as NodeJsIcon
} from '../../assets/nodeJsIcon.svg'
import {
  ReactComponent as ExpressJsIcon
} from '../../assets/expressJsIcon.svg'
import {
  ReactComponent as PythonIcon
} from '../../assets/pythonIcon.svg'
import {
  ReactComponent as PostgreSQLIcon
} from '../../assets/postgreSQLIcon.svg'
import {
  ReactComponent as MongoDBIcon
} from '../../assets/mongoDBIcon.svg'
import {
  ReactComponent as HTML5Icon
} from '../../assets/html5Icon.svg'
import {
  ReactComponent as Css3Icon
} from '../../assets/css3Icon.svg'
import {
  ReactComponent as GitIcon
} from '../../assets/gitIcon.svg'
import {
  ReactComponent as AWSIcon
} from '../../assets/awsIcon.svg'
import {
  ReactComponent as HerokuIcon
} from '../../assets/herokuIcon.svg'

const skills = [
  {
    title: "JavaScript",
    icon: <JavaScriptIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "React",
    icon: <ReactIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "Redux",
    icon: <ReduxIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "Ruby",
    icon: <RubyIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "Rails",
    icon: <RailsIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "Node",
    icon: <NodeJsIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "Express",
    icon: <ExpressJsIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "Python",
    icon: <PythonIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "PostgreSQL",
    icon: <PostgreSQLIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "MongoDB",
    icon: <MongoDBIcon className="skills-icon mongodb" key={uuidv4()} />,
  },
  {
    title: "HTML5",
    icon: <HTML5Icon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "CSS3",
    icon: <Css3Icon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "Git",
    icon: <GitIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "AWS",
    icon: <AWSIcon className="skills-icon" key={uuidv4()} />,
  },
  {
    title: "Heroku",
    icon: <HerokuIcon className="skills-icon" key={uuidv4()} />,
  },
];

export default skills