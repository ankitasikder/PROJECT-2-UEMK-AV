import Delayed from '../delayed';
export function fourteenthSortingSleepSort() {
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
    <h1>SLEEP SORT</h1>
    <p>Sleep Sort is time-based sorting technique. In this sorting technique , we create different threads for each individual element present in the array. The thread is then made to sleep for an amount of time that is equal to value of the element for which it was created.</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3><u>TIME COMPLEXITY</u></h3>
      <p>Time Complexity Of Sleep Sort: O(nlogn + max(input))</p>
     <p>Although there are many conflicting opinions about the time complexity of sleep sort, but we can approximate the time complexity using the below reasoning-</p>
    <p>Since Sleep() function and creating multiple threads is done internally by the OS using a priority queue (used for scheduling purposes). Hence inserting all the array elements in the priority queue takes O(Nlog N) time. Also the output is obtained only when all the threads are processed, i.e- when all the elements ‘wakes’ up. Since it takes O(arr[i]) time to wake the ith array element’s thread. So it will take a maximum of O(max(input)) for the largest element of the array to wake up. Thus the overall time complexity can be assumed as O(NlogN + max(input)),
where, N = number of elements in the input array, and input = input array elements</p>           
    </div>
    <div class="col-sm-4">
      <h3><u>SPACE COMPLEXITY</u></h3>
      <p>All the things are done by the internal priority queue of the OS. Hence auxiliary space can be ignored.</p> 
    </div>
    <div class="col-sm-4">
      <h3><u>Characteristics Of Sleep Sort</u></h3>        
      <p>1. Sleep Sort is related to Operating System more than any other sorting algorithm. This sorting algorithm is a perfect demonstration of multi-threading and scheduling done by OS.</p>
      <p>2. This sorting technique will always sort in acsending order as the thread with the least amount of sleep time wakes up first and the number gets printed. The largest number will get printed in the end when its thread wakes up.</p>
      <p>3. It is also called as a Mysterious Sorting Algorithm because all the multithreading process happens in background and at the core of the OS. We do not get to know anything about what’s happening in the background.</p>
    </div>
  </div>
</div></Delayed></section>
    );
}
export default fourteenthSortingSleepSort;