import Delayed from '../delayed';
export function thirtythreeOtheramicablepairs() {
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
    <h1>AMICABLE PAIRS</h1>
    <p>Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number. (A proper divisor of a number is a positive factor of that number other than the number itself.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>LOGIC</u></h3>
      <p>An efficient solution is be to keep the numbers stored in a map and for every number we find the sum of its proper divisor and check</p>
      <p> if that’s also present in the array.</p>
      <p> If it is present, we can check if they form an amicable pair or not.</p>


               
    </div>
    <div class="col-sm-4">
      <h3><u>COMPLEXITY</u></h3>
      <p>TIME:- O(n^3)</p>
     <p>The code is fairly straight forward and easy to understand (because I could write it lol). The time complexity analysis of the algorithm is  ∑mi=0O(n2).</p>
    <p>It's O(n^2) because each time, it checks the divisors which happens in  ∑numi=0O(1)  and the total evaluates to O(1) + O(1)...... = O(n).</p>
    <p>That roughly evaluates to O(n^3) as a complexity analysis according to the closed forms.</p>  
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
      If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.</p>

      <p>For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.</p>
      <p></p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default thirtythreeOtheramicablepairs;