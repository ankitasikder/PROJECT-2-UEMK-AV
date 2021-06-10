import Delayed from '../delayed';
export function eleventhOtherkargers() {
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
    <h1>KARGER's ALGORITHM</h1>
    <p>It was invented by David Karger and first published in 1993.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
    <p>AVERAGE:: Karger’s Algorithm for this purpose. Below Karger’s algorithm can be implemented in O(E) = O(V2) time.</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>Space required for step 2 need only be O(m),</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3> 
      <p>Karger’s algorithm is a Monte Carlo algorithm and cut produced by it may not be minimum. </p>       
      <p>In computer science and graph theory, Karger's algorithm is a randomized algorithm to compute a minimum cut of a connected graph.</p>
      <p>The idea of the algorithm is based on the concept of contraction of an edge (u,v) in an undirected graph G=(V,E).</p>
      <p>the contraction of an edge merges the nodes u and v into one, reducing the total number of nodes of the graph by one.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default eleventhOtherkargers;