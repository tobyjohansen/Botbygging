import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import BotList from './Components/BotList.jsx'
import TextSpecForm from './Components/TextSpecForm.jsx'
import TextBox from './Components/TextBox.jsx'

function App() {

  return (
    <>
      <Header />

      <TextBox title="Welcome to Bot Bygging">
      <p>
        Bot bygging er en platform for å lage AI-boter til undervisning og andre formål.
        Her kan du lage dine egne spesifikasjoner for botter, eller bruke ferdiglagde botter.
        <br />
        Det er anbefalt å skrive botten på engelsk og bruke riktig Lix score for å sikre at den er lesbar for målgruppen.
        Du kan også bruke ferdiglagde botter som er tilgjengelige i listen under.
      </p>
      </TextBox>


      <TextSpecForm />

      <BotList />
    </>
  );
}

export default App;
