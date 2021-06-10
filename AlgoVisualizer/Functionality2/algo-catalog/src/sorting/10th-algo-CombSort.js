import Delayed from '../delayed';
export function tenthSortingCombSort() {
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
    <h1>COMB SORT</h1>
    <p>Comb sort is a relatively simple sorting algorithm originally designed by Włodzimierz Dobosiewicz and Artur Borowy in 1980, later rediscovered (and given the name "Combsort") by Stephen Lacey and Richard Box in 1991. Comb sort improves on bubble sort in the same way that Shellsort improves on insertion sort.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best case time complexity: Θ(n log n)</p>
     <p>Worst case time complexity: O(n^2)</p>
    <p>Average case time complexity: Ω(n^2/2^p), where p is the number of increments</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space complexity: Θ(1) auxillary space</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Comb Sort</u></h3>        
      <p>1. Comb Sort is an improvement over Bubble Sort.</p>
      <p>2. Comb Sort eliminates small values at the end of the list by using larger gap.</p>
      <p>3. Comb Sort has best case time complexity of Θ(N log N) comparable to Quick Sort.</p>
      <p>4. Comb Sort does not require any extra space and easy to implement sorting algorithm.</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default tenthSortingCombSort;