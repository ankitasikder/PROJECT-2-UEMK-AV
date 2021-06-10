import Delayed from '../delayed';
export function twentysevenOtherprimsminimumspanningtree() {
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
    <h1>PRIMS MINIMUM SPANNING TREE</h1>
    <p>The idea behind Prim's algorithm is simple, a spanning tree means all vertices must be connected.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST:- O(ElogV)</p>
     <p>WORST:- O(ElogV)</p>
    <p>AVERAGE:- O(ElogV)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- Θ(E + V)</p>
     <p>WORST:- Θ(E + V)</p>
    <p>AVERAGE:- Θ(E + V)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>The idea behind Prim’s algorithm is simple, a spanning tree means all vertices must be connected. So the two disjoint subsets (discussed above) of vertices must be connected to make a Spanning Tree. And they must be connected with the minimum weight edge to make it a Minimum Spanning Tree.</p>
      <p>1) Create a set mstSet that keeps track of vertices already included in MST. </p>
      <p>2) Assign a key value to all vertices in the input graph. Initialize all key values as INFINITE. Assign key value as 0 for the first vertex so that it is picked first. </p>
      <p>3) While mstSet doesn’t include all vertices </p>
      <p>a) Pick a vertex u which is not there in mstSet and has minimum key value. </p>
      <p>b) Include u to mstSet. </p>
      <p>c) Update key value of all adjacent vertices of u. To update the key values, iterate through all adjacent vertices. For every adjacent vertex v, if weight of edge u-v is less than the previous key value of v, update the key value as weight of u-v
The idea of using key values is to pick the minimum weight edge from cut. The key values are used only for vertices which are not yet included in MST, the key value for these vertices indicate the minimum weight edges connecting them to the set of vertices included in MST. </p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentysevenOtherprimsminimumspanningtree;