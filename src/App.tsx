import './App.css'
import Chatbot, {
  FloatingActionButtonTrigger,
  InputBarTrigger,
  ModalView,
} from "mongodb-chatbot-ui";

function App() {
  const suggestedPrompts = [
    "What is AQI?",
    "How does air pollution affect my health?",
    "What can I do to protect my health from air pollution?",
  ];

  return (
    <>
      <div>
      <h1>Climate + Health Chat</h1>
      <Chatbot darkMode={true} serverBaseUrl="http://18.213.113.237:3000/api/v1">
        <>
          <InputBarTrigger suggestedPrompts={suggestedPrompts} />
          <FloatingActionButtonTrigger text="My Climate Health AI" />
          <ModalView
            initialMessageText="Welcome to Climate Health Chat! How can I help you today?"
            initialMessageSuggestedPrompts={suggestedPrompts}
          />
        </>
      </Chatbot>
      </div>
    </>
  )
}

export default App
