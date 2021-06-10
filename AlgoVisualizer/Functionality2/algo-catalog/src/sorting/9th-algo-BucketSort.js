import Delayed from '../delayed';
export function ninethSortingBucketSort() {
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
    <h1>BUCKET SORT</h1>
    <p>Bucket Sort is a comparison-type algorithm which assigns elements of a list we want to sort in Buckets, or Bins. The contents of these buckets are then sorted, typically with another algorithm.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Best Case Complexity: O(n+k)</p>
      <p>It occurs when the elements are uniformly distributed in the buckets with a nearly equal number of elements in each bucket.
The complexity becomes even better if the elements inside the buckets are already sorted.
If insertion sort is used to sort elements of a bucket then the overall complexity in the best case will be linear ie. O(n+k). O(n) is the complexity for making the buckets and O(k) is the complexity for sorting the elements of the bucket using algorithms having linear time complexity at the best case.</p>
     <p>Worst Case Complexity: O(n^2)</p>
     <p>When there are elements of close range in the array, they are likely to be placed in the same bucket. This may result in some buckets having more number of elements than others.
It makes the complexity depend on the sorting algorithm used to sort the elements of the bucket.
The complexity becomes even worse when the elements are in reverse order. If insertion sort is used to sort elements of the bucket, then the time complexity becomes O(n2).</p>
    <p>Average Case Complexity: O(n)</p>
    <p>It occurs when the elements are distributed randomly in the array. Even if the elements are not distributed uniformly, bucket sort runs in linear time. It holds true until the sum of the squares of the bucket sizes is linear in the total number of elements.</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>Space Complexity Of Bucket Sort: O(n+k)</p>
      <p>where n is the number of elements to be sorted and k is the number of buckets

For an upper bound on the worst-case cost, it's sufficient to show that it can't be worse. Assuming that insertion sort takes ≤cn2 steps on n elements,
it is an upper bound on the cost of sorting all the buckets. For an upper bound on the worst case for bucket sort, maximize this function subject to ∑|Bi|=n (and add the remaining cost, which is O(n) for all inputs).

For a lower bound on the worst-case cost, we have to find an infinite class of actual inputs and show that their cost behaves as claimed. [0,…,0] serves to show an Ω(n2) lower bound</p>
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Bucket Sort</u></h3>        
      <p>1. Bucket sort assumes that the input is drawn from a uniform distribution.
The computational complexity estimates involve the number of buckets.</p>
      <p>2. Bucket sort can be exceptionally fast because of the way elements are assigned to buckets, typically using an array where the index is the value.</p>
      <p>3. This means that more auxiliary memory is required for the buckets at the cost of running time than more comparison sorts.</p>
    </div>
  </div>
</div></Delayed>
</section>
    );
}
export default ninethSortingBucketSort;