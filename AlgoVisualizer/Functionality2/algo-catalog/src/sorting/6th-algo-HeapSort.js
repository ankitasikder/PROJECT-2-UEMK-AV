import Delayed from '../delayed';
export function sixthSortingHeapSort() {
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
    <h1>HEAP SORT</h1>
    <p>A run of heapsort sorting an array of randomly permuted values. In the first stage of the algorithm the array elements are reordered to satisfy the heap property. Before the actual sorting takes place, the heap tree structure is shown briefly for illustration.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Time Complexity Of Heap Sort: O(nlogn)</p>
     <p>Let's start with the heapify() method since we also need it for the heap's initial build.

In the heapify() function, we walk through the tree from top to bottom. The height of a binary tree (the root not being counted) of size n is log2 n at most, i.e., if the number of elements doubles, the tree becomes only one level deeper:

Heapsort - Zeitkomplexität heapify()-Methode
The complexity for the heapify() function is accordingly O(log n).</p>
    <p>To initially build the heap, the heapify() method is called for each parent node – backward, starting with the last node and ending at the tree root.

A heap of size n has n/2 (rounded down) parent nodes:

Heapsort-Zeitkomplexität: Anzahl und Reihenfolge der heapify()-Aufrufe durch buildHeap()
Since the complexity of the heapify() method is O(log n) as shown above, the complexity for the buildHeap() method is, therefore, maximum O(n log n)</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity Of Heap Sort: O(1)</p>
     <p>Only O(1) additional space is required because the heap is built inside the array to be sorted.</p>
    <p>Data in an array can be rearranged into a heap, in place.</p> 
    <p>For a heap sort, you arrange the data, with the smallest element at the back. Then you swap the last item in the array (smallest item in the heap), with the first item in the array (a large number), and then shuffle that large element down the heap until it's in a new proper position and the heap is again a new min heap, with the smallest remaining element in the last element of the array.</p>
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics of Heap Sort</u></h3>        
      <p>1. Shape property: Heap is always a complete binary tree which means that all the levels of a tree are fully filled. There should not be a node which has only one child. Every node except leaves should have two children then only a heap is called as a complete binary tree.</p>
      <p>2. Heap property: All nodes are either greater than or equal to or less than or equal to each of its children. This means if the parent node is greater than the child node it is called as a max heap. Whereas if the parent node is lesser than the child node it is called as a min heap.</p>
      <p>Working Of Heao Sort:</p>
      <p>Basically, there are two phases involved in the sorting of elements using heap sort algorithm they are as follows:

First, start with the construction of a heap by adjusting the array elements.
Once the heap is created repeatedly eliminate the root element of the heap by shifting it to the end of the array and then store the heap structure with remaining elements.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default sixthSortingHeapSort;