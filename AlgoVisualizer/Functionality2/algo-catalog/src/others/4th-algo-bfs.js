import Delayed from '../delayed';
export function fourthOtherbfs() {
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
    <h1>BREADTH FIRST SEARCH ALGORITHM</h1>
    <p>An algorithm for traversing or searching tree or graph data structures</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST::O(N) where N is the number of nodes</p>
     <p>WORST::O(N) where N is the number of nodes</p>
    <p>AVERAGE::O(N) where N is the number of nodes</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>BEST::Worst Case for DFS will be the best case for BFS</p>
     <p>WORST::Best Case for DFS will be the worst case for BFS </p>
    <p>AVERAGE::O(n) where n is the number of nodes</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.</p>
      <p>It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.</p>
      <p>It uses the opposite strategy of depth-first search, which instead explores the node branch as far as possible before being forced to backtrack and expand other nodes.</p>
    </div>
  </div>
</div></Delayed>  
</section>
    );
}
export default fourthOtherbfs;