import Delayed from '../delayed';
export function seventhSortingCountingSort() {
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
    <h1>COUNTING SORT</h1>
    <p>Counting sort is a stable sorting technique, which is used to sort objects according to the keys that are small numbers. It counts the number of keys whose key values are same. This sorting technique is effective when the difference between different keys are not so big, otherwise, it can increase the space complexity.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME AND SPACE COMPLEXITY</u></h3>
      <p>Time Complexity of Counting Sort: O(n) </p>
     <p>Space Complexity Of Counting Sort: O(n)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>LOGIC</u></h3>
      <p>Counting sort takes O(n + k)O(n+k) time and O(n + k)O(n+k) space, where nn is the number of items we're sorting and kk is the number of possible values.</p>
     <p>We iterate through the input items twice—once to populate counts and once to fill in the output array. Both iterations are O(n)O(n) time. Additionally, we iterate through counts once to fill in nextIndex, which is O(k)O(k) time.</p>
    <p>The algorithm allocates three additional arrays: one for counts, one for nextIndex, and one for the output. The first two are O(k)O(k) space and the final one is O(n)O(n) space.

You can actually combine counts and nextIndex into one array. No asymptotic changes, but it does save O(k)O(k) space.

In many cases cases, kk is O(n)O(n) (i.e.: the number of items to be sorted is not asymptotically different than the number of values those items can take on. Because of this, counting sort is often said to be O(n)O(n) time and space.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Counting Sort</u></h3>        
      <p>1. Counting Sort is a very efficient, stable sorting algorithm with a time and space complexity of O(n + k).</p>
      <p>2. Counting Sort is mainly used for small number ranges. In the JDK, for example, for:</p>
      <p>     byte arrays with more than 64 elements (for fewer elements, Insertion Sort is used)
short or char arrays with more than 1,750 Elementen (for fewer elements, Insertion Sort or Dual-Pivot Quicksort is used)</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default seventhSortingCountingSort;