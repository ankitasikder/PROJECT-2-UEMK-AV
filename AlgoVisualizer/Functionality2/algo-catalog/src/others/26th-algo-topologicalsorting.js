import Delayed from '../delayed';
export function twentysixOthertopologicalsorting() {
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
    <h1>TOPOLOGICAL SORTING</h1>
    <p>Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u v, vertex u comes before v in the ordering.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST:- O(V+E)</p>
     <p>WORST:- O(V+E)</p>
    <p>AVERAGE:- O(V+E)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- O(V+E)</p>
     <p>WORST:- O(V+E)</p>
    <p>AVERAGE:- O(V+E)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>The topological sort algorithm takes a directed graph and returns an array of the nodes where each node appears before all the nodes it points to.</p>
      <p>For example, a topological sorting of the following graph is “5 4 2 3 1 0”. There can be more than one topological sorting for a graph. For example, another topological sorting of the following graph is “4 5 2 3 1 0”. The first vertex in topological sorting is always a vertex with in-degree as 0 (a vertex with no incoming edges).</p>
      <p></p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentysixOthertopologicalsorting;