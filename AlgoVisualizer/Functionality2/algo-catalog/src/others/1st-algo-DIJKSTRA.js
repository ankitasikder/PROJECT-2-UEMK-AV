import Delayed from '../delayed';
export function firstOtherDIJKSTRA() {
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
    <h1>DIJKSTRA's ALGORITHM</h1>
    <p>An algorithm for finding the shortest paths between nodes in a graph</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST::Θ(E+V log V) where V is the number of vertexes and E is the number of edges</p>
     <p>WORST::Θ(E+V log V) where V is the number of vertexes and E is the number of edges</p>
    <p>AVERAGE::Θ(E+V log V) where V is the number of vertexes and E is the number of edges</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
    <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>AVERAGE::Θ(V) where V is the number of vertexes</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Dijkstra's algorithm (or Dijkstra's Shortest Path First algorithm, SPF algorithm) is an algorithm for finding the shortest paths between nodes in a graph, </p>
      <p>which may represent, for example, road networks.</p>
      <p>It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.</p>
    </div>
  </div>
          </div>
          </Delayed>
</section>
    );
}
export default firstOtherDIJKSTRA;