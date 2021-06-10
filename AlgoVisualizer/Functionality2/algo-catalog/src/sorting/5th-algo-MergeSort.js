import Delayed from '../delayed';
export function fifthSortingMergeSort() {
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
    <h1>MERGE SORT</h1>
    <p>Merge sort is one of the most efficient sorting algorithms. It works on the principle of Divide and Conquer. Merge sort repeatedly breaks down a list into several sublists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best Case Time Complexity[Big-omega]: O(n*log n)</p>
     <p>Worst Case Time Complexity [ Big-O ]: O(n*log n) </p>
    <p>Average Case Time Complexity[Big-theta]: O(n*log n) </p>
    <p>Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation.</p>

    <p>T(n) = 2T(n/2) + O(n)</p>

   <p>The solution of the above recurrence is O(nLogn). The list of size N is divided into a max of Logn parts, and the merging of all sublists into a single list takes O(N) time, the worst-case run time of this algorithm is O(nLogn)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity Of Merge Sort: O(n)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Merge Sort</u></h3>        
      <p>1. Merge Sort is useful for sorting linked lists.</p>
      <p>2. Merge Sort is a stable sort which means that the same element in an array maintain their original positions with respect to each other.</p>
      <p>3. Overall time complexity of Merge sort is O(nLogn). It is more efficient as it is in worst case also the runtime is O(nlogn)
The space complexity of Merge sort is O(n). This means that this algorithm takes a lot of space and may slower down operations for the last data sets.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default fifthSortingMergeSort;