import Delayed from '../delayed';
export function seventhSearchingAlgo() {
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
  <h1>FIBONACCI SEARCH</h1>
  <p>THIS IS FIBONACCI SEARCHING ALGORITHM</p> 
</div>
<div class="row">
  <div class="col-sm-4">
    <h3><u>TIME COMPLEXITY</u></h3>
    In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm.
   <p>WORST : O(log n)</p>
  <p>AVERAGE: O(log n)</p>           
  </div>
  <div class="col-sm-4">
    <h3><u>SPACE COMPLEXITY</u></h3>
    <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
<p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>

    <p>O(n) for Recursive Fibonacci </p>
  </div>
  <div class="col-sm-4">
    <h3><u>DEFINATION</u></h3>        
    <p>Fibonacci Search is a comparison-based technique that uses Fibonacci numbers to search an element in a sorted array.</p>
    <p>Compared to binary search where the sorted array is divided into two equal-sized parts, one of which is examined further, Fibonacci search divides the array into two parts that have sizes that are consecutive Fibonacci numbers. On average, this leads to about 4% more comparisons to be executed</p>
    <p>but it has the advantage that one only needs addition and subtraction to calculate the indices of the accessed array elements, while classical binary search needs bit-shift, division or multiplication,</p>
  </div>
</div>
</div></Delayed>
</section>
  );
}
export default seventhSearchingAlgo;