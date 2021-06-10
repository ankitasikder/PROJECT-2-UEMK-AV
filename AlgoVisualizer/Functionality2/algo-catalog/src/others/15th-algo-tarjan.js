import Delayed from '../delayed';
export function fifteenthOthertarjan() {
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
    <h1>TARJAN's ALGORITHM</h1>
    <p>Tarjan's strongly connected components algorithm is an algorithm in graph theory for finding the strongly connected components (SCCs) of a directed graph.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST::O(V+E) where V is the number of vertexes and E is the number of edges</p>
     <p>WORST::O(V+E) where V is the number of vertexes and E is the number of edges</p>
    <p>AVERAGE::O(V+E) where V is the number of vertexes and E is the number of edges</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST::|V| where V is the number of vertexes</p>
     <p>WORST::|V| where V is the number of vertexes</p>
    <p>AVERAGE::|V| where V is the number of vertexes</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Tarjan's strongly connected components algorithm is an algorithm in graph theory for finding the strongly connected components (SCCs) of a directed graph.</p>
      <p>It runs in linear time,matching the time bound for alternative methods including Kosaraju's algorithm and the path-based strong component algorithm. </p>
      <p>The algorithm is named for its inventor, Robert Tarjan.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default fifteenthOthertarjan;