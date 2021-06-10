import Delayed from '../delayed';
export function thirteenthOtherfleurys() {
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
    <h1>FLEURYS ALGORITHM</h1>
    <p>Fleury's algorithm is an elegant but inefficient algorithm that dates to 1883. </p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
    <p>AVERAGE::O(|E|2) </p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
   <p>AVERAGE::O(V2)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Consider a graph known to have all edges in the same component and at most two vertices of odd degree.</p>
      <p>The algorithm starts at a vertex of odd degree, or, if the graph has none, it starts with an arbitrarily chosen vertex.</p>
      <p>Eulerian Path is a path in graph that visits every edge exactly once. Eulerian Circuit is an Eulerian Path which starts and ends on the same vertex.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default thirteenthOtherfleurys;