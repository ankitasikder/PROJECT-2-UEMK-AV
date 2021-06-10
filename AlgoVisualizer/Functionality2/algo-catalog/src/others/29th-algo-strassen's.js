import Delayed from '../delayed';
export function twentynineOtherstrassen() {
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
    <h1>STRASSEN's ALGORITHM</h1>
    <p>It is faster than the standard matrix multiplication algorithm and is useful in practice for large matrices, but would be slower than the fastest known algorithms for extremely large matrices.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST:- O(n^2.80)</p>
     <p>WORST:- O(n^2.80)</p>
    <p>AVERAGE:- O(n^2.80)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- O(n2)</p>
     <p>WORST:- O(n2)</p>
    <p>AVERAGE:- O(n2)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Strassen’s matrix is a Divide and Conquer method that helps us to multiply two matrices(of size n X n).</p>
      <p>You just need to remember 4 Rules :</p>
      <p>(I) AHED (Learn it as ‘Ahead’)</p>
      <p>(II) Diagonal</p>
      <p>(III) Last CR</p>
      <p>(IV) First CR</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentynineOtherstrassen;