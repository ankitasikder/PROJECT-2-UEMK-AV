import Delayed from '../delayed';
export function firstSearchingAlgo() {
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
    <h1>LINEAR SEARCH</h1>
    <p>THIS IS LINEAR SEARCHING ALGORITHM</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST : O(1)</p>
     <p>WORST : O(n)</p>
    <p>AVERAGE: O(n/2)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST : O(1)</p>
     <p>WORST : O(1) iterative</p>
    <p>AVERAGE: O(n/2)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>In computer science, a linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.</p>
      <p>A linear search runs in at worst linear time and makes at most n comparisons, where n is the length of the list. If each element is equally likely to be searched, then linear search has an average case of 
n+1
/
2
 comparisons, but the average case can be affected if the search probabilities for each element vary. </p>
      <p>Linear search is rarely practical because other search algorithms and schemes, such as the binary search algorithm and hash tables, allow significantly faster searching for all but short lists.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default firstSearchingAlgo;