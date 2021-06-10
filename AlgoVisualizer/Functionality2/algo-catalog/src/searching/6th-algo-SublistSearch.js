import Delayed from '../delayed';
export function sixthSearchingAlgo() {
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
    <h1>SUBLIST SEARCH</h1>
    <p>THIS IS SUBLIST SEARCHING ALGORITHM</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      In computer science, the time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm.
      <p>BEST : O(n)</p>
     <p>WORST : O(n*m)</p>
     
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity of an algorithm is total space taken by the algorithm with respect to the input size. Space complexity includes both Auxiliary space and space used by input. </p>
<p>Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will require O(n) space. If we create a two dimensional array of size n*n, this will require O(n2) space.</p>
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Take first node of second list.
2- Start matching the first list from this first node.
3- If whole lists match return true.</p>
      <p>Else break and take first list to the first node again.
5- And take second list to its second node.
6- Repeat these steps until any of linked lists becomes empty.</p>
      <p>If first list becomes empty then list found else not.</p>
    </div>
  </div>
  </div></Delayed>
  </section>
    );
  }
  export default sixthSearchingAlgo;