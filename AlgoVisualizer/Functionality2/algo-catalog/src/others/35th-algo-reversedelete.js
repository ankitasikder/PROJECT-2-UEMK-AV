import Delayed from '../delayed';
export function thirtififthOtherREVERSEDELETE() {
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
        <h1>REVERSE DELETE ALGORITHM</h1>
        <p>The reverse-delete algorithm is an algorithm in graph theory used to obtain a minimum spanning tree from a given connected, edge-weighted graph.</p> 
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h3><u>TIME COMPLEXITY</u></h3>
          <p>Sorting the edges by weight using a comparison sort takes O(E log E) time, which can be simplified to O(E log V) using the fact that the largest E can be is V2.</p>
         <p>There are E iterations of the loop.</p>
         <p>Deleting an edge, checking the connectivity of the resulting graph, and (if it is disconnected) re-inserting the edge can be done in O(logV (log log V)3) time per operation (Thorup 2000).</p>
        <p>AVERAGE::The algorithm can be shown to run in O(E log V (log log V)3) time (using big-O notation), where E is the number of edges and V is the number of vertices. </p>           
        </div>
        <div class="col-sm-4">
          <h3><u>SPACE COMPLEXITY</u></h3>
          <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
        <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
        <p>AVERAGE::O(n) space complexity is polynomial in the size of input</p> 
        </div>
        <div class="col-sm-4">
          <h3><u>DEFINATION</u></h3>        
          <p>Reverse Delete algorithm is closely related to Kruskal’s algorithm. In Kruskal’s algorithm what we do is : Sort edges by increasing order of their weights.</p>
          <p>In Reverse Delete algorithm, we sort all edges in decreasing order of their weights. After sorting, we one by one pick edges in decreasing order. </p>
          <p>We include current picked edge if excluding current edge causes disconnection in current graph. The main idea is delete edge if its deletion does not lead to disconnection of graph.</p>
        </div>
      </div>
    </div></Delayed>
    </section>
        );
    }

export default thirtififthOtherREVERSEDELETE;