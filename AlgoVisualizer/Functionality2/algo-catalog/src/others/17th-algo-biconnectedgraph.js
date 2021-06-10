import Delayed from '../delayed';
export function seventeenOtherbiconnectedgraph() {
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
    <h1>BICONNECTED GRAPH</h1>
    <p>A biconnected undirected graph is a connected graph that is not broken into disconnected pieces by deleting any single vertex (and its incident edges).</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST :- O(V+E)</p>
     <p>WORST :- O(n^2)</p>
    <p>AVERAGE :- O(V+E)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST :- O(n)</p>
     <p>WORST :- O(n)</p>
    <p>AVERAGE :- O(n)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3> 
             
      <p>An undirected graph is called Biconnected if there are two vertex-disjoint paths between any two vertices. In a Biconnected Graph, there is a simple cycle through any two vertices.</p>

      <p>A graph is said to be Biconnected if: </p>

      <p>1) It is connected, i.e. it is possible to reach every vertex from every other vertex, by a simple path. </p>

      <p>2) Even after removing any vertex the graph remains connected.</p>

    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default seventeenOtherbiconnectedgraph;