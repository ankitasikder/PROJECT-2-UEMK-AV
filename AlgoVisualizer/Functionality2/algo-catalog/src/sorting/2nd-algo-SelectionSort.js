import Delayed from '../delayed';
export function secondSortingSelectionSort() {
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
    <h1>SELECTION SORT</h1>
    <p>Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Selection sort algorithm consists of two nested loops.
Owing to the two nested loops, it has O(n2) time complexity.</p>
      <p>Best case time complexity: Ω(n^2)</p>
     <p>Worst case time complexity: Θ(n^2)</p>
    <p>Average case time complexity: O(n^2)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space complexity of selection sort: O(1)</p>
     <p>Selection sort is an in-place algorithm.
It performs all computation in the original array and no other array is used.
Hence, the space complexity works out to be O(1).</p>
    <p>Selection sort is not a very efficient algorithm when data sets are large.
This is indicated by the average and worst case complexities.
Selection sort uses minimum number of swap operations O(n) among all the sorting algorithms.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Selection Sort Characteristics</u></h3>        
      <p>1. a small list is to be sorted</p>
      <p>2. cost of swapping does not matter
checking of all the elements is compulsory</p>
      <p>3. cost of writing to a memory matters like in flash memory (number of writes/swaps is O(n) as compared to O(n2) of bubble sort)</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default secondSortingSelectionSort;