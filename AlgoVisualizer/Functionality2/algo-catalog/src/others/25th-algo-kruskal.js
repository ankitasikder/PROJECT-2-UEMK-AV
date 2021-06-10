import Delayed from '../delayed';
export function twentyfiveOtherkruskal() {
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
    <h1>KRUSKAL</h1>
    <p>It falls under a class of algorithms called greedy algorithms that find the local optimum in the hopes of finding a global optimum.</p> 
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
      <p>BEST:- O(|E| + |V|)</p>
     <p>WORST:- O(|E| + |V|)</p>
    <p>AVERAGE:- O(|E| + |V|)</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>Kruskal's algorithm is a minimum spanning tree algorithm that takes a graph as input and finds the subset of the edges of that graph which</p>
      <p>1) form a tree that includes every vertex</p>
      <p>2) has the minimum sum of weights among all the trees that can be formed from the graph</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default twentyfiveOtherkruskal;