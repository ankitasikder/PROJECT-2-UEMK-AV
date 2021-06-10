import Delayed from '../delayed';
export function twentyfourthSortingpegionhole() {
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
    <h1>PEGIONHOLE SORT ALGORITHM</h1>
    <p>Pigeonhole sorting is a sorting algorithm that is suitable for sorting lists of elements where the number of elements and the number of possible key values are approximately the same.</p>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
    <p>AVERAGE::Time Complexity, O(n+2^k) </p> 
    <p>WORST::n+2^k</p>        
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>AVERAGE::Space Complexity, O(2^k)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Pigeonhole sorting is a sorting algorithm that is suitable for sorting lists of elements where the number of elements (n) and the length of the range of possible key values (N) are approximately the same</p>
      <p>It requires O(n + N) time. It is similar to counting sort, but differs in that it "moves items twice: once to the bucket array and again to the final destination [whereas] counting sort builds an auxiliary array then uses the array to compute each item's final destination and move the item there."</p>
      <p>It requires O(n + Range) time where n is number of elements in input array and ‘Range’ is number of possible values in array.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentyfourthSortingpegionhole;