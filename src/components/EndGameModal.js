import { ReactComponent as Close } from '../data/Close.svg'
import Modal from 'react-modal'
import Success from '../data/Success.png'
import Fail from '../data/Cross.png'

Modal.setAppElement('#root')

export const EndGameModal = ({
  isOpen,
  handleClose,
  styles,
  darkMode,
  gameState,
  state,
  currentStreak,
  longestStreak,
  answer,
  playAgain,
}) => {
  const PlayAgainButton = () => {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <button
          autoFocus
          type="button"
          className="rounded-lg px-6 py-2 mt-8 text-lg nm-flat-background dark:nm-flat-background-dark hover:nm-inset-background dark:hover:nm-inset-background-dark text-primary dark:text-primary-dark"
          onClick={playAgain}
        >
          Hrát znovu
        </button>
      </div>
    )
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={styles}
      contentLabel="Game End Modal"
    >
      <div className={darkMode ? 'dark' : ''}>
        <div className="h-full flex flex-col items-center justify-center max-w-[300px] mx-auto text-primary dark:text-primary-dark">
            <button
              className="absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark"
              onClick={handleClose}
            >
              <Close />
            </button>
          {gameState === state.won && (
            <>
              <img src={Success} alt="výborně" height="auto" width="auto" />
              <h1 className=" text-3xl">Gratuluji!</h1>
              <p className="mt-6">
                Akutální skóre: <strong>{currentStreak}</strong> {currentStreak > 4 && '🔥'}
              </p>
              <p>
                Nejvyšší skóre: <strong>{longestStreak}</strong>
              </p>
            </>
          )}
          {gameState === state.lost && (
            <>
              <img src={Fail} alt="smůla" height="auto" width="80%" />
              <div className="text-primary dark:text-primary-dark text-4xl text-center">
                <p>Jejda!</p>
                <p className="mt-3 text-2xl">
                  Slovo bylo <strong>{answer}</strong>
                </p>
                <p className="mt-6 text-base">
                  Akutální skóre: <strong>{currentStreak}</strong> {currentStreak > 4 && '🔥'}
                </p>
                <p className="text-base">
                  Nejvyšší skóre: <strong>{longestStreak}</strong>
                </p>
              </div>
            </>
          )}
          <PlayAgainButton />
        </div>
      </div>
    </Modal>
  )
}
