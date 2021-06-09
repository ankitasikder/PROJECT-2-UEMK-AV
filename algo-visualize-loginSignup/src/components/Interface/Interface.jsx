import { fb } from 'service';
import "./interface.css";
export const Interface = () => {
    var user = fb.auth.currentUser;
    var email;
    var id;

if (user) {
    email = fb.auth.currentUser.email
    id = fb.auth.currentUser.uid;
} 
        return (
            <>
              
                <section class="chat">
      
                    <center>
                        <svg class="wave-qsoVIt" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
                            preserveAspectRatio="none">
                            <path class="wavePath-22lfEN"
                                d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                                fill="currentColor"></path>
                        </svg>
                  
                        <h1>Welcome to Algorithms Visualiser</h1>
    <p>This is a web application which is used to visualise algorithms. It is created this using JavaScript, CSS, SCSS, ReactJS, HTML5, Vercel, Firebase, Chat Engine SDK and Formik. It has total four functionality. First is visualise algorithms. Second is list of algorithms. Third is discussion section. Fourth and the last is to do section.<br></br><br></br> Your email id :<br></br><br></br><div class="heading3">{email}</div><br></br>Your user id or Discussion section password :- <br></br><br></br><div className="heading3">{id}</div>.</p>
                        <div class="tile shutter">
                            <div class="pok">
                                VISUALIZER
        </div>
                            <a class="pok" target="_blank" without rel="noreferrer" href="https://biswa2210.github.io/algo-visualize-searching-visualize/">
                                LETS GO
        </a>
                        </div>
    
                        <div class="tile shutter">
                            <div class="pok">
                                ALGORITHMS
        </div>
                            <a class="pok" target="_blank" without rel="noreferrer" href="https://algo-visualize-algorithms.netlify.app/">
                                LETS GO
        </a>
                        </div>
                        <div class="tile shutter">
                            <div class="pok">
                                DISSCUSSION
        </div>
                            <a class="pok" target="_blank" without rel="noreferrer" href="https://algo-visualize-disscussion.netlify.app/">
                                LETS JOIN
        </a>
                        </div>
    
                        <div class="tile shutter">
                            <div class="pok">
                                FEEDBACK
        </div>
                            <a class="pok" target="_blank" without rel="noreferrer" href="https://algo-visualize-feedback.netlify.app/">
                                MORE INFO
        </a>
                        </div>
                        <div class="tile shutter">
                            <div class="pok">
                                SIGN OUT
        </div>
                            <a class="pok" onClick={() => fb.auth.signOut()}>
                                Bye Bye
        </a>
                        </div>
                    </center>
    
    
                    <div class="shape-blob one"></div>
                    <div class="shape-blob two"></div>

                </section>
            </>);
    
};