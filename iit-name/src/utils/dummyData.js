const dummyData = {
    tasks: [
      {
        id: 1,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        assessment: {
          type: "mcq",
          question: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          answer: "4"
        }
      },
      {
        id: 2,
        videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        assessment: {
          type: "shortAnswer",
          question: "What is the capital of France?",
          answer: "Paris"
        }
      }
    ]
  };
  
  export default dummyData;
  