import Delayed from '../delayed';
export function firstSortingBubbleSort() {
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
    <h1>BUBBLE SORT</h1>
    <p>Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Bubble sort uses two loops- inner loop and outer loop.
The inner loop deterministically performs O(n) comparisons.</p>
      <p>Best Case Time Complexity [Big-omega]: O(n)</p>
      <p>In best case, the array is already sorted but still to check, bubble sort performs O(n) comparisons.
Hence, the best case time complexity of bubble sort is O(n).
      </p>
     <p>Worst Case Time Complexity [ Big-O ]: O(n^2)</p>
     <p>In worst case, the outer loop runs O(n) times.
Hence, the worst case time complexity of bubble sort is O(n x n) = O(n2).</p>
    <p>Average Time Complexity [Big-theta]: O(n^2).</p>  
    <p>In average case, bubble sort may require (n/2) passes and O(n) comparisons for each pass.
Hence, the average case time complexity of bubble sort is O(n/2 x n) = Θ(n2).</p>         
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity: O(1).</p>
     <p>The space complexity for Bubble Sort is O(1), because only a single additional memory space is required i.e. for temp variable.</p>
    <p>Bubble sort uses only a constant amount of extra space for variables like flag, i, n.
Hence, the space complexity of bubble sort is O(1).
It is an in-place sorting algorithm i.e. it modifies elements of the original array to sort the given array.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Some Characteristics of Bubble Sort:</u></h3>        
      <p>1. Large values are always sorted first.</p>
      <p>2. It only takes one iteration to detect that a collection is already sorted.</p>
      <p>3. The best time complexity for Bubble Sort is O(n). The average and worst time complexity is O(n²).
The space complexity for Bubble Sort is O(1), because only single additional memory space is required.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default firstSortingBubbleSort;