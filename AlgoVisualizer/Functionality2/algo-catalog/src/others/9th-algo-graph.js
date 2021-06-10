import Delayed from '../delayed';
export function ninthOthergraph() {
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
    <h1>GRAPH ALGORITHM</h1>
    <p>A graph is an abstract notation used to represent the connection between pairs of objects. </p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY OF DIJKSTRA'S ALGORITHM</u></h3>
      <p>BEST::Θ(E+V log V) where V is the number of vertexes and E is the number of edges</p>
     <p>WORST::Θ(E+V log V) where V is the number of vertexes and E is the number of edges</p>
    <p>AVERAGE::Θ(E+V log V) where V is the number of vertexes and E is the number of edges</p>             
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY OF DIJKSTRA'S ALGORITHM</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
      <p>AVERAGE::Θ(V) where V is the number of vertexes</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.</p>
      <p>Interconnected objects in a graph are called vertices. Vertices are also known as nodes.</p>
      <p>Edges are the links that connect the vertices.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default ninthOthergraph;