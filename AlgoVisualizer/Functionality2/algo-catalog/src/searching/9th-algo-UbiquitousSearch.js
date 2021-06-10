import Delayed from '../delayed';
export function ninthSearchingAlgo() {
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
    <h1>UBIQUITOUS BINARY SEARCH</h1>
    <p>THIS IS UBIQUITOUS BINARY SEARCHING ALGORITHM</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>LOGIC</u></h3>
      <p>Problem Statement: Given a sorted array of N distinct elements. Find a key in the array using least number of comparisons. (Do you think binary search is optimal to search a key in sorted array?)Without much theory, here is typical binary search algorithm.</p>
      <p>Theoretically we need log N + 1 comparisons in worst case. If we observe, we are using two comparisons per iteration except during final successful match, if any. In practice, comparison would be costly operation, it won’t be just primitive type comparison. It is more economical to minimize comparisons as that of theoretical limit.</p>
      <p>In the while loop we are depending only on one comparison. The search space converges to place l and r point two different consecutive elements. We need one more comparison to trace search status.</p>         
    </div>
    <div class="col-sm-4">
      <h3><u>CASE AND CONDITIONS</u></h3>
      <p>If all elements in the array are smaller than key, left pointer moves till last element.</p>
     <p>If all elements in the array are greater than key, it is an error condition.</p>
    <p>If all elements in the array equal and key, it is worst case input to our implementation</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>EXAMPLES</u></h3>        
      <p> Given a sorted array of distinct elements, and the array is rotated at an unknown position. Find minimum element in the array.</p>
      <p>We can see  pictorial representation of sample input array in the below figure.</p>
      <p>We converge the search space till l and r points single element. If the middle location falls in the first pulse, we converge our search space to A[m+1 … r]. If the middle location falls in the second pulse, we converge our search space to A[1 … m]. At every iteration we check for search space size, if it is 1, we are done.</p>
    </div>
  </div>
  </div></Delayed>
  </section>
    );
  }
  export default ninthSearchingAlgo;