import React, { useState } from 'react';

const LabLesson = ({ labNum, user, onNavigate, onExerciseComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const labData = {
    1: {
      title: "Introduction to DBMS",
      titleAr: "مقدمة في نظم إدارة قواعد البيانات",
      icon: "🗄️",
      videos: [
        { id: "ztHopE5Wnpc", title: "What is a Database?" },
        { id: "wR0jg0eQsZA", title: "DBMS Introduction" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 1", text: "Learn what a Database Management System is and why we need it." },
        { type: "concept", title: "What is a Database?", text: "A database is an organized collection of structured data.", points: ["Organized collection of data", "Stored electronically", "Easy to access and manage", "Can handle large amounts of data"] },
        { type: "concept", title: "What is DBMS?", text: "Database Management System - software to manage databases.", points: ["MySQL, PostgreSQL, Oracle, SQL Server", "Creates, reads, updates, deletes data", "Provides security and backup", "Handles multiple users"] },
        { type: "concept", title: "Why use DBMS?", text: "Advantages over file systems:", points: ["Reduces data redundancy", "Maintains data integrity", "Provides data security", "Supports concurrent access", "Backup and recovery"] }
      ],
      exercises: [
        { q: "DBMS stands for:", options: ["Data Base Management System", "Database Management System", "Data Based Main System", "Digital Base Management"], correct: 1 },
        { q: "Which is NOT a DBMS?", options: ["MySQL", "Oracle", "Microsoft Word", "PostgreSQL"], correct: 2 },
        { q: "Database stores data:", options: ["On paper", "Electronically", "In memory only", "Randomly"], correct: 1 },
        { q: "DBMS provides:", options: ["Only storage", "Security and backup", "Only queries", "Nothing"], correct: 1 },
        { q: "DBMS reduces:", options: ["Performance", "Data redundancy", "Storage", "Users"], correct: 1 }
      ]
    },
    2: {
      title: "Relational Data Model",
      titleAr: "نموذج البيانات العلائقي",
      icon: "🔗",
      videos: [
        { id: "OqjJjpjDRLc", title: "Relational Database Concepts" },
        { id: "NvrpuBAMddw", title: "Tables, Rows, and Columns" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 2", text: "Understand how data is organized in relational databases." },
        { type: "concept", title: "Relational Model", text: "Data organized in tables (relations).", points: ["Tables = Relations", "Rows = Records/Tuples", "Columns = Fields/Attributes", "Each row is unique"] },
        { type: "concept", title: "Keys", text: "Special columns that identify records:", points: ["Primary Key - Uniquely identifies each row", "Foreign Key - Links to another table", "Candidate Key - Could be primary key", "Composite Key - Multiple columns together"] },
        { type: "concept", title: "Relationships", text: "How tables connect:", points: ["One-to-One (1:1)", "One-to-Many (1:N)", "Many-to-Many (M:N)", "Foreign keys create relationships"] }
      ],
      exercises: [
        { q: "In relational model, data is stored in:", options: ["Files", "Tables", "Documents", "Objects"], correct: 1 },
        { q: "A row in a table is also called:", options: ["Column", "Tuple/Record", "Key", "Index"], correct: 1 },
        { q: "Primary Key must be:", options: ["Nullable", "Unique", "Foreign", "Composite"], correct: 1 },
        { q: "Foreign Key links to:", options: ["Same table", "Another table", "File system", "Nothing"], correct: 1 },
        { q: "One student has many courses is:", options: ["1:1", "1:N", "M:N", "None"], correct: 1 }
      ]
    },
    3: {
      title: "SQL Basics - DDL",
      titleAr: "أساسيات SQL - DDL",
      icon: "📝",
      videos: [
        { id: "7S_tz1z_5bA", title: "SQL DDL Commands" },
        { id: "HXV3zeQKqGY", title: "CREATE, ALTER, DROP" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 3", text: "Learn Data Definition Language to create database structures." },
        { type: "concept", title: "What is DDL?", text: "Data Definition Language - defines database structure.", points: ["CREATE - Create objects", "ALTER - Modify objects", "DROP - Delete objects", "TRUNCATE - Remove all data"] },
        { type: "code", title: "CREATE DATABASE & TABLE", code: "-- Create database\nCREATE DATABASE UniversityDB;\nUSE UniversityDB;\n\n-- Create table\nCREATE TABLE Students (\n    StudentID INT PRIMARY KEY AUTO_INCREMENT,\n    Name VARCHAR(100) NOT NULL,\n    Email VARCHAR(100) UNIQUE,\n    Age INT,\n    EnrollDate DATE\n);", text: "Creating database and table" },
        { type: "code", title: "ALTER & DROP", code: "-- Add column\nALTER TABLE Students ADD Phone VARCHAR(20);\n\n-- Modify column\nALTER TABLE Students MODIFY Age INT NOT NULL;\n\n-- Drop column\nALTER TABLE Students DROP COLUMN Phone;\n\n-- Drop table\nDROP TABLE Students;", text: "Modifying and deleting structures" }
      ],
      exercises: [
        { q: "DDL stands for:", options: ["Data Definition Language", "Data Display Language", "Database Design Language", "Data Development Language"], correct: 0 },
        { q: "To create a table, use:", options: ["INSERT", "CREATE", "ADD", "MAKE"], correct: 1 },
        { q: "PRIMARY KEY must be:", options: ["NULL", "Unique and NOT NULL", "Foreign", "Optional"], correct: 1 },
        { q: "To delete a table, use:", options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"], correct: 2 },
        { q: "AUTO_INCREMENT does:", options: ["Decreases value", "Auto generates IDs", "Deletes rows", "Nothing"], correct: 1 }
      ]
    },
    4: {
      title: "SQL Queries - DML",
      titleAr: "استعلامات SQL - DML",
      icon: "🔍",
      videos: [
        { id: "Cz3WcZLRaWc", title: "SQL SELECT Statement" },
        { id: "0PHAJddEwdk", title: "INSERT, UPDATE, DELETE" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 4", text: "Learn Data Manipulation Language to work with data." },
        { type: "concept", title: "What is DML?", text: "Data Manipulation Language - manipulates data.", points: ["SELECT - Retrieve data", "INSERT - Add new data", "UPDATE - Modify data", "DELETE - Remove data"] },
        { type: "code", title: "INSERT & SELECT", code: "-- Insert data\nINSERT INTO Students (Name, Email, Age)\nVALUES ('Ahmed', 'ahmed@email.com', 20);\n\n-- Select all\nSELECT * FROM Students;\n\n-- Select specific columns\nSELECT Name, Email FROM Students;\n\n-- Select with condition\nSELECT * FROM Students WHERE Age > 18;", text: "Adding and retrieving data" },
        { type: "code", title: "UPDATE & DELETE", code: "-- Update data\nUPDATE Students\nSET Age = 21\nWHERE StudentID = 1;\n\n-- Delete specific row\nDELETE FROM Students\nWHERE StudentID = 5;\n\n-- Delete all (careful!)\nDELETE FROM Students;", text: "Modifying and removing data" }
      ],
      exercises: [
        { q: "DML stands for:", options: ["Data Management Language", "Data Manipulation Language", "Database Main Language", "Data Model Language"], correct: 1 },
        { q: "To add new data, use:", options: ["SELECT", "INSERT", "CREATE", "ADD"], correct: 1 },
        { q: "SELECT * returns:", options: ["One column", "All columns", "No data", "Errors"], correct: 1 },
        { q: "WHERE clause is for:", options: ["Sorting", "Filtering", "Grouping", "Joining"], correct: 1 },
        { q: "UPDATE without WHERE:", options: ["Does nothing", "Updates one row", "Updates ALL rows", "Error"], correct: 2 }
      ]
    },
    5: {
      title: "Advanced SQL Queries",
      titleAr: "استعلامات SQL المتقدمة",
      icon: "⚡",
      videos: [
        { id: "G3lJAxg1cy8", title: "SQL JOINs Explained" },
        { id: "KTvYHEntvn8", title: "GROUP BY and Aggregates" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 5", text: "Master advanced SQL queries for complex data retrieval." },
        { type: "concept", title: "JOIN Operations", text: "Combine data from multiple tables:", points: ["INNER JOIN - Matching rows only", "LEFT JOIN - All left + matching right", "RIGHT JOIN - All right + matching left", "FULL JOIN - All from both tables"] },
        { type: "code", title: "JOIN Example", code: "-- INNER JOIN\nSELECT Students.Name, Courses.CourseName\nFROM Students\nINNER JOIN Enrollments ON Students.StudentID = Enrollments.StudentID\nINNER JOIN Courses ON Enrollments.CourseID = Courses.CourseID;", text: "Joining multiple tables" },
        { type: "code", title: "Aggregate Functions", code: "-- COUNT, SUM, AVG, MIN, MAX\nSELECT COUNT(*) AS TotalStudents FROM Students;\n\nSELECT AVG(Age) AS AverageAge FROM Students;\n\n-- GROUP BY\nSELECT Department, COUNT(*) AS StudentCount\nFROM Students\nGROUP BY Department\nHAVING COUNT(*) > 5;", text: "Aggregate functions and grouping" }
      ],
      exercises: [
        { q: "INNER JOIN returns:", options: ["All rows", "Matching rows only", "No rows", "Errors"], correct: 1 },
        { q: "COUNT(*) returns:", options: ["Sum of values", "Number of rows", "Average", "Maximum"], correct: 1 },
        { q: "GROUP BY is used with:", options: ["INSERT", "Aggregate functions", "DROP", "CREATE"], correct: 1 },
        { q: "HAVING filters:", options: ["Rows", "Groups", "Tables", "Columns"], correct: 1 },
        { q: "LEFT JOIN includes:", options: ["Right table only", "All left + matching right", "Matching only", "Nothing"], correct: 1 }
      ]
    },
    6: {
      title: "ER Diagrams",
      titleAr: "مخططات الكيان والعلاقة",
      icon: "📊",
      videos: [
        { id: "QpdhBUYk7Kk", title: "ER Diagram Tutorial" },
        { id: "-CuY5ADwn24", title: "Entity Relationship Model" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 6", text: "Learn to design databases using ER diagrams." },
        { type: "concept", title: "ER Model Components", text: "Building blocks of ER diagrams:", points: ["Entity - Object (rectangle)", "Attribute - Property (oval)", "Relationship - Connection (diamond)", "Cardinality - 1:1, 1:N, M:N"] },
        { type: "concept", title: "Entity Types", text: "Different kinds of entities:", points: ["Strong Entity - Has own primary key", "Weak Entity - Depends on another entity", "Associative Entity - M:N relationship"] },
        { type: "concept", title: "Attribute Types", text: "Different kinds of attributes:", points: ["Simple - Single value (Name)", "Composite - Multiple parts (Address)", "Derived - Calculated (Age from DOB)", "Multi-valued - Multiple values (Phone numbers)"] }
      ],
      exercises: [
        { q: "Entity is shown as:", options: ["Oval", "Rectangle", "Diamond", "Line"], correct: 1 },
        { q: "Attribute is shown as:", options: ["Rectangle", "Diamond", "Oval", "Arrow"], correct: 2 },
        { q: "Relationship is shown as:", options: ["Oval", "Rectangle", "Diamond", "Circle"], correct: 2 },
        { q: "Weak entity depends on:", options: ["Nothing", "Strong entity", "Attribute", "Relationship"], correct: 1 },
        { q: "Derived attribute example:", options: ["Name", "Age from DOB", "ID", "Address"], correct: 1 }
      ]
    },
    7: {
      title: "Normalization",
      titleAr: "التطبيع",
      icon: "📐",
      videos: [
        { id: "GFQaEYEc8_8", title: "Database Normalization" },
        { id: "UrYLYV7WSHM", title: "1NF, 2NF, 3NF Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 7", text: "Learn to organize data to reduce redundancy." },
        { type: "concept", title: "What is Normalization?", text: "Process of organizing data efficiently.", points: ["Reduces data redundancy", "Eliminates anomalies", "Improves data integrity", "Makes updates easier"] },
        { type: "concept", title: "Normal Forms", text: "Levels of normalization:", points: ["1NF - No repeating groups, atomic values", "2NF - 1NF + No partial dependencies", "3NF - 2NF + No transitive dependencies", "BCNF - Stricter version of 3NF"] },
        { type: "concept", title: "Anomalies", text: "Problems without normalization:", points: ["Insertion Anomaly - Can't add data", "Update Anomaly - Inconsistent updates", "Deletion Anomaly - Unwanted data loss"] }
      ],
      exercises: [
        { q: "Normalization reduces:", options: ["Tables", "Redundancy", "Performance", "Data"], correct: 1 },
        { q: "1NF requires:", options: ["Foreign keys", "Atomic values", "Joins", "Indexes"], correct: 1 },
        { q: "2NF eliminates:", options: ["All dependencies", "Partial dependencies", "Tables", "Keys"], correct: 1 },
        { q: "3NF eliminates:", options: ["Partial dependencies", "Transitive dependencies", "All data", "Keys"], correct: 1 },
        { q: "Update anomaly causes:", options: ["Faster updates", "Inconsistent data", "Better performance", "More storage"], correct: 1 }
      ]
    },
    8: {
      title: "Indexing & Performance",
      titleAr: "الفهرسة والأداء",
      icon: "🚀",
      videos: [
        { id: "HubezKbFL7E", title: "Database Indexing Explained" },
        { id: "YuRO9-rOgv4", title: "SQL Performance Tips" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 8", text: "Learn how indexes improve database performance." },
        { type: "concept", title: "What is an Index?", text: "Data structure for faster data retrieval.", points: ["Like book index - find pages quickly", "Speeds up SELECT queries", "Slows down INSERT/UPDATE/DELETE", "Uses additional storage"] },
        { type: "code", title: "Creating Indexes", code: "-- Create index\nCREATE INDEX idx_name ON Students(Name);\n\n-- Create unique index\nCREATE UNIQUE INDEX idx_email ON Students(Email);\n\n-- Composite index\nCREATE INDEX idx_dept_age ON Students(Department, Age);\n\n-- Drop index\nDROP INDEX idx_name ON Students;", text: "Index creation examples" },
        { type: "concept", title: "When to Use Indexes", text: "Best practices:", points: ["Frequently searched columns", "WHERE clause columns", "JOIN columns", "NOT on small tables", "NOT on frequently updated columns"] }
      ],
      exercises: [
        { q: "Index speeds up:", options: ["INSERT", "SELECT", "DELETE", "UPDATE"], correct: 1 },
        { q: "Index is like:", options: ["Table of contents", "Book index", "Dictionary", "All above"], correct: 3 },
        { q: "Index uses:", options: ["Less storage", "Additional storage", "No storage", "RAM only"], correct: 1 },
        { q: "Create index on:", options: ["Rarely searched columns", "Frequently searched columns", "All columns", "No columns"], correct: 1 },
        { q: "Too many indexes:", options: ["Always good", "Slow down writes", "Speed up everything", "No effect"], correct: 1 }
      ]
    },
    9: {
      title: "Transactions & ACID",
      titleAr: "المعاملات و ACID",
      icon: "🔒",
      videos: [
        { id: "P80Js_qClUE", title: "Database Transactions" },
        { id: "GAe5oB742dw", title: "ACID Properties Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 9", text: "Learn about transactions and data consistency." },
        { type: "concept", title: "What is a Transaction?", text: "A unit of work that must complete fully.", points: ["All operations succeed, or none", "Example: Bank transfer", "BEGIN, COMMIT, ROLLBACK", "Maintains data integrity"] },
        { type: "concept", title: "ACID Properties", text: "Transaction guarantees:", points: ["Atomicity - All or nothing", "Consistency - Valid state to valid state", "Isolation - Transactions don't interfere", "Durability - Changes are permanent"] },
        { type: "code", title: "Transaction Example", code: "-- Start transaction\nBEGIN TRANSACTION;\n\n-- Transfer money\nUPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;\nUPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;\n\n-- If success\nCOMMIT;\n\n-- If error\nROLLBACK;", text: "Bank transfer transaction" }
      ],
      exercises: [
        { q: "ACID - A stands for:", options: ["Accuracy", "Atomicity", "Availability", "Authentication"], correct: 1 },
        { q: "COMMIT does:", options: ["Cancels changes", "Saves changes permanently", "Starts transaction", "Deletes data"], correct: 1 },
        { q: "ROLLBACK does:", options: ["Saves changes", "Undoes changes", "Commits", "Nothing"], correct: 1 },
        { q: "Isolation means:", options: ["Data is hidden", "Transactions don't interfere", "Data is encrypted", "Users are isolated"], correct: 1 },
        { q: "Durability ensures:", options: ["Speed", "Changes are permanent", "Isolation", "Atomicity"], correct: 1 }
      ]
    },
    10: {
      title: "Database Project",
      titleAr: "مشروع قاعدة البيانات",
      icon: "🏆",
      videos: [
        { id: "ztHopE5Wnpc", title: "Complete Database Design" },
        { id: "HXV3zeQKqGY", title: "Database Project Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 10", text: "Apply everything in a complete database project!" },
        { type: "concept", title: "Project Steps", text: "Building a complete database:", points: ["1. Understand requirements", "2. Design ER diagram", "3. Normalize tables", "4. Create DDL scripts", "5. Insert sample data", "6. Write queries", "7. Add indexes", "8. Test and document"] },
        { type: "concept", title: "Project Ideas", text: "Beginner-friendly projects:", points: ["Library Management System", "Student Information System", "Hospital Management", "E-commerce Database", "Restaurant Order System"] },
        { type: "concept", title: "Best Practices", text: "Tips for success:", points: ["Use meaningful names", "Add proper constraints", "Document your design", "Normalize to 3NF", "Index wisely", "Test all queries"] }
      ],
      exercises: [
        { q: "First step in database project:", options: ["Write SQL", "Understand requirements", "Create indexes", "Insert data"], correct: 1 },
        { q: "ER diagram comes:", options: ["After coding", "Before table creation", "At the end", "Never"], correct: 1 },
        { q: "Normalization level for most projects:", options: ["1NF", "2NF", "3NF", "5NF"], correct: 2 },
        { q: "Good database has:", options: ["No documentation", "Proper constraints", "No indexes", "Redundant data"], correct: 1 },
        { q: "Testing should be done:", options: ["Never", "Once", "Throughout project", "Only at end"], correct: 2 }
      ]
    }
  };

  const lab = labData[labNum];
  if (!lab) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p>Lab {labNum} coming soon!</p>
          <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-2 bg-orange-600 rounded-lg">Back</button>
        </div>
      </div>
    );
  }

  const totalSteps = lab.content.length + 2;
  const handleAnswer = (qi, ai) => { if (!submitted) setAnswers({...answers, [qi]: ai}); };
  const handleSubmit = () => {
    let c = 0;
    lab.exercises.forEach((e, i) => { if (answers[i] === e.correct) c++; });
    const s = Math.round((c / lab.exercises.length) * 100);
    setScore(s);
    setSubmitted(true);
    onExerciseComplete(labNum, s);
  };

  if (showExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900/30 to-slate-900 text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Lab {labNum} Exercise | تمرين المعمل {labNum}</h2>
          </div>
          {!submitted ? (
            <div className="space-y-6">
              {lab.exercises.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-white font-semibold mb-3">{i+1}. {ex.q}</p>
                  <div className="space-y-2">
                    {ex.options.map((opt, j) => (
                      <button key={j} onClick={() => handleAnswer(i, j)} className={`w-full text-left px-4 py-2 rounded-lg ${answers[i] === j ? 'bg-orange-600' : 'bg-slate-800 hover:bg-slate-700'}`}>
                        {String.fromCharCode(65+j)}. {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < 5} className="w-full py-3 bg-emerald-600 rounded-xl font-bold disabled:opacity-50">Submit | إرسال</button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`p-8 rounded-2xl mb-6 ${score >= 60 ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                <p className="text-5xl mb-2">{score >= 60 ? '🎉' : '😔'}</p>
                <p className="text-4xl font-bold">{score}%</p>
                <p className="text-slate-400 mt-2">{score >= 60 ? 'Great job! | أحسنت!' : 'Keep trying! | حاول مرة أخرى!'}</p>
              </div>
              <div className="space-y-3 mb-6 text-left">
                {lab.exercises.map((ex, i) => (
                  <div key={i} className={`p-3 rounded-lg ${answers[i] === ex.correct ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                    <p>{i+1}. {ex.q}</p>
                    <p className="text-sm">{answers[i] === ex.correct ? '✓ Correct' : `✗ Answer: ${ex.options[ex.correct]}`}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-orange-600 rounded-xl">Back to Course | العودة للدورة</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (currentStep === lab.content.length) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Video Tutorials | فيديوهات تعليمية</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {lab.videos.map((v, i) => (
              <div key={i} className="bg-slate-700/30 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} className="w-full h-full" allowFullScreen></iframe>
                </div>
                <p className="p-3 font-semibold">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (currentStep === lab.content.length + 1) {
      return (
        <div className="p-6 text-center">
          <p className="text-5xl mb-4">✅</p>
          <h2 className="text-2xl font-bold mb-2">Lab Complete!</h2>
          <p className="text-orange-300/70 font-arabic mb-6">اكتمل المعمل!</p>
          <button onClick={() => setShowExercise(true)} className="px-8 py-4 bg-emerald-600 rounded-xl font-bold text-lg">Start Exercise | ابدأ التمرين</button>
        </div>
      );
    }
    const c = lab.content[currentStep];
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <span className="px-3 py-1 bg-orange-600/30 rounded-full text-orange-300 text-sm">{c.type === 'code' ? '💻 Code' : '📖 Concept'}</span>
          <h2 className="text-2xl font-bold mt-4">{c.title}</h2>
        </div>
        {c.text && <div className="bg-slate-700/30 rounded-xl p-6 mb-6"><p>{c.text}</p></div>}
        {c.points && <div className="bg-slate-700/30 rounded-xl p-6 mb-6">{c.points.map((p,i) => <p key={i} className="mb-2">✓ {p}</p>)}</div>}
        {c.code && <div className="bg-slate-900 rounded-xl p-6 mb-6 overflow-x-auto"><pre className="text-cyan-300 font-mono text-sm whitespace-pre-wrap">{c.code}</pre></div>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900/30 to-slate-900 text-white flex flex-col">
      <header className="bg-slate-800/80 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('home')} className="px-3 py-2 bg-slate-700 rounded-lg">← Back</button>
            <div>
              <h1 className="font-bold">Lab {labNum}: {lab.title}</h1>
              <p className="text-xs text-orange-300/70 font-arabic">{lab.titleAr}</p>
            </div>
          </div>
          <span className="text-3xl">{lab.icon}</span>
        </div>
      </header>
      <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Step {currentStep + 1} / {totalSteps}</span>
            <span>{Math.round(((currentStep+1)/totalSteps)*100)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 transition-all" style={{width: `${((currentStep+1)/totalSteps)*100}%`}}></div>
          </div>
        </div>
      </div>
      <div className="flex-1">{renderContent()}</div>
      <div className="bg-slate-800/80 border-t border-slate-700 p-4 sticky bottom-0">
        <div className="max-w-6xl mx-auto flex justify-between">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep-1))} disabled={currentStep === 0} className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-slate-700 text-slate-500' : 'bg-slate-700 hover:bg-slate-600'}`}>← Previous</button>
          {currentStep < totalSteps - 1 ? (
            <button onClick={() => setCurrentStep(currentStep+1)} className="px-6 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg">Next →</button>
          ) : (
            <button onClick={() => setShowExercise(true)} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg">Take Exercise | ابدأ التمرين</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabLesson;
