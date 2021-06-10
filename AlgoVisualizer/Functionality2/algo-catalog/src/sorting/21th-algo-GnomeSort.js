import Delayed from '../delayed';
export function twentyonethSortingGnomeSort() {
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
    <h1>GNOME SORT</h1>
    <p>The gnome sort is a sorting algorithm which is similar to insertion sort in that it works with one item at a time but gets the item to the proper place by a series of swaps, similar to a bubble sort. It is conceptually simple, requiring no nested loops.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best case time complexity: Θ(n)</p>
     <p>Worst case time complexity: Θ(n^2)</p>
    <p>Average case time complexity: Θ(n^2)</p>
    <p>As there are no nested loop (only one while) it may seem that this is a linear O(N) time algorithm. But the time complexity is O(N^2). This is because the variable – ‘index’ in our program doesn’t always gets incremented, it gets decremented too.</p>           
    <p>However this sorting algorithm is adaptive and performs better if the array is already/partially sorted.</p>
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space complexity: Θ(1) auxiliary</p>
     <p>This is an in-place algorithm. So O(1) auxiliary space is needed.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>DEFINATION</u></h3>        
      <p>1. Gnome sort is used everywhere where a stable sort is not needed.</p>
      <p>2. Gnome Sort is an in-place sort that is does not require any extra storage.</p>
      <p>3. The gnome sort is a sorting algorithm which is similar to insertion sort in that it works with one item at a time but gets the item to the proper place by a series of swaps, similar to a bubble sort.</p>
      <p>4. It is conceptually simple, requiring no nested loops. The average running time is O(n^2) but tends towards O(n) if the list is initially almost sorted.</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default twentyonethSortingGnomeSort;