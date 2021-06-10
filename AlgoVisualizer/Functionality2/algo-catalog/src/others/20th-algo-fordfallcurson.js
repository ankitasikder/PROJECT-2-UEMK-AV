import Delayed from '../delayed';
export function twentyOtherfordfallcurson() {
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
    <h1>FORD OF FALLCURSON ALGORITHM</h1>
    <p>Ford-Fulkerson algorithm is a greedy approach for calculating the maximum possible flow in a network or a graph.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST :- O(E+V)</p>
     <p>WORST :- O((E+V)f)</p>
    <p>AVERAGE :- O(E+V)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- O (N * N)</p>
     <p>WORST:- O (N * N)</p>
    <p>AVERAGE :- O (N * N)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>A term, flow network, is used to describe a network of vertices and edges with a source (S) and a sink (T). Each vertex, except S and T, can receive and send an equal amount of stuff through it. S can only send and T can only receive stuff.</p>
      <p>The algorithm follows:</p>
      <p>1) Initialize the flow in all the edges to 0.</p>
      <p>2) While there is an augmenting path between the source and the sink, add this path to the flow.</p>
      <p>3) Update the residual graph.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentyOtherfordfallcurson;