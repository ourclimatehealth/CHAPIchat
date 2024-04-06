'use client';

//
// This source file is part of the Stanford Biodesign Digital Health Next.js Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { generateGreeting } from '@stanfordbdhg/example-package'
import Chatbot, {
  FloatingActionButtonTrigger,
  InputBarTrigger,
  ModalView,
} from "mongodb-chatbot-ui";

export default function Home() {
  const greeting = generateGreeting()

    const suggestedPrompts = [
    "Why should I use the MongoDB Chatbot Framework?",
    "How does the framework use Atlas Vector Search?",
    "Do you support using LLMs from OpenAI?",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
      <Chatbot darkMode={true} serverBaseUrl="http://localhost:3000/api/v1">
        <>
          <InputBarTrigger suggestedPrompts={suggestedPrompts} />
          <FloatingActionButtonTrigger text="My MongoDB AI" />
          <ModalView
            initialMessageText="Welcome to MongoDB AI Assistant. What can I help you with?"
            initialMessageSuggestedPrompts={suggestedPrompts}
          />
        </>
      </Chatbot>
      </div>
    </div>
  )
}
