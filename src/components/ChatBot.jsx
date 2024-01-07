import React, { Fragment, useContext, useState } from "react";
import axios from "axios";
import "../styles/Chatbot.css";
import { Container } from './Navbar';
 
const ChatBot = () => {
  const { toggle } = useContext(Container);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const apiKey = "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"; // Replace with your OpenAI API key
      const model = "text-davinci-003";
      const maxTokens = 512;
      const temperature = 0;
 
      const result = await axios.post(
        `https://api.openai.com/v1/engines/${model}/completions`,
        {
          prompt,
          max_tokens: maxTokens,
          temperature: temperature,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
 
      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
 
    setPrompt("");
  };
 
  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };
 
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="container container-sm p-1">
          <h1 className={toggle ? "title text-center text-light" : "title text-center text-dark"}>SIGMAFLIX</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="prompt" className={toggle ? "text-light" : "text-dark"}>Ask About Movies Or TV-Shows</label>
              <input
                id="prompt"
                className={`form-control ${toggle ? "input-light" : "input-dark"}`}
                type="text"
                placeholder="Enter text"
                value={prompt}
                onChange={handlePrompt}
              />
            </div>
            <button className={toggle ? "buttonGo-light" : "buttonGo-dark"}>GO</button>
          </form>
          <div className={`bg-${toggle ? "light" : "dark"} mt-2 p-1 border-5`}>
            <p >{response ? response : "Loading..."}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
 
export default ChatBot;