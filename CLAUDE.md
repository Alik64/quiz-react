# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ultimate React Quiz is a React-based quiz application that tests developers' knowledge with randomly generated questions. The app is deployed on Netlify at https://ultimate-react-quiz.netlify.app/.

**Tech Stack:**
- React 19.2.0 (latest)
- TypeScript 4.8.4
- Tailwind CSS 3.4.18 (migrated from Material-UI)
- React Router v6
- Axios for API calls
- Create React App (react-scripts)

**Note:** This project was recently migrated from Material-UI to Tailwind CSS. All UI components now use Tailwind utility classes.

## Commands

### Development
```bash
npm start              # Start development server (port 3000)
npm run build         # Create production build
npm test              # Run tests in watch mode
npm test -- --coverage # Run tests with coverage
```

### Environment Variables
The app requires `REACT_APP_API_URL` to fetch quiz questions. This should be set in a `.env` file at the root:
```
REACT_APP_API_URL=your_api_endpoint
```

## Architecture

### State Management
The application uses React Context (`AppContext`) for global state management located in `src/context/appContext.js`. Key state includes:
- `score`: Current quiz score
- `err`: Number of errors made
- `good`: Number of correct answers
- `modalName`: Controls which modal to display ("Rules", "Results", or null)
- `onCheckAnswer`: Function that updates score based on answer correctness

**Scoring Logic:**
- Each correct answer: +1 point
- After 3 errors: each additional error deducts 1 point from score

### Data Flow
1. **QuizContainer** (`src/components/Quiz/QuizContainer.tsx`): Fetches questions from API using axios
2. **Quiz** (`src/components/Quiz/Quiz.tsx`): Manages current question state and navigation
3. **QuizCard** → **Question** + **Answers**: Displays individual questions with code snippets
4. Questions can include optional code blocks (array of `CodeLine` objects)

### Routing Structure
- `/` - Home page with quiz introduction
- `/quiz` - Quiz interface with questions
- All other routes redirect to home

### Key Interfaces (`src/interfaces/index.ts`)
```typescript
QuestionQuiz {
  id: number
  code?: CodeLine[]      // Optional code snippet
  question: string
  answers: Answer[]
}

Answer {
  id: number
  text: string
  isAnswer?: boolean     // Indicates correct answer
  code?: boolean         // Whether answer should be displayed as code
}
```

### Modal System
Two modals controlled by `modalName` state:
- **ModalRulesUI**: Displays quiz rules at start (15 questions, 3 error grace period)
- **ModalResultUI**: Shows final score with skill rating and link to React docs

### Styling Architecture
**Tailwind Configuration** (`tailwind.config.js`):
- Custom colors: `danger` (#f00), `success` (#008000), `darkblue` (#00008b), `cyan` (#00d8ff)
- Custom font: Times serif
- All components use Tailwind utility classes
- Legacy CSS in `src/index.css` contains animations for logo rotation and preloader blink

**Important CSS Classes:**
- `.quiz_preloader`: Full-screen loading state
- `.home_logo` / `.quiz_logo`: React logo with rotation animation
- `.quiz_title`: Positioned title with cyan color and drop-shadow
- `.quiz_code`: Code snippet container with max-content width

## Component Hierarchy

```
App
├── HomeUI (/)
│   └── Link to /quiz
└── QuizContainer (/quiz)
    ├── Preloader (while loading)
    └── Quiz
        ├── ModalRulesUI (conditional)
        ├── ModalResultUI (conditional)
        ├── QuizHeader (fixed, shows score/errors)
        └── QuizCard
            ├── Question (with optional code)
            └── Answers (button list)
```

## Development Notes

### TypeScript + JavaScript Mix
The codebase is TypeScript but `appContext.js` remains in JavaScript. When adding types, follow existing patterns in `.tsx` files.

### Answer Validation
In `Answers.tsx`, clicking an answer:
- Calls `onCheckAnswer(bool)` where `bool` is the answer's `isAnswer` property
- Disables the button and changes text color (green for correct, red for incorrect)
- Uses inline styles for dynamic color changes: `target.style.color = "var(--red)"`

### Question Navigation
Quiz component manages `currentQuestion` state with Previous/Next buttons:
- Previous button only shows when `currentQuestion > 0`
- Last question shows "Validate" button (green) instead of "Next"
- Clicking Validate opens Results modal

### API Integration
`QuizContainer` expects API to return an array matching the `QuestionQuiz[]` interface. Handle errors gracefully with error state display.

### Testing
Tests use React Testing Library. The `data-testid="quiz_answerBtn"` attribute is used for answer button testing.
