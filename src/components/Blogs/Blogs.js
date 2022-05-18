import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>Difference between javascript and nodejs</h1>
            <p>JavaScript is a simple programming language that runs on any of the browser’s JavaScript engines. On the other hand, Node js is a Javascript runtime environment, which is based on Google’s V8 JavaScript environment. It is used in executing Javascript codes outside the browsers.</p>
            <p>JavaScript follows set standards of Java programming language. The writing of code might differ on several aspects, however, it can also be written using standard Java programming language. Node JS is written in C++ and needs to be run on V8 engine based browsers</p>

            <h1>Difference between SQL and NoSQL</h1>
            <p>SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format. On the other hand, NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes. </p>
            <p>SQL databases support Structured Query Languages. Supports table based data type. on the other hand, NonSQL does not have any declarative query language. 	Supports document oriented, graph databases, key value pair-based. </p>
            <h1>What is the purpose of jwt and how does it work</h1>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            
        </div>
    );
};
 
export default Blogs;