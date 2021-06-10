import Delayed from '../delayed';
export function secondSearchingAlgo() {
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
    <h1>JUMP SEARCH</h1>
    <p>THIS IS JUMP SEARCHING ALGORITHM</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST : O(1)</p>
     <p>WORST : O(√n)</p>
    <p>AVERAGE: O(√n) </p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
<p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
      <p>BEST : O(1)</p>

    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Like Binary Search, Jump Search is a searching algorithm for sorted arrays.</p>
      <p>The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.</p>
      <p>Works only sorted arrays.
The optimal size of a block to be jumped is (√ n). This makes the time complexity of Jump Search O(√ n).
The time complexity of Jump Search is between Linear Search ( ( O(n) ) and Binary Search ( O (Log n) ).</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default secondSearchingAlgo;