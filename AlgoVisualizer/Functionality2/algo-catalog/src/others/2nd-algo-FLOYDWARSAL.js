import Delayed from '../delayed';
export function secondOtherFLOYDWARSHALL() {
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
  <h1>FLOYD WARSHAL's ALGORITHM</h1>
  <p>An algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights </p> 
</div>
<div class="row">
  <div class="col-sm-4">
    <h3><u>TIME COMPLEXITY</u></h3>
    <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
     <p>AVERAGE:: O(V^3) where V is the number of vertexes</p>           
  </div>
  <div class="col-sm-4">
    <h3><u>SPACE COMPLEXITY</u></h3>
    <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p> 
    <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
  <p>AVERAGE::O(|V|2) where V is the number of vertexes</p> 
  </div>
  <div class="col-sm-4">
    <h3><u>DEFINATION</u></h3>        
    <p>In computer science, the Floyd–Warshall algorithm (also known as Floyd's algorithm, the Roy–Warshall algorithm, the Roy–Floyd algorithm, or the WFI algorithm)is an algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights (but with no negative cycles).</p>
    <p>A single execution of the algorithm will find the lengths (summed weights) of shortest paths between all pairs of vertices. </p>
    <p> Although it does not return details of the paths themselves, it is possible to reconstruct the paths with simple modifications to the algorithm.</p>
  </div>
</div>
      </div>
      </Delayed>
</section>
  );
}
export default secondOtherFLOYDWARSHALL;