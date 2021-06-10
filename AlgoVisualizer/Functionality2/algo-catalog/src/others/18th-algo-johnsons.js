import Delayed from '../delayed';
export function eightteenOtherjohnsons() {
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
    <h1>JOHNSON ALGORITHM</h1>
    <p>The idea of Johnson’s algorithm is to re-weight all edges and make them all positive, then apply Dijkstra’s algorithm for every vertex.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST:- O(V2log V + VE)</p>
     <p>WORST:- O(V2log V + VE)</p>
    <p>AVERAGE :- O(V2log V + VE)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- O(V*VLogV)</p>
     <p>WORST:- O(V*VLogV)</p>
    <p>AVERAGE :- O(V*VLogV)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>The problem is to find the shortest path between every pair of vertices in a given weighted directed graph and weight may be negative. Using Johnson's Algorithm, we can find all pairs shortest path in O (V2 log ? V+VE ) time. Johnson's Algorithm uses both Dijkstra's Algorithm and Bellman-Ford Algorithm.</p>
      <p>The new set of edges weight w must satisfy two essential properties:</p>
      <p>1) For all pair of vertices u, v ∈ V, the shortest path from u to v using weight function w is also the shortest path from u to v using weight function w.</p>
      <p>2) For all edges (u, v), the new weight w (u, v) is nonnegative.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default eightteenOtherjohnsons;