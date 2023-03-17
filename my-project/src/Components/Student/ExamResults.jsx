import StudentNav from "./StudentNav";
import React, { useState, useEffect } from "react";
import useResults from "./useResults";
const ExamResults = () => {
  const [results] = useResults();
  return (
    <>
      <StudentNav />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Exam Results</h1>
        <table className="w-full table-auto border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Subject ID</th>
              <th className="px-4 py-2">Subject Name</th>
              <th className="px-4 py-2">Total Questions</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Time Taken</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result._id}>
                <td className="border px-4 py-2">{result.SubjectID}</td>
                <td className="border px-4 py-2">{result.SubjectName}</td>
                <td className="border px-4 py-2">{result.totalQuestions}</td>
                <td className="border px-4 py-2">
                  {result.duration / 60} Minutes
                </td>
                <td className="border px-4 py-2">
                  {(result.timeTaken / 60).toFixed(2)} Minutes
                </td>
                <td className="border px-4 py-2">{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExamResults;
