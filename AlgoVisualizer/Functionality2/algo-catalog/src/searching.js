import sublist from './customImages/sublistsearch.jpg';
import fibonacci from './customImages/Fibonaccisearch.jpg';
import Ksearch from './customImages/Ksearch.jpg';
import Ubiquitous from './customImages/Ubiquitous.jpg';
import Exponential from './customImages/Exponentialsearch.jpg';
import Linear from './customImages/Linearsearch.jpg';
import Binary from './customImages/Binarysearch.jpg';
import Jump from './customImages/Jumpsearch.jpg';
import Interpolation from './customImages/Interpolationsearch.jpg';
import Asearch from './customImages/Asearch.jpg';
import Breadth from './customImages/Breadthsearch.jpg';
import Depth from './customImages/Depthsearch.jpg';
const firstAlgoImg = Linear;
const firstAlgoTitle = "LINEAR SEARCH";
const firstAlgoPath = "firstSearchingAlgo";

const secondAlgoImg = Jump;
const secondAlgoTitle = "JUMP SEARCH";
const secondAlgoPath = "secondSearchingAlgo";

const thirdAlgoImage =Interpolation;
const thirdAlgoTitle = "INTERPOLATION SEARCH";
const thirdAlgoPath = "thirdSearchingAlgo";

const fourthAlgoImage = Binary;
const fourthAlgoTitle = "BINARY SEARCH";
const fourthAlgoPath = "fourthSearchingBinarySearch";

const fifthAlgoImage = Exponential;
const fifthAlgoTitle = "EXPONENTIAL SEARCH";
const fifthAlgoPath = "fifthSearchingAlgo";

const sixthAlgoImage =sublist;
const sixthAlgoTitle = "SUBLIST SEARCH(SEARCH A LINKED LIST IN ANOTHER LIST)";
const sixthAlgoPath = "sixthSearchingAlgo";

const seventhAlgoImage = fibonacci;
const seventhAlgoTitle = "FIBONACCI SEARCH";
const seventhAlgoPath = "seventhSearchingAlgo";

const eighthAlgoImage = Ksearch;
const eighthAlgoTitle = "K SEARCH";
const eighthAlgoPath = "eighthSearchingAlgo";

const ninthAlgoImage = Ubiquitous;
const ninthAlgoTitle = "UBIQUITOUS BINARY SEARCH";
const ninthAlgoPath = "ninthSearchingAlgo";

const tenthAlgoImg = Asearch;
const tenthAlgoTitle = "A*SEARCH";
const tenthAlgoPath = "tenthSearchingastarsearch";

const eleventhAlgoImg = Breadth;
const eleventhAlgoTitle = "BREADTHE FIRST SEARCH";
const eleventhAlgoPath = "eleventhSearchingbfs";

const twelvthAlgoImage = Depth;
const twelvthAlgoTitle = "DEPTH FIRST SEARCH";
const twelvthAlgoPath = "twelvthSearchingdfs";

const firstAlgo = {
  img: firstAlgoImg,
  title: firstAlgoTitle,
  alt:firstAlgoPath
};
const secondAlgo = {
  img: secondAlgoImg,
  title: secondAlgoTitle,
  alt:secondAlgoPath
};
const thirdAlgo = {
  img: thirdAlgoImage,
  title: thirdAlgoTitle,
  alt: thirdAlgoPath
};
const fourthAlgo = {
  img: fourthAlgoImage,
  title: fourthAlgoTitle,
  alt: fourthAlgoPath
};
const fifthAlgo = {
  img: fifthAlgoImage,
  title: fifthAlgoTitle,
  alt: fifthAlgoPath
};
const sixthAlgo = {
  img: sixthAlgoImage,
  title: sixthAlgoTitle,
  alt: sixthAlgoPath
};
const seventhAlgo = {
  img: seventhAlgoImage,
  title: seventhAlgoTitle,
  alt: seventhAlgoPath
};
const eighthAlgo = {
  img: eighthAlgoImage,
  title: eighthAlgoTitle,
  alt: eighthAlgoPath
};
const ninthAlgo = {
  img: ninthAlgoImage,
  title: ninthAlgoTitle,
  alt: ninthAlgoPath
};
const tenthAlgo = {
  img: tenthAlgoImg,
  title: tenthAlgoTitle,
  alt: tenthAlgoPath
};
const eleventhAlgo = {
  img: eleventhAlgoImg,
  title: eleventhAlgoTitle,
  alt: eleventhAlgoPath
};
const twelvthAlgo = {
  img: twelvthAlgoImage,
  title: twelvthAlgoTitle,
  alt: twelvthAlgoPath
};

export const searching = [
  {
    id:1,
    img: firstAlgo.img,
    title: firstAlgo.title,
    alt:firstAlgo.alt,
    specificcations: <p>
In computer science, a linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.
</p>
  },
  {
    id:2,
    img: secondAlgo.img,
    title: secondAlgo.title,
    alt:secondAlgo.alt,
    specificcations:
      <p>
In computer science, a jump search or block search refers to a search algorithm for ordered lists. It works by first checking all items Lₖₘ, where k\in \mathbb  and m is the block size, until an item is found that is larger than the search key.</p>
  },
  {
    id:3,
    img: thirdAlgo.img,
    title: thirdAlgo.title,
    alt:thirdAlgo.alt,
    specificcations: <p>
  Interpolation search is an algorithm for searching for a key in an array that has been ordered by numerical values assigned to the keys. It was first described by W. W. Peterson in 1957.</p>
  },
  {
    id:4,
    img: fourthAlgo.img,
    title: fourthAlgo.title,
    alt:fourthAlgo.alt,
    specificcations: <p>
    In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. </p>
  },
  {
    id:5,
    img: fifthAlgo.img,
    title: fifthAlgo.title,
    alt:fifthAlgo.alt,
    specificcations: <p>
    In computer science, an exponential search is an algorithm, created by Jon Bentley and Andrew Chi-Chih Yao in 1976, for searching sorted, unbounded/infinite lists.</p>
  },
  {
    id:6,
    img: sixthAlgo.img,
    title: sixthAlgo.title,
    alt:sixthAlgo.alt,
    specificcations: <p>
   The sublist search algorithm works by comparing the first element of the first list with the first element of the second list. If the two values don't match, it goes to the next element of the second list. </p>
  },
  {
    id:7,
    img: seventhAlgo.img,
    title: seventhAlgo.title,
    alt:seventhAlgo.alt,
    specificcations: <p>
   In computer science, the Fibonacci search technique is a method of searching a sorted array using a divide and conquer algorithm that narrows down possible locations with the aid of Fibonacci numbers.</p>
  },
  {
    id:8,
    img: eighthAlgo.img,
    title: eighthAlgo.title,
    alt: eighthAlgo.alt,
    specificcations: <p>
   A step array is an array of integer where each element has a difference of at most k with its neighbor. Given a key x, we need to find the index value of x if multiple element exist return the first occurrence of the key.</p>
  },
  {
    id:9,
    img: ninthAlgo.img,
    title: ninthAlgo.title,
    alt: ninthAlgo.alt,
    specificcations: <p>
   We all aware of binary search algorithm. Binary search is easiest difficult algorithm to get it right. I present some interesting problems that I collected on binary search. There were some requests on binary search.</p>
  },
  {
    id:10,
    img: tenthAlgo.img,
    title: tenthAlgo.title,
    alt: tenthAlgo.alt,
    specificcations: <p>
    A* Search algorithm is one of the best and popular technique used in path-finding and graph traversals.</p>
  },
  {
    id:11,
    img: eleventhAlgo.img,
    title: eleventhAlgo.title,
    alt: eleventhAlgo.alt,
    specificcations:
      <p>
        BFS and its application in finding connected components of graphs were invented in 1945 by Konrad Zuse.
</p>
  },
  {
    id:12,
    img: twelvthAlgo.img,
    title: twelvthAlgo.title,
    alt: twelvthAlgo.alt,
    specificcations: <p>
      A version of depth-first search was investigated in the 19th century by French mathematician Charles Pierre Trémaux.
  </p>
  }
    
];