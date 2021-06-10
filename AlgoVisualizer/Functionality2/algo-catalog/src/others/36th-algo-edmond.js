import Delayed from '../delayed';
export function thirtisixthOtherEDMOND() {
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
    <h1>EDMOND's ALGORITHM</h1>
    <p>In graph theory, Edmonds' algorithm or Chu–Liu/Edmonds' algorithm is an algorithm for finding a spanning arborescence of minimum weight </p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>AVERAGE::The running time of this algorithm is O(EV). A faster implementation of the algorithm due to Robert Tarjan runs in time O(E \log V) for sparse graphs and O(V^2) for dense graphs. This is as fast as Prim's algorithm for an undirected minimum spanning tree. In 1986, Gabow, Galil, Spencer, Compton, and Tarjan produced a faster implementation, with running time O(E + V \log V).</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
    <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>The algorithm takes as input a directed graph D = \langle V, E \rangle where V is the set of nodes and E is the set of directed edges, a distinguished vertex r \in V called the root, and a real-valued weight w(e) for each edge e\in E. It returns a spanning arborescence </p>
      <p>It is the directed analog of the minimum spanning tree problem.</p>
      <p>The algorithm has a recursive description.</p>
    </div>
  </div>
</div></Delayed>
</section>
  );
}
export default thirtisixthOtherEDMOND;