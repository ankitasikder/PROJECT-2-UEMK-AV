import Delayed from '../delayed';
export function fifthSearchingAlgo() {
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
  <h1>EXPONENTIAL SEARCH</h1>
  <p>THIS IS EXPONENTIAL SEARCHING ALGORITHM</p> 
</div>
<div class="row">
  <div class="col-sm-4">
    <h3><u>TIME COMPLEXITY</u></h3>
    <p>BEST : O(1)</p>
   <p>WORST : O(Log2 i)</p>
  <p>AVERAGE: O(log2 i)</p>           
  </div>
  <div class="col-sm-4">
    <h3><u>SPACE COMPLEXITY</u></h3>
    <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
<p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
   <p>WORST : O(1)</p>

  </div>
  <div class="col-sm-4">
    <h3><u>DEFINATION</u></h3>        
    <p>In computer science, an exponential search (also called doubling search or galloping search or Struzik search)[1] is an algorithm, created by Jon Bentley and Andrew Chi-Chih Yao in 1976, for searching sorted, unbounded/infinite lists.</p>
    <p>There are numerous ways to implement this with the most common being to determine a range that the search key resides in and performing a binary search within that range.</p>
    <p>This takes O(log i) where i is the position of the search key in the list, if the search key is in the list, or the position where the search key should be, if the search key is not in the list.</p>
  </div>
</div>
</div></Delayed>
</section>
  );
}
export default fifthSearchingAlgo;