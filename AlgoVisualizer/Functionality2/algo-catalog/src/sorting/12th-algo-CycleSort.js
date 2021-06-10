import Delayed from '../delayed';
export function twelvethSortingCycleSort() {
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
    <h1>CYCLE SORT</h1>
    <p>Cycle sort is an in-place, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array, unlike any other in-place sorting algorithm</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME AND SAPCE COMPLEXITY</u></h3>
      <p>Best case time complexity:O(n^2)</p>
     <p>Worst case time complexity:O(n^2)</p>
    <p>Best case time complexity:O(n^2)</p>
    <p>Space complexity:O(1)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>LOGIC</u></h3>
      <p>This sorting algorithm is best suited for situations where memory write or swap operations are costly.</p>
     <p>Here, in this comparison based sorting algorithm the time complexity will remain same for all case (i.e. Best, Average & worst cases) that is O(n^2) as in each iteration, we have to traverse the entire subarray, starting from current position, to count the no. of all the elements that are less than the current element. So, whether or not the array is already sorted or not has no consequence on the running time, nor does it provide an opportunity for optimization and the algorithm must run in quadratic time.</p>
    <p>Also, This sorting algorithm is inplace so it does not use any extra memory to sort the array and so that's why it's Space Complexity is constant</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Cycle Sort</u></h3>        
      <p>Cycle sort is a comparison based sorting algorithm which forces array to be factored into the number of cycles where each of them can be rotated to produce a sorted array.It is an in-place and unstable sorting algorithm.</p>
      <p>It is optimal in terms of number of memory writes. It minimizes the number of memory writes to sort. Each value is either written zero times, if it’s already in its correct position, or written one time to its correct position.</p>
      <p>It is based on the idea that array to be sorted can be divided into cycles. Cycles can be visualized as a graph. We have n nodes and an edge directed from node i to node j if the element at i-th index must be present at j-th index in the sorted array.</p>
      <p>It is optimal in terms of number of memory writes. It makes minimum number of writes to the memory and hence efficient when array is stored in EEPROM or Flash. Unlike nearly every other sort (Quick , insertion , merge sort), items are never written elsewhere in the array simply to push them out of the way of the action. Each value is either written zero times, if it's already in its correct position, or written one time to its correct position.This matches the minimal number of overwrites required for a completed in-place sort</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default twelvethSortingCycleSort;