import Delayed from '../delayed';
export function fourthSearchingBinarySearch() {
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
    <h1>BINARY SEARCH</h1>
    <p>THIS IS BINARY SEARCHING ALGORITHM</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST : O(1)</p>
     <p>WORST : Olog(n)</p>
    <p>AVERAGE: Olog(n)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST : O(1)</p>
     <p>WORST : O(n)</p>
    <p>AVERAGE: O(n)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. </p>
      <p>If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.</p>
      <p>Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default fourthSearchingBinarySearch;