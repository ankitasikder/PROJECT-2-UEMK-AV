import Delayed from '../delayed';
export function fourthSortingInsertionSort() {
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
    <h1>INSERTION SORT</h1>
    <p>Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best Case Time Complexity: O(n)</p>
      <p>Insertion sort performs two operations: it scans through the list, comparing each pair of elements, and it swaps elements if they are out of order. Each operation contributes to the running time of the algorithm. If the input array is already in sorted order, insertion sort compares O(n)O(n) elements and performs no swaps (in the Python code above, the inner loop is never triggered). Therefore, in the best case, insertion sort runs in O(n)O(n) time.</p>
     <p>Worst Case Time Complexity: O(n^2)</p>
    <p>Average Case Time Complexity: O(n^2)</p> 
    <p>The worst case for insertion sort will occur when the input list is in decreasing order. To insert the last element, we need at most n-1n−1 comparisons and at most n-1n−1 swaps. To insert the second to last element, we need at most n-2n−2 comparisons and at most n-2n−2 swaps, and so on.[3] The number of operations needed to perform insertion sort is therefore: 2 \times (1+2+ \dots +n-2+n-1)2×(1+2+⋯+n−2+n−1)</p>          
    <p>Use the master theorem to solve this recurrence for the running time. As expected, the algorithm's complexity is O(n^2).O(n 
2
 ). When analyzing algorithms, the average case often has the same complexity as the worst case. So insertion sort, on average, takes O(n^2)O(n 
2
 ) time.</p>
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space complexity of Insertion Sort: O(1)</p>
     <p>The space complexity is actually the additional space complexity used by your algorithm, i.e. the extra space that you need, apart from the initial space occupied by the data. Bubble-sort and insertion sort use only a constant additional space, apart from the original data, so they are O(1) in space complexity.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Inserrtion Sort</u></h3>        
      <p>1. It is efficient for smaller data sets, but very inefficient for larger lists</p>
      <p>2. Insertion Sort is adaptive, that means it reduces its total number of steps if given a partially sorted list, hence it increases its efficiency.</p>
      <p>3. Its space complexity is less.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default fourthSortingInsertionSort;