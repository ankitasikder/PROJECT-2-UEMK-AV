import Delayed from '../delayed';
export function twentyeightOtherksmallest() {
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
    <h1>K SMALLEST</h1>
    <p>First of all, in any interview, try to come up with brute force solution. Brute force solution to find Kth smallest element in array of integers would be to sort the array and return A[k-1] element (K-1 as array is zero base indexed).</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST:- O(N Log N)</p>
     <p>WORST:- O(N Log N)</p>
    <p>AVERAGE:- O(N Log N)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- O(logn)</p>
     <p>WORST:- O(logn)</p>
    <p>AVERAGE:- O(logn)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>In computer science, quickselect is a selection algorithm to find the kth smallest element in an unordered list. It is related to the quicksort sorting algorithm. Like quicksort, it was developed by Tony Hoare, and thus is also known as Hoare's selection algorithm.</p>
      <p>Quickselect uses the same overall approach as quicksort, choosing one element as a pivot and partitioning the data in two based on the pivot, accordingly as less than or greater than the pivot. However, instead of recursing into both sides, as in quicksort, quickselect only recurses into one side – the side with the element it is searching for. This reduces the average complexity from O(n log n) to O(n), with a worst case of O(n2).</p>
      <p></p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentyeightOtherksmallest;