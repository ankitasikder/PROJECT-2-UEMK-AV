import Delayed from '../delayed';
export function thirtifourthOtherBRENT() {
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
    <h1>BRENT'S ALGORITHM</h1>
    <p>In numerical analysis, Brent's method is a hybrid root-finding algorithm combining the bisection method, the secant method and inverse quadratic interpolation.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.</p>
     <p>Since an algorithm's running time may vary among different inputs of the same size, one commonly considers the worst-case time complexity, which is the maximum amount of time required for inputs of a given size. </p>
    <p>AVERAGE::Time complexity of Brent's Algorithm is big o(m+n). Where m is the smallest index of the sequence which is the beginning of a cycle, and n is the cycle's length</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
    <p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    <p>AVERAGE::space complexity is O(1) as you use only two pointers.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>It has the reliability of bisection but it can be as quick as some of the less-reliable methods.</p>
      <p>The algorithm tries to use the potentially fast-converging secant method or inverse quadratic interpolation if possible, but it falls back to the more robust bisection method if necessary.</p>
      <p>Brent's method is due to Richard Brent[1] and builds on an earlier algorithm by Theodorus Dekker.[2] Consequently, the method is also known as the Brent–Dekker method.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default thirtifourthOtherBRENT;