import Delayed from '../delayed';
export function eighteenthSortingTreeSort() {
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
    <h1>TREE SORT</h1>
    <p>A tree sort is a sort algorithm that builds a binary search tree from the elements to be sorted, and then traverses the tree (in-order) so that the elements come out in sorted order.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Worst Case Time Complexity : O(n^2)</p>
     <p>The worst case time complexity of Tree Sort can be improved by using a self-balancing binary search tree like Red Black Tree, AVL Tree. Using self-balancing binary tree Tree Sort will take O(n log n) time to sort the array in worst case.</p>
    <p>Average Case Time Complexity : O(n log n)</p>
    <p>Adding one item to a Binary Search tree on average takes O(log n) time. Therefore, adding n items will take O(n log n) time</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>The space complexity of tree sort is O(n) & O(n) in both the average and the worst cases.</p>
     <p>WORST.</p>
    <p>AVERAGE.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Tree Sort</u></h3>        
      <p>1.The properties of binary search tree is completely make use of tree sort algorithm. The tree sort algorithm first builds a binary search tree using the elements in an array which is to be sorted and then does an in-order traversal so that the numbers are retrived in a sorted order </p>
      <p>2. The main advantage of tree sort algorithm is that we can make changes very easily as in a linked list.Sorting in Tree sort algorithm is as fast as quick sort algorithm.</p>
      <p>3. The worst case occur when the elements in an array is already sorted.In worst case, the running time of tree sort algorithm is 0 (n2).</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default eighteenthSortingTreeSort;