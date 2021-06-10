import Delayed from '../delayed';
export function twentysecondSortingbricksort() {
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
    <h1>EVEN-ODD SORT/BRICK SORT</h1>
    <p>In computing, an odd–even sort or odd–even transposition sort (also known as brick sort or parity sort) is a relatively simple sorting algorithm, developed originally for use on parallel processors with local interconnections.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
    <p>AVERAGE::O(N2) where, N = Number of elements in the input array. </p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
      <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>AVERAGE::Auxiliary Space O(1) Just like bubble sort this is also an in-place algorithm</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>It is a comparison sort related to bubble sort, with which it shares many characteristics. It functions by comparing all odd/even indexed pairs of adjacent elements in the list and, if a pair is in the wrong order (the first is larger than the second) the elements are switched. This is basically a variation of bubble-sort.</p>
      <p>This algorithm is divided into two phases- Odd and Even Phase.</p>
      <p>The algorithm runs until the array elements are sorted and in each iteration two phases occurs- Odd and Even Phases.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentysecondSortingbricksort;