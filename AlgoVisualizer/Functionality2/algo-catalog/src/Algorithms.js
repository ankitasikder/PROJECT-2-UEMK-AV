import { sorting } from './sorting';
import { searching } from './searching';
import {Link } from "react-router-dom";
import Dijikstra from './othersimages/DIJKSTRAALGORITHM.jpg';
import Astar from './othersimages/Astaralgo.jpg';
import Amicable from './othersimages/Amicable.jpg';
import Bellman from './othersimages/Bellman.jpg';
import Biconnected from './othersimages/Biconnected.jpg';
import Bitwise from './othersimages/Bitwise.jpg';
import Boruvka from './othersimages/Boruvka.jpg';
import Breadthfirst from './othersimages/Breadthfirstalgo.jpg';
import Brent from './othersimages/Brent.jpg';
import Chinese from './othersimages/Chinese.jpg';
import Cooley from './othersimages/Cooley.jpg';
import Depthfirst from './othersimages/Depthfirstalgo.jpg';
import Divide from './othersimages/Divide.jpg';
import Edmond from './othersimages/Edmond.jpg';
import Eularian from './othersimages/Eularian.jpg';
import Fleurys from './othersimages/Fleurys.jpg';
import Floodfill from './othersimages/Floodfill.jpg';
import Floyd from './othersimages/Floyd.jpg';
import Ford from './othersimages/Ford.jpg';
import Graph from './othersimages/Graph.jpg';
import Greedy from './othersimages/Greedy.jpg';
import Hamiltonian from './othersimages/Hamiltonian.jpg';
import Hoffcroft from './othersimages/Hoffcroft.jpg';
import Huffman from './othersimages/Huffman.jpg';
import Jhonson from './othersimages/Jhonson.jpg';
import Karatsuba from './othersimages/Karatsuba.jpg';
import Kargers from './othersimages/Kargers.jpg';
import Kruskal from './othersimages/Kruskal.jpg';
import Ksmall from './othersimages/Ksmall.jpg';
import Prims from './othersimages/Prims.jpg';
import Randomized from './othersimages/Randomized.jpg';
import Reverse from './othersimages/Reverse.jpg';
import Strassen from './othersimages/Strassen.jpg';
import Tarjan from './othersimages/TARJAN.jpg';
import Toopological from './othersimages/Toopologicalalgo.jpg';
import Transitive from './othersimages/Transitive.jpg';
;

const firstAlgoImg = Dijikstra;
const firstAlgoTitle = "DIJKSTRA'S ALGORITHM";
const firstAlgoPath = "firstOtherDIJKSTRA";

const secondAlgoImg = Floyd;
const secondAlgoTitle = "FLOYD WARSHALL'S ALGORITHM";
const secondAlgoPath = "secondOtherFLOYDWARSHALL";

const thirdAlgoImage = Astar;
const thirdAlgoTitle = "A*SEARCH ALGORITHM";
const thirdAlgoPath = "thirdOtherASTARSEARCH";

const fourthAlgoImage = Breadthfirst;
const fourthAlgoTitle = "BREADTHE FIRST SEARCH ALGORITHM";
const fourthAlgoPath = "fourthOtherbfs";

const fifthAlgoImage = Depthfirst;
const fifthAlgoTitle = "DEPTH FIRST SEARCH ALGORITHM";
const fifthAlgoPath = "fifthOtherdfs";

const sixthAlgoImage = Greedy;
const sixthAlgoTitle = "GREEDY ALGORITHM";
const sixthAlgoPath = "sixthOthergreedy";

const seventhAlgoImage = Huffman;
const seventhAlgoTitle = "HUFFMAN ALGORITHM";
const seventhAlgoPath = "seventhOtherhofman";

const eighthAlgoImage = Bitwise;
const eighthAlgoTitle = "BITWISE ALGORITHM";
const eighthAlgoPath = "eighthOtherbit";

const ninthAlgoImage = Graph;
const ninthAlgoTitle = "GRAPH ALGORITHM";
const ninthAlgoPath = "ninthOthergraph";

const tenthAlgoImage = Randomized;
const tenthAlgoTitle = "RANDOMIZED ALGORITHM";
const tenthAlgoPath = "tenthOtherrandomized";

const eleventhAlgoImage = Kargers;
const eleventhAlgoTitle = "KARGERS ALGORITHM";
const eleventhAlgoPath = "eleventhOtherkargers";

const twelvthAlgoImage = Hamiltonian;
const twelvthAlgoTitle = "HAMILTONIAN CYCLE ALGORITHM";
const twelvthAlgoPath = "twelvthOtherhamiltoniancycle";

const thirteenthAlgoImage = Fleurys;
const thirteenthAlgoTitle = "FLEURYS ALGORITHM";
const thirteenthAlgoPath = "thirteenthOtherfleurys";

const fourteenthAlgoImage = Eularian;
const fourteenthAlgoTitle = "EULARIAN PATH ALGORITHM";
const fourteenthAlgoPath = "fourteenthOthereularianpath";

const fifteenthAlgoImage = Tarjan;
const fifteenthAlgoTitle = "TARJAN'S ALGORITHM";
const fifteenthAlgoPath = "fifteenthOthertarjan";



const sixteenOthertransitiveclosureImg = Transitive;
const sixteenOthertransitiveclosureTitle = "TRANSITIVE CLOSURE";
const sixteenOthertransitiveclosurePath = "sixteenOthertransitiveclosure";

const seventeenOtherbiconnectedgraphImg = Biconnected;
const seventeenOtherbiconnectedgraphTitle = "BICONNECTED GRAPH";
const seventeenOtherbiconnectedgraphPath = "seventeenOtherbiconnectedgraph";

const eightteenOtherjohnsonsImg = Jhonson;
const eightteenOtherjohnsonsTitle = "JOHNSON ALGORITHM";
const eightteenOtherjohnsonsPath = "eightteenOtherjohnsons";

const nineteenOtherbellmanfordImage = Bellman;
const nineteenOtherbellmanfordTitle = "BELLMAN FORD ALGORITHM";
const nineteenOtherbellmanfordPath = "nineteenOtherbellmanford";

const twentyOtherfordfallcursonImage = Ford;
const twentyOtherfordfallcursonTitle = "FORD OF FALLCURSON ALGORITHM";
const twentyOtherfordfallcursonPath = "twentyOtherfordfallcurson";

const twentyoneOtherhoffcroftkarpImage = Hoffcroft;
const twentyoneOtherhoffcroftkarpTitle = "HOFFCROFT KARP ALGORITHM";
const twentyoneOtherhoffcroftkarpPath = "twentyoneOtherhoffcroftkarp";

const twentytwoOtherboruvkaImage = Boruvka;
const twentytwoOtherboruvkaTitle = "BORUVKA";
const twentytwoOtherboruvkaPath = "twentytwoOtherboruvka";

const twentythreeOtherkaratsubaImage =Karatsuba;
const twentythreeOtherkaratsubaTitle = "KARATSUBA";
const twentythreeOtherkaratsubaPath = "twentythreeOtherkaratsuba";

const twentyfourOtherfloodfillImage =Floodfill;
const twentyfourOtherfloodfillTitle = "FLOODFILL";
const twentyfourOtherfloodfillPath = "twentyfourOtherfloodfill";

const twentyfiveOtherkruskalImage = Kruskal;
const twentyfiveOtherkruskalTitle = "KRUSKAL";
const twentyfiveOtherkruskalPath = "twentyfiveOtherkruskal";

const twentysixOthertopologicalsortingImage = Toopological;
const twentysixOthertopologicalsortingTitle = "TOPOLOGICAL SORTING";
const twentysixOthertopologicalsortingPath = "twentysixOthertopologicalsorting";

const twentysevenOtherprimsminimumspanningtreeImage = Prims;
const twentysevenOtherprimsminimumspanningtreeTitle = "PRIMS MINIMUM SPANNING TREE";
const twentysevenOtherprimsminimumspanningtreePath = "twentysevenOtherprimsminimumspanningtree";

const twentyeightOtherksmallestImage = Ksmall;
const twentyeightOtherksmallestTitle = "K SMALLEST";
const twentyeightOtherksmallestPath = "twentyeightOtherksmallest";

const twentynineOtherstrassenImage = Strassen;
const twentynineOtherstrassenTitle = "STRASSEN's";
const twentynineOtherstrassenPath = "twentynineOtherstrassen";

const thirtyOthercooleytukeyfastfouriertransformImage = Cooley;
const thirtyOthercooleytukeyfastfouriertransformTitle = "Cooley Tukey Fast Fourier Transform";
const thirtyOthercooleytukeyfastfouriertransformPath = "thirtyOthercooleytukeyfastfouriertransform";

const thirtyoneOtherdivideconqurorImage = Divide;
const thirtyoneOtherdivideconqurorTitle = "DIVIDE & CONQUROR";
const thirtyoneOtherdivideconqurorPath = "thirtyoneOtherdivideconquror";

const thirtytwoOtherchineseremaindertheoremImage = Chinese;
const thirtytwoOtherchineseremaindertheoremTitle = "CHINESE REMAINDER THEOREM";
const thirtytwoOtherchineseremaindertheoremPath = "thirtytwoOtherchineseremaindertheorem";

const thirtythreeOtheramicablepairsImage =Amicable;
const thirtythreeOtheramicablepairsTitle = "AMICABLE PAIRS";
const thirtythreeOtheramicablepairsPath = "thirtythreeOtheramicablepairs";

const thirtifourthAlgoImage =Brent;
const thirtifourthAlgoTitle = "BRENT'S ALGORITHM";
const thirtifourthAlgoPath = "thirtifourthOtherBRENT";

const thirtififthAlgoImage = Reverse;
const thirtififthAlgoTitle = "REVERSE DELETE ALGORITHM";
const thirtififthAlgoPath = "thirtififthOtherREVERSEDELETE";

const thirtisixthAlgoImage = Edmond;
const thirtisixthAlgoTitle = "EDMOND'S ALGORITHM";
const thirtisixthAlgoPath = "thirtisixthOtherEDMOND";


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
  img: tenthAlgoImage,
  title: tenthAlgoTitle,
  alt: tenthAlgoPath
};
const eleventhAlgo = {
  img: eleventhAlgoImage,
  title: eleventhAlgoTitle,
  alt: eleventhAlgoPath
};
const twelvthAlgo = {
  img: twelvthAlgoImage,
  title: twelvthAlgoTitle,
  alt: twelvthAlgoPath
};
const thirteenthAlgo = {
  img: thirteenthAlgoImage,
  title: thirteenthAlgoTitle,
  alt: thirteenthAlgoPath
};
const fourteenthAlgo = {
  img: fourteenthAlgoImage,
  title: fourteenthAlgoTitle,
  alt: fourteenthAlgoPath
};
const fifteenthAlgo = {
  img: fifteenthAlgoImage,
  title: fifteenthAlgoTitle,
  alt: fifteenthAlgoPath
};


const sixteenOthertransitiveclosure = {
  img: sixteenOthertransitiveclosureImg,
  title: sixteenOthertransitiveclosureTitle,
  alt:sixteenOthertransitiveclosurePath
};
const seventeenOtherbiconnectedgraph = {
  img: seventeenOtherbiconnectedgraphImg,
  title: seventeenOtherbiconnectedgraphTitle,
  alt:seventeenOtherbiconnectedgraphPath
};
const eightteenOtherjohnsons = {
  img: eightteenOtherjohnsonsImg,
  title: eightteenOtherjohnsonsTitle,
  alt:eightteenOtherjohnsonsPath
};
const nineteenOtherbellmanford = {
  img: nineteenOtherbellmanfordImage,
  title: nineteenOtherbellmanfordTitle,
  alt: nineteenOtherbellmanfordPath
};
const twentyOtherfordfallcurson = {
  img: twentyOtherfordfallcursonImage,
  title: twentyOtherfordfallcursonTitle,
  alt: twentyOtherfordfallcursonPath
};
const twentyoneOtherhoffcroftkarp = {
  img: twentyoneOtherhoffcroftkarpImage,
  title: twentyoneOtherhoffcroftkarpTitle,
  alt: twentyoneOtherhoffcroftkarpPath
};
const twentytwoOtherboruvka = {
  img: twentytwoOtherboruvkaImage,
  title: twentytwoOtherboruvkaTitle,
  alt: twentytwoOtherboruvkaPath
};
const twentythreeOtherkaratsuba = {
  img: twentythreeOtherkaratsubaImage,
  title: twentythreeOtherkaratsubaTitle,
  alt: twentythreeOtherkaratsubaPath
};
const twentyfourOtherfloodfill = {
  img: twentyfourOtherfloodfillImage,
  title: twentyfourOtherfloodfillTitle,
  alt: twentyfourOtherfloodfillPath
};
const twentyfiveOtherkruskal = {
  img: twentyfiveOtherkruskalImage,
  title: twentyfiveOtherkruskalTitle,
  alt: twentyfiveOtherkruskalPath
};
const twentysixOthertopologicalsorting = {
  img: twentysixOthertopologicalsortingImage,
  title: twentysixOthertopologicalsortingTitle,
  alt: twentysixOthertopologicalsortingPath
};
const twentysevenOtherprimsminimumspanningtree = {
  img: twentysevenOtherprimsminimumspanningtreeImage,
  title: twentysevenOtherprimsminimumspanningtreeTitle,
  alt: twentysevenOtherprimsminimumspanningtreePath
};
const twentyeightOtherksmallest = {
  img: twentyeightOtherksmallestImage,
  title: twentyeightOtherksmallestTitle,
  alt: twentyeightOtherksmallestPath
};
const twentynineOtherstrassen = {
  img: twentynineOtherstrassenImage,
  title: twentynineOtherstrassenTitle,
  alt: twentynineOtherstrassenPath
};
const thirtyOthercooleytukeyfastfouriertransform = {
  img: thirtyOthercooleytukeyfastfouriertransformImage,
  title: thirtyOthercooleytukeyfastfouriertransformTitle,
  alt: thirtyOthercooleytukeyfastfouriertransformPath
};
const thirtyoneOtherdivideconquror = {
  img: thirtyoneOtherdivideconqurorImage,
  title: thirtyoneOtherdivideconqurorTitle,
  alt: thirtyoneOtherdivideconqurorPath
};
const thirtytwoOtherchineseremaindertheorem = {
  img: thirtytwoOtherchineseremaindertheoremImage,
  title: thirtytwoOtherchineseremaindertheoremTitle,
  alt: thirtytwoOtherchineseremaindertheoremPath
};
const thirtythreeOtheramicablepairs = {
  img: thirtythreeOtheramicablepairsImage,
  title: thirtythreeOtheramicablepairsTitle,
  alt: thirtythreeOtheramicablepairsPath
};
const thirtifourthAlgo = {
  img: thirtifourthAlgoImage,
  title: thirtifourthAlgoTitle,
  alt: thirtifourthAlgoPath
};
const thirtififthAlgo = {
  img: thirtififthAlgoImage,
  title: thirtififthAlgoTitle,
  alt: thirtififthAlgoPath
};
const thirtisixthAlgo = {
  img: thirtisixthAlgoImage,
  title: thirtisixthAlgoTitle,
  alt: thirtisixthAlgoPath
};



export function Algolist() {
  return (
    <section>
        <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
      <center><div className="godText"><h1>SEARCHING ALGORITHMS</h1></div></center>
      <center><section className="algolist">
            {searching.map((algo,index) =>{
        const { img, title, specificcations } = algo;
        return (
          <Searching key={algo.id}{...algo}></Searching>
        );
  })}
      </section></center>
      <br></br><br></br>
      <center><div className="godText"><h1>SORTING ALGORITHMS</h1></div></center>
      <center>
       <section className="algolist">
      {sorting.map((algo,index) =>{
        const { img, title, specificcations } = algo;
        return (
          <Sorting key={algo.id}{...algo}></Sorting>
        );
  })}
      </section></center>
      <br></br><br></br>
      <center><div className="godText"><h1>OTHERS ALGORITHMS</h1></div></center>
      <certer>
    <section className="algolist">



    <OtherAlgo img={firstAlgo.img} title={firstAlgo.title} alt={firstAlgo.alt} >
<p>Dijkstra’s algorithm is very similar to Prim’s algorithm for minimum spanning tree. </p>
          </OtherAlgo>
      <OtherAlgo img={secondAlgo.img} title={secondAlgo.title} alt={secondAlgo.alt}>
<p>The Floyd Warshall Algorithm is for solving the All Pairs Shortest Path problem. </p>
      </OtherAlgo>
      <OtherAlgo img={thirdAlgo.img} title={thirdAlgo.title} alt={thirdAlgo.alt}>
<p>A* Search algorithm is one of the best and popular technique used in path-finding and graph traversals.</p>
          </OtherAlgo>
        
      <OtherAlgo img={fourthAlgo.img} title={fourthAlgo.title} alt={fourthAlgo.alt}>
<p>BFS and its application in finding connected components of graphs were invented in 1945 by Konrad Zuse.</p>
          </OtherAlgo>

      <OtherAlgo img={fifthAlgo.img} title={fifthAlgo.title} alt={fifthAlgo.alt}>
<p>A version of depth-first search was investigated in the 19th century by French mathematician Charles Pierre Trémaux.</p>
      </OtherAlgo>
      <OtherAlgo img={sixthAlgo.img} title={sixthAlgo.title} alt={sixthAlgo.alt}>
<p>Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. </p>
          </OtherAlgo>
        
      <OtherAlgo img={seventhAlgo.img} title={seventhAlgo.title} alt={seventhAlgo.alt}>
<p>The process of finding or using such a code proceeds by means of Huffman coding, an algorithm developed by David A. Huffman while he was a Sc.D. student at MIT, and published in the 1952 paper "A Method for the Construction of Minimum-Redundancy Codes"</p>
          </OtherAlgo>
      <OtherAlgo img={eighthAlgo.img} title={eighthAlgo.title} alt={eighthAlgo.alt}>
<p>The bitwise operations are found to be much faster and are some times used to improve the efficiency of a program.</p>
          </OtherAlgo>

      <OtherAlgo img={ninthAlgo.img} title={ninthAlgo.title} alt={ninthAlgo.alt}>
<p>A graph is an abstract notation used to represent the connection between pairs of objects. </p>
      </OtherAlgo>
     
      <OtherAlgo img={tenthAlgo.img} title={tenthAlgo.title} alt={tenthAlgo.alt}>
<p>An algorithm that uses random numbers to decide what to do next anywhere in its logic is called Randomized Algorithm. </p>
          </OtherAlgo>
        
      <OtherAlgo img={eleventhAlgo.img} title={eleventhAlgo.title} alt={eleventhAlgo.alt}>
<p>Karger's algorithm is a randomized algorithm to compute a minimum cut of a connected graph.</p>
      </OtherAlgo>
      <OtherAlgo img={twelvthAlgo.img} title={twelvthAlgo.title} alt={twelvthAlgo.alt}>
<p>In the mathematical field of graph theory, a Hamiltonian path (or traceable path) is a path in an undirected or directed graph that visits each vertex exactly once.</p>
          </OtherAlgo>
      
      <OtherAlgo img={thirteenthAlgo.img} title={thirteenthAlgo.title} alt={thirteenthAlgo.alt}>
<p>Fleury’s Algorithm is used to display the Euler path or Euler circuit from a given graph.</p>
          </OtherAlgo>
          
      <OtherAlgo img={fourteenthAlgo.img} title={fourteenthAlgo.title} alt={fourteenthAlgo.alt}>
<p>A trail in a finite graph that visits every edge exactly once (allowing for revisiting vertices)</p>
      </OtherAlgo>
      <OtherAlgo img={fifteenthAlgo.img} title={fifteenthAlgo.title} alt={fifteenthAlgo.alt}>
<p>An algorithm in graph theory for finding the strongly connected components (SCCs) of a directed graph</p>
          </OtherAlgo>


    <OtherAlgo img={sixteenOthertransitiveclosure.img} title={sixteenOthertransitiveclosure.title} alt={sixteenOthertransitiveclosure.alt} >
<p>Transitive Closure it the reachability matrix to reach from vertex u to vertex v of a graph. One graph is given, we have to find a vertex v which is reachable from another vertex u, for all vertex pairs (u, v).</p>
      </OtherAlgo>

      
      <OtherAlgo img={seventeenOtherbiconnectedgraph.img} title={seventeenOtherbiconnectedgraph.title} alt={seventeenOtherbiconnectedgraph.alt} >
<p>In graph theory, a biconnected graph is a connected and "nonseparable" graph, meaning that if any one vertex were to be removed, the graph will remain connected.</p>
      </OtherAlgo>
      <OtherAlgo img={eightteenOtherjohnsons.img} title={eightteenOtherjohnsons.title} alt={eightteenOtherjohnsons.alt}>
<p>Johnson's algorithm is a way to find the shortest paths between all pairs of vertices in an edge-weighted, directed graph. It allows some of the edge weights to be negative numbers, but no negative-weight cycles may exist.</p>
      </OtherAlgo>
      <OtherAlgo img={nineteenOtherbellmanford.img} title={nineteenOtherbellmanford.title} alt={nineteenOtherbellmanford.alt}>
<p>The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.</p>
      </OtherAlgo>
      <OtherAlgo img={twentyOtherfordfallcurson.img} title={twentyOtherfordfallcurson.title} alt={twentyOtherfordfallcurson.alt}>
<p>The Ford-Fulkerson algorithm is used to detect maximum flow from start vertex to sink vertex in a given graph.</p>
      </OtherAlgo>
      <OtherAlgo img={twentyoneOtherhoffcroftkarp.img} title={twentyoneOtherhoffcroftkarp.title} alt={twentyoneOtherhoffcroftkarp.alt}>
<p> The Hopcroft–Karp algorithm (sometimes more accurately called the Hopcroft–Karp–Karzanov algorithm) is an algorithm that takes as input a bipartite graph and produces as output a maximum cardinality matching – a set of as many edges as possible with the property that no two edges share an endpoint. </p>
      </OtherAlgo>
      <OtherAlgo img={twentytwoOtherboruvka.img} title={twentytwoOtherboruvka.title} alt={twentytwoOtherboruvka.alt}>
<p>Borůvka's algorithm is a greedy algorithm for finding a minimum spanning tree in a graph, or a minimum spanning forest in the case of a graph that is not connected.</p>
      </OtherAlgo>
      <OtherAlgo img={twentythreeOtherkaratsuba.img} title={twentythreeOtherkaratsuba.title} alt={twentythreeOtherkaratsuba.alt}>
<p>The Karatsuba algorithm is a fast multiplication algorithm. It was discovered by Anatoly Karatsuba in 1960 and published in 1962.</p>
      </OtherAlgo>
      <OtherAlgo img={twentyfourOtherfloodfill.img} title={twentyfourOtherfloodfill.title} alt={twentyfourOtherfloodfill.alt}>
<p>Flood fill, also called seed fill, is an algorithm that determines and alters the area connected to a given node in a multi-dimensional array with some matching attribute.</p>
      </OtherAlgo>
      <OtherAlgo img={twentyfiveOtherkruskal.img} title={twentyfiveOtherkruskal.title} alt={twentyfiveOtherkruskal.alt}>
<p>Kruskal's algorithm finds a minimum spanning forest of an undirected edge-weighted graph. If the graph is connected, it finds a minimum spanning tree.</p>
      </OtherAlgo>
      <OtherAlgo img={twentysixOthertopologicalsorting.img} title={twentysixOthertopologicalsorting.title} alt={twentysixOthertopologicalsorting.alt}>
<p>Topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering.</p>
      </OtherAlgo>
      <OtherAlgo img={twentysevenOtherprimsminimumspanningtree.img} title={twentysevenOtherprimsminimumspanningtree.title} alt={twentysevenOtherprimsminimumspanningtree.alt}>
<p>Prim's (also known as Jarník's) algorithm is a greedy algorithm that finds a minimum spanning tree for a weighted undirected graph.</p>
      </OtherAlgo>
      <OtherAlgo img={twentyeightOtherksmallest.img} title={twentyeightOtherksmallest.title} alt={twentyeightOtherksmallest.alt}>
<p>A selection algorithm is an algorithm for finding the kth smallest number in a list or array; such a number is called the kth order statistic. </p>
      </OtherAlgo>
      <OtherAlgo img={twentynineOtherstrassen.img} title={twentynineOtherstrassen.title} alt={twentynineOtherstrassen.alt}>
<p>In linear algebra, the Strassen algorithm, named after Volker Strassen, is an algorithm for matrix multiplication.</p>
      </OtherAlgo>
      <OtherAlgo img={thirtyOthercooleytukeyfastfouriertransform.img} title={thirtyOthercooleytukeyfastfouriertransform.title} alt={thirtyOthercooleytukeyfastfouriertransform.alt}>
<p>Cooley and John Tukey, is the most common fast Fourier transform (FFT) algorithm.</p>
      </OtherAlgo>
      <OtherAlgo img={thirtyoneOtherdivideconquror.img} title={thirtyoneOtherdivideconquror.title} alt={thirtyoneOtherdivideconquror.alt}>
<p>A divide-and-conquer algorithm recursively breaks down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly.</p>
      </OtherAlgo>
      <OtherAlgo img={thirtytwoOtherchineseremaindertheorem.img} title={thirtytwoOtherchineseremaindertheorem.title} alt={thirtytwoOtherchineseremaindertheorem.alt}>
<p>The Chinese remainder theorem is a theorem which gives a unique solution to simultaneous linear congruences with coprime moduli.</p>
      </OtherAlgo>
      <OtherAlgo img={thirtythreeOtheramicablepairs.img} title={thirtythreeOtheramicablepairs.title} alt={thirtythreeOtheramicablepairs.alt}>
<p>Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number.</p>
      </OtherAlgo>
      <OtherAlgo img={thirtifourthAlgo.img} title={thirtifourthAlgo.title} alt={thirtifourthAlgo.alt}>
<p>Brent’s cycle detection algorithm is similar to floyd’s algorithm as it also uses two pointer technique. But there is some difference in their approaches.</p>
      </OtherAlgo>
      <OtherAlgo img={thirtififthAlgo.img} title={thirtififthAlgo.title} alt={thirtififthAlgo.alt}>
<p>This algorithm is a greedy algorithm, choosing the best choice given any situation. It is the reverse of Kruskal's algorithm.</p>
  </OtherAlgo>
      <OtherAlgo img={thirtisixthAlgo.img} title={thirtisixthAlgo.title} alt={thirtisixthAlgo.alt}>

<p>The algorithm was proposed independently first by Yoeng-Jin Chu and Tseng-Hong Liu (1965) and then by Jack Edmonds (1967).</p> 
      </OtherAlgo>


        </section>
        </certer>
      </section>
  );
}

const OtherAlgo = (props) => {
  const { img, title, alt ,children } = props;
  return (
    <article className="algo">
      <center><img src={img} height="230px" width="300px" style={{borderRadius:20}} title={title}></img></center>
      <center><h1 style={{ color: '#810034' }} onMouseOver={() => {
        console.log(title);
      }}>{title}</h1></center>
      <center>{props.children}</center><br/>
      <center><Link to={`/${alt}`}><button  class="button">Learn More</button></Link></center>
    </article>
  );
}
const Sorting = (props) => {
  const { img, title,alt, specificcations } = props;
  return (
    <article className="algo">
      <center><img src={img} height="230px" width="300px" style={{borderRadius:20}} title={title}></img></center>
      <center><h1 style={{ color: '#810034' }}>{title}</h1></center>
      <center>{specificcations}</center>
    <center><Link to={`/${alt}`}><button  class="button">Learn More</button></Link></center>

    </article>
  )
}

const Searching = (props) => {
  const { img, title,alt, specificcations } = props;
  return (
    <article className="algo">
      <center><img src={img} height="230px" width="300px" style={{borderRadius:20}} title={title}></img></center>
      <center><h1 style={{ color: '#810034' }}>{title}</h1></center>
      <center>{specificcations}</center>
    <center><Link to={`/${alt}`}><button  class="button">Learn More</button></Link></center>

    </article>
  )
}
