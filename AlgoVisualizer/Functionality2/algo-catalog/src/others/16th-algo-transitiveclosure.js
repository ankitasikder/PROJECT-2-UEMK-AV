import Delayed from '../delayed';
export function sixteenOthertransitiveclosure() {
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
    <h1>TRANSITIVE CLOSURE</h1>
    <p>In mathematics, the transitive closure of a binary relation R on a set X is the smallest relation on X that contains R and is transitive. In set theory, binary relations are represented as sets, hence "smallest" pertains to set cardinality.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST :- O(m)</p>
     <p>WORST :- O(m)</p>
    <p>AVERAGE :- O(m)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST :- O(V × (V + E))</p>
     <p>WORST :- O(V × (V + E))</p>
    <p>AVERAGE :- O(V × (V + E))</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3> 
             
      <p>Transitive Closure it the reachability matrix to reach from vertex u to vertex v of a graph. One graph is given, we have to find a vertex v which is reachable from another vertex u, for all vertex pairs (u, v).</p>

      <p>The final matrix is the Boolean type. When there is a value 1 for vertex u to vertex v, it means that there is at least one path from u to v.</p>

      <p>O(m)</p>


    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default sixteenOthertransitiveclosure;