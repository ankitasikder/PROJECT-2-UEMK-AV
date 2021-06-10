import Delayed from '../delayed';
export function sixteenthSortingStrandSort() {
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
    <h1>STRAND SORT</h1>
    <p>A sort algorithm that works well if many items are in order. First, begin a sublist by moving the first item from the original list to the sublist. For each subsequent item in the original list, if it is greater than the last item of the sublist, remove it from the original list and append it to the sublist. Merge the sublist into a final, sorted list. Repeatedly extract and merge sublists until all items are sorted. Handle two or fewer items as special cases.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best Case Time Complexity: O(n) </p>
     <p>Worst Case Time Complexity: O(n^2)</p>
    <p>Average Case Time Complexity: O(n sqrt n)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Strand sort is not in-place as its space complexity is O(n). The algorithm first moves the first element of a list into a sub-list. It then compares the last element in the sub-list to each subsequent element in the original list.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Strand Sort</u></h3>        
      <p>1. Strand sort is a sorting algorithm. It works by repeatedly pulling sorted sublists out of the list to be sorted and merging them with a result array. Each iteration through the unsorted list pulls out a series of elements which were already sorted, and merges those series together.</p>
      <p>2. The name of the algorithm comes from the "strands" of sorted data within the unsorted list which are removed one at a time. It is a comparison sort due to its use of comparisons when removing strands and when merging them into the sorted array.</p>
      <p>3. Strand sort is most useful for data which is stored in a linked list, due to the frequent insertions and removals of data. Using another data structure, such as an array, would greatly increase the running time and complexity of the algorithm due to lengthy insertions and deletions. Strand sort is also useful for data which already has large amounts of sorted data, because such data can be removed in a single strand</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default sixteenthSortingStrandSort;