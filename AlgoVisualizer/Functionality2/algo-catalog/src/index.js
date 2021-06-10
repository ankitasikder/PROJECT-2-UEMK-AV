import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { Algolist } from './Algorithms';
import { BrowserRouter, Route, Switch } from "react-router-dom";
/*<----------------------------------------------------------------------------> */
/* Other Algos Import */
/*<----------------------------------------------------------------------------> */
import firstOtherDIJKSTRA from "./others/1st-algo-DIJKSTRA";
import secondOtherFLOYDWARSHALL from "./others/2nd-algo-FLOYDWARSAL";
import thirdOtherASTARSEARCH from "./others/3rd-algo-ASTARSEARCH";
import fourthOtherbfs from "./others/4th-algo-bfs";
import fifthOtherdfs from "./others/5th-algo-dfs";
import sixthOthergreedy from "./others/6th-algo-greedy";
import seventhOtherhofman from "./others/7th-algo-hofman";
import eighthOtherbit from "./others/8th-algo-bit";
import ninthOthergraph from "./others/9th-algo-graph";
import tenthOtherrandomized from "./others/10th-algo-randomized";
import eleventhOtherkargers from "./others/11th-algo-kargers";
import twelvthOtherhamiltoniancycle from "./others/12th-algo-hamiltoniancycle";
import thirteenthOtherfleurys from "./others/13th-algo-fleurys";
import fourteenthOthereularianpath from "./others/14th-algo-eularianpath";
import fifteenthOthertarjan from "./others/15th-algo-tarjan";
import sixteenOthertransitiveclosure from "./others/16th-algo-transitiveclosure";
import seventeenOtherbiconnectedgraph from "./others/17th-algo-biconnectedgraph";
import eightteenOtherjohnsons from "./others/18th-algo-johnsons";
import nineteenOtherbellmanford from "./others/19th-algo-bellmanford";
import twentyOtherfordfallcurson from "./others/20th-algo-fordfallcurson";
import twentyoneOtherhoffcroftkarp from "./others/21th-algo-hoffcroftkarp";
import twentytwoOtherboruvka from "./others/22th-algo-boruvka";
import twentythreeOtherkaratsuba from "./others/23th-algo-karatsuba";
import twentyfourOtherfloodfill from "./others/24th-algo-floodfill";
import twentyfiveOtherkruskal from "./others/25th-algo-kruskal";
import twentysixOthertopologicalsorting from "./others/26th-algo-topologicalsorting";
import twentysevenOtherprimsminimumspanningtree from "./others/27th-algo-primsminimumspanningtree";
import twentyeightOtherksmallest from "./others/28th-algo-ksmallest";
import twentynineOtherstrassen from "./others/29th-algo-strassen's";
import thirtyOthercooleytukeyfastfouriertransform from "./others/30th-algo-cooleytukeyfastfouriertransform";
import thirtyoneOtherdivideconquror from "./others/31th-algo-divide&conquror";
import thirtytwoOtherchineseremaindertheorem from "./others/32th-algo-chineseremaindertheorem";
import thirtythreeOtheramicablepairs from "./others/33th-algo-amicablepairs";
import thirtifourthOtherBRENT from "./others/34th-algo-brent";
import thirtififthOtherREVERSEDELETE from "./others/35th-algo-reversedelete";
import thirtisixthOtherEDMOND from "./others/36th-algo-edmond";


/*<----------------------------------------------------------------------------> */
/* Sorting Algos Import */
/*<----------------------------------------------------------------------------> */
import firstSortingBubbleSort from "./sorting/1st-algo-BubbleSort";
import secondSortingAlgo, { secondSortingSelectionSort } from "./sorting/2nd-algo-SelectionSort";
import thirdSortingAlgo, { thirdSortingQuickSort } from "./sorting/3rd-algo-QuickSort";
import fourthSortingAlgo, { fourthSortingInsertionSort } from  "./sorting/4th-algo-InsertionSort";
import fifthSortingAlgo, { fifthSortingMergeSort } from './sorting/5th-algo-MergeSort';
import sixthSortingAlgo, { sixthSortingHeapSort } from './sorting/6th-algo-HeapSort';
import seventhSortingAlgo, { seventhSortingCountingSort } from './sorting/7th-algo-CountingSort';
import eighthSortingAlgo, { eighthSortingRadixSort } from './sorting/8th-algo-RadixSort';
import ninethSortingAlgo, { ninethSortingBucketSort } from './sorting/9th-algo-BucketSort';
import tenthSortingCombSort from './sorting/10th-algo-CombSort';
import eleventhSortingTimSort from './sorting/11th-algo-TimSort';
import twelvethSortingCycleSort from './sorting/12th-algo-CycleSort';
import thirteenthSortingBitonicSort from './sorting/13th-algo-BitonicSort';
import fourteenthSortingSleepSort from './sorting/14th-algo-SleepSort';
import fifteenthSortingCoctailSort from './sorting/15th-algo-CoctailSort';
import sixteenthSortingStrandSort from './sorting/16th-algo-StrandSort';
import seventeenthSortingShellSort from './sorting/17th-algo-ShellSort';
import eighteenthSortingTreeSort from './sorting/18th-algo-TreeSort';
import nineteenthSortingPermutationSort from './sorting/19th-algo-PermutationSort';
import twentythSortingPancakeSort from './sorting/20th-algo-PancakeSort';
import twentyonethSortingGnomeSort from './sorting/21th-algo-GnomeSort';
import twentysecondSortingbricksort from "./sorting/22nd-algo-bricksort";
import twentythirdSortingbinaryinsertionsort from "./sorting/23rd-algo-binaryinsertionsort";
import twentyfourthSortingpegionhole from "./sorting/24th-algo-pegionholesort";


/*<----------------------------------------------------------------------------> */
/* Searching Algos Import */
/*<----------------------------------------------------------------------------> */
import firstSearchingAlgo from "./searching/1st-algo-LinearSearch";
import secondSearchingAlgo from "./searching/2nd-algo-JumpSearching";
import thirdSearchingAlgo from "./searching/3rd-algo-InterpolationSearch";
import fourthSearchingBinarySearch from "./searching/4th-algo-BinarySearch";
import fifthSearchingAlgo from "./searching/5th-algo-ExponentialSearch";
import sixthSearchingAlgo from "./searching/6th-algo-SublistSearch";
import seventhSearchingAlgo from "./searching/7th-algo-FibonacciSearch";
import eighthSearchingAlgo from "./searching/8th-algo-KSearch";
import ninthSearchingAlgo from "./searching/9th-algo-UbiquitousSearch";
import tenthSearchingastarsearch from "./searching/10th-algo-astarsearch";
import eleventhSearchingbfs from "./searching/11th-algo-bfs";
import twelvthSearchingdfs from "./searching/12th-algo-dfs";
import NotFound from './NotFound';



/*<----------------------------------------------------------------------------> */
/*<----------------------------------------------------------------------------> */
    const rootElement = document.getElementById("root");
   setTimeout(()=> ReactDOM.render(
      <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Algolist} />
           
           
           
           
           {/*Other Algos Route */}

          <Route path="/firstOtherDIJKSTRA" component={firstOtherDIJKSTRA} />
          <Route path="/secondOtherFLOYDWARSHALL" component={secondOtherFLOYDWARSHALL} />
          <Route path="/thirdOtherASTARSEARCH" component={thirdOtherASTARSEARCH} />
          <Route path="/fourthOtherbfs" component={fourthOtherbfs} />
          <Route path="/fifthOtherdfs" component={fifthOtherdfs} />
          <Route path="/sixthOthergreedy" component={sixthOthergreedy} />
          <Route path="/seventhOtherhofman" component={seventhOtherhofman} />
          <Route path="/eighthOtherbit" component={eighthOtherbit} />
          <Route path="/ninthOthergraph" component={ninthOthergraph} />
          <Route path="/tenthOtherrandomized" component={tenthOtherrandomized} />
          <Route path="/eleventhOtherkargers" component={eleventhOtherkargers} />
          <Route path="/twelvthOtherhamiltoniancycle" component={twelvthOtherhamiltoniancycle} />
          <Route path="/thirteenthOtherfleurys" component={thirteenthOtherfleurys} />
          <Route path="/fourteenthOthereularianpath" component={fourteenthOthereularianpath} />
          <Route path="/fifteenthOthertarjan" component={fifteenthOthertarjan} />
          <Route path="/sixteenOthertransitiveclosure" component={sixteenOthertransitiveclosure} />
          <Route path="/seventeenOtherbiconnectedgraph" component={seventeenOtherbiconnectedgraph} />
          <Route path="/eightteenOtherjohnsons" component={eightteenOtherjohnsons} />
          <Route path="/nineteenOtherbellmanford" component={nineteenOtherbellmanford} />
          <Route path="/twentyOtherfordfallcurson" component={twentyOtherfordfallcurson} />
          <Route path="/twentyoneOtherhoffcroftkarp" component={twentyoneOtherhoffcroftkarp} />
          <Route path="/twentytwoOtherboruvka" component={twentytwoOtherboruvka} />
          <Route path="/twentythreeOtherkaratsuba" component={twentythreeOtherkaratsuba} />
          <Route path="/twentyfourOtherfloodfill" component={twentyfourOtherfloodfill} />
          <Route path="/twentyfiveOtherkruskal" component={twentyfiveOtherkruskal} />
          <Route path="/twentysixOthertopologicalsorting" component={twentysixOthertopologicalsorting} />
          <Route path="/twentysevenOtherprimsminimumspanningtree" component={twentysevenOtherprimsminimumspanningtree} />
          <Route path="/twentyeightOtherksmallest" component={twentyeightOtherksmallest} />
          <Route path="/twentynineOtherstrassen" component={twentynineOtherstrassen} />
          <Route path="/thirtyOthercooleytukeyfastfouriertransform" component={thirtyOthercooleytukeyfastfouriertransform} />
          <Route path="/thirtyoneOtherdivideconquror" component={thirtyoneOtherdivideconquror} />
          <Route path="/thirtytwoOtherchineseremaindertheorem" component={thirtytwoOtherchineseremaindertheorem} />
          <Route path="/thirtythreeOtheramicablepairs" component={thirtythreeOtheramicablepairs} />          
          <Route path="/thirtifourthOtherBRENT" component={thirtifourthOtherBRENT} />
          <Route path="/thirtififthOtherREVERSEDELETE" component={thirtififthOtherREVERSEDELETE} />
          <Route path="/thirtisixthOtherEDMOND" component={thirtisixthOtherEDMOND} />          
          
          
          
          
         {/*Sorting Algos Route */}
          <Route path="/firstSortingBubbleSort" component={firstSortingBubbleSort} />
          <Route path="/secondSortingSelectionsort" component={secondSortingSelectionSort} />
          <Route path="/thirdSortingQuickSort" component={thirdSortingQuickSort} />
          <Route path="/fourthSortingInsertionSort" component={fourthSortingInsertionSort} />
          <Route path="/fifthSortingMergerSort" component={fifthSortingMergeSort} />
          <Route path="/sixthSortingHeapSort" component={sixthSortingHeapSort} />
          <Route path="/seventhSortingCountingSort" component={seventhSortingCountingSort} />
          <Route path="/eighthSortingRadixSort" component={eighthSortingRadixSort} />
          <Route path="/ninethSortingBucketSort" component={ninethSortingBucketSort} />
          <Route path="/tenthSortingCombSort" component={tenthSortingCombSort} />
          <Route path="/eleventhSortingTimSort" component={eleventhSortingTimSort} />
          <Route path="/twelvethSortingCycleSort" component={twelvethSortingCycleSort} />
          <Route path="/thirteenthSortingBitonicSort" component={thirteenthSortingBitonicSort} />
          <Route path="/fourteenthSortingSleepSort" component={fourteenthSortingSleepSort} />
          <Route path="/fifteenthSortingCoctailSort" component={fifteenthSortingCoctailSort} />
          <Route path="/sixteenthSortingStrandSort" component={sixteenthSortingStrandSort} />
          <Route path="/seventeenthSortingShellSort" component={seventeenthSortingShellSort} />
          <Route path="/eighteenthSortingTreeSort" component={eighteenthSortingTreeSort} />
          <Route path="/nineteenthSortingPermutationSort" component={nineteenthSortingPermutationSort} />
          <Route path="/twentythSortingPancakeSort" component={twentythSortingPancakeSort} />
          <Route path="/twentyonethSortingGnomeSort" component={twentyonethSortingGnomeSort} />
           <Route path="/twentysecondSortingbricksort" component={twentysecondSortingbricksort} />
          <Route path="/twentythirdSortingbinaryinsertionsort" component={twentythirdSortingbinaryinsertionsort} />
          <Route path="/twentyfourthSortingpegionhole" component={twentyfourthSortingpegionhole} />
          
          
          
          
          {/*Searching Algos Route */} 
          <Route path="/firstSearchingAlgo" component={firstSearchingAlgo} />
          <Route path="/secondSearchingAlgo" component={secondSearchingAlgo} />
          <Route path="/thirdSearchingAlgo" component={thirdSearchingAlgo} />
          <Route path="/fourthSearchingBinarySearch" component={fourthSearchingBinarySearch} />
          <Route path="/fifthSearchingAlgo" component={fifthSearchingAlgo} />
          <Route path="/sixthSearchingAlgo" component={sixthSearchingAlgo} />
          <Route path="/seventhSearchingAlgo" component={seventhSearchingAlgo} />
          <Route path="/eighthSearchingAlgo" component={eighthSearchingAlgo} />
          <Route path="/ninthSearchingAlgo" component={ninthSearchingAlgo} />
           <Route path="/tenthSearchingastarsearch" component={tenthSearchingastarsearch} />
          <Route path="/eleventhSearchingbfs" component={eleventhSearchingbfs} />
          <Route path="/twelvthSearchingdfs" component={twelvthSearchingdfs} />
         {/*Not Found */}
         <Route component={NotFound}></Route>
      </Switch>
      </BrowserRouter>,
      rootElement
    ),3000);