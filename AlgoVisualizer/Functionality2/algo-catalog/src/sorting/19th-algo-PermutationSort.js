import Delayed from '../delayed';
export function nineteenthSortingPermutationSort() {
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
    <h1>PERMUTATION SORT</h1>
    <p>In computer science, bogosort (also known as permutation sort, stupid sort, or slowsort) is a highly inefficient sorting algorithm based on the generate and test paradigm. The function successively generates permutations of its input until it finds one that is sorted</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME AND SPACE COMPLEXITY</u></h3>
      <p>Best case time complexity: O(n)</p>
     <p>Worst case time complexity: O(Infinity)</p>
    <p>Average case time complexity: O(n!)</p>
    <p>Space Complexity: O(1)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>LOGIC</u></h3>
      <p>The worst case is the case when the list is never sorted as the same subset of elements are swapped which makes the list stuck in a loop. This never leads to the list being sorted.</p>

     <p>The best case is the case when the list is already sorted or the first swap makes the list sorted.</p>

      <p>This algorithm does not use any extra memory so it is memory efficient</p>
 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Permutation Sort</u></h3>        
      <p>1. Bogosort is an algorithm used as a demonstration of the least effective approach to sort a list of values. The Bogosort is only a theoretical concept, which has no use in practical applications.</p>
      <p>2. The bogosort procedure is trivial – at first it checks, if the list is already sorted. If so, algorithm terminates. Otherwise it randomly shuffles the list and repeats the procedure.</p>
      <p>3. Bogosort is only a theoretical concept, which has no use in practical applications.</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default nineteenthSortingPermutationSort;