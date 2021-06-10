import Delayed from '../delayed';
export function fifteenthSortingCoctailSort() {
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
    <h1>COCTAIL SORT</h1>
    <p>Cocktail Sort is a variation of Bubble sort. The Bubble sort algorithm always traverses elements from left and moves the largest element to its correct position in first iteration and second largest in second iteration and so on. Cocktail Sort traverses through a given array in both directions alternatively.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best Case Time Complexity: O(n)</p>
      <p>The best configuration occurs when all elements are already sorted or nearly sorted.Consequently, we have to go through the first sequence only once: O(n).</p>
     <p>Worst Case Time Complexity: O(n^2)</p>
    <p>Average Case Time Complexity: O(n^2)</p> 
    <p>Just like the Bubble sort, the worst case O(n2) occurs when the sequence is in reverse order. First, the highest value is bubbled down until the end, and the lowest value is bubbled up to the beginning; then the loop starts again starting at (begin + 1) to (end - 1) and so forth.</p>            
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Cocktail Sort does not use any buffer nor does make any recursion. Thus, it requires O(1) space in all case.</p>
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Coctail Sort</u></h3>        
      <p>1. Cocktail sort, just like the Bubble sort, works by iterating through the list, comparing adjacent elements and swapping them if they are in the wrong order. The only real difference is that it does it in both directions instead of only going from left to right.</p>
      <p>2. Because of this, cocktail sort manages to get around the “turtles problem” (small elements near the end of the list slowing down the algorithm) of bubble sort. However, it still retains the same worst-case computational complexity</p>
      <p>3. another way of thinking of this sorting algorithm is:Each time I shake the cocktail: the more massive value goes down when I shake down and the lighter value goes up when I shake up.</p>
    </div>
  </div>
          </div>
</Delayed></section>
    );
}
export default fifteenthSortingCoctailSort;