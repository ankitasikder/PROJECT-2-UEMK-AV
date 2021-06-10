import Delayed from '../delayed';
export function thirdOtherASTARSEARCH() {
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
    <h1>A*SEARCH ALGORITHM</h1>
    <p>An algorithm which is often used in many fields of computer science due to its completeness, optimality, and optimal efficiency.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
    <p>AVERAGE::O(bd) where b is the branching factor (the average number of successors per state).</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>AVERAGE::O(|V|) = O(b^d) where V is the number of vertexes</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>A* (pronounced "A-star") is a graph traversal and path search algorithm. A* is a graph traversal and path search algorithm, which is often used in many fields of computer science due to its completeness, optimality, and optimal efficiency.</p>
      <p> One major practical drawback is its O(b^d) space complexity, as it stores all generated nodes in memory.</p>
      <p>Thus, in practical travel-routing systems, it is generally outperformed by algorithms which can pre-process the graph to attain better performance.</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default thirdOtherASTARSEARCH;