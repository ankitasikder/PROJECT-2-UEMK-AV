import Delayed from '../delayed';
export function twelvthOtherhamiltoniancycle() {
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
    <h1>HAMILTONIAN CYCLE</h1>
    <p>A Hamiltonian cycle is a closed loop on a graph where every node (vertex) is visited exactly once.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
        <p>WORST::Θ(E+V log V)</p>         
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>The Hamiltonian cycle problem is a special case of the travelling salesman problem, obtained by setting the distance between two cities to one if they are adjacent and two otherwise, and verifying that the total distance travelled is equal to n (if so, the route is a Hamiltonian circuit; if there is no Hamiltonian circuit then the shortest route will be longer).</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>A Hamiltonian cycle is a closed loop on a graph where every node (vertex) is visited exactly once.</p>
      <p>A loop is just an edge that joins a node to itself; so a Hamiltonian cycle is a path traveling from a point back to itself, visiting every node en route.</p>
      <p>Hamiltonian paths and cycles are named after William Rowan Hamilton who invented the icosian game, </p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twelvthOtherhamiltoniancycle;