import Delayed from '../delayed';
export function twentythreeOtherkaratsuba() {
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
    <h1>KARATSUBA</h1>
    <p>The Karatsuba algorithm is a fast multiplication algorithm. </p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST :- O(n1.585)</p>
     <p>WORST:- O(n1.585)</p>
    <p>AVERAGE:- O(n1.585) </p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- O(n)</p>
     <p>WORST:- O(n)</p>
    <p>AVERAGE:- O(n)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>The Karatsuba algorithm is a fast multiplication algorithm that uses a divide and conquer approach to multiply two numbers. The naive algorithm for multiplying two numbers has a running time of \Theta\big(n^2\big)Θ(n 
2
 ) while this algorithm has a running time of \Theta\big(n^\log_2 3\big)\approx \Theta\big(n^1.585\big)Θ(n 
log 
2
​	
 3
 )≈Θ(n 
1.585
 ). Being able to multiply numbers quickly is very important. Computer scientists often consider multiplication to be a constant time O(1)O(1) operation, and this is a reasonable simplification for smaller numbers; but for larger numbers, the actual running times need to be factored in, which is O\big(n^2\big)O(n 
2
 ).</p>
      
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentythreeOtherkaratsuba;