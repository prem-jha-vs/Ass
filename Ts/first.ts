// //Example 1

// /*const person = {
//     name: "John Doe",
//     age: 30,
//     education: {
//       degree: "Bachelor of Science",
//       major: "Computer Science",
//       university: "Example University",
//       graduationYear: 2015,
//     },
//     workExperience: [
//       {
//         position: "Software Engineer",
//         company: "Tech Co.",
//         startDate: "2016-01-01",
//         endDate: "2020-12-31",
//       },
//       {
//         position: "Senior Software Engineer",
//         company: "Innovate Corp.",
//         startDate: "2021-01-01",
//         endDate: null, // Indicates the current position
//       },
//     ],
//     skills: ["JavaScript", "React", "Node.js", "SQL"],
//   };*/

//   interface workExperience {
//     position: string;
//         company: string;
//         startDate: string;
//         endDate: string|null;
//   }

//   interface Person {
//     name: string;
//     age: number;
//     education: {
//       degree: string;
//       major: string;
//       university: string;
//       graduationYear: number;
//     };
//     workExperience : workExperience[];
//     skills : string[];
//   }

// //   Example 2: Library Book

//  /*const libraryBookExample: LibraryBook = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   genre: "Classic",
//   ISBN: "978-3-16-148410-0",
//   publishedYear: 1925,
//   availableCopies: 5,
//   borrowedBy: [
//     { name: "Alice", returnDate: "2022-02-15" },
//     { name: "Bob", returnDate: "2022-03-01" },
//   ],
// };*/

// interface LibraryBook {
//   title: string;
//   author: string;
//   genre: string;
//   ISBN: string;
//   publishedYear: number;
//   availableCopies: number;
//   borrowedBy : BorrowedBy[];
// }
// interface BorrowedBy{
//     name:string;
//     returnDate:string;
// }


// //Example 3
// /*const employeeRecordExample: EmployeeRecord = {
//   employeeId: "EMP123",
//   fullName: "Alice Johnson",
//   position: "Software Engineer",
//   department: "Engineering",
//   salary: 80000,
//   contactInfo: {
//     email: "alice.johnson@exampl.com",
//     phone: "+1 (123) 456-7890",
//     address: {
//       street: "456 Tech Street",
//       city: "Tech City",
//       zipCode: "12345",
//     },
//   },
//   projects: [
//     { name: "Project A", startDate: "2022-01-01", endDate: "2022-06-30" },
//     { name: "Project B", startDate: "2022-07-01", endDate: null },
//   ],
// };*/

// interface EmployeeRecord{
//   employeeId: string;
//   fullName: string;
//   position: string;
//   department: string;
//   salary: number;
//   contactInfo: {
//     email: string;
//     phone: string;
//     address: {
//       street: string;
//       city: string;
//       zipCode: string;
//     };
//   };
//   projects: Projects[];
// }
// interface Projects{
//     name:string;
//     startDate:string;
//     endDate:string|null;
// }


// //Example 4
// /*const socialMediaPostExample: SocialMediaPost = {
//   postId: "123456",
//   author: {
//     username: "user123",
//     displayName: "John Doe",
//     followers: 1000,
//   },
//   content: "Enjoying a sunny day at the beach! ☀️🏖️",
//   likes: 150,
//   comments: [
//     { commenter: "Alice", comment: "Looks like a fantastic day!" },
//     { commenter: "Bob", comment: "Wish I could be there too!" },
//   ],
//   tags: ["beach", "sunnyday", "vacation"],
//   timestamp: "2022-02-15T12:30:00",
// };*/


// interface SocialMediaPost{
//     postId: string;
//   author: {
//     username: string;
//     displayName: string;
//     followers: number;
//   },
//   content: string;
//   likes: number;
//   comments: Comments[];
//   tags: string[];
//   timestamp:string;
// }
// interface Comments{
//     commenter:string;
//     comment: string;
// }

type UserName = (n:number, m:number)=>number;

const func: UserName=(n, m)=>{
    return m+n;
}
console.log(func(1,2 ));