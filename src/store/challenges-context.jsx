import { createContext, useState } from 'react'

export const ChallengesContext = createContext({
  challenges: [],
  addChallenge: () => {},
  updateChallengeStatus: () => {},
})

export default function ChallengesContextProvider({ children }) {
  const [challenges, setChallenges] = useState([
    {
      id: '0.9711649896890711',
      deadline: '2023-12-01',
      description: 'Sed magni in eos qu',
      image: { src: '/src/assets/working-on-computer.png', alt: 'Person working on some furniture.' },
      status: 'active',
      title: 'Sint nemo ex dolore',
    },
  ])

  function addChallenge(challenge) {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: 'active' },
      ...prevChallenges,
    ])
  }

  function deleteChallenge(challengeId) {
    setChallenges((prevChallenges) => prevChallenges.filter((challenge) => challenge.id !== challengeId))
  }

  function updateChallengeStatus(challengeId, newStatus) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus }
        }
        return challenge
      })
    )
  }

  const challengesContext = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  }

  return <ChallengesContext.Provider value={challengesContext}>{children}</ChallengesContext.Provider>
}
