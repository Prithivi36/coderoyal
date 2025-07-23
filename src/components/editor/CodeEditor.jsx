import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Audio from "../audio/Audio";

export default function CodeEditor() {
  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState("// Write your code here");

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;

    // You can also optionally change the default code per language
    const defaultSnippets = {
      javascript: "// Write your JavaScript code here",
      python: "# Write your Python code here",
      cpp: "#include <iostream>\nint main() {\n  // Write your C++ code here\n  return 0;\n}",
      java: "public class Main {\n  public static void main(String[] args) {\n    // Write your Java code here\n  }\n}"
    };

    setLanguage(newLang);
    setCode(defaultSnippets[newLang]);
  };

  return (
    <div className="bg-light p-3 pb-3" style={{ height: "70vh"}}>
        <div className="d-flex">
            <div className="col-2">
                <select className="form-select bg-dark text-light ps-3" onChange={handleLanguageChange} value={language} style={{ marginBottom: "10px", padding: "5px" }}>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                </select>
            </div>
            <div className="col">
                <Audio />
            </div>
        </div>

      <Editor
        className="pb-5"
        height="100%"
        width="100%"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
    </div>
  );
}
