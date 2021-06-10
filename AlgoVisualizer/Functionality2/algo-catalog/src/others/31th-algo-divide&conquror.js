import Delayed from '../delayed';
export function thirtyoneOtherdivideconquror() {
    return (
      <section>
            <div class="routeloader">
            <div class="coder-logo-animation">
              <div class="left">
                <div class="part-1"></div>
                <div class="part-2"></div>
                <div class="part-3"></div>
              </div>
              <div class="right">
                <div class="part-1"></div>
                <div class="part-2"></div>
                <div class="part-3"></div>
              </div>
            </div>
          </div>
        <Delayed waitBeforeShow={2000}>  
<div class="container">
  <div class="jumbotron">
    <h1>DIVIDE & CONQUROR</h1>
    <p>A divide-and-conquer algorithm recursively breaks down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST:- O(nLogn)</p>
     <p>WORST:- O(nLogn)</p>
    <p>AVERAGE:- O(nLogn)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- O(nLogn)</p>
     <p>WORST:- O(nLogn)</p>
    <p>AVERAGE:- O(nLogn)</p>  
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>This paradigm, divide-and-conquer, breaks a problem into subproblems that are similar to the original problem, recursively solves the subproblems, and finally combines the solutions to the subproblems to solve the original problem. Because divide-and-conquer solves subproblems recursively, each subproblem must be smaller than the original problem, and there must be a base case for subproblems. You should think of a divide-and-conquer algorithm as having three parts:</p>
      <p>1) Divide the problem into a number of subproblems that are smaller instances of the same problem.</p>
      <p>2) Conquer the subproblems by solving them recursively. If they are small enough, solve the subproblems as base cases.</p>
      <p>3) Combine the solutions to the subproblems into the solution for the original problem.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default thirtyoneOtherdivideconquror;