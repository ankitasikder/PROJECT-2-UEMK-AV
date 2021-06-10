import Delayed from '../delayed';
export function fifthOtherdfs() {
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
    <h1>DEPTH FIRST SEARCH ALGORITHM</h1>
    <p>An algorithm for traversing or searching tree or graph data structures</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
    <p>AVERAGE::O(V + E), where V is the number of vertices and E is the number of edges in the graph</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST::Best Case for DFS will be the worst case for BFS</p>
     <p>WORST::Worst Case for DFS will be the best case for BFS</p>
    <p>AVERAGE::O(V) where V is the number of vertices</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.</p>
      <p>The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.</p>
      <p>Depth-first search is an algorithm for traversing or searching tree or graph data structures. </p>
    </div>
  </div>
</div></Delayed> 
</section>
    );
}
export default fifthOtherdfs;