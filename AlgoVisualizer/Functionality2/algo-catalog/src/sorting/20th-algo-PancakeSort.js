import Delayed from '../delayed';
export function twentythSortingPancakeSort() {
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
    <h1>PANCAKE SORT</h1>
    <p>Pancake sort is a sorting algorithm in which the only allowed operation is to "flip" one end of the list. It is inplace but not stable . Pancake sort is called so because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>O(n^2) where n is the size of the given array</p>
     <p>In the algorithm of pancake sort , there we run a loop with n iterations</p>
    <p>Within each iteration, we are dealing with the corresponding prefix of the list. Here we denote the length of the prefix as k, e.g. in the first iteration, the length of the prefix is n. While in the second iteration, the length of the prefix is n-1.</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>O(n) where n is the size of the given array.</p>
     <p>Within the algorithm, we use a list to maintain the final results, which are proportional to the number of pancake flips.</p>
    <p>For each round of iteration, at most, we would add two pancake flips. Therefore, the maximal number of pancake flips needed would be 2*n.</p> 
    <p>As a result, the space complexity of the algorithm is O(n). If one does not take into account the space required to hold the result of the function, then one could consider the above algorithm as a constant space solution.
</p>
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Pancake sort</u></h3>        
      <p>1. It is a variation of the sorting problem in which the only allowed operation is to reverse the elements of some prefix of the sequence</p>
      <p>2. Unlike a traditional sorting algorithm, which attempts to sort with the fewest comparisons possible, the goal is to sort the sequence in as few reversals as possible.</p>
      <p>3. It also states that, it has applications in parallel processor networks, in which it can provide an effective routing algorithm between processors.</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default twentythSortingPancakeSort;