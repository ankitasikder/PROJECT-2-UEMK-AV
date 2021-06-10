export const Home = () => {
    return (<>
        <center><h1 className="jumbotron homeheading">Algorithm Visualizer</h1>
          <div class="col-sm-8 text-left"> <hr></hr>
                <center><h1 className="homeheading3"><u>OVERVIEW</u></h1></center>
                 <hr></hr>
      <p className="saaksook">This is a web application which is used to visualise algorithms. It has been created using JavaScript, CSS, SCSS, ReactJS, HTML5, Vercel, Firebase, Chat Engine SDK, nodejs and Formik. User can approach this website through a provided link. First of all it has a sign up or login page. If user is opening it for first time he has to select sign up option. Here he has to give username, email id, password, verify password. If he has already signed up, then he has to go to login option and then he has to give email, password, confirm password. Then you have entered in the main page or home page. Here user can see your email id and a firebase-provided password. Here four buttons are given. VISUALIZE ALGORITHMS, ALGORITHMS, DISCUSSION, FEEDBACK. By clicking on VISUALIZE ALGORITHMS user can watch and understand working of some specific algorithms. If user goes to ALGORITHMS he can see total 72 algorithms. Sorting, Searching and Others algorithms. If he clicks any of them in learn more button then their details will be shown in a page. The DISCUSSION part will take the user to a login page where he has to give username and password (firebase-provided password in home page). Then he will be added in a discussion group for doubt clearing where the developers will answer his questions regarding this website. In the feedback portion user can write about how much this website is useful or any idea for improvement in this website in the comment section. </p>
      <hr></hr>
                <center><h3>"Happy Coding ...."</h3></center>
                 <hr></hr>
    </div></center>
    </>);
}
export default Home ;