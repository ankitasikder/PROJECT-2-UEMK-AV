import Delayed from '../delayed';
export function thirteenthSortingBitonicSort() {
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
    <h1>BITONIC SORT</h1>
    <p>Bitonic sort is a comparison-based sorting algorithm that can be run in parallel. It focuses on converting a random sequence of numbers into a bitonic sequence, one that monotonically increases, then decreases. Rotations of a bitonic sequence are also bitonic.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best Case Time Complexity: O(log^2 n)</p>
     <p>Worst Case Time Complexity: O(log^2 n)</p>
    <p>Average Case Time Complexity: O(log^2 n)</p>
    <p>let p=[log n] and q=[log n].It is obvious from the construction algorithm that the number of rounds of parallel comparisons is given by q(q+1)/2.It follows that the number of comparators c is bounded.</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity Of Space Complexity: O(n log^2 n)</p>
     <p> It is also used as a construction method for building a sorting network. The algorithm was devised by Ken Batcher. The resulting sorting networks consist of O(n log^2 n) comparators and have a delay of O(n log^2 n), where n is the number of items to be sorted.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Bitonic Sort</u></h3>        
      <p>1. The bitonic sort is a parallel sorting algorithm that is created for best implementation and has optimum usage with hardware and parallel processor array</p>
      <p>2. It is not the most effective one though as compared to the merge sort. But it is good for parallel implementation. This is due to the predefined comparison sequence which makes comparisons independent of data that are to be sorted.</p>
      <p>3. For bitonic sort to work effectively the number of elements should be in a specific type of quantity i.e. the order 2^n.</p>
      <p>4. Bitonic sequence can be rotated back to bitonic sequence</p>
      <p>5. A sequence with elements in increasing and decreasing order is a bitonic sequence.</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default thirteenthSortingBitonicSort;