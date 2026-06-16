const questions = [

  // ================= REACT =================

  {
id:1,
topic:"React",
question:"What is React?",
answer:"React is a JavaScript library used to build user interfaces."
},
{
id:2,
topic:"React",
question:"What is JSX?",
answer:"JSX is a syntax extension that allows writing HTML-like code inside JavaScript."
},
{
id:3,
topic:"React",
question:"What is Virtual DOM?",
answer:"Virtual DOM is a lightweight copy of the real DOM."
},
{
id:4,
topic:"React",
question:"What is SPA?",
answer:"SPA stands for Single Page Application."
},
{
id:5,
topic:"React",
question:"What are Components?",
answer:"Components are reusable building blocks of a React application."
},
{
id:6,
topic:"React",
question:"What are Props?",
answer:"Props are used to pass data from parent to child components."
},
{
id:7,
topic:"React",
question:"What is State?",
answer:"State stores dynamic data inside a component."
},
{
id:8,
topic:"React",
question:"What is useState?",
answer:"useState is a hook used for state management."
},
{
id:9,
topic:"React",
question:"What is useEffect?",
answer:"useEffect is used to perform side effects."
},
{
id:10,
topic:"React",
question:"What is useRef?",
answer:"useRef is used to access DOM elements and persist values."
},
{
id:11,
topic:"React",
question:"What is useMemo?",
answer:"useMemo memoizes expensive calculations."
},
{
id:12,
topic:"React",
question:"What is useCallback?",
answer:"useCallback memoizes functions."
},
{
id:13,
topic:"React",
question:"What is Context API?",
answer:"Context API provides global state management."
},
{
id:14,
topic:"React",
question:"What is React.memo?",
answer:"React.memo prevents unnecessary re-renders."
},
{
id:15,
topic:"React",
question:"What is Redux Toolkit?",
answer:"Redux Toolkit simplifies Redux state management."
},
{
id:16,
topic:"React",
question:"What is Controlled Component?",
answer:"A component whose form data is controlled by React state."
},
{
id:17,
topic:"React",
question:"What is Uncontrolled Component?",
answer:"A component that stores form data in the DOM."
},
{
id:18,
topic:"React",
question:"What is Reconciliation?",
answer:"React updates only changed DOM nodes."
},
{
id:19,
topic:"React",
question:"What is Diffing?",
answer:"React compares old and new Virtual DOM trees."
},
{
id:20,
topic:"React",
question:"What are Fragments?",
answer:"Fragments allow grouping elements without extra DOM nodes."
},
{
id:21,
topic:"React",
question:"What is React Router?",
answer:"React Router enables client-side routing."
},
{
id:22,
topic:"React",
question:"What is Lazy Loading?",
answer:"Lazy loading loads components only when needed."
},
{
id:23,
topic:"React",
question:"What is Code Splitting?",
answer:"Code splitting breaks bundles into smaller chunks."
},
{
id:24,
topic:"React",
question:"What is Hydration?",
answer:"Hydration attaches React to server-rendered HTML."
},
{
id:25,
topic:"React",
question:"What is StrictMode?",
answer:"StrictMode helps identify potential problems."
},
{
id:26,
topic:"React",
question:"Why use Keys in Lists?",
answer:"Keys help React identify changed elements."
},
{
id:27,
topic:"React",
question:"What is Event Handling?",
answer:"React handles events using camelCase syntax."
},
{
id:28,
topic:"React",
question:"What is Conditional Rendering?",
answer:"Rendering UI based on conditions."
},
{
id:29,
topic:"React",
question:"What is Lifting State Up?",
answer:"Moving shared state to a common parent component."
},
{
id:30,
topic:"React",
question:"What is Custom Hook?",
answer:"A reusable function containing hook logic."
}

  ,


  // ... React Questions 4-30


  // ================= JAVASCRIPT =================

  {
    id: 31,
    topic: "JavaScript",
    question: "What is JavaScript?",
    answer: "JavaScript is a scripting language used to create dynamic web pages."
  },

  {
id:31,
topic:"JavaScript",
question:"What is JavaScript?",
answer:"JavaScript is a scripting language used to create dynamic web pages."
},
{
id:32,
topic:"JavaScript",
question:"What are variables?",
answer:"Variables are containers used to store data values."
},
{
id:33,
topic:"JavaScript",
question:"Difference between var, let and const?",
answer:"var is function scoped, let and const are block scoped. const cannot be reassigned."
},
{
id:34,
topic:"JavaScript",
question:"What is hoisting?",
answer:"Hoisting is JavaScript's behavior of moving declarations to the top of their scope."
},
{
id:35,
topic:"JavaScript",
question:"What is closure?",
answer:"A closure allows a function to access variables from its outer scope even after the outer function has executed."
},
{
id:36,
topic:"JavaScript",
question:"What is an arrow function?",
answer:"Arrow functions provide a shorter syntax for writing functions."
},
{
id:37,
topic:"JavaScript",
question:"What is a callback function?",
answer:"A callback is a function passed as an argument to another function."
},
{
id:38,
topic:"JavaScript",
question:"What is a promise?",
answer:"A promise represents the eventual completion or failure of an asynchronous operation."
},
{
id:39,
topic:"JavaScript",
question:"What are promise states?",
answer:"Pending, Fulfilled and Rejected."
},
{
id:40,
topic:"JavaScript",
question:"What is async/await?",
answer:"Async/await provides a cleaner way to work with promises."
},
{
id:41,
topic:"JavaScript",
question:"What is the event loop?",
answer:"The event loop handles asynchronous callbacks in JavaScript."
},
{
id:42,
topic:"JavaScript",
question:"What is the call stack?",
answer:"The call stack keeps track of function execution."
},
{
id:43,
topic:"JavaScript",
question:"What is the difference between == and ===?",
answer:"== compares values after type conversion, === compares both value and type."
},
{
id:44,
topic:"JavaScript",
question:"What is NaN?",
answer:"NaN stands for Not a Number."
},
{
id:45,
topic:"JavaScript",
question:"What are template literals?",
answer:"Template literals allow string interpolation using backticks."
},
{
id:46,
topic:"JavaScript",
question:"What is destructuring?",
answer:"Destructuring extracts values from arrays or objects into variables."
},
{
id:47,
topic:"JavaScript",
question:"What is the spread operator?",
answer:"The spread operator (...) expands iterable elements."
},
{
id:48,
topic:"JavaScript",
question:"What is the rest operator?",
answer:"The rest operator collects multiple values into an array."
},
{
id:49,
topic:"JavaScript",
question:"What is DOM?",
answer:"DOM stands for Document Object Model."
},
{
id:50,
topic:"JavaScript",
question:"What is BOM?",
answer:"BOM stands for Browser Object Model."
},
{
id:51,
topic:"JavaScript",
question:"What is localStorage?",
answer:"localStorage stores data permanently in the browser."
},
{
id:52,
topic:"JavaScript",
question:"What is sessionStorage?",
answer:"sessionStorage stores data for a single session."
},
{
id:53,
topic:"JavaScript",
question:"What is JSON?",
answer:"JSON is a lightweight data interchange format."
},
{
id:54,
topic:"JavaScript",
question:"What is parseInt()?",
answer:"parseInt converts a string into an integer."
},
{
id:55,
topic:"JavaScript",
question:"What is map()?",
answer:"map creates a new array by applying a function to each element."
},
{
id:56,
topic:"JavaScript",
question:"What is filter()?",
answer:"filter returns elements that satisfy a condition."
},
{
id:57,
topic:"JavaScript",
question:"What is reduce()?",
answer:"reduce accumulates array values into a single result."
},
{
id:58,
topic:"JavaScript",
question:"What is forEach()?",
answer:"forEach executes a function for each array element."
},
{
id:59,
topic:"JavaScript",
question:"What is event bubbling?",
answer:"Event bubbling is the propagation of events from child to parent."
},
{
id:60,
topic:"JavaScript",
question:"What is event delegation?",
answer:"Event delegation uses a parent element to handle events for child elements."
},

  // ... JavaScript Questions 33-60


  // ================= JAVA OOPS =================

  {
    id: 61,
    topic: "Java OOPs",
    question: "What is OOP?",
    answer: "OOP is a programming paradigm based on objects and classes."
  },

  {
id:61,
topic:"Java OOPs",
question:"What is OOP?",
answer:"OOP is a programming paradigm based on objects and classes."
},
{
id:62,
topic:"Java OOPs",
question:"What are the four pillars of OOP?",
answer:"Encapsulation, Inheritance, Polymorphism and Abstraction."
},
{
id:63,
topic:"Java OOPs",
question:"What is a class?",
answer:"A class is a blueprint for creating objects."
},
{
id:64,
topic:"Java OOPs",
question:"What is an object?",
answer:"An object is an instance of a class."
},
{
id:65,
topic:"Java OOPs",
question:"What is encapsulation?",
answer:"Encapsulation is wrapping data and methods into a single unit."
},
{
id:66,
topic:"Java OOPs",
question:"What is inheritance?",
answer:"Inheritance allows one class to acquire properties of another class."
},
{
id:67,
topic:"Java OOPs",
question:"What is polymorphism?",
answer:"Polymorphism allows one interface to be used for different forms."
},
{
id:68,
topic:"Java OOPs",
question:"What is abstraction?",
answer:"Abstraction hides implementation details and shows only essential features."
},
{
id:69,
topic:"Java OOPs",
question:"What is a constructor?",
answer:"A constructor is a special method used to initialize objects."
},
{
id:70,
topic:"Java OOPs",
question:"What is a default constructor?",
answer:"A constructor automatically provided by Java when no constructor is defined."
},
{
id:71,
topic:"Java OOPs",
question:"What is parameterized constructor?",
answer:"A constructor that accepts arguments."
},
{
id:72,
topic:"Java OOPs",
question:"What is constructor overloading?",
answer:"Defining multiple constructors with different parameter lists."
},
{
id:73,
topic:"Java OOPs",
question:"What is method overloading?",
answer:"Multiple methods having same name but different parameters."
},
{
id:74,
topic:"Java OOPs",
question:"What is method overriding?",
answer:"Providing a new implementation of a parent class method."
},
{
id:75,
topic:"Java OOPs",
question:"Difference between overloading and overriding?",
answer:"Overloading occurs in same class, overriding occurs between parent and child classes."
},
{
id:76,
topic:"Java OOPs",
question:"What is the this keyword?",
answer:"this refers to the current object."
},
{
id:77,
topic:"Java OOPs",
question:"What is the super keyword?",
answer:"super refers to the immediate parent class object."
},
{
id:78,
topic:"Java OOPs",
question:"What is static keyword?",
answer:"static members belong to the class rather than objects."
},
{
id:79,
topic:"Java OOPs",
question:"What is final keyword?",
answer:"final restricts modification of variables, methods or classes."
},
{
id:80,
topic:"Java OOPs",
question:"Can a constructor be final?",
answer:"No, constructors cannot be final."
},
{
id:81,
topic:"Java OOPs",
question:"What is an abstract class?",
answer:"A class declared with abstract keyword that cannot be instantiated."
},
{
id:82,
topic:"Java OOPs",
question:"What is an abstract method?",
answer:"A method without implementation."
},
{
id:83,
topic:"Java OOPs",
question:"What is an interface?",
answer:"An interface defines a contract that classes can implement."
},
{
id:84,
topic:"Java OOPs",
question:"Difference between abstract class and interface?",
answer:"Abstract class can have concrete methods and state, interface mainly defines behavior."
},
{
id:85,
topic:"Java OOPs",
question:"Can Java support multiple inheritance?",
answer:"Java supports multiple inheritance through interfaces."
},
{
id:86,
topic:"Java OOPs",
question:"What is association?",
answer:"Association represents a relationship between two objects."
},
{
id:87,
topic:"Java OOPs",
question:"What is aggregation?",
answer:"Aggregation is a weak HAS-A relationship."
},
{
id:88,
topic:"Java OOPs",
question:"What is composition?",
answer:"Composition is a strong HAS-A relationship where child cannot exist independently."
},
{
id:89,
topic:"Java OOPs",
question:"What is object cloning?",
answer:"Creating an exact copy of an object."
},
{
id:90,
topic:"Java OOPs",
question:"What is Object class?",
answer:"Object is the root class of all Java classes."
},

  // ... Java OOPs Questions 63-90


  // ================= DBMS =================

{
id:91,
topic:"DBMS",
question:"What is DBMS?",
answer:"DBMS is software used to store, manage and retrieve data efficiently."
},
{
id:92,
topic:"DBMS",
question:"What is a database?",
answer:"A database is an organized collection of related data."
},
{
id:93,
topic:"DBMS",
question:"What is RDBMS?",
answer:"RDBMS stores data in tables and maintains relationships between them."
},
{
id:94,
topic:"DBMS",
question:"Difference between DBMS and RDBMS?",
answer:"DBMS stores data generally, while RDBMS stores data in related tables using keys."
},
{
id:95,
topic:"DBMS",
question:"What is a table?",
answer:"A table is a collection of rows and columns used to store data."
},
{
id:96,
topic:"DBMS",
question:"What is a row?",
answer:"A row represents a single record in a table."
},
{
id:97,
topic:"DBMS",
question:"What is a column?",
answer:"A column represents an attribute of a table."
},
{
id:98,
topic:"DBMS",
question:"What is a primary key?",
answer:"A primary key uniquely identifies each record in a table."
},
{
id:99,
topic:"DBMS",
question:"What is a foreign key?",
answer:"A foreign key creates a relationship between two tables."
},
{
id:100,
topic:"DBMS",
question:"What is a candidate key?",
answer:"A candidate key is a column that can uniquely identify records."
},
{
id:101,
topic:"DBMS",
question:"What is a super key?",
answer:"A super key is a set of attributes that uniquely identifies a row."
},
{
id:102,
topic:"DBMS",
question:"What is normalization?",
answer:"Normalization organizes data to reduce redundancy and improve consistency."
},
{
id:103,
topic:"DBMS",
question:"What is 1NF?",
answer:"1NF removes repeating groups and ensures atomic values."
},
{
id:104,
topic:"DBMS",
question:"What is 2NF?",
answer:"2NF removes partial dependency from a table."
},
{
id:105,
topic:"DBMS",
question:"What is 3NF?",
answer:"3NF removes transitive dependency."
},
{
id:106,
topic:"DBMS",
question:"What is BCNF?",
answer:"BCNF is a stronger version of 3NF where every determinant is a candidate key."
},
{
id:107,
topic:"DBMS",
question:"What is denormalization?",
answer:"Denormalization combines tables to improve query performance."
},
{
id:108,
topic:"DBMS",
question:"What is SQL?",
answer:"SQL is a language used to interact with relational databases."
},
{
id:109,
topic:"DBMS",
question:"What are DDL commands?",
answer:"DDL commands include CREATE, ALTER, DROP and TRUNCATE."
},
{
id:110,
topic:"DBMS",
question:"What are DML commands?",
answer:"DML commands include INSERT, UPDATE and DELETE."
},
{
id:111,
topic:"DBMS",
question:"What are DQL commands?",
answer:"DQL commands mainly include SELECT."
},
{
id:112,
topic:"DBMS",
question:"What are TCL commands?",
answer:"TCL commands include COMMIT, ROLLBACK and SAVEPOINT."
},
{
id:113,
topic:"DBMS",
question:"What is a join?",
answer:"A join combines rows from two or more tables."
},
{
id:114,
topic:"DBMS",
question:"What is INNER JOIN?",
answer:"INNER JOIN returns matching records from both tables."
},
{
id:115,
topic:"DBMS",
question:"What is LEFT JOIN?",
answer:"LEFT JOIN returns all records from the left table and matching records from the right table."
},
{
id:116,
topic:"DBMS",
question:"What is RIGHT JOIN?",
answer:"RIGHT JOIN returns all records from the right table and matching records from the left table."
},
{
id:117,
topic:"DBMS",
question:"What is FULL OUTER JOIN?",
answer:"FULL OUTER JOIN returns all records when there is a match in either table."
},
{
id:118,
topic:"DBMS",
question:"What is an index?",
answer:"An index improves the speed of data retrieval operations."
},
{
id:119,
topic:"DBMS",
question:"What is a view?",
answer:"A view is a virtual table based on a SQL query."
},
{
id:120,
topic:"DBMS",
question:"What are ACID properties?",
answer:"ACID stands for Atomicity, Consistency, Isolation and Durability."
},
  // ... DBMS Questions 92-120


  // ================= OPERATING SYSTEM =================

  {
id:121,
topic:"Operating System",
question:"What is an Operating System?",
answer:"An Operating System is system software that manages hardware and software resources."
},
{
id:122,
topic:"Operating System",
question:"What are the main functions of an Operating System?",
answer:"Process management, memory management, file management and device management."
},
{
id:123,
topic:"Operating System",
question:"What is a process?",
answer:"A process is a program in execution."
},
{
id:124,
topic:"Operating System",
question:"What is a thread?",
answer:"A thread is the smallest unit of CPU execution within a process."
},
{
id:125,
topic:"Operating System",
question:"Difference between process and thread?",
answer:"Processes have separate memory spaces, while threads share the same memory space."
},
{
id:126,
topic:"Operating System",
question:"What is multiprocessing?",
answer:"Multiprocessing is the execution of multiple processes simultaneously using multiple CPUs."
},
{
id:127,
topic:"Operating System",
question:"What is multitasking?",
answer:"Multitasking allows multiple tasks to run seemingly at the same time."
},
{
id:128,
topic:"Operating System",
question:"What is context switching?",
answer:"Context switching is saving and restoring process states when switching CPU execution."
},
{
id:129,
topic:"Operating System",
question:"What is CPU scheduling?",
answer:"CPU scheduling determines which process gets CPU time."
},
{
id:130,
topic:"Operating System",
question:"What is FCFS scheduling?",
answer:"First Come First Serve executes processes in arrival order."
},
{
id:131,
topic:"Operating System",
question:"What is SJF scheduling?",
answer:"Shortest Job First executes the process with the smallest burst time first."
},
{
id:132,
topic:"Operating System",
question:"What is Round Robin scheduling?",
answer:"Round Robin allocates CPU time in fixed time slices."
},
{
id:133,
topic:"Operating System",
question:"What is Priority Scheduling?",
answer:"Processes are executed according to their priority."
},
{
id:134,
topic:"Operating System",
question:"What is starvation?",
answer:"Starvation occurs when a process waits indefinitely for CPU resources."
},
{
id:135,
topic:"Operating System",
question:"What is aging?",
answer:"Aging gradually increases the priority of waiting processes to prevent starvation."
},
{
id:136,
topic:"Operating System",
question:"What is deadlock?",
answer:"Deadlock is a situation where processes wait indefinitely for resources held by each other."
},
{
id:137,
topic:"Operating System",
question:"What are the necessary conditions for deadlock?",
answer:"Mutual exclusion, hold and wait, no preemption and circular wait."
},
{
id:138,
topic:"Operating System",
question:"What is semaphore?",
answer:"A semaphore is a synchronization tool used to control access to shared resources."
},
{
id:139,
topic:"Operating System",
question:"What is mutex?",
answer:"Mutex is a locking mechanism that allows only one thread to access a resource at a time."
},
{
id:140,
topic:"Operating System",
question:"What is synchronization?",
answer:"Synchronization coordinates access to shared resources among processes or threads."
},
{
id:141,
topic:"Operating System",
question:"What is critical section?",
answer:"A critical section is a code segment where shared resources are accessed."
},
{
id:142,
topic:"Operating System",
question:"What is memory management?",
answer:"Memory management controls allocation and deallocation of memory."
},
{
id:143,
topic:"Operating System",
question:"What is paging?",
answer:"Paging divides memory into fixed-size pages and frames."
},
{
id:144,
topic:"Operating System",
question:"What is segmentation?",
answer:"Segmentation divides memory into logical segments of variable size."
},
{
id:145,
topic:"Operating System",
question:"Difference between paging and segmentation?",
answer:"Paging uses fixed-size blocks while segmentation uses variable-size logical blocks."
},
{
id:146,
topic:"Operating System",
question:"What is virtual memory?",
answer:"Virtual memory allows execution of large programs using secondary storage as an extension of RAM."
},
{
id:147,
topic:"Operating System",
question:"What is demand paging?",
answer:"Pages are loaded into memory only when required."
},
{
id:148,
topic:"Operating System",
question:"What is page fault?",
answer:"A page fault occurs when a required page is not present in memory."
},
{
id:149,
topic:"Operating System",
question:"What is thrashing?",
answer:"Thrashing occurs when excessive paging reduces system performance."
},
{
id:150,
topic:"Operating System",
question:"What is fragmentation?",
answer:"Fragmentation is inefficient use of memory due to allocation patterns."
},
{
id:151,
topic:"Operating System",
question:"What is internal fragmentation?",
answer:"Unused memory within allocated blocks."
},
{
id:152,
topic:"Operating System",
question:"What is external fragmentation?",
answer:"Free memory exists but is scattered into small blocks."
},
{
id:153,
topic:"Operating System",
question:"What is a file system?",
answer:"A file system organizes and manages files on storage devices."
},
{
id:154,
topic:"Operating System",
question:"What is a system call?",
answer:"A system call allows a program to request services from the operating system."
},
{
id:155,
topic:"Operating System",
question:"What is the difference between kernel and shell?",
answer:"Kernel interacts with hardware while shell provides a user interface to interact with the OS."
},

  // ... OS Questions 122-155


  // ================= COMPUTER NETWORK =================

  {
id:156,
topic:"Computer Networks",
question:"What is a Computer Network?",
answer:"A computer network is a collection of interconnected devices that communicate and share resources."
},
{
id:157,
topic:"Computer Networks",
question:"What is a protocol?",
answer:"A protocol is a set of rules that governs communication between devices."
},
{
id:158,
topic:"Computer Networks",
question:"What is the OSI Model?",
answer:"OSI is a 7-layer reference model used to understand network communication."
},
{
id:159,
topic:"Computer Networks",
question:"Name the 7 layers of the OSI Model.",
answer:"Physical, Data Link, Network, Transport, Session, Presentation and Application."
},
{
id:160,
topic:"Computer Networks",
question:"What is the TCP/IP Model?",
answer:"TCP/IP is a practical networking model consisting of 4 layers."
},
{
id:161,
topic:"Computer Networks",
question:"Name the layers of TCP/IP Model.",
answer:"Network Access, Internet, Transport and Application."
},
{
id:162,
topic:"Computer Networks",
question:"What is an IP Address?",
answer:"An IP address is a unique identifier assigned to a device on a network."
},
{
id:163,
topic:"Computer Networks",
question:"What is IPv4?",
answer:"IPv4 is a 32-bit addressing scheme used in networks."
},
{
id:164,
topic:"Computer Networks",
question:"What is IPv6?",
answer:"IPv6 is a 128-bit addressing scheme designed to replace IPv4."
},
{
id:165,
topic:"Computer Networks",
question:"What is a MAC Address?",
answer:"A MAC address is a unique hardware address assigned to a network interface card."
},
{
id:166,
topic:"Computer Networks",
question:"What is DNS?",
answer:"DNS converts domain names into IP addresses."
},
{
id:167,
topic:"Computer Networks",
question:"What is DHCP?",
answer:"DHCP automatically assigns IP addresses to devices."
},
{
id:168,
topic:"Computer Networks",
question:"What is a router?",
answer:"A router forwards packets between different networks."
},
{
id:169,
topic:"Computer Networks",
question:"What is a switch?",
answer:"A switch connects devices within the same network and forwards frames using MAC addresses."
},
{
id:170,
topic:"Computer Networks",
question:"What is a hub?",
answer:"A hub broadcasts data to all connected devices."
},
{
id:171,
topic:"Computer Networks",
question:"Difference between hub and switch?",
answer:"A hub broadcasts data to all devices, while a switch sends data only to the intended device."
},
{
id:172,
topic:"Computer Networks",
question:"What is TCP?",
answer:"TCP is a connection-oriented protocol that provides reliable communication."
},
{
id:173,
topic:"Computer Networks",
question:"What is UDP?",
answer:"UDP is a connectionless protocol that provides faster but unreliable communication."
},
{
id:174,
topic:"Computer Networks",
question:"Difference between TCP and UDP?",
answer:"TCP is reliable and connection-oriented, while UDP is faster and connectionless."
},
{
id:175,
topic:"Computer Networks",
question:"What is HTTP?",
answer:"HTTP is a protocol used for transferring web pages."
},
{
id:176,
topic:"Computer Networks",
question:"What is HTTPS?",
answer:"HTTPS is the secure version of HTTP using SSL/TLS encryption."
},
{
id:177,
topic:"Computer Networks",
question:"What is FTP?",
answer:"FTP is a protocol used for file transfer between systems."
},
{
id:178,
topic:"Computer Networks",
question:"What is SMTP?",
answer:"SMTP is a protocol used for sending emails."
},
{
id:179,
topic:"Computer Networks",
question:"What is POP3?",
answer:"POP3 is a protocol used to receive emails from a mail server."
},
{
id:180,
topic:"Computer Networks",
question:"What is IMAP?",
answer:"IMAP is a protocol used to access emails while keeping them on the server."
},
{
id:181,
topic:"Computer Networks",
question:"What is subnetting?",
answer:"Subnetting divides a network into smaller sub-networks."
},
{
id:182,
topic:"Computer Networks",
question:"What is bandwidth?",
answer:"Bandwidth is the maximum data transfer capacity of a network."
},
{
id:183,
topic:"Computer Networks",
question:"What is latency?",
answer:"Latency is the time taken for data to travel from source to destination."
},
{
id:184,
topic:"Computer Networks",
question:"What is a firewall?",
answer:"A firewall is a security system that monitors and controls network traffic."
},
{
id:185,
topic:"Computer Networks",
question:"What is packet switching?",
answer:"Packet switching is a method of transmitting data by breaking it into packets."
},

  // ... CN Questions 157-185


  // ================= HR =================

 {
id:186,
topic:"HR",
question:"Tell me about yourself.",
answer:"I am a B.Tech student with strong interest in Java, DSA and Web Development. I enjoy learning new technologies and solving problems."
},
{
id:187,
topic:"HR",
question:"Why should we hire you?",
answer:"I am a quick learner, hardworking and eager to contribute to the organization while continuously improving my skills."
},
{
id:188,
topic:"HR",
question:"What are your strengths?",
answer:"Problem-solving, adaptability, quick learning and teamwork."
},
{
id:189,
topic:"HR",
question:"What are your weaknesses?",
answer:"I sometimes focus too much on details, but I am learning to balance quality and efficiency."
},
{
id:190,
topic:"HR",
question:"Why do you want to join our company?",
answer:"Because of its learning opportunities, work culture and growth prospects."
},
{
id:191,
topic:"HR",
question:"Where do you see yourself in 5 years?",
answer:"I see myself growing into a skilled software engineer and taking more responsibilities."
},
{
id:192,
topic:"HR",
question:"What motivates you?",
answer:"Learning new skills, solving challenging problems and achieving goals."
},
{
id:193,
topic:"HR",
question:"Why did you choose engineering?",
answer:"Because I enjoy technology, logical thinking and building solutions."
},
{
id:194,
topic:"HR",
question:"What are your hobbies?",
answer:"Coding, learning new technologies, reading and listening to music."
},
{
id:195,
topic:"HR",
question:"What is your biggest achievement?",
answer:"Successfully completing challenging projects and improving my technical skills."
},
{
id:196,
topic:"HR",
question:"Describe yourself in one word.",
answer:"Determined."
},
{
id:197,
topic:"HR",
question:"Are you willing to relocate?",
answer:"Yes, I am willing to relocate based on company requirements."
},
{
id:198,
topic:"HR",
question:"Can you work under pressure?",
answer:"Yes, I can prioritize tasks and remain focused under pressure."
},
{
id:199,
topic:"HR",
question:"What is your leadership experience?",
answer:"I have led academic projects and coordinated tasks among team members."
},
{
id:200,
topic:"HR",
question:"How do you handle failure?",
answer:"I analyze mistakes, learn from them and improve for the future."
},
{
id:201,
topic:"HR",
question:"How do you handle criticism?",
answer:"I take constructive criticism positively and use it to improve."
},
{
id:202,
topic:"HR",
question:"Describe a challenging situation.",
answer:"A difficult project deadline where I planned tasks efficiently and completed work on time."
},
{
id:203,
topic:"HR",
question:"What are your short-term goals?",
answer:"To strengthen my technical skills and secure a good software engineering role."
},
{
id:204,
topic:"HR",
question:"What are your long-term goals?",
answer:"To become an experienced software engineer and contribute to impactful projects."
},
{
id:205,
topic:"HR",
question:"Why do you want this job?",
answer:"It aligns with my skills, interests and career goals."
},
{
id:206,
topic:"HR",
question:"How do you prioritize your work?",
answer:"I prioritize tasks based on deadlines, importance and impact."
},
{
id:207,
topic:"HR",
question:"What do you know about our company?",
answer:"I researched the company’s services, culture and recent achievements."
},
{
id:208,
topic:"HR",
question:"Do you prefer working alone or in a team?",
answer:"I am comfortable with both but enjoy teamwork because it encourages collaboration and learning."
},
{
id:209,
topic:"HR",
question:"How do you manage time?",
answer:"By planning tasks, setting priorities and avoiding distractions."
},
{
id:210,
topic:"HR",
question:"What makes you different from others?",
answer:"My willingness to learn, consistency and dedication to achieving goals."
},
{
id:211,
topic:"HR",
question:"How do you deal with conflict in a team?",
answer:"I listen to all perspectives and focus on finding a practical solution."
},
{
id:212,
topic:"HR",
question:"What are your salary expectations?",
answer:"I am open to the company's standard package for freshers and growth opportunities."
},
{
id:213,
topic:"HR",
question:"What does success mean to you?",
answer:"Achieving goals while continuously learning and improving."
},
{
id:214,
topic:"HR",
question:"What is your dream company?",
answer:"A company that values learning, innovation and employee growth."
},
{
id:215,
topic:"HR",
question:"What would your friends describe you as?",
answer:"Hardworking, reliable and supportive."
},
{
id:216,
topic:"HR",
question:"How quickly can you learn new technology?",
answer:"I am a fast learner and adapt quickly through practice and projects."
},
{
id:217,
topic:"HR",
question:"What are your expectations from this company?",
answer:"Learning opportunities, career growth and a positive work environment."
},
{
id:218,
topic:"HR",
question:"Why should we not hire you?",
answer:"As a fresher I lack industry experience, but I compensate with strong learning ability and dedication."
},
{
id:219,
topic:"HR",
question:"Do you have any questions for us?",
answer:"Yes. What does success look like in this role during the first six months?"
},
{
id:220,
topic:"HR",
question:"Tell me about a time you worked in a team.",
answer:"I collaborated on academic projects by dividing tasks, communicating regularly and ensuring timely completion."
},

{
id:271,
topic:"Arrays",
question:"Find Largest Element in an Array"
},
{
id:272,
topic:"Arrays",
question:"Find Second Largest Element"
},
{
id:273,
topic:"Arrays",
question:"Check if Array is Sorted"
},
{
id:274,
topic:"Arrays",
question:"Remove Duplicates from Sorted Array"
},
{
id:275,
topic:"Arrays",
question:"Left Rotate Array by One Place"
},
{
id:276,
topic:"Arrays",
question:"Left Rotate Array by K Places"
},
{
id:277,
topic:"Arrays",
question:"Move Zeroes to End"
},
{
id:278,
topic:"Arrays",
question:"Linear Search"
},
{
id:279,
topic:"Arrays",
question:"Union of Two Sorted Arrays"
},
{
id:280,
topic:"Arrays",
question:"Intersection of Two Sorted Arrays"
},
{
id:281,
topic:"Arrays",
question:"Missing Number"
},
{
id:282,
topic:"Arrays",
question:"Maximum Consecutive Ones"
},
{
id:283,
topic:"Arrays",
question:"Find Number Appearing Once"
},
{
id:284,
topic:"Arrays",
question:"Longest Subarray with Given Sum K"
},
{
id:285,
topic:"Arrays",
question:"Two Sum"
},
{
id:286,
topic:"Arrays",
question:"Sort Colors (Dutch National Flag)"
},
{
id:287,
topic:"Arrays",
question:"Majority Element"
},
{
id:288,
topic:"Arrays",
question:"Kadane Algorithm"
},
{
id:289,
topic:"Arrays",
question:"Best Time to Buy and Sell Stock"
},
{
id:290,
topic:"Arrays",
question:"Rearrange Array by Sign"
},
{
id:291,
topic:"Arrays",
question:"Next Permutation"
},
{
id:292,
topic:"Arrays",
question:"Leaders in Array"
},
{
id:293,
topic:"Arrays",
question:"Longest Consecutive Sequence"
},
{
id:294,
topic:"Arrays",
question:"Set Matrix Zeroes"
},
{
id:295,
topic:"Arrays",
question:"Rotate Matrix by 90 Degrees"
},
{
id:296,
topic:"Arrays",
question:"Spiral Matrix Traversal"
},
{
id:297,
topic:"Arrays",
question:"Count Subarrays with Given Sum"
},
{
id:298,
topic:"Arrays",
question:"Pascal Triangle"
},
{
id:299,
topic:"Arrays",
question:"Majority Element II"
},
{
id:300,
topic:"Arrays",
question:"3 Sum"
},
{
id:301,
topic:"Arrays",
question:"4 Sum"
},
{
id:302,
topic:"Arrays",
question:"Merge Overlapping Intervals"
},
{
id:303,
topic:"Arrays",
question:"Merge Two Sorted Arrays"
},
{
id:304,
topic:"Arrays",
question:"Count Inversions"
},
{
id:305,
topic:"Arrays",
question:"Reverse Pairs"
}
,

{
id:306,
topic:"Strings",
question:"Reverse String"
},
{
id:307,
topic:"Strings",
question:"Check Palindrome"
},
{
id:308,
topic:"Strings",
question:"Valid Anagram"
},
{
id:309,
topic:"Strings",
question:"Longest Common Prefix"
},
{
id:310,
topic:"Strings",
question:"Roman to Integer"
},
{
id:311,
topic:"Strings",
question:"Integer to Roman"
},
{
id:312,
topic:"Strings",
question:"String to Integer (atoi)"
},
{
id:313,
topic:"Strings",
question:"Longest Substring Without Repeating Characters"
},
{
id:314,
topic:"Strings",
question:"Valid Parentheses"
},
{
id:315,
topic:"Strings",
question:"Implement strStr()"
},
{
id:316,
topic:"Strings",
question:"Count and Say"
},
{
id:317,
topic:"Strings",
question:"Longest Palindromic Substring"
},
{
id:318,
topic:"Strings",
question:"Z Function"
},
{
id:319,
topic:"Strings",
question:"KMP Algorithm"
},
{
id:320,
topic:"Strings",
question:"Rabin Karp Algorithm"
},
{
id:321,
topic:"Strings",
question:"Minimum Window Substring"
},
{
id:322,
topic:"Strings",
question:"Group Anagrams"
},
{
id:323,
topic:"Strings",
question:"Longest Repeating Character Replacement"
},
{
id:324,
topic:"Strings",
question:"Isomorphic Strings"
},
{
id:325,
topic:"Strings",
question:"Word Pattern"
},
{
id:326,
topic:"Strings",
question:"Reverse Words in a String"
},
{
id:327,
topic:"Strings",
question:"Compare Version Numbers"
},
{
id:328,
topic:"Strings",
question:"Multiply Strings"
},
{
id:329,
topic:"Strings",
question:"Decode String"
},
{
id:330,
topic:"Strings",
question:"Palindrome Partitioning"
},
{
id:331,
topic:"Strings",
question:"Generate Parentheses"
},
{
id:332,
topic:"Strings",
question:"Letter Combinations of Phone Number"
},
{
id:333,
topic:"Strings",
question:"Word Break"
},
{
id:334,
topic:"Strings",
question:"Edit Distance"
},
{
id:335,
topic:"Strings",
question:"Distinct Subsequences"
},
{
id:336,
topic:"Strings",
question:"Longest Palindromic Subsequence"
},
{
id:337,
topic:"Strings",
question:"Shortest Common Supersequence"
},
{
id:338,
topic:"Strings",
question:"Text Justification"
},
{
id:339,
topic:"Strings",
question:"Wildcard Matching"
},
{
id:340,
topic:"Strings",
question:"Regular Expression Matching"
}
,

{
id:341,
topic:"Linked List",
question:"Reverse Linked List"
},
{
id:342,
topic:"Linked List",
question:"Middle of Linked List"
},
{
id:343,
topic:"Linked List",
question:"Detect Cycle in Linked List"
},
{
id:344,
topic:"Linked List",
question:"Starting Point of Cycle"
},
{
id:345,
topic:"Linked List",
question:"Length of Loop"
},
{
id:346,
topic:"Linked List",
question:"Palindrome Linked List"
},
{
id:347,
topic:"Linked List",
question:"Odd Even Linked List"
},
{
id:348,
topic:"Linked List",
question:"Remove Nth Node From End"
},
{
id:349,
topic:"Linked List",
question:"Delete Middle Node"
},
{
id:350,
topic:"Linked List",
question:"Sort Linked List"
},
{
id:351,
topic:"Linked List",
question:"Intersection of Two Linked Lists"
},
{
id:352,
topic:"Linked List",
question:"Add Two Numbers"
},
{
id:353,
topic:"Linked List",
question:"Flatten Linked List"
},
{
id:354,
topic:"Linked List",
question:"Reverse Nodes in K Group"
},
{
id:355,
topic:"Linked List",
question:"Rotate Linked List"
},
{
id:356,
topic:"Linked List",
question:"Copy List with Random Pointer"
},
{
id:357,
topic:"Linked List",
question:"Merge Two Sorted Lists"
},
{
id:358,
topic:"Linked List",
question:"Merge K Sorted Lists"
},
{
id:359,
topic:"Linked List",
question:"Delete Node in Linked List"
},
{
id:360,
topic:"Linked List",
question:"Segregate Even and Odd Nodes"
},
{
id:361,
topic:"Linked List",
question:"Sort 0s 1s and 2s in Linked List"
},
{
id:362,
topic:"Linked List",
question:"Find Pair with Given Sum in DLL"
},
{
id:363,
topic:"Linked List",
question:"Delete All Occurrences in DLL"
},
{
id:364,
topic:"Linked List",
question:"Remove Duplicates from Sorted DLL"
},
{
id:365,
topic:"Linked List",
question:"LRU Cache"
},
{
id:366,
topic:"Linked List",
question:"LFU Cache"
},
{
id:367,
topic:"Linked List",
question:"Browser History Design"
},
{
id:368,
topic:"Linked List",
question:"Design Text Editor"
},
{
id:369,
topic:"Linked List",
question:"Split Circular Linked List"
},
{
id:370,
topic:"Linked List",
question:"Clone Doubly Linked List"
},
{
id:371,
topic:"Linked List",
question:"Insert in Sorted DLL"
},
{
id:372,
topic:"Linked List",
question:"Delete Head of DLL"
},
{
id:373,
topic:"Linked List",
question:"Delete Tail of DLL"
},
{
id:374,
topic:"Linked List",
question:"Convert Array to Linked List"
},
{
id:375,
topic:"Linked List",
question:"Convert Array to DLL"
}
,

  {
    id: 376,
    topic: "Binary Tree Basics",
    question: "What is a Binary Tree? Explain types of Binary Tree."
  },
  {
    id: 377,
    topic: "Binary Tree Basics",
    question: "Difference between Binary Tree, BST and Heap."
  },
  {
    id: 378,
    topic: "Traversal",
    question: "Inorder Traversal of Binary Tree (Recursive + Iterative)."
  },
  {
    id: 379,
    topic: "Traversal",
    question: "Preorder Traversal of Binary Tree (Recursive + Iterative)."
  },
  {
    id: 380,
    topic: "Traversal",
    question: "Postorder Traversal of Binary Tree (Recursive + Iterative)."
  },
  {
    id: 381,
    topic: "Traversal",
    question: "Level Order Traversal of Binary Tree using Queue."
  },
  {
    id: 382,
    topic: "Tree Properties",
    question: "Find height (depth) of Binary Tree."
  },
  {
    id: 383,
    topic: "Tree Properties",
    question: "Count total number of nodes in Binary Tree."
  },
  {
    id: 384,
    topic: "Tree Properties",
    question: "Count leaf nodes in Binary Tree."
  },
  {
    id: 385,
    topic: "Tree Properties",
    question: "Count internal (non-leaf) nodes in Binary Tree."
  },
  {
    id: 386,
    topic: "Tree Checking",
    question: "Check if Binary Tree is balanced or not."
  },
  {
    id: 387,
    topic: "Tree Checking",
    question: "Check if two Binary Trees are identical."
  },
  {
    id: 388,
    topic: "Tree Checking",
    question: "Check if Binary Tree is symmetric (mirror of itself)."
  },
  {
    id: 389,
    topic: "Tree Operations",
    question: "Mirror a Binary Tree."
  },
  {
    id: 390,
    topic: "Tree Operations",
    question: "Search an element in Binary Tree."
  },
  {
    id: 391,
    topic: "Tree Operations",
    question: "Find maximum element in Binary Tree."
  },
  {
    id: 392,
    topic: "Important Pattern",
    question: "Find diameter of Binary Tree."
  },
  {
    id: 393,
    topic: "Important Pattern",
    question: "Level Order Traversal line by line (Zigzag optional)."
  },
  {
    id: 394,
    topic: "Advanced",
    question: "Find Lowest Common Ancestor (LCA) of two nodes."
  },
  {
    id: 395,
    topic: "Advanced",
    question: "Left View and Right View of Binary Tree."
  }
  ,
  
  {
    id: 396,
    topic: "BST Basics",
    question: "What is a Binary Search Tree (BST)? Properties of BST."
  },
  {
    id: 397,
    topic: "BST Basics",
    question: "Difference between Binary Tree and Binary Search Tree."
  },
  {
    id: 398,
    topic: "BST Operations",
    question: "Search a key in BST (Recursive and Iterative)."
  },
  {
    id: 399,
    topic: "BST Operations",
    question: "Insert a node in BST."
  },
  {
    id: 400,
    topic: "BST Operations",
    question: "Delete a node in BST."
  },
  {
    id: 401,
    topic: "BST Traversal",
    question: "Inorder traversal of BST and why it gives sorted order."
  },
  {
    id: 402,
    topic: "BST Traversal",
    question: "Find minimum and maximum element in BST."
  },
  {
    id: 403,
    topic: "BST Properties",
    question: "Validate whether a binary tree is a BST or not."
  },
  {
    id: 404,
    topic: "BST Properties",
    question: "Find height of BST."
  },
  {
    id: 405,
    topic: "BST Problems",
    question: "Find Lowest Common Ancestor (LCA) in BST."
  },
  {
    id: 406,
    topic: "BST Problems",
    question: "Find floor and ceil of a given key in BST."
  },
  {
    id: 407,
    topic: "BST Problems",
    question: "Find k-th smallest element in BST."
  },
  {
    id: 408,
    topic: "BST Problems",
    question: "Find k-th largest element in BST."
  },
  {
    id: 409,
    topic: "BST Problems",
    question: "Convert sorted array to balanced BST."
  },
  {
    id: 410,
    topic: "BST Problems",
    question: "Convert BST to sorted doubly linked list."
  },
  {
    id: 411,
    topic: "BST Problems",
    question: "Check if two BSTs are identical."
  },
  {
    id: 412,
    topic: "BST Problems",
    question: "Find inorder successor and predecessor in BST."
  },
  {
    id: 413,
    topic: "BST Problems",
    question: "Range search in BST (find nodes in given range)."
  },
  {
    id: 414,
    topic: "BST Problems",
    question: "Trim a BST within a given range."
  },
  {
    id: 415,
    topic: "BST Advanced",
    question: "Construct BST from preorder traversal."
  }
,
  {
    id: 416,
    topic: "Graph Basics",
    question: "What is a Graph? Types of Graph (Directed, Undirected, Weighted, Unweighted)."
  },
  {
    id: 417,
    topic: "Graph Basics",
    question: "Difference between Tree and Graph."
  },
  {
    id: 418,
    topic: "Graph Representation",
    question: "Represent graph using Adjacency Matrix and Adjacency List."
  },
  {
    id: 419,
    topic: "Graph Traversal",
    question: "Breadth First Search (BFS) traversal of a graph."
  },
  {
    id: 420,
    topic: "Graph Traversal",
    question: "Depth First Search (DFS) traversal of a graph."
  },
  {
    id: 421,
    topic: "Graph Problems",
    question: "Detect cycle in an undirected graph."
  },
  {
    id: 422,
    topic: "Graph Problems",
    question: "Detect cycle in a directed graph."
  },
  {
    id: 423,
    topic: "Graph Problems",
    question: "Check if a graph is bipartite."
  },
  {
    id: 424,
    topic: "Graph Problems",
    question: "Number of connected components in a graph."
  },
  {
    id: 425,
    topic: "Graph Problems",
    question: "Find shortest path in an unweighted graph (BFS)."
  },
  {
    id: 426,
    topic: "Graph Problems",
    question: "Dijkstra’s Algorithm for shortest path in weighted graph."
  },
  {
    id: 427,
    topic: "Graph Problems",
    question: "Bellman-Ford Algorithm for shortest path (handle negative weights)."
  },
  {
    id: 428,
    topic: "Graph Problems",
    question: "Floyd-Warshall Algorithm (All pairs shortest path)."
  },
  {
    id: 429,
    topic: "Graph Problems",
    question: "Topological Sorting using DFS."
  },
  {
    id: 430,
    topic: "Graph Problems",
    question: "Topological Sorting using Kahn’s Algorithm (BFS)."
  },
  {
    id: 431,
    topic: "Graph Problems",
    question: "Minimum Spanning Tree using Kruskal’s Algorithm."
  },
  {
    id: 432,
    topic: "Graph Problems",
    question: "Minimum Spanning Tree using Prim’s Algorithm."
  },
  {
    id: 433,
    topic: "Graph Problems",
    question: "Disjoint Set Union (Union-Find) application in graphs."
  },
  {
    id: 434,
    topic: "Graph Problems",
    question: "Find bridges and articulation points in a graph."
  },
  {
    id: 435,
    topic: "Graph Advanced",
    question: "Find strongly connected components (Kosaraju’s Algorithm)."
  }
,
  {
    id: 436,
    topic: "Recursion Basics",
    question: "What is recursion? Explain with a simple example."
  },
  {
    id: 437,
    topic: "Recursion Basics",
    question: "Difference between recursion and iteration."
  },
  {
    id: 438,
    topic: "Recursion Basics",
    question: "What is base case and recursive case in recursion?"
  },
  {
    id: 439,
    topic: "Recursion Basics",
    question: "How recursion works internally (stack memory concept)."
  },
  {
    id: 440,
    topic: "Recursion Basics",
    question: "Write factorial of a number using recursion."
  },
  {
    id: 441,
    topic: "Recursion Basics",
    question: "Write Fibonacci series using recursion."
  },
  {
    id: 442,
    topic: "Recursion Problems",
    question: "Calculate power of a number using recursion (a^b)."
  },
  {
    id: 443,
    topic: "Recursion Problems",
    question: "Print numbers from N to 1 using recursion."
  },
  {
    id: 444,
    topic: "Recursion Problems",
    question: "Print numbers from 1 to N using recursion."
  },
  {
    id: 445,
    topic: "Recursion Problems",
    question: "Sum of digits of a number using recursion."
  },
  {
    id: 446,
    topic: "Recursion Problems",
    question: "Reverse a string using recursion."
  },
  {
    id: 447,
    topic: "Recursion Problems",
    question: "Check if a string is palindrome using recursion."
  },
  {
    id: 448,
    topic: "Recursion Problems",
    question: "Find GCD using recursion (Euclid’s algorithm)."
  },
  {
    id: 449,
    topic: "Recursion Problems",
    question: "Binary search using recursion."
  },
  {
    id: 450,
    topic: "Recursion Problems",
    question: "Generate all subsets (power set) using recursion."
  },
  {
    id: 451,
    topic: "Recursion Problems",
    question: "Generate all permutations of a string using recursion."
  },
  {
    id: 452,
    topic: "Recursion Problems",
    question: "Tower of Hanoi problem using recursion."
  },
  {
    id: 453,
    topic: "Recursion Advanced",
    question: "Solve N-Queens problem using recursion and backtracking."
  },
  {
    id: 454,
    topic: "Recursion Advanced",
    question: "Rat in a Maze problem using recursion/backtracking."
  },
  {
    id: 455,
    topic: "Recursion Advanced",
    question: "Subset sum problem using recursion."
  }
,
  {
    id: 456,
    topic: "Stack Basics",
    question: "What is a Stack? Explain LIFO principle."
  },
  {
    id: 457,
    topic: "Stack Basics",
    question: "Implement Stack using Array."
  },
  {
    id: 458,
    topic: "Stack Basics",
    question: "Implement Stack using Linked List."
  },
  {
    id: 459,
    topic: "Stack Operations",
    question: "Push and Pop operations in Stack."
  },
  {
    id: 460,
    topic: "Stack Operations",
    question: "Find Top element in Stack."
  },
  {
    id: 461,
    topic: "Stack Problems",
    question: "Check for balanced parentheses using Stack."
  },
  {
    id: 462,
    topic: "Stack Problems",
    question: "Infix to Postfix conversion using Stack."
  },
  {
    id: 463,
    topic: "Stack Problems",
    question: "Evaluate Postfix expression using Stack."
  },
  {
    id: 464,
    topic: "Stack Problems",
    question: "Next Greater Element problem using Stack."
  },
  {
    id: 465,
    topic: "Stack Problems",
    question: "Stock Span problem using Stack."
  },
  {
    id: 466,
    topic: "Stack Problems",
    question: "Largest Rectangle in Histogram using Stack."
  },
  {
    id: 467,
    topic: "Stack Problems",
    question: "Min Stack design (Stack with getMin in O(1))."
  },

  {
    id: 468,
    topic: "Queue Basics",
    question: "What is a Queue? Explain FIFO principle."
  },
  {
    id: 469,
    topic: "Queue Basics",
    question: "Implement Queue using Array."
  },
  {
    id: 470,
    topic: "Queue Basics",
    question: "Implement Queue using Linked List."
  },
  {
    id: 471,
    topic: "Queue Operations",
    question: "Enqueue and Dequeue operations in Queue."
  },
  {
    id: 472,
    topic: "Queue Operations",
    question: "Circular Queue implementation."
  },
  {
    id: 473,
    topic: "Queue Problems",
    question: "Implement Queue using Stack."
  },
  {
    id: 474,
    topic: "Queue Problems",
    question: "Implement Stack using Queue."
  },
  {
    id: 475,
    topic: "Queue Problems",
    question: "First non-repeating character in a stream using Queue."
  }
,
  {
    id: 476,
    topic: "DP Basics",
    question: "What is Dynamic Programming (DP)? Why do we use it?"
  },
  {
    id: 477,
    topic: "DP Basics",
    question: "Difference between recursion, memoization, and tabulation."
  },
  {
    id: 478,
    topic: "DP Basics",
    question: "What is overlapping subproblems and optimal substructure?"
  },
  {
    id: 479,
    topic: "DP Basics",
    question: "Explain Memoization approach with example."
  },
  {
    id: 480,
    topic: "DP Basics",
    question: "Explain Tabulation (Bottom-up DP) approach."
  },
  {
    id: 481,
    topic: "DP 1D",
    question: "Fibonacci series using Dynamic Programming."
  },
  {
    id: 482,
    topic: "DP 1D",
    question: "Climbing Stairs problem using DP."
  },
  {
    id: 483,
    topic: "DP 1D",
    question: "Min Cost Climbing Stairs problem."
  },
  {
    id: 484,
    topic: "DP 1D",
    question: "House Robber problem (maximum sum without adjacent elements)."
  },
  {
    id: 485,
    topic: "DP 1D",
    question: "Maximum Subarray Sum (Kadane’s Algorithm)."
  },
  {
    id: 486,
    topic: "DP 2D",
    question: "0/1 Knapsack problem using DP."
  },
  {
    id: 487,
    topic: "DP 2D",
    question: "Subset Sum problem using DP."
  },
  {
    id: 488,
    topic: "DP 2D",
    question: "Partition Equal Subset Sum problem."
  },
  {
    id: 489,
    topic: "DP 2D",
    question: "Coin Change (minimum coins problem)."
  },
  {
    id: 490,
    topic: "DP 2D",
    question: "Coin Change II (number of ways to make amount)."
  },
  {
    id: 491,
    topic: "DP 2D",
    question: "Longest Common Subsequence (LCS)."
  },
  {
    id: 492,
    topic: "DP 2D",
    question: "Longest Common Substring problem."
  },
  {
    id: 493,
    topic: "DP 2D",
    question: "Edit Distance problem."
  },
  {
    id: 494,
    topic: "DP 2D",
    question: "Matrix Chain Multiplication problem."
  },
  {
    id: 495,
    topic: "DP Advanced",
    question: "Longest Increasing Subsequence (LIS)."
  }
,

  {
    id: 496,
    topic: "Greedy Basics",
    question: "What is Greedy Algorithm? Explain its idea with example."
  },
  {
    id: 497,
    topic: "Greedy Basics",
    question: "Difference between Greedy and Dynamic Programming."
  },
  {
    id: 498,
    topic: "Greedy Basics",
    question: "When does Greedy approach fail?"
  },
  {
    id: 499,
    topic: "Greedy Basics",
    question: "Explain activity selection problem."
  },
  {
    id: 500,
    topic: "Greedy Basics",
    question: "Fractional Knapsack problem."
  },
  {
    id: 501,
    topic: "Greedy Problems",
    question: "Job sequencing with deadlines problem."
  },
  {
    id: 502,
    topic: "Greedy Problems",
    question: "Huffman Coding algorithm."
  },
  {
    id: 503,
    topic: "Greedy Problems",
    question: "Minimum number of coins to make a value (coin change greedy)."
  },
  {
    id: 504,
    topic: "Greedy Problems",
    question: "Find minimum platforms required for trains."
  },
  {
    id: 505,
    topic: "Greedy Problems",
    question: "Gas station problem (circular tour)."
  },
  {
    id: 506,
    topic: "Greedy Problems",
    question: "Assign cookies problem (maximize content children)."
  },
  {
    id: 507,
    topic: "Greedy Problems",
    question: "Merge intervals problem."
  },
  {
    id: 508,
    topic: "Greedy Problems",
    question: "Insert intervals problem."
  },
  {
    id: 509,
    topic: "Greedy Problems",
    question: "Rearrange characters to avoid adjacent duplicates."
  },
  {
    id: 510,
    topic: "Greedy Problems",
    question: "Minimum number of arrows to burst balloons."
  },
  {
    id: 511,
    topic: "Greedy Problems",
    question: "Largest number formed by rearranging array."
  },
  {
    id: 512,
    topic: "Greedy Problems",
    question: "Water connection problem / pipeline scheduling (basic greedy scheduling)."
  },
  {
    id: 513,
    topic: "Greedy Problems",
    question: "Minimize sum of product of array elements."
  },
  {
    id: 514,
    topic: "Greedy Problems",
    question: "Optimal merge pattern problem."
  },
  {
    id: 515,
    topic: "Greedy Advanced",
    question: "Candy distribution problem (minimum candies with constraints)."
  },



  // ... HR Questions 187-220

];

export default questions;