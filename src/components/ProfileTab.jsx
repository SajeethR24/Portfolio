import {saveAs} from 'file-saver';
import resume from '../assets/resume.pdf'
import { FaDownload } from "react-icons/fa";

function ProfileTab(){

    const handleDownload = () => {
      saveAs(resume, 'Sajeeth-CV.pdf');
    };

    return (
           <aside id="left">
            <div id="profile">
              <h2>Sajeeth R</h2>
              <p>Fullstack Developer</p>
              <div id="pfp"></div>
              <a href="https://linkedin.com/sajeethr24"><button id="hire">Hire me!</button></a><br />
              <label id='resume' onClick={handleDownload}>Download resume <FaDownload/></label>
            </div>
           </aside>
    )
}

export default ProfileTab;