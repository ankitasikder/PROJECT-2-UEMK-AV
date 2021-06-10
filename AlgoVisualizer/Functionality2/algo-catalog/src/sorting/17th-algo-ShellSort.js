import Delayed from '../delayed';
export function seventeenthSortingShellSort() {
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
    <h1>SHELL SORT</h1>
    <p>Shell sort is a highly efficient sorting algorithm and is based on insertion sort algorithm. This algorithm avoids large shifts as in case of insertion sort, if the smaller value is to the far right and has to be moved to the far left.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best Case Complexity: O(n*log n)</p>
      <p>When the array is already sorted, the total number of comparisons for each interval (or increment) is equal to the size of the array.</p>
     <p>Worst Case Complexity: less than or equal to O(n2)</p>
     <p>Worst case complexity for shell sort is always less than or equal to O(n2).According to Poonen Theorem, worst case complexity for shell sort is Θ(Nlog N)2/(log log N)2) or Θ(Nlog N)2/log log N) or Θ(N(log N)2) or something in between.</p>
     <p>Average Case Complexity: O(n*log n)</p>
     <p>It is around O(n1.25)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>The space complexity for shell sort is O(1).</p>
     <p>This algorithm is quite efficient for medium-sized data sets as its average and worst-case complexity of this algorithm depends on the gap sequence the best known is Ο(n), where n is the number of items. And the worst case space complexity is O(n)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Shell Sort</u></h3>        
      <p>1. Shellsort performs more operations and has higher cache miss ratio than quicksort.</p>
      <p>2. However, since it can be implemented using little code and does not use the call stack, some implementations of the qsort function in the C standard library targeted at embedded systems use it instead of quicksort. Shellsort is, for example, used in the uClibc library. For similar reasons, an implementation of Shellsort is present in the Linux kernel.</p>
      <p>3. Shellsort can also serve as a sub-algorithm of introspective sort, to sort short subarrays and to prevent a slowdown when the recursion depth exceeds a given limit. This principle is employed, for instance, in the bzip2 compressor.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default seventeenthSortingShellSort;