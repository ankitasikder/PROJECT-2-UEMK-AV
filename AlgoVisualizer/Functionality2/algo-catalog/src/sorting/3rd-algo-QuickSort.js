import Delayed from '../delayed';
export function thirdSortingQuickSort() {
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
    <h1>QUICK SORT</h1>
    <p>Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Time taken by QuickSort in general can be written as following. 

T(n) = T(k) + T(n-k-1) + Θ(n)</p>
      <p>Best Case Time Complexity: Θ(nlogn)</p>
      <p> T(n) = 2T(n/2) + Θ(n)</p>
     <p>Worst Case Time Complexity: Θ(n^2)</p>
     <p> T(n) = T(0) + T(n-1) + Θ(n)
which is equivalent to  
T(n) = T(n-1) + Θ(n)</p>
    <p>Average Case Time Complexity:Θ(nlogn)</p> 
    <p>T(n) = T(n/9) + T(9n/10) + Θ(n)</p>          
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Best-case performance: O(n log n)</p>
      <p>However this is only for the naive implementation of quicksort, where you recursively sort both subarrays. It is more prudent to use either tail recursion or (more commonly) iteration for the largest sub-array. Since the smallest sub-array is always less than half the size of the entire array, the recursive call stack then becomes a guaranteed  O(logn) .</p>
     <p>Worst-case space complexity: O(n)</p>
    <p>Usually space complexity is defined to include the size of the input, which is  O(n) .

You can also look at the complexity of the auxiliary spaced used. As the other answerers have pointed out, the call stack can require an additional  O(n)  space.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics of Quick Sort</u></h3>        
      <p>1.Quick Sort is useful for sorting arrays.</p>
      <p>2. In efficient implementations Quick Sort is not a stable sort, meaning that the relative order of equal sort items is not preserved.</p>
      <p>3. Overall time complexity of Quick Sort is O(nLogn). In the worst case, it makes O(n2) comparisons, though this behavior is rare.
The space complexity of Quick Sort is O(nLogn). It is an in-place sort (i.e. it doesn’t require any extra storage)</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default thirdSortingQuickSort;