import Delayed from '../delayed';
export function twentytwoOtherboruvka() {
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
    <h1>BORUVKA</h1>
    <p>Boruvka’s Algorithm is a way to find a minimum spanning tree — a spanning tree where the sum of edge weights is minimized. It was the first algorithm developed (in 1926) to find MSTs; Otakar Boruvka used it to find the most efficient routing for an electrical grid.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>BEST :- O(E log V)</p>
     <p>WORST:- O(E log V)</p>
    <p>AVERAGE:- O(E log V)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>BEST:- Θ(E + V)</p>
     <p>WORST:- Θ(E + V) </p>
    <p>AVERAGE:- Θ(E + V)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Find the minimum spanning tree for the following graph using Buruvka’s Algorithm.</p>
      <p>Step 1:- Write out a list of components. For this graph, we have: A,B,C,D,E,F,G,H,I,J,K,L. This step is optional but helps you to keep track.</p>
      <p>Step 2:- Highlight the cheapest outgoing edge for each node in your list. For example, node A has outgoing edges with weights 1 and 7, so we’ll highlight 1. Continue sequentially (for this list, go to B, then C…).</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentytwoOtherboruvka;