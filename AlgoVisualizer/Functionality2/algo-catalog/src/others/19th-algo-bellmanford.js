import Delayed from '../delayed';
export function nineteenOtherbellmanford() {
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
    <h1>BELLMAN FORD ALGORITHM</h1>
    <p>Bellman Ford's Algorithm. Bellman Ford algorithm helps us find the shortest path from a vertex to all other vertices of a weighted graph.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST:- Θ(|V||E|)</p>
     <p>WORST:- Θ(|V||E|)</p>
    <p>AVERAGE :- Θ(|V||E|)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- O(V) , O(V^2)</p>
     <p>WORST:- O(V) , O(V^2)</p>
    <p>AVERAGE :- O(V) , O(V^2)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>This algorithm works correctly when some of the edges of the directed graph G may have negative weight. When there are no cycles of negative weight, then we can find out the shortest path between source and destination.</p>

      <p>This algorithm detects the negative cycle in a graph and reports their existence.

      Based on the "Principle of Relaxation" in which more accurate values gradually       recovered an approximation to the proper distance by until eventually reaching       the optimum solution.</p>

      <p>Given a weighted directed graph G = (V, E) with source s and weight function w: E → R, the Bellman-Ford algorithm returns a Boolean value indicating whether or not there is a negative weight cycle that is attainable from the source.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default nineteenOtherbellmanford;